import React, { useState, useEffect, useRef } from 'react';
import { contacts, addresses } from '../addressbookData'; // Adjust the import path as necessary
import ContactNameEditedSaved from '../saved modals/contactNameEditedSaved'; // Adjust the import path as necessary
import ETHNetwork from 'public/icons/networks/ETH.svg'; // Import network icons
import BTCNetwork from 'public/icons/networks/BTC.svg';
import POLNetwork from 'public/icons/networks/MATIC.svg';
import userEditIcon from '@/public/modal-icons/user-edit.svg';
import Image from 'next/image';
import { X } from 'lucide-react'; // Import other icons
import { Button } from '../button';
import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog'; // Import Dialog component

// Importing the Input and Label components
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Import ViewAddress component
import ViewAddress from './viewAddress';

// Function to get the appropriate network icon
const getNetworkIcon = (network: string) => {
  switch (network) {
    case 'Ethereum Network':
      return (
        <Image src={ETHNetwork} alt='Ethereum Network' className='h-8 w-8' />
      );
    case 'Bitcoin Network':
      return (
        <Image src={BTCNetwork} alt='Bitcoin Network' className='h-8 w-8' />
      );
    case 'Polygon Network':
      return (
        <Image src={POLNetwork} alt='Polygon Network' className='h-8 w-8' />
      );
    default:
      return null;
  }
};

interface EditContactNameModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactId: string; // Ensure contactId is defined
  onEditContact: (contactId: string, contact: { name: string }) => void; // Callback to edit contact
}

const EditContactNameModal: React.FC<EditContactNameModalProps> = ({
  isOpen,
  onClose,
  contactId, // Use the contactId prop directly
  onEditContact,
}) => {
  const [contactName, setContactName] = useState('');
  const [originalContactName, setOriginalContactName] = useState(''); // Track the original contact name
  const [isSavedModalOpen, setSavedModalOpen] = useState(false); // State for ContactNameEditedSaved modal
  const [isViewAddressOpen, setIsViewAddressOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(true);

  const inputRef = useRef<HTMLInputElement | null>(null); // Ref for the input field

  // Fetch the contact when the modal opens
  useEffect(() => {
    if (contactId) {
      const contact = contacts.find((c) => c.id === contactId);
      if (contact) {
        setContactName(contact.name); // Set the current contact name
        setOriginalContactName(contact.name); // Store the original contact name
      }
      inputRef.current?.focus(); // Focus the input field without selecting text
    } else {
      setContactName(''); // Reset if no contactId
      setOriginalContactName(''); // Reset original name
    }
  }, [contactId, isOpen]); // Run effect when contactId or isOpen changes

  // Fetch addresses for the selected contact
  const contactAddresses = contactId
    ? addresses.filter((addr) => addr.contactId === contactId)
    : [];

  if (!isOpen) return null; // Don't render if modal is not open

  const handleSave = () => {
    // Logic to save the updated contact name
    console.log('Updated contact name:', contactName);
    setSavedModalOpen(true); // Open the saved modal after saving
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return contactName !== '' && contactName !== originalContactName; // Ensure name is not empty and has changed
  };

  const handleCloseSavedModal = () => {
    setSavedModalOpen(false); // Close the saved modal
    onClose(); // Close the EditContactNameModal
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Update existing contact name
    onEditContact(contactId, { name: contactName }); // Ensure contactId is used correctly

    setSavedModalOpen(true); // Open the saved modal after submission
  };

  const handleViewAddress = (address: any) => {
    setSelectedAddress({
      contactName: contactName,
      addressname: address.name,
      network: address.network,
      asset: address.asset,
      address: address.address
    });
    setIsEditModalVisible(false);
    setIsViewAddressOpen(true);
  };

  const handleViewAddressClose = (closeAll: boolean = false) => {
    setIsViewAddressOpen(false);
    if (closeAll) {
      onClose(); // Close the parent EditContactName modal
    } else {
      setIsEditModalVisible(true); // Only show EditContactName modal again
    }
  };

  return (
    <>
      {isSavedModalOpen ? (
        <ContactNameEditedSaved
          isOpen={isSavedModalOpen}
          onClose={handleCloseSavedModal}
        />
      ) : (
        isEditModalVisible && (
          <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
              lightCloseIcon
              className='bg-primary-500 p-1 rounded-2xl shadow-xl  w-[410px]'
            >
              <div className='px-8 pt-5 flex-shrink-0'>
                {/* <DialogClose
                  onClick={onClose}
                  className="absolute top-5 right-5 text-gray-50 hover:text-gray-100"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </DialogClose> */}
                <div className='flex justify-start mb-2'>
                  <Image src={userEditIcon} alt='Add User' className='h-6 w-6' />
                </div>
                <h2 className='text-lg font-medium mb-2 text-gray-50'>
                  Edit Contact Name
                </h2>
                <p className='mb-4 text-gray-50 text-sm font-regular'>
                  Fill out the fields below to save a new contact address.
                </p>
              </div>
              <div className='bg-white px-6 pt-4 pb-6 rounded-xl shadow-md flex-grow overflow-hidden'>
                <Label className='block'>
                  <div className='mb-1.5'>Contact Name</div>
                  <input
                    ref={inputRef}
                    type='text'
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder='Contact Name'
                    className='w-full h-10 text-gray-900 text-sm font-medium mb-3 pr-10 rounded-xl focus:!border-primary-500 focus:ring-2 focus:ring-[#d2e9e5] focus:ring-opacity-50 focus:!border-[2px] border-gray-300'
                  />
                </Label>
                <div>
                  {contactAddresses.map((address) => (
                    <div key={address.id} className='flex flex-col mb-2'>
                      <span className='flex items-center mb-1'>
                        <div className='h-8 w-8'>
                          {getNetworkIcon(address.network)}
                        </div>
                        <div className='flex flex-col ml-2'>
                          <span>{address.network}</span>
                          <span className='text-gray-500 text-sm'>
                            {
                              contactAddresses.filter(
                                (addr) => addr.network === address.network
                              ).length
                            }{' '}
                            addresses
                          </span>
                        </div>
                        <Button
                          variant='secondary'
                          className='ml-auto text-gray-700 hover:text-gray-900 bg-white border border-gray-300/50 h-8'
                          onClick={() => handleViewAddress(address)}
                        >
                          View
                        </Button>
                      </span>
                    </div>
                  ))}
                </div>
                <div className='flex justify-start'>
                  <Button
                    type='submit'
                    variant='default'
                    className={`w-full ${
                      isFormValid()
                        ? 'bg-primary-500'
                        : 'bg-primary-200 cursor-not-allowed'
                    }`} // Change color based on form validity
                    onClick={handleSubmit}
                    disabled={!isFormValid()} // Disable button if form is not valid
                  >
                    Save
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )
      )}
      {isViewAddressOpen && (
        <ViewAddress
          isOpen={isViewAddressOpen}
          onClose={handleViewAddressClose}
          addressData={selectedAddress}
        />
      )}
    </>
  );
};

export default EditContactNameModal;

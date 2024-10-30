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

// Importing the Input and Label components
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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

  const inputRef = useRef<HTMLInputElement | null>(null); // Ref for the input field

  // Fetch the contact when the modal opens
  useEffect(() => {
    if (contactId) {
      const contact = contacts.find((c) => c.id === contactId);
      if (contact) {
        setContactName(contact.name); // Set the current contact name
        setOriginalContactName(contact.name); // Store the original contact name
      }
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

  return (
    <>
      {isSavedModalOpen ? (
        <ContactNameEditedSaved onClose={handleCloseSavedModal} />
      ) : (
        <div className='fixed inset-0 bg-gray-200 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-primary-500 p-1 rounded-2xl shadow-xl max-w-[90%] w-[410px] h-auto flex flex-col relative'>
            <div className='px-8 pt-6 flex-shrink-0'>
              <button
                onClick={onClose}
                className='absolute top-2 right-2 text-gray-50 hover:text-gray-100'
                aria-label='Close'
              >
                <X className='h-6 w-6' />
              </button>
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
            <div className='bg-white px-4 pt-6 pb-6 rounded-xl shadow-md flex-grow overflow-hidden'>
              <Label className='block'>
                <div className='mb-1.5'>Contact Name</div>
                <input
                  type='text'
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder='Contact Name'
                  className='w-full h-10 text-gray-900 mb-3 text-sm font-medium pr-10 rounded-xl font-regular focus:border-primary-500 focus:ring focus:ring-primary-50 focus:ring-opacity-50 border-0.5 border-gray-300'
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
                        className='ml-auto text-gray-700 hover:text-gray-900 bg-white border border-gray-300/50'
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
                  className={`w-full ${isFormValid() ? 'bg-primary-500' : 'bg-primary-200 cursor-not-allowed'}`} // Change color based on form validity
                  onClick={handleSubmit}
                  disabled={!isFormValid()} // Disable button if form is not valid
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditContactNameModal;

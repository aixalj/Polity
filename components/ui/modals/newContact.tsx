import React, { useState } from 'react';
import NewContactSaved from '../saved modals/newContactSaved';
import { Button } from '@/components/ui/button';
import userPlusIcon from '@/public/modal-icons/user-plus.svg';
import Image from 'next/image';
import { ChevronDown, X, AlertTriangle, Check } from 'lucide-react'; // Import other icons
import ETHNetwork from 'public/icons/networks/ETH.svg'; // Import network icons
import BTCNetwork from 'public/icons/networks/BTC.svg';
import POLNetwork from 'public/icons/networks/MATIC.svg';

// Importing the Input and Label components
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Importing Dropdown Menu components
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

// Define the props for the NewContact component
interface NewContactProps {
  isOpen: boolean;
  onClose: () => void;
  onAddContact: (contact: { name: string; addressCount: number }) => void; // Callback to add contact
  onAddAddress: (address: {
    contactName: string;
    addressName: string;
    network: string;
    asset: string;
    networkAddress: string;
  }) => void; // Callback to add address
}

const NewContact: React.FC<NewContactProps> = ({
  isOpen,
  onClose,
  onAddContact,
  onAddAddress,
}) => {
  const [contactName, setContactName] = useState('');
  const [addressName, setAddressName] = useState('');
  const [network, setNetwork] = useState('');
  const [asset, setAsset] = useState('');
  const [networkAddress, setNetworkAddress] = useState('');
  const [activeTab, setActiveTab] = useState<'standard' | 'universal'>(
    'standard'
  ); // Default to 'standard'
  const [isSavedModalOpen, setSavedModalOpen] = useState(false); // State for NewContactSaved modal

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create new contact and address
    onAddContact({ name: contactName, addressCount: 1 }); // Assuming 1 address for now
    onAddAddress({
      contactName,
      addressName,
      network,
      asset: activeTab === 'standard' ? asset : '', // Only include asset if standard
      networkAddress,
    });

    setSavedModalOpen(true); // Open the saved modal after submission
  };

  const handleCloseSavedModal = () => {
    setSavedModalOpen(false); // Close the saved modal
    onClose(); // Close the NewContact modal
  };

  if (!isOpen) return null; // Don't render if the modal is not open

  // Function to get the appropriate network icon
  const getNetworkIcon = () => {
    switch (network) {
      case 'Ethereum Network':
        return <Image src={ETHNetwork} alt="Ethereum Network" className='h-5 w-5' />;
      case 'Bitcoin Network':
        return <Image src={BTCNetwork} alt="Bitcoin Network" className='h-5 w-5' />;
      case 'Polygon Network':
        return <Image src={POLNetwork} alt="Polygon Network" className='h-5 w-5' />;
      default:
        return null;
    }
  };

  return (
    <>
      {isSavedModalOpen ? (
        <NewContactSaved onClose={handleCloseSavedModal} />
      ) : (
        <div className='fixed inset-0 bg-gray-200 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-primary-500 p-1 rounded-2xl shadow-xl max-w-[90%] w-[410px] h-auto relative'>
            <div className='px-8 pt-6 pb-4'>
              <button
                onClick={onClose}
                className='absolute top-2 right-2 text-gray-50 hover:text-gray-100'
                aria-label='Close'
              >
                <X className='h-6 w-6' />
              </button>
              <div className='flex justify-start mb-2'>
                <Image src={userPlusIcon} alt='Add User' className='h-6 w-6' />
              </div>
              <h2 className='text-xl text-gray-50 font-medium mb-2'>
                Add new contact
              </h2>
              <p className='mb-2 text-gray-50 text-sm font-regular'>
                Fill out the fields below to save a new contact address.
              </p>
            </div>
            <div className='bg-white p-4 rounded-xl shadow-md'>
              <Label className='block'>
                <div className='mb-1.5'>Contact Name</div>
                <div className='relative'>
                  <Input
                    type='text'
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder='John Doe'
                    required
                    className='h-10 mb-3 pr-10' // Add padding to the right for the icon
                  />
                  {contactName && (
                    <Check className='absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500' />
                  )}
                </div>
              </Label>
              <div className='flex my-4 p-1 bg-gray-100 rounded-xl mb-3'>
                <button
                  type='button'
                  onClick={() => setActiveTab('standard')}
                  className={`flex-1 py-2 text-center rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm ${activeTab === 'standard' ? 'bg-white gray-700' : ' text-gray-700'}`}
                >
                  Standard
                </button>
                <button
                  type='button'
                  onClick={() => setActiveTab('universal')}
                  className={`flex-1 py-2 text-center rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm ${activeTab === 'universal' ? 'bg-white gray-700' : ' text-gray-700'}`}
                >
                  Universal
                </button>
              </div>
              <Label className='block mb-1.5'>
                <div className='mb-1.5'>Address Name</div>
                <div className='relative'>
                  <Input
                    type='text'
                    value={addressName}
                    onChange={(e) => setAddressName(e.target.value)}
                    placeholder='Enter address name here...'
                    required
                    className='h-10 mb-3 pr-10' // Add padding to the right for the icon
                  />
                  {addressName && (
                    <Check className='absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500' />
                  )}
                </div>
              </Label>
              <Label className='block mb-1.5'>
                <div className='mb-1.5'>Network</div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className='flex justify-between items-center mt-1 w-full border border-gray-300 rounded-[12px] p-2 cursor-pointer h-10 mb-3'>
                      <span className='text-gray-500'>{network || 'Select Network...'}</span>
                      {getNetworkIcon()} {/* Render the network icon */}
                      <ChevronDown className='h-4 w-4 text-gray-500' />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='w-full rounded-xl'>
                    <DropdownMenuItem onClick={() => setNetwork('Bitcoin Network')} className={`flex items-center ${network === 'Bitcoin Network' ? 'bg-gray-200' : ''}`}>
                      <Image src={BTCNetwork} alt="Bitcoin Network" className='h-5 w-5 mr-2' />
                      Bitcoin Network
                      {network === 'Bitcoin Network' && <Check className='ml-auto h-5 w-5 text-green-500' />}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setNetwork('Ethereum Network')} className={`flex items-center ${network === 'Ethereum Network' ? 'bg-gray-200' : ''}`}>
                      <Image src={ETHNetwork} alt="Ethereum Network" className='h-5 w-5 mr-2' />
                      Ethereum Network
                      {network === 'Ethereum Network' && <Check className='ml-auto h-5 w-5 text-green-500' />}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setNetwork('Polygon Network')} className={`flex items-center ${network === 'Polygon Network' ? 'bg-gray-200' : ''}`}>
                      <Image src={POLNetwork} alt="Polygon Network" className='h-5 w-5 mr-2' />
                      Polygon Network
                      {network === 'Polygon Network' && <Check className='ml-auto h-5 w-5 text-green-500' />}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Label>

              {activeTab === 'standard' && ( // Conditionally render asset input
                <Label className='block mb-1.5'>
                  <div className='mb-1.5'>Asset</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className='flex justify-between items-center mt-1 w-full border border-gray-300 rounded-[12px] p-2 cursor-pointer h-10 mb-3'>
                        <span className='text-gray-500'>{asset || 'Select Asset...'}</span>
                        <ChevronDown className='h-4 w-4 text-gray-500' />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setAsset('Tether')}>
                        Tether
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setAsset('Bitcoin')}>
                        Bitcoin
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setAsset('Ethereum')}>
                        Ethereum
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Label>
              )}
              <Label className='block mb-1.5'>
                <div className='mb-1.5'>Network Address</div>
                <div className='relative'>
                  <Input
                    type='text'
                    value={networkAddress}
                    onChange={(e) => setNetworkAddress(e.target.value)}
                    placeholder='Enter network address here...'
                    required
                    className='h-10 mb-3 pr-10' // Add padding to the right for the icon
                  />
                  {networkAddress && (
                    <Check className='absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500' />
                  )}
                </div>
              </Label>
              <div className='flex items-start text-sm text-yellow-800 mb-4 bg-yellow-50 p-4 rounded-xl'>
                <AlertTriangle className='h-9 w-9 mr-2 text-yellow-800' />
                <div>
                  <p className='m-0 text-sm font-semibold'>Contact Disclaimer</p>
                  <p className='m-0'>
                    Verify address accuracy. Incorrect entries lead to irreversible losses. Proceed at your own risk.
                  </p>
                </div>
              </div>
              <div className='flex justify-start'>
                <Button
                  type='submit'
                  variant='default'
                  className='w-full'
                  onClick={handleSubmit}
                >
                  Create Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewContact;
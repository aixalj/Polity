import React, { useState, useEffect, useRef } from 'react';
import NewContactSaved from '../saved modals/newContactSaved';
import { Button } from '@/components/ui/button';
import userPlusIcon from '@/public/modal-icons/user-plus.svg';
import Image from 'next/image';
import { ChevronDown, ChevronUp, X, AlertTriangle, Check } from 'lucide-react'; // Import other icons
import ETHNetwork from 'public/icons/networks/ETH.svg'; // Import network icons
import BTCNetwork from 'public/icons/networks/BTC.svg';
import POLNetwork from 'public/icons/networks/MATIC.svg';
import BTC from 'cryptocurrency-icons/svg/color/btc.svg';
import ETH from 'cryptocurrency-icons/svg/color/eth.svg';
import USDT from 'cryptocurrency-icons/svg/color/usdt.svg';
import { Dialog, DialogContent } from '@/components/ui/dialog'; // Import Dialog component

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
  const [isNetworkDropdownOpen, setIsNetworkDropdownOpen] = useState(false); // State for network dropdown open/close
  const [isAssetDropdownOpen, setIsAssetDropdownOpen] = useState(false); // State for asset dropdown open/close

  const inputRef = useRef<HTMLInputElement | null>(null); // Ref for the input field

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

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus(); // Focus the input field when the modal opens
    }
  }, [isOpen]);

  if (!isOpen) return null; // Don't render if the modal is not open

  // Function to get the appropriate network icon
  const getNetworkIcon = () => {
    switch (network) {
      case 'Ethereum Network':
        return (
          <Image src={ETHNetwork} alt='Ethereum Network' className='h-5 w-5' />
        );
      case 'Bitcoin Network':
        return (
          <Image src={BTCNetwork} alt='Bitcoin Network' className='h-5 w-5' />
        );
      case 'Polygon Network':
        return (
          <Image src={POLNetwork} alt='Polygon Network' className='h-5 w-5' />
        );
      default:
        return null;
    }
  };

  // Function to get the appropriate asset icon
  const getAssetIcon = () => {
    switch (asset.toLowerCase()) {
      case 'bitcoin':
      case 'btc':
        return <Image src={BTC} alt='Bitcoin' className='h-5 w-5 mr-2' />;
      case 'ethereum':
      case 'eth':
        return <Image src={ETH} alt='Ethereum' className='h-5 w-5 mr-2' />;
      case 'tether':
      case 'usdt':
        return <Image src={USDT} alt='Tether' className='h-5 w-5 mr-2' />;
      default:
        return null;
    }
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return contactName && addressName && network && asset && networkAddress;
  };

  return (
    <>
      {isSavedModalOpen ? (
        <NewContactSaved
          isOpen={isSavedModalOpen}
          onClose={handleCloseSavedModal}
        />
      ) : (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            lightCloseIcon
            className='bg-primary-500 p-1 rounded-2xl shadow-xl  w-[410px] h-auto flex flex-col'
          >
            <div className='px-8 pt-5 pb-4 flex-shrink-0'>
              <div className='flex justify-start mb-2'>
                <Image src={userPlusIcon} alt='Add User' className='h-6 w-6' />
              </div>
              <h2 className='text-xl text-gray-50 font-medium mb-2'>
                Add new contact
              </h2>
              <p className=' text-gray-50 text-sm font-regular'>
                Fill out the fields below to save a new contact address.
              </p>
            </div>
            <div className='bg-white px-6 pt-4 pb-6 rounded-xl shadow-md flex-grow overflow-hidden'>
              <Label className='block'>
                <div className='mb-1.5'>Contact Name</div>
                <div className='relative'>
                  <Input
                    type='text'
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder='John Doe'
                    required
                    className='h-10 mb-3 text-gray-900 pr-10 font-regular focus:border-primary-500 focus:ring focus:ring-primary-50 focus:ring-opacity-50 border-0.5 border-gray-300'
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
                  className={`flex-1 py-2 text-center text-sm font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm ${
                    activeTab === 'standard'
                      ? 'bg-white gray-700'
                      : ' text-gray-700'
                  }`}
                >
                  Standard Address
                </button>
                <button
                  type='button'
                  onClick={() => setActiveTab('universal')}
                  className={`flex-1 py-2 text-center text-sm font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm ${
                    activeTab === 'universal'
                      ? 'bg-white gray-700'
                      : ' text-gray-700'
                  }`}
                >
                  Universal Address
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
                    className='h-10 text-gray-900 mb-3 pr-10 font-regular focus:border-primary-500 focus:ring-2 focus:ring-[#d2e9e5] focus:ring-opacity-50 border-0.5 border-gray-300'
                  />
                  {addressName && (
                    <Check className='absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500' />
                  )}
                </div>
              </Label>

              <Label className='block mb-1.5'>
                <div className='mb-1.5'>Network</div>
                <DropdownMenu onOpenChange={setIsNetworkDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <div
                      className={`flex items-center mt-1 w-full border border-gray-300 rounded-[12px] pr-2 pl-1 cursor-pointer h-10 mb-3 text-gray-900 font-regular ${
                        isNetworkDropdownOpen
                          ? 'ring-2 ring-opacity-50 border-[2px] border-primary-500 ring-[#d2e9e5]'
                          : ''
                      }`}
                    >
                      <span className='mr-2'>{getNetworkIcon()}</span>
                      <span
                        className={`text-gray-500 ${
                          network ? 'text-md font-medium text-gray-900' : ''
                        }`}
                      >
                        {network || 'Select Network...'}
                      </span>
                      {isNetworkDropdownOpen ? (
                        <ChevronUp className='h-4 w-4 text-gray-500 ml-auto' />
                      ) : (
                        <ChevronDown className='h-4 w-4 text-gray-500 ml-auto' />
                      )}
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className='w-full rounded-xl' isModal>
                    <DropdownMenuItem
                      onClick={() => setNetwork('Bitcoin Network')}
                      className={`flex items-center rounded-lg ${
                        network === 'Bitcoin Network' ? 'bg-[#F9FAFB]' : ''
                      } !hover:bg-[#F9FAFB]`}
                    >
                      <Image
                        src={BTCNetwork}
                        alt='Bitcoin Network'
                        className='h-5 w-5 mr-2'
                      />
                      <span
                        className={`text-gray-900 ${
                          network === 'Bitcoin Network'
                            ? 'text-md font-medium'
                            : ''
                        }`}
                      >
                        Bitcoin Network
                      </span>
                      {network === 'Bitcoin Network' && (
                        <Check className='ml-auto h-5 w-5 text-green-500' />
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setNetwork('Ethereum Network')}
                      className={`flex items-center rounded-lg ${
                        network === 'Ethereum Network' ? 'bg-gray-50' : ''
                      } hover:bg-gray-50`}
                    >
                      <Image
                        src={ETHNetwork}
                        alt='Ethereum Network'
                        className='h-5 w-5 mr-2'
                      />
                      <span
                        className={`text-gray-900 ${
                          network === 'Ethereum Network'
                            ? 'text-md font-medium'
                            : ''
                        }`}
                      >
                        Ethereum Network
                      </span>
                      {network === 'Ethereum Network' && (
                        <Check className='ml-auto h-5 w-5 text-green-500' />
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setNetwork('Polygon Network')}
                      className={`flex items-center rounded-lg ${
                        network === 'Polygon Network' ? 'bg-gray-50' : ''
                      } hover:bg-gray-50`}
                    >
                      <Image
                        src={POLNetwork}
                        alt='Polygon Network'
                        className='h-5 w-5 mr-2'
                      />
                      <span
                        className={`text-gray-900 ${
                          network === 'Polygon Network'
                            ? 'text-md font-medium'
                            : ''
                        }`}
                      >
                        Polygon Network
                      </span>
                      {network === 'Polygon Network' && (
                        <Check className='ml-auto h-5 w-5 text-green-500' />
                      )}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Label>

              {activeTab === 'standard' && (
                <Label className='block mb-1.5'>
                  <div className='mb-1.5'>Asset</div>
                  <DropdownMenu onOpenChange={setIsAssetDropdownOpen}>
                    <DropdownMenuTrigger asChild>
                      <div
                        className={`flex items-center mt-1 w-full border border-gray-300 rounded-[12px] p-2 cursor-pointer h-10 mb-3 ${
                          isAssetDropdownOpen
                            ? 'ring-2 ring-[#d2e9e5] ring-primary-50 ring-opacity-50 border-[2px] border-primary-500'
                            : ''
                        }`}
                      >
                        <span className=''>{getAssetIcon()}</span>
                        <span
                          className={`text-gray-500 ${
                            asset ? 'text-md font-medium text-gray-900' : ''
                          }`}
                        >
                          {asset || 'Select Asset...'}
                        </span>
                        {isAssetDropdownOpen ? (
                          <ChevronUp className='h-4 w-4 text-gray-500 ml-auto' />
                        ) : (
                          <ChevronDown className='h-4 w-4 text-gray-500 ml-auto' />
                        )}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-full rounded-xl' isModal>
                      <DropdownMenuItem
                        onClick={() => setAsset('Tether')}
                        className={`flex items-center rounded-lg ${
                          asset === 'Tether' ? 'bg-gray-50' : ''
                        } hover:bg-gray-50`}
                      >
                        <Image
                          src={USDT}
                          alt='Tether'
                          className='h-5 w-5 mr-2'
                        />
                        Tether
                        {asset === 'Tether' && (
                          <Check className='ml-auto h-5 w-5 text-green-500' />
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setAsset('Bitcoin')}
                        className={`flex items-center rounded-lg ${
                          asset === 'Bitcoin' ? 'bg-gray-50' : ''
                        } hover:bg-gray-50`}
                      >
                        <Image
                          src={BTC}
                          alt='Bitcoin'
                          className='h-5 w-5 mr-2'
                        />
                        Bitcoin
                        {asset === 'Bitcoin' && (
                          <Check className='ml-auto h-5 w-5 text-green-500' />
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setAsset('Ethereum')}
                        className={`flex items-center rounded-lg ${
                          asset === 'Ethereum' ? 'bg-gray-50' : ''
                        } hover:bg-gray-50`}
                      >
                        <Image
                          src={ETH}
                          alt='Ethereum'
                          className='h-5 w-5 mr-2'
                        />
                        Ethereum
                        {asset === 'Ethereum' && (
                          <Check className='ml-auto h-5 w-5 text-green-500' />
                        )}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Label>
              )}
              <Label className='block'>
                <div className='mb-1.5'>Network Address</div>
                <div className='relative'>
                  <Input
                    type='text'
                    value={networkAddress}
                    onChange={(e) => setNetworkAddress(e.target.value)}
                    placeholder='Enter network address here...'
                    required
                    className={`h-10 text-gray-900 mb-3 pr-10 font-regular border-0.5 border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-50 focus:ring-opacity-50`}
                  />
                  {networkAddress && (
                    <Check className='absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500' />
                  )}
                </div>
              </Label>
              <div className='flex items-start my-6 text-sm text-yellow-700 bg-yellow-50 p-4 rounded-xl'>
                <AlertTriangle className='h-5 w-9 mr-2 text-yellow-600' />
                <div>
                  <p className='m-0 text-sm font-semibold'>
                    Contact Disclaimer
                  </p>
                  <p className='m-0'>
                    Verify address accuracy. Incorrect entries lead to
                    irreversible losses. Proceed at your own risk.
                  </p>
                </div>
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
                  Create Contact
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default NewContact;

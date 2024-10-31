import React, { useState } from 'react';
import { Button } from '../button';
import NewAddressSaved from '../saved modals/newAddressSaved'; // Import the NewAddressSaved modal
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, X, Check, BookOpen, AlertTriangle } from 'lucide-react'; // Import Check and ChevronDown icons
import { Input } from '@/components/ui/input'; // Import Input component
import { Label } from '@/components/ui/label'; // Import Label component
import ETHNetwork from 'public/icons/networks/ETH.svg'; // Import network icons
import BTCNetwork from 'public/icons/networks/BTC.svg';
import POLNetwork from 'public/icons/networks/MATIC.svg';
import BTC from 'cryptocurrency-icons/svg/color/btc.svg';
import ETH from 'cryptocurrency-icons/svg/color/eth.svg';
import USDT from 'cryptocurrency-icons/svg/color/usdt.svg';
import Image from 'next/image';
import { Dialog } from '@headlessui/react'; // Import Dialog component

interface AddAddressProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAddress: (address: {
    contactName: string;
    addressName: string;
    network: string;
    asset: string;
    networkAddress: string;
  }) => void;
  contactName: string; // Prop to receive the contact name
}

const AddAddress: React.FC<AddAddressProps> = ({
  isOpen,
  onClose,
  onAddAddress,
  contactName,
}) => {
  const [addressName, setAddressName] = useState('');
  const [network, setNetwork] = useState('');
  const [asset, setAsset] = useState('');
  const [networkAddress, setNetworkAddress] = useState('');
  const [activeTab, setActiveTab] = useState<'standard' | 'universal'>(
    'standard'
  ); // Default to 'standard'
  const [isSavedModalOpen, setSavedModalOpen] = useState(false); // State for NewAddressSaved modal
  const [isNetworkDropdownOpen, setIsNetworkDropdownOpen] = useState(false); // State for network dropdown open/close
  const [isAssetDropdownOpen, setIsAssetDropdownOpen] = useState(false); // State for asset dropdown open/close

  const handleSubmit = () => {
    onAddAddress({
      contactName,
      addressName,
      network,
      asset: activeTab === 'standard' ? asset : '',
      networkAddress,
    });
    setSavedModalOpen(true); // Open the NewAddressSaved modal after adding the address
  };

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

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <>
      {isSavedModalOpen ? (
        <NewAddressSaved
          isOpen={isSavedModalOpen}
          onClose={() => {
            setSavedModalOpen(false);
            onClose(); // Close the AddAddress modal when the saved modal is closed
          }}
          contactName={contactName}
        />
      ) : (
        <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
          <div className='fixed inset-0 bg-gray-200 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50'>
            <Dialog.Panel className='bg-primary-500 p-1 rounded-2xl shadow-xl max-w-[90%] w-[410px] h-auto flex flex-col relative'>
              <div className='px-8 pt-6 pb-4 flex-shrink-0'>
                <button
                  onClick={onClose}
                  className='absolute top-2 right-2 text-gray-50 hover:text-gray-100'
                  aria-label='Close'
                >
                  <X className='h-6 w-6' />
                </button>
                <div className='flex justify-start mb-2'>
                  <BookOpen className='h-6 w-6 text-gray-50' />
                </div>
                <h2 className='text-xl text-gray-50 font-medium mb-2'>
                  Add Address
                </h2>
                <p className=' text-gray-50 text-sm font-regular'>
                  Fill out the fields below to add a new address.
                </p>
              </div>
              <div className='bg-white px-4 pt-6 pb-6 rounded-xl shadow-md flex-grow overflow-hidden'>
                <Label className='block mb-1.5'>
                  <div className='mb-1.5'>Contact Name</div>
                  <div className='relative'>
                    <Input
                      type='text'
                      value={contactName}
                      disabled // Disable the field
                      className='h-10 mb-3 pr-10 font-regular border border-gray-300 bg-gray-100 cursor-not-allowed'
                    />
                  </div>
                </Label>

                <div className='flex my-4 p-1 bg-gray-100 rounded-xl mb-3'>
                  <button
                    type='button'
                    onClick={() => setActiveTab('standard')}
                    className={`flex-1 py-2 text-center text-sm font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm ${activeTab === 'standard' ? 'bg-white gray-700' : ' text-gray-700'}`}
                  >
                    Standard Address
                  </button>
                  <button
                    type='button'
                    onClick={() => setActiveTab('universal')}
                    className={`flex-1 py-2 text-center text-sm font-semibold rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm ${activeTab === 'universal' ? 'bg-white gray-700' : ' text-gray-700'}`}
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
                      className='h-10 mb-3 text-gray-900 pr-10 font-regular border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-50 focus:ring-opacity-50'
                    />
                    {addressName && (
                      <Check className='absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500' />
                    )}
                  </div>
                </Label>

                <Label className='block mb-3'>
                  <div className='mb-1.5'>Network</div>
                  <DropdownMenu onOpenChange={setIsNetworkDropdownOpen}>
                    <DropdownMenuTrigger asChild>
                      <div
                        className={`flex items-center mt-1 w-full border border-gray-300 rounded-[12px] p-2 cursor-pointer h-10 mb-3 ${isNetworkDropdownOpen ? 'border-primary-500 ring-2 ring-primary-50' : ''}`}
                      >
                        <span className='mr-2'>{getNetworkIcon()}</span>
                        <span
                          className={`text-gray-500 ${network ? 'text-md font-medium text-gray-900' : ''}`}
                        >
                          {network || 'Select Network...'}
                        </span>
                        <ChevronDown className='h-4 w-4 text-gray-500 ml-auto' />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-full rounded-xl'>
                      <DropdownMenuItem
                        onClick={() => setNetwork('Bitcoin Network')}
                        className={`flex items-center rounded-lg ${network === 'Bitcoin Network' ? 'bg-gray-50' : ''} hover:bg-gray-50`}
                      >
                        <Image
                          src={BTCNetwork}
                          alt='Bitcoin Network'
                          className='h-5 w-5 mr-2'
                        />
                        <span className='text-gray-900'>Bitcoin Network</span>
                        {network === 'Bitcoin Network' && (
                          <Check className='ml-auto h-5 w-5 text-green-500' />
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setNetwork('Ethereum Network')}
                        className={`flex items-center rounded-lg ${network === 'Ethereum Network' ? 'bg-gray-50' : ''} hover:bg-gray-50`}
                      >
                        <Image
                          src={ETHNetwork}
                          alt='Ethereum Network'
                          className='h-5 w-5 mr-2'
                        />
                        <span className='text-gray-900'>Ethereum Network</span>
                        {network === 'Ethereum Network' && (
                          <Check className='ml-auto h-5 w-5 text-green-500' />
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => setNetwork('Polygon Network')}
                        className={`flex items-center rounded-lg ${network === 'Polygon Network' ? 'bg-gray-50' : ''} hover:bg-gray-50`}
                      >
                        <Image
                          src={POLNetwork}
                          alt='Polygon Network'
                          className='h-5 w-5 mr-2'
                        />
                        <span className='text-gray-900'>Polygon Network</span>
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
                          className={`flex items-center mt-1 w-full border border-gray-300 rounded-[12px] p-2 cursor-pointer h-10 mb-3 ${isAssetDropdownOpen ? 'border-primary-500 ring-2 ring-primary-50' : ''}`}
                        >
                          {getAssetIcon()}
                          <span
                            className={`text-gray-500 ${asset ? 'text-md font-medium text-gray-900' : ''}`}
                          >
                            {asset || 'Select asset...'}
                          </span>
                          <ChevronDown className='h-4 w-4 text-gray-500 ml-auto' />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className='w-full rounded-xl'>
                        <DropdownMenuItem
                          onClick={() => setAsset('Tether')}
                          className={`flex items-center rounded-lg ${asset === 'Tether' ? 'bg-gray-50' : ''} hover:bg-gray-50`}
                        >
                          <Image
                            src={USDT}
                            alt='Tether'
                            className='h-5 w-5 mr-2'
                          />
                          <span className='text-gray-900'>Tether</span>
                          {asset === 'Tether' && (
                            <Check className='ml-auto h-5 w-5 text-green-500' />
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setAsset('Bitcoin')}
                          className={`flex items-center rounded-lg ${asset === 'Bitcoin' ? 'bg-gray-50' : ''} hover:bg-gray-50`}
                        >
                          <Image
                            src={BTC}
                            alt='Bitcoin'
                            className='h-5 w-5 mr-2'
                          />
                          <span className='text-gray-900'>Bitcoin</span>
                          {asset === 'Bitcoin' && (
                            <Check className='ml-auto h-5 w-5 text-green-500' />
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setAsset('Ethereum')}
                          className={`flex items-center rounded-lg ${asset === 'Ethereum' ? 'bg-gray-50' : ''} hover:bg-gray-50`}
                        >
                          <Image
                            src={ETH}
                            alt='Ethereum'
                            className='h-5 w-5 mr-2'
                          />
                          <span className='text-gray-900'>Ethereum</span>
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
                      className={`h-10 mb-3 text-gray-900 pr-10 font-regular border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-50 focus:ring-opacity-50 ${network || asset ? 'text-gray-900' : 'text-gray-500'}`}
                    />
                    {networkAddress && (
                      <Check className='absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500' />
                    )}
                  </div>
                </Label>

                <div className='flex items-start text-sm text-yellow-700 my-6 bg-yellow-50 p-4 rounded-xl'>
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
                    className={`w-full ${isFormValid() ? 'bg-primary-500' : 'bg-primary-200 cursor-not-allowed'}`} // Change color based on form validity
                    onClick={handleSubmit}
                    disabled={!isFormValid()} // Disable button if form is not valid
                  >
                    Save{' '}
                  </Button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default AddAddress;

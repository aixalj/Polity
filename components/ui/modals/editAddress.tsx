'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../button';
import RemoveAddress from './removeAddress';
import ContactEditedSaved from '../saved modals/contactEditedSaved';
import { X, AlertTriangle, ChevronDown, Check } from 'lucide-react'; // Import other icons
import userEditIcon from '@/public/modal-icons/user-edit.svg';
import Image from 'next/image';
// Importing the Input and Label components
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ETHNetwork from 'public/icons/networks/ETH.svg'; // Import network icons
import BTCNetwork from 'public/icons/networks/BTC.svg';
import POLNetwork from 'public/icons/networks/MATIC.svg';
import BTC from 'cryptocurrency-icons/svg/color/btc.svg';
import ETH from 'cryptocurrency-icons/svg/color/eth.svg';
import USDT from 'cryptocurrency-icons/svg/color/usdt.svg';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import { Dialog } from '@headlessui/react'; // Import Dialog component

interface EditAddressProps {
  isOpen: boolean;
  onClose: () => void;
  addressData: {
    id: string;
    contactName: string;
    addressname: string;
    network: string;
    asset: string;
    address: string;
  } | null;
  onSave: (updatedAddress: any) => void;
  onRemove: (addressId: string, callback: () => void) => void;
}

const EditAddress: React.FC<EditAddressProps> = ({
  isOpen,
  onClose,
  addressData,
  onSave,
  onRemove,
}) => {
  const [addressName, setAddressName] = useState('');
  const [network, setNetwork] = useState('');
  const [asset, setAsset] = useState('');
  const [networkAddress, setNetworkAddress] = useState('');
  const [isModified, setIsModified] = useState(false);
  const [isRemoveModalOpen, setRemoveModalOpen] = useState(false);
  const [isEditedSavedModalOpen, setEditedSavedModalOpen] = useState(false);
  const [isNetworkDropdownOpen, setIsNetworkDropdownOpen] = useState(false); // State for network dropdown open/close
  const [isAssetDropdownOpen, setIsAssetDropdownOpen] = useState(false); // State for asset dropdown open/close

  useEffect(() => {
    if (addressData) {
      setAddressName(addressData.addressname);
      setNetwork(addressData.network);
      setAsset(addressData.asset);
      setNetworkAddress(addressData.address);
      setIsModified(false);
    }
  }, [addressData]);

  const handleSave = () => {
    if (addressData) {
      onSave({
        ...addressData,
        addressname: addressName,
        network,
        asset,
        address: networkAddress,
      });
      setEditedSavedModalOpen(true);
    }
  };

  const handleRemoveButtonClick = () => {
    onClose(); // Close EditAddress modal
    setRemoveModalOpen(true); // Open RemoveAddress modal
  };

  const handleCloseEditedSavedModal = () => {
    setEditedSavedModalOpen(false); // Close ContactEditedSaved modal
  };

  const handleRemove = (addressId: string) => {
    onRemove(addressId, () => {
      setRemoveModalOpen(false);
      setEditedSavedModalOpen(false);
    });
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

  // Function to truncate the address
  const truncateAddress = (address: string, maxLength: number) => {
    if (address.length > maxLength) {
      return `${address.slice(0, maxLength)}...`;
    }
    return address;
  };

  return (
    <>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
          <div className='fixed inset-0 bg-gray-200 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50'>
            <Dialog.Panel className='bg-primary-500 p-1 rounded-2xl shadow-xl max-w-[90%] w-[410px] h-auto flex flex-col relative'>
              <div className='px-8 pt-6 flex-shrink-0'>
                <button
                  onClick={onClose}
                  className='absolute top-2 right-2 text-gray-50 hover:text-gray-100'
                  aria-label='Close'
                >
                  <X className='h-6 w-6' />
                </button>
                <div className='flex justify-start mb-2'>
                  <Image
                    src={userEditIcon}
                    alt='Add User'
                    className='h-6 w-6'
                  />
                </div>
                <h2 className='text-lg font-medium mb-2 text-gray-50'>
                  Edit Address
                </h2>
                <p className='mb-4 text-gray-50 text-sm font-regular whitespace-nowrap'>
                  Edit the fields below to update the contact’s information.
                </p>
              </div>
              <div className='bg-white px-4 pt-6 pb-6 rounded-xl shadow-md flex-grow overflow-hidden'>
                <div>
                  <Label className='block mb-1.5'>Contact Name</Label>
                  <input
                    type='text'
                    value={addressData?.contactName}
                    disabled
                    className='w-full rounded-xl h-10 mb-3 pr-10 text-sm font-medium border border-gray-300 bg-gray-100 cursor-not-allowed'
                  />
                </div>
                <div>
                  <Label className='block mb-1.5'>Address Name</Label>
                  <div className='relative'>
                    <input
                      type='text'
                      value={addressName}
                      onChange={(e) => {
                        setAddressName(e.target.value);
                        setIsModified(true);
                      }}
                      className='w-full h-10 text-gray-900 text-sm font-medium mb-3 pr-10  border rounded-xl border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-50 focus:ring-opacity-50'
                    />
                    {isModified && ( // Show checkmark if edited
                      <Check className='absolute right-2 top-1/2 transform -translate-y-3.5 h-5 w-5 text-green-500' />
                    )}
                  </div>
                </div>

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
                        <span className='text-gray-900 text-md'>
                          Bitcoin Network
                        </span>
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
                        <span className='text-gray-900 text-md'>
                          Ethereum Network
                        </span>
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
                        <span className='text-gray-900 text-md'>
                          Polygon Network
                        </span>
                        {network === 'Polygon Network' && (
                          <Check className='ml-auto h-5 w-5 text-green-500' />
                        )}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Label>

                {addressData?.asset && (
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
                          <span className='text-gray-900 text-md'>Tether</span>
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
                          <span className='text-gray-900 text-md'>Bitcoin</span>
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
                          <span className='text-gray-900 text-md'>
                            Ethereum
                          </span>
                          {asset === 'Ethereum' && (
                            <Check className='ml-auto h-5 w-5 text-green-500' />
                          )}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Label>
                )}

                <div>
                  <Label className='block mb-1.5'>Network Address</Label>
                  <input
                    type='text'
                    value={networkAddress} // Truncate address if needed
                    onChange={(e) => {
                      setNetworkAddress(e.target.value);
                      setIsModified(true);
                    }}
                    className='w-full h-10 text-gray-900 text-sm font-medium pr-10 font-regular border rounded-xl border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-50 focus:ring-opacity-50'
                  />
                  {isModified && ( // Show checkmark if edited
                    <Check className='absolute right-7 top-[50%] transform translate-y-7.5 h-5 w-5 text-green-500' />
                  )}
                </div>
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
                <div className='mt-3 flex justify-between'>
                  <Button
                    className='w-1/2 mr-1 border border-rose-300 text-rose-700 bg-white hover:text-white hover:bg-rose-100 hover:border-rose-100'
                    variant='destructive'
                    onClick={handleRemoveButtonClick}
                  >
                    Remove
                  </Button>
                  <Button
                    className='w-1/2 ml-1'
                    onClick={handleSave}
                    disabled={!isModified}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}

      {isEditedSavedModalOpen && (
        <ContactEditedSaved
          isOpen={isEditedSavedModalOpen}
          onClose={handleCloseEditedSavedModal}
        />
      )}

      <RemoveAddress
        isOpen={isRemoveModalOpen}
        onClose={() => setRemoveModalOpen(false)}
        onCancel={onClose}
        onRemove={handleRemove}
        addressData={addressData}
      />
    </>
  );
};

export default EditAddress;

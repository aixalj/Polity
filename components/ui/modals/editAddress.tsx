'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../button';
import RemoveAddress from './removeAddress';
import ContactEditedSaved from '../saved modals/contactEditedSaved';
import { X, AlertTriangle } from 'lucide-react'; // Import other icons
import userEditIcon from '@/public/modal-icons/user-edit.svg';
import Image from 'next/image';
// Importing the Input and Label components
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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

  return (
    <>
      {isOpen && (
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
                Edit Address
              </h2>
              <p className='mb-4 text-gray-50 text-sm font-regular'>
                Edit the fields below to update the contact’s information.
              </p>
            </div>
            <div className='bg-white px-4 pt-6 pb-6 rounded-xl shadow-md flex-grow overflow-hidden'>
              <div className='mt-4'>
                <Label className='block mb-2'>Contact Name</Label>
                <input
                  type='text'
                  value={addressData?.contactName}
                  disabled
                  className='w-full rounded-xl h-10 mb-3 pr-10 font-regular border border-gray-300 bg-gray-100 cursor-not-allowed'
                />
              </div>
              <div className='mt-4'>
                <Label className='block mb-2'>Address Name</Label>
                <input
                  type='text'
                  value={addressName}
                  onChange={(e) => {
                    setAddressName(e.target.value);
                    setIsModified(true);
                  }}
                  className='w-full p-2  border border-gray-300 rounded-xl '
                />
              </div>
              <div className='mt-4'>
                <Label className='block mb-2'>Network</Label>
                <select
                  value={network}
                  onChange={(e) => {
                    setNetwork(e.target.value);
                    setIsModified(true);
                  }}
                  className='w-full p-2 border border-gray-300 rounded-xl '
                >
                  <option value=''>Select Network</option>
                  <option value='Ethereum Network'>Ethereum Network</option>
                  <option value='Bitcoin Network'>Bitcoin Network</option>
                  <option value='Polygon Network'>Polygon Network</option>
                </select>
              </div>
              {addressData?.asset && (
                <div className='mt-4'>
                  <Label className='block mb-2'>Asset</Label>
                  <select
                    value={asset}
                    onChange={(e) => {
                      setAsset(e.target.value);
                      setIsModified(true);
                    }}
                    className='w-full p-2 border border-gray-300 rounded-xl '
                  >
                    <option value=''>Select Asset</option>
                    <option value='Tether'>Tether</option>
                    <option value='Bitcoin'>Bitcoin</option>
                    <option value='Ethereum'>Ethereum</option>
                  </select>
                </div>
              )}
              <div className='mt-4'>
                <Label className='block mb-2'>Network Address</Label>
                <input
                  type='text'
                  value={networkAddress}
                  onChange={(e) => {
                    setNetworkAddress(e.target.value);
                    setIsModified(true);
                  }}
                  className='w-full p-2 border border-gray-300 rounded-xl '
                />
              </div>
              <div className='flex items-start text-sm text-yellow-700 mb-4 bg-yellow-50 p-4 rounded-xl'>
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
              <div className='mt-6 flex justify-between'>
                <Button className='w-1/2 mr-1 border border-rose-300 text-rose-700 bg-white hover:text-white hover:bg-rose-100 hover:border-rose-100' variant='destructive' onClick={handleRemoveButtonClick}>
                  Remove
                </Button>
                <Button className='w-1/2 ml-1' onClick={handleSave} disabled={!isModified}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isEditedSavedModalOpen && (
        <ContactEditedSaved onClose={handleCloseEditedSavedModal} />
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

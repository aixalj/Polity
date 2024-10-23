// components/ui/modals/EditAddress.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../button';
import RemoveAddress from './removeAddress'; // Import the RemoveAddress modal

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
  onSave: (updatedAddress: any) => void; // Define the type as needed
  onRemove: (addressId: string) => void; // Function to handle address removal
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
  const [isEditAddressOpen, setEditAddressOpen] = useState(false);
  const [isRemoveModalOpen, setRemoveModalOpen] = useState(false); // State for RemoveAddress modal

  useEffect(() => {
    if (addressData) {
      setAddressName(addressData.addressname);
      setNetwork(addressData.network);
      setAsset(addressData.asset);
      setNetworkAddress(addressData.address);
      setIsModified(false); // Reset modified state when addressData changes
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
    }
  };

  const handleChange = () => {
    setIsModified(true);
  };

  const handleRemove = () => {
    // Logic for handling removal
};

  // Function to open EditAddress modal
  const openEditAddress = () => {
    setEditAddressOpen(true);
  };

  // Function to close EditAddress modal
  const closeEditAddress = () => {
    setEditAddressOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white rounded-lg shadow-lg p-6 w-[448px] z-10'>
            <div className='flex justify-between items-center'>
              <h2 className='text-lg font-semibold'>Edit Address</h2>
              <button onClick={onClose} className='text-gray-500'>
                &times;
              </button>
            </div>
            <div className='mt-4'>
              <label className='block mb-2'>Contact Name</label>
              <input
                type='text'
                value={addressData?.contactName}
                disabled
                className='w-full p-2 border border-gray-300 rounded'
              />
            </div>
            <div className='mt-4'>
              <label className='block mb-2'>Address Name</label>
              <input
                type='text'
                value={addressName}
                onChange={(e) => {
                  setAddressName(e.target.value);
                  handleChange();
                }}
                className='w-full p-2 border border-gray-300 rounded'
              />
            </div>
            <div className='mt-4'>
              <label className='block mb-2'>Network</label>
              <select
                value={network}
                onChange={(e) => {
                  setNetwork(e.target.value);
                  handleChange();
                }}
                className='w-full p-2 border border-gray-300 rounded'
              >
                <option value=''>Select Network</option>
                <option value='Ethereum Network'>Ethereum Network</option>
                <option value='Bitcoin Network'>Bitcoin Network</option>
                <option value='Polygon Network'>Polygon Network</option>
                {/* Add more networks as needed */}
              </select>
            </div>
            {addressData?.asset && (
              <div className='mt-4'>
                <label className='block mb-2'>Asset</label>
                <select
                  value={asset}
                  onChange={(e) => {
                    setAsset(e.target.value);
                    handleChange();
                  }}
                  className='w-full p-2 border border-gray-300 rounded'
                >
                  <option value=''>Select Asset</option>
                  <option value='Tether'>Tether</option>
                  <option value='Bitcoin'>Bitcoin</option>
                  <option value='Ethereum'>Ethereum</option>
                  {/* Add more assets as needed */}
                </select>
              </div>
            )}
            <div className='mt-4'>
              <label className='block mb-2'>Network Address</label>
              <input
                type='text'
                value={networkAddress}
                onChange={(e) => {
                  setNetworkAddress(e.target.value);
                  handleChange();
                }}
                className='w-full p-2 border border-gray-300 rounded'
              />
            </div>
            <div className='text-sm text-red-600 mb-4'>
              <p>
                Contact Disclaimer: Verify address accuracy. Incorrect entries
                lead to irreversible losses. Proceed at your own risk.
              </p>
            </div>
            <div className='mt-6 flex justify-between'>
              <Button
                variant='destructive'
                onClick={() => {
                  setRemoveModalOpen(true); // Open the RemoveAddress modal
                  onClose(); // Close the EditAddress modal
                }}
              >
                Remove
              </Button>
              <Button
                onClick={handleSave}
                disabled={!isModified} // Disable if no changes made
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      )}

      <EditAddress
        isOpen={isEditAddressOpen}
        onClose={closeEditAddress} // This should close the EditAddress modal
        addressData={addressData}
        onSave={handleSave}
        onRemove={handleRemove}
      />

      <RemoveAddress
        isOpen={isRemoveModalOpen}
        onClose={() => setRemoveModalOpen(false)} // Close the RemoveAddress modal
        onCancel={() => {
          console.log('Cancel button clicked');
          setRemoveModalOpen(false); // Close the RemoveAddress modal
          openEditAddress(); // Open the EditAddress modal
          console.log('EditAddress modal should be visible now');
        }}
        onRemove={() => {
          if (addressData) {
            onRemove(addressData.id); // Call the remove function
          }
          setRemoveModalOpen(false); // Close the modal after removal
        }}
        addressData={addressData}
      />
    </>
  );
};

export default EditAddress;

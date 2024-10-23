// components/ui/modals/EditAddress.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../button';

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

  useEffect(() => {
    if (addressData) {
      setAddressName(addressData.addressname);
      setNetwork(addressData.network); // Set network from addressData
      setAsset(addressData.asset); // Set asset from addressData
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

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[448px] z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Edit Address</h2>
            <button onClick={onClose} className="text-gray-500">
              &times;
            </button>
          </div>
          <div className="mt-4">
            <label className="block mb-2">Contact Name</label>
            <input
              type="text"
              value={addressData?.contactName}
              disabled
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Address Name</label>
            <input
              type="text"
              value={addressName}
              onChange={(e) => {
                setAddressName(e.target.value);
                handleChange();
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2">Network</label>
            <select
              value={network}
              onChange={(e) => {
                setNetwork(e.target.value);
                handleChange();
              }}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Network</option>
              <option value="Ethereum Network">Ethereum Network</option>
              <option value="Bitcoin Network">Bitcoin Network</option>
              <option value="Polygon Network">Polygon Network</option>
              {/* Add more networks as needed */}
            </select>
          </div>
          {addressData?.asset && (
            <div className="mt-4">
              <label className="block mb-2">Asset</label>
              <select
                value={asset}
                onChange={(e) => {
                  setAsset(e.target.value);
                  handleChange();
                }}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="">Select Asset</option>
                <option value="Tether">Tether</option>
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                {/* Add more assets as needed */}
              </select>
            </div>
          )}
          <div className="mt-4">
            <label className="block mb-2">Network Address</label>
            <input
              type="text"
              value={networkAddress}
              onChange={(e) => {
                setNetworkAddress(e.target.value);
                handleChange();
              }}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="text-sm text-red-600 mb-4">
            <p>Contact Disclaimer: Verify address accuracy. Incorrect entries lead to irreversible losses. Proceed at your own risk.</p>
          </div>
          <div className="mt-6 flex justify-between">
            <Button
              variant="destructive"
              onClick={() => onRemove(addressData?.id!)} // Call the remove function
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
    )
  );
};

export default EditAddress;
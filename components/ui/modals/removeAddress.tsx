// components/ui/modals/RemoveAddress.tsx

'use client';

import React from 'react';

interface RemoveAddressProps {
  isOpen: boolean;
  onClose: () => void; // This will close the RemoveAddress modal
  onCancel: () => void; // This will take you back to the EditAddress modal
  onRemove: () => void; // Function to handle the removal of the address
  addressData: {
    contactName: string;
    addressname: string;
    network: string;
    asset?: string; // Make asset optional
    address: string;
  } | null;
}

const RemoveAddress: React.FC<RemoveAddressProps> = ({ isOpen, onClose, onCancel, onRemove, addressData }) => {
  if (!isOpen || !addressData) return null;

  return (
    <div className="fixed inset-0 bg-[#F2F4F7] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[448px] z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Remove Address</h2>
          <button onClick={onClose} className="text-gray-500">
            &times;
          </button>
        </div>
        <div className="mt-4">
          <h3 className="font-medium">Are you sure you want to remove this address?</h3>
          <p><strong>Contact Name:</strong> {addressData.contactName}</p>
          <p><strong>Address Name:</strong> {addressData.addressname}</p>
          <p><strong>Network:</strong> {addressData.network}</p>
          {addressData.asset && ( // Conditionally render the asset field
            <p><strong>Asset:</strong> {addressData.asset}</p>
          )}
          <p><strong>Network Address:</strong> {addressData.address}</p>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={onRemove} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveAddress;
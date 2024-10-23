// components/ui/modals/ViewAddress.tsx

'use client';

import React from 'react';
import { Copy } from 'lucide-react'; // Import the Copy icon

interface ViewAddressProps {
  isOpen: boolean;
  onClose: () => void;
  addressData: {
    contactName: string;
    addressname: string;
    network: string;
    asset?: string; // Make asset optional
    address: string;
  } | null;
}

const ViewAddress: React.FC<ViewAddressProps> = ({ isOpen, onClose, addressData }) => {
  if (!isOpen || !addressData) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(addressData.address);
    alert('Network address copied to clipboard!'); // Optional: Show a notification
  };

  return (
    <div className="fixed inset-0 bg-[#F2F4F7] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[448px] z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">View Address</h2>
          <button onClick={onClose} className="text-gray-500">
            &times;
          </button>
        </div>
        <div className="mt-4">
          <h3 className="font-medium">Contact Details</h3>
          <p><strong>Contact Name:</strong> {addressData.contactName}</p>
          <p><strong>Address Name:</strong> {addressData.addressname}</p>
          <p><strong>Network:</strong> {addressData.network}</p>
          {addressData.asset && ( // Conditionally render the asset field
            <p><strong>Asset:</strong> {addressData.asset}</p>
          )}
          <div className="flex items-center justify-between">
            <p><strong>Network Address:</strong> {addressData.address}</p>
            <button onClick={handleCopy} className="ml-2 text-gray-500 hover:text-gray-700">
              <Copy className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAddress;
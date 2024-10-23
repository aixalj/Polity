// components/ui/modals/AddAddress.tsx
import React, { useState } from 'react';
import { Button } from '../button';

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

  const handleSubmit = () => {
    onAddAddress({
      contactName,
      addressName,
      network,
      asset: activeTab === 'standard' ? asset : '',
      networkAddress,
    });
    onClose(); // Close the modal after adding the address
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className='fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center z-50'>
      {' '}
      {/* Opaque background */}
      <div className='bg-white rounded-lg shadow-lg p-6 w-[448px] relative'>
        {' '}
        {/* Set width to 448px */}
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
          aria-label='Close'
        >
          &times; {/* Close icon */}
        </button>
        <h2 className='text-lg font-semibold mb-4'>
          Add Address for {contactName}
        </h2>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Contact Name
          </label>
          <input
            type='text'
            value={contactName}
            disabled
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
          />
        </div>
        {/* Tab Section for Standard and Universal */}
        <div className='flex mb-4'>
          <button
            type='button'
            onClick={() => setActiveTab('standard')}
            className={`flex-1 py-2 text-center ${activeTab === 'standard' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Standard
          </button>
          <button
            type='button'
            onClick={() => setActiveTab('universal')}
            className={`flex-1 py-2 text-center ${activeTab === 'universal' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Universal
          </button>
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Address Name
          </label>
          <input
            type='text'
            value={addressName}
            onChange={(e) => setAddressName(e.target.value)}
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Network
          </label>
          <select
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
          >
            <option value=''>Select Network</option>
            <option value='Ethereum Network'>Ethereum Network</option>
            <option value='Bitcoin Network'>Bitcoin Network</option>
            <option value='Polygon Network'>Polygon Network</option>
            {/* Add more networks as needed */}
            {/* Add network options here */}
          </select>
        </div>
        {activeTab === 'standard' && ( // Conditionally render asset input
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Asset
            </label>
            <select
              value={asset}
              onChange={(e) => setAsset(e.target.value)}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
            >
              <option value=''>Select Asset</option>
              <option value='Tether'>Tether</option>
              <option value='Bitcoin'>Bitcoin</option>
              <option value='Ethereum'>Ethereum</option>
              {/* Add asset options here */}
            </select>
          </div>
        )}
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Network Address
          </label>
          <input
            type='text'
            value={networkAddress}
            onChange={(e) => setNetworkAddress(e.target.value)}
            className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
          />
        </div>
        <div className='mb-4'>
          <p className='text-sm text-yellow-600'>
            Contact Disclaimer: Verify address accuracy. Incorrect entries lead
            to irreversible losses. Proceed at your own risk.
          </p>
        </div>
        <div className='flex justify-end'>
          <Button onClick={onClose} className='mr-2'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className='bg-blue-500 text-white'>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;

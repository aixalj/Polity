import React, { useState } from 'react';

interface NewContactProps {
  isOpen: boolean;
  onClose: () => void;
  onAddContact: (contact: { name: string; addressCount: number }) => void; // Callback to add contact
  onAddAddress: (address: { contactName: string; addressName: string; network: string; asset: string; networkAddress: string }) => void; // Callback to add address
}

const NewContact: React.FC<NewContactProps> = ({ isOpen, onClose, onAddContact, onAddAddress }) => {
  const [contactName, setContactName] = useState('');
  const [addressName, setAddressName] = useState('');
  const [network, setNetwork] = useState('');
  const [asset, setAsset] = useState('');
  const [networkAddress, setNetworkAddress] = useState('');
  const [activeTab, setActiveTab] = useState<'standard' | 'universal'>('standard'); // Default to 'standard'

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

    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null; // Don't render if the modal is not open

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[448px] relative"> {/* Set width to 448px */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Add New Contact</h2>
        <p className="mb-4">Fill out the fields below to save a new contact address.</p>
        
        <label className="block mb-2">
          Contact Name
          <input
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        {/* Tab Section for Standard and Universal */}
        <div className="flex mb-4">
          <button
            type="button"
            onClick={() => setActiveTab('standard')}
            className={`flex-1 py-2 text-center ${activeTab === 'standard' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Standard
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('universal')}
            className={`flex-1 py-2 text-center ${activeTab === 'universal' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Universal
          </button>
        </div>

        <label className="block mb-2">
          Address Name
          <input
            type="text"
            value={addressName}
            onChange={(e) => setAddressName(e.target.value)}
            placeholder="Enter address name here..."
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="block mb-2">
          Network
          <select
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select a Network...</option>
            {/* Add network options here */}
          </select>
        </label>
        {activeTab === 'standard' && ( // Conditionally render asset input
          <label className="block mb-2">
            Asset
            <select
              value={asset}
              onChange={(e) => setAsset(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select an Asset...</option>
              {/* Add asset options here */}
            </select>
          </label>
        )}
        <label className="block mb-2">
          Network Address
          <input
            type="text"
            value={networkAddress}
            onChange={(e) => setNetworkAddress(e.target.value)}
            placeholder="Enter network address here..."
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </label>
        <div className="text-sm text-red-600 mb-4">
          <p>Contact Disclaimer: Verify address accuracy. Incorrect entries lead to irreversible losses. Proceed at your own risk.</p>
        </div>
        <div className="flex justify-end">
          <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Create Contact</button>
          <button type="button" onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default NewContact;
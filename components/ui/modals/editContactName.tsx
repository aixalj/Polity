// components/ui/modals/editContactName.tsx
import React, { useState } from 'react';
import { contacts, addresses } from '../addressbookData'; // Adjust the import path as necessary

interface EditContactNameModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactId: string | null; // Allow null
}

const EditContactNameModal: React.FC<EditContactNameModalProps> = ({ isOpen, onClose, contactId }) => {
  const contact = contactId ? contacts.find(c => c.id === contactId) : null; // Check for null
  const [contactName, setContactName] = useState(contact?.name || '');

  // Fetch addresses for the selected contact
  const contactAddresses = contactId ? addresses.filter(addr => addr.contactId === contactId) : [];

  if (!isOpen || !contact) return null;

  const handleSave = () => {
    // Logic to save the updated contact name
    console.log('Updated contact name:', contactName);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white w-[448px] p-6 rounded-lg shadow-lg">
        <button onClick={onClose} className="float-right text-gray-600 hover:text-gray-800">X</button>
        <h2 className="text-lg font-semibold mb-2">Edit Contact Name</h2>
        <p className="mb-4">Fill out the fields below to save a new contact address.</p>
        <input
          type="text"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          placeholder="Contact Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <div>
          {contactAddresses.map((address) => (
            <div key={address.id} className="flex justify-between items-center mb-2">
              <span>{address.network} - {address.addressname}</span>
              <button className="ml-2 text-blue-500 hover:underline">View</button>
            </div>
          ))}
        </div>
        <button onClick={handleSave} className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Save</button>
      </div>
    </div>
  );
};

export default EditContactNameModal;
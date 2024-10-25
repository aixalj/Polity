import React, { useState } from 'react';
import ContactRemovedSaved from '../saved modals/contactRemovedSaved'; // Import the ContactRemovedSaved modal

interface RemoveAddressProps {
  isOpen: boolean;
  onClose: () => void; // Close the RemoveAddress modal
  onCancel: () => void; // Go back to the EditAddress modal
  onRemove: (addressId: string, callback: () => void) => void; // Handle address removal with a callback
  addressData: {
    id: string;
    contactName: string;
    addressname: string;
    network: string;
    asset?: string; // Make asset optional
    address: string;
  } | null;
}

const RemoveAddress: React.FC<RemoveAddressProps> = ({
  isOpen,
  onClose,
  onCancel,
  onRemove,
  addressData,
}) => {
  const [isRemovedModalOpen, setRemovedModalOpen] = useState(false); // State for ContactRemovedSaved modal

  if (!isOpen || !addressData) return null;

  const handleDelete = () => {
    onRemove(addressData.id, () => {
      setRemovedModalOpen(true); // Open the ContactRemovedSaved modal
      onClose(); // Close the RemoveAddress modal
    });
  };

  return (
    <>
      <div className='fixed inset-0 bg-[#F2F4F7] bg-opacity-50 flex justify-center items-center z-50'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-[448px] z-10'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>Remove Address</h2>
            <button onClick={onClose} className='text-gray-500'>
              &times;
            </button>
          </div>
          <div className='mt-4'>
            <h3 className='font-medium'>
              Are you sure you want to remove this address?
            </h3>
            <p>
              <strong>Contact Name:</strong> {addressData.contactName}
            </p>
            <p>
              <strong>Address Name:</strong> {addressData.addressname}
            </p>
            <p>
              <strong>Network:</strong> {addressData.network}
            </p>
            {addressData.asset && (
              <p>
                <strong>Asset:</strong> {addressData.asset}
              </p>
            )}
            <p>
              <strong>Network Address:</strong> {addressData.address}
            </p>
          </div>
          <div className='mt-6 flex justify-end space-x-4'>
            <button
              onClick={() => {
                onCancel();
                onClose();
              }}
              className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400'
            >
              Cancel
            </button>{' '}
            <button
              onClick={() => {
                handleDelete(); // Call the function to open ContactRemovedSaved modal
                setRemovedModalOpen(false); // Close RemoveAddress modal
                
              }}
              className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700'
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Contact Removed Saved Modal */}
      {isRemovedModalOpen && (
        <ContactRemovedSaved
          onClose={() => {
            setRemovedModalOpen(false);
            onClose(); // Close the RemoveAddress modal when the saved modal is closed
          }}
          contactName={addressData.contactName} // Pass contact name if needed
        />
      )}
    </>
  );
};

export default RemoveAddress;

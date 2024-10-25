import React from 'react';
import Image from 'next/image'; // If you're using Next.js for image optimization
import savedIcon from '@/public/saved-modal-graphic.svg'; // Adjust the import path as necessary

interface ContactNameEditedSavedProps {
  onClose: () => void; // Function to close the modal
}

const ContactNameEditedSaved: React.FC<ContactNameEditedSavedProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#F2F4F7] bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6" style={{ width: '448px' }}>
        <div className="flex flex-col items-center">
          <Image src={savedIcon} alt="Saved Icon" width={48} height={48} className="mb-4" />
          <h2 className="text-xl font-bold">Contact Name Edited</h2>
          <p className="text-center text-gray-600 mt-2">
            Your contact name has been successfully updated.
          </p>
          <button
            onClick={onClose}
            className="mt-4 bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactNameEditedSaved;
'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from './button';
import { Edit, ArrowLeft, Copy } from 'lucide-react';
import { FavoriteStar } from './favoritestar';

interface Address {
  id: string;
  network: string;
  asset: string;
  address: string;
}

interface ViewContactProps {
  contact: {
    id: string;
    name: string;
    addresses: Address[];
    isFavorite: boolean;
  };
  onEdit: (contactId: string) => void;
  onBack: () => void;
  onToggleFavorite: (contactId: string) => void;
}

const ViewContact: React.FC<ViewContactProps> = ({
  contact,
  onEdit,
  onBack,
  onToggleFavorite,
}) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You might want to add a toast notification here
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="p-2">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to All Contacts
          </Button>
          <div className="flex items-center space-x-4">
            <FavoriteStar
              isFavorite={contact.isFavorite}
              onToggle={() => onToggleFavorite(contact.id)}
            />
            <Button variant="outline" onClick={() => onEdit(contact.id)}>
              <Edit className="h-4 w-4 mr-2" />
              Edit Contact
            </Button>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="rounded-full overflow-hidden bg-gray-200 w-16 h-16 mr-4">
            <Image
              src="/placeholder-avatar.png"
              alt={contact.name}
              width={64}
              height={64}
            />
          </div>
          <h1 className="text-2xl font-bold">{contact.name}</h1>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Addresses</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Network</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contact.addresses.map((address) => (
              <tr key={address.id}>
                <td className="px-6 py-4 whitespace-nowrap">{address.network}</td>
                <td className="px-6 py-4 whitespace-nowrap">{address.asset}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <code className="text-sm bg-gray-100 p-1 rounded">{address.address}</code>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(address.address)}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { ViewContact };
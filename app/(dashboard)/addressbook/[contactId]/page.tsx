'use client';

import { Button } from '@/components/ui/button';
import { Edit, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Address {
  id: string;
  network: string;
  asset: string;
  address: string;
  contactId: string;
}

interface ContactType {
  id: string;
  name: string;
  addresses: Address[];
  isFavorite: boolean;
}

// Fetch contact data based on contactId
async function fetchContactData(contactId: string): Promise<ContactType | null> {
  // Replace with your actual data fetching logic (e.g., API call)
  const response = await fetch(`/api/contacts/${contactId}`);
  if (!response.ok) {
    return null; // Handle error appropriately
  }
  return response.json();
}

const ViewContact: React.FC<{ params: { contactId: string } }> = ({ params }) => {
  const { contactId } = params;
  const [contact, setContact] = useState<ContactType | null>(null);

  useEffect(() => {
    const getContact = async () => {
      const data = await fetchContactData(contactId);
      setContact(data);
    };
    getContact();
  }, [contactId]);

  // Check if contact is defined
  if (!contact) {
    return <div>No contact available</div>; // Handle the case when contact is undefined
  }

   // Group addresses by network
   const groupedAddresses = contact.addresses.reduce((acc, address) => {
    if (!acc[address.network]) {
      acc[address.network] = [];
    }
    acc[address.network].push({
      ...address,
      contactId: contactId, // Ensure contactId is added to each address
    });
    return acc;
  }, {} as Record<string, Address[]>);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{contact.name}</h1>
      <div className="mb-4">
        <Button variant="outline" onClick={() => {/* Implement edit logic */}}>
          Edit Contact
        </Button>
      </div>
      {Object.entries(groupedAddresses).map(([network, addresses]) => (
        <div key={network} className="mb-6">
          <h2 className="text-xl font-semibold">{network} ({addresses.length} addresses)</h2>
          <ul className="list-disc pl-5">
            {addresses.map((address) => (
              <li key={address.id} className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <span className="mr-2">{address.asset}</span>
                  <code className="text-sm bg-gray-100 p-1 rounded">{address.address}</code>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigator.clipboard.writeText(address.address)}
                  >
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => {/* Implement edit logic */}}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ViewContact;
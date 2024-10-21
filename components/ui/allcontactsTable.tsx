'use client';

import * as React from 'react';
import { Button } from './button';
import { Edit, Plus, Eye } from 'lucide-react';
import { ContactWithFormattedCount } from '@/components/ui/addressbookData';
import { Pagination } from '@/components/ui/pagination';
import Image from 'next/image';
import Link from 'next/link';

interface AllContactsTableProps {
  contacts: ContactWithFormattedCount[];
  onEdit: (contactId: string) => void;
  onAddAddress: (contactId: string) => void;
  onView: (contactId: string) => void;
  searchTerm: string; // New prop
}

const AllContactsTable: React.FC<AllContactsTableProps> = ({
  contacts,
  onEdit,
  onAddAddress,
  onView,
  searchTerm, // New prop
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const filteredContacts = React.useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [contacts, searchTerm]);

  const sortedContacts = React.useMemo(() => {
    return [...filteredContacts].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredContacts]);

  const totalItems = sortedContacts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedContacts = sortedContacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className='flex flex-col h-full'>
      <div className='w-full min-w-fit flex bg-gray-100 rounded-xl font-medium text-gray-500 text-xs'>
        <div className='w-full px-6 py-3'>Contact</div>
      </div>
      <div className='flex-grow overflow-y-auto'>
        <div className='w-full flex flex-col gap-1'>
          {paginatedContacts.map((contact) => (
            <div
              key={contact.id}
              className='w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm'
            >
              <div className='w-full flex text-left text-gray-900'>
                <div className='flex-grow px-6 py-3 flex items-center gap-3 h-16'>
                  <div className='size-11 rounded-md border-gray-300 border overflow-hidden'>
                    <Image
                      src={contact.avatar}
                      alt={`${contact.name}'s avatar`}
                      className='w-full h-full object-cover'
                      width={44}
                      height={44}
                    />
                  </div>
                  <div>
                    <p className='font-medium'>{contact.name}</p>
                    <p className='text-sm text-gray-500'>
                      {contact.formattedAddressCount} addresses
                    </p>
                  </div>
                </div>
                <div className='flex-shrink-0 px-6 py-3 flex items-center justify-end space-x-4'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => onAddAddress(contact.id)}
                  >
                    <Plus className='h-4 w-4 mr-2' />
                    Add Address
                  </Button>
                  <button
                    className='text-gray-500 hover:text-gray-700 transition-colors'
                    onClick={() => onEdit(contact.id)}
                  >
                    <Edit className='h-4 w-4' />
                  </button>
                  <Link href={`/addressbook/${contact.id}`}>
                    <button className='text-gray-500 hover:text-gray-700 transition-colors'>
                      <Eye className='h-4 w-4' />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-auto pt-4 pb-4 bg-white border-gray-200'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export { AllContactsTable };
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Edit2, Plus, Eye, PlusSquare } from "lucide-react";
import { ContactWithFormattedCount } from "@/components/ui/addressbookData";
import { Pagination } from "@/components/ui/pagination";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EditContactNameModal from "@/components/ui/modals/editContactName"; // Import the modal

interface AllContactsTableProps {
  contacts: ContactWithFormattedCount[];
  onEdit: (contactId: string) => void; // Add this line
  onAddAddressButton: (contactId: string, contactName: string) => void;
  onView: (contactId: string) => void; // Add onView prop
  searchTerm: string;
}

const AllContactsTable: React.FC<AllContactsTableProps> = ({
  contacts,
  onAddAddressButton,
  onView, // Destructure onView prop
  searchTerm,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedContactId, setSelectedContactId] = React.useState<
    string | null
  >(null);
  const itemsPerPage = 10;
  const router = useRouter();

  const handleEditContact = (contactId: string, contact: { name: string }) => {
    // Logic to update the contact in your state or data source
    console.log(`Editing contact ID: ${contactId}, New Name: ${contact.name}`);
    // Update your contacts state here
  };

  // Filter and sort contacts based on the search term
  const filteredContacts = React.useMemo(() => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
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

  const openModal = (contactId: string) => {
    setSelectedContactId(contactId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedContactId(null);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs">
        <div className="w-full px-6 py-3">Contact</div>
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="w-full flex flex-col gap-1">
          {paginatedContacts.length === 0 ? (
            <p className="text-center text-gray-500">No contacts found.</p>
          ) : (
            paginatedContacts.map((contact) => (
              <div
                key={contact.id}
                className="w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm"
              >
                <div className="w-full flex text-left text-gray-700">
                  <div className="flex-grow px-6 py-3 flex items-center gap-3 h-16">
                    <div className="size-11 rounded-xl border-gray-300 border overflow-hidden">
                      <Image
                        src={contact.avatar}
                        alt={`${contact.name}'s avatar`}
                        className="w-full h-full object-cover"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-gray-500">
                        {contact.formattedAddressCount} addresses
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-6 py-3 flex items-center justify-end space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 "
                      onClick={() =>
                        onAddAddressButton(contact.id, contact.name)
                      }
                    >
                      <PlusSquare className="h-4 w-4" />
                      Add Address
                    </Button>
                    <button
                      className="text-gray-700 hover:text-gray-700 transition-colors"
                      onClick={() => openModal(contact.id)}
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      className="text-gray-700 hover:text-gray-700 transition-colors"
                      onClick={() => {
                        if (contact.id) {
                          onView(contact.id); // Use the onView prop to navigate
                        } else {
                          console.error("Contact ID is undefined");
                        }
                      }}
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="mt-auto pt-4 pb-4 bg-white border-gray-200">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Modal for editing contact name */}
      <EditContactNameModal
        isOpen={isModalOpen}
        onClose={closeModal}
        contactId={selectedContactId!} // Ensure selectedContactId is not null
        onEditContact={handleEditContact} // Pass the function here
      />
    </div>
  );
};

export { AllContactsTable };

"use client";

import React, { useState, useEffect, useRef } from "react";
import { SearchBar } from "@/components/ui/searchbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  getAllContacts,
  getAllAddresses,
  ContactWithFormattedCount,
  Address,
} from "@/components/ui/addressbookData";
import { AllContactsTable } from "@/components/ui/allcontactsTable";
import { AddressesTable } from "@/components/ui/addressestable";
import { SearchError } from "@/components/ui/searchError";
import { useRouter } from "next/navigation"; // Import useRouter at the top
import NewContact from "@/components/ui/modals/newContact"; // Import the NewContact modal
import AddAddress from "@/components/ui/modals/addAddress"; // Import the new AddAddress modal
import EditContactNameModal from "@/components/ui/modals/editContactName"; // Import the EditContactName modal
import { Notification } from "@/components/ui/notification"; // Import the Notification component
import { NoContacts } from "@/components/ui/noContacts"; // Import the NoContacts component

type TabType = "contacts" | "addresses";

export default function AddressBook() {
  const [activeTab, setActiveTab] = useState<TabType>("contacts");
  const contentRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] =
    useState<ContactWithFormattedCount[]>(getAllContacts());
  const [addresses, setAddresses] = useState<Address[]>(getAllAddresses());
  const [filteredContacts, setFilteredContacts] =
    useState<ContactWithFormattedCount[]>(contacts);
  const [filteredAddresses, setFilteredAddresses] =
    useState<Address[]>(addresses);
  const [favorites, setFavorites] = useState<string[]>([]); // State to manage favorites
  const [noResults, setNoResults] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage NewContact modal visibility
  const [isAddAddressModalOpen, setIsAddAddressModalOpen] = useState(false); // State to manage AddAddress modal visibility
  const [selectedContactName, setSelectedContactName] = useState(""); // State to hold the selected contact name
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State to manage EditContact modal visibility
  const [selectedContactId, setSelectedContactId] = useState<string | null>(
    null
  ); // State to hold the selected contact ID
  const [showNotification, setShowNotification] = useState(false); // State to manage notification visibility
  const router = useRouter();

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  useEffect(() => {
    if (searchTerm) {
      const filteredContacts = getAllContacts().filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const filteredAddresses = getAllAddresses().filter((address) =>
        address.contactName.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredContacts(filteredContacts);
      setFilteredAddresses(filteredAddresses);
      setNoResults(
        filteredContacts.length === 0 && filteredAddresses.length === 0
      );
    } else {
      setFilteredContacts(contacts);
      setFilteredAddresses(addresses);
      setNoResults(false);
    }
  }, [searchTerm, contacts, addresses]);

  const handleSearchInput = (term: string) => {
    setSearchTerm(term);
  };

  const handleClearSearch = () => {
    setSearchTerm(""); // Clear the search term
    setFilteredContacts(getAllContacts()); // Reset contacts to original list
    setFilteredAddresses(getAllAddresses()); // Reset addresses to original list
    setNoResults(false); // Reset no results state
  };

  const handleSelect = (selectedName: string) => {
    console.log("Selected Name:", selectedName); // Log the selected name
    setSearchTerm(selectedName);
    const filteredContacts = contacts.filter((contact) =>
      contact.name.includes(selectedName)
    );
    const filteredAddresses = addresses.filter((address) =>
      address.contactName.includes(selectedName)
    );
    setFilteredContacts(filteredContacts);
    setFilteredAddresses(filteredAddresses);
    console.log("Filtered Contacts:", filteredContacts); // Log filtered contacts
    console.log("Filtered Addresses:", filteredAddresses); // Log filtered addresses
  };

  // Updated handleEdit function to accept contactId as a string
  const handleEdit = (contactId: string) => {
    setSelectedContactId(contactId); // Set the selected contact ID
    setIsEditModalOpen(true); // Open the EditContact modal
  };

  const handleAddAddress = (contactId: string, contactName: string) => {
    setSelectedContactName(contactName); // Set the selected contact name
    setIsAddAddressModalOpen(true); // Open the AddAddress modal
  };

  const handleView = (contactId: string) => {
    console.log("View contact:", contactId);
    router.push(`components/viewContact/${contactId}`); // Navigate to the ViewContact page
    // Implement view logic here
  };

  const handleEditAddress = (addressId: string) => {
    console.log("Edit address:", addressId);
    // Implement edit address logic here
  };

  const handleViewAddress = (addressId: string) => {
    console.log("View address clicked for ID:", addressId); // Debug log
    router.push(`/viewContact/${addressId}`);
  };

  const handleTabChange = (value: TabType) => {
    setActiveTab(value);
  };

  const handleToggleFavorite = (addressId: string) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(addressId);
      const updatedFavorites = isFavorite
        ? prevFavorites.filter((id) => id !== addressId) // Remove from favorites
        : [...prevFavorites, addressId]; // Add to favorites

      // Show notification if added to favorites
      if (!isFavorite) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
      }

      return updatedFavorites;
    });
  };

  // New functions to handle adding contacts and addresses
  const handleAddContact = (contact: {
    name: string;
    addressCount: number;
  }) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      {
        ...contact,
        id: Date.now().toString(),
        formattedAddressCount: "0",
        avatar: "",
      }, // Changed id to string
    ]);
  };

  const handleNewAddAddress = (address: {
    contactName: string;
    addressName: string;
    network: string;
    asset: string;
    networkAddress: string;
  }) => {
    setAddresses((prevAddresses) => [
      ...prevAddresses,
      {
        ...address,
        id: "", // Ensure id is a string
        contactId: "", // Add missing properties
        addressname: "", // Add missing properties
        address: "", // Add missing properties
      } as Address, // Cast to Address type
    ]);
  };

  const handleOpenNewContactModal = () => {
    setIsModalOpen(true); // Function to open the modal
  };

  const handleEditContact = (
    contactId: string,
    updatedContact: { name: string }
  ) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === contactId
          ? { ...contact, name: updatedContact.name }
          : contact
      )
    );
  };

  return (
    <main className="w-full h-full">
      <div className="x-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll">
        <Tabs
          value={activeTab}
          onValueChange={(value: string) => handleTabChange(value as TabType)}
        >
          <div className="w-full sticky top-0 backdrop-blur-md	z-10 bg-white/60">
            <div className="max-w-screen-xl mx-auto px-6 pt-6 pb-4">
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center gap-1 text-xs text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="block transition hover:text-gray-700 font-semibold"
                    >
                      Avatar Name
                    </a>
                  </li>
                  <li className="rtl:rotate-180">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83337 18.3334L14.1667 1.66675"
                        stroke="#D0D5DD"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block transition text-gray-800 font-semibold"
                    >
                      Address Book
                    </a>
                  </li>
                </ol>
              </nav>
              <div className="w-full mt-4 flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-medium leading-tight">
                    Address Book
                  </h1>
                </div>
                <div className="flex gap-3">
                  <Button onClick={handleOpenNewContactModal}>
                    New Contact
                  </Button>{" "}
                  {/* Open modal on click */}
                </div>
              </div>
              <div className="w-full mt-4">
                <SearchBar
                  placeholder="Search by contact name..."
                  onSearch={handleSearchInput}
                  value={searchTerm} // Pass the searchTerm to the SearchBar
                  onErrorChange={(error) => {
                    /* Handle error */
                  }}
                  onSelect={handleSelect} // Pass the handleSelect function
                />
              </div>
              <div className="flex justify-between items-center w-full mt-4">
                <h2 className="text-xl font-medium">
                  {isValidTab(activeTab) &&
                    (activeTab === "contacts" ? "All Contacts" : "Addresses")}
                </h2>
                <TabsList className="bg-gray-100 p-2 rounded-xl">
                  <TabsTrigger
                    value="contacts"
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
                  >
                    All Contacts
                  </TabsTrigger>
                  <TabsTrigger
                    value="addresses"
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
                  >
                    Addresses
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
          </div>
          <div
            ref={contentRef}
            className="max-w-screen-xl mx-auto px-6 w-full flex-grow overflow-y-auto"
          >
            {contacts.length === 0 ? ( // Check if there are no contacts
              <NoContacts onNewContact={handleOpenNewContactModal} /> // Render NoContacts component
            ) : searchTerm && noResults ? (
              <SearchError
                message="No matching contacts found"
                onClearSearch={handleClearSearch}
                onNewContact={handleOpenNewContactModal}
              />
            ) : (
              <>
                <TabsContent value="contacts">
                  <div>
                    <AllContactsTable
                      contacts={filteredContacts} // Use filteredContacts
                      onEdit={handleEdit} // Pass the handleEdit function here
                      onAddAddressButton={handleAddAddress} // This is for the button in the table
                      onView={handleView}
                      searchTerm={searchTerm}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="addresses">
                  <div>
                    <AddressesTable
                      addresses={filteredAddresses} // Use filteredAddresses
                      onEdit={handleEditAddress}
                      onView={handleViewAddress}
                      onToggleFavorite={handleToggleFavorite}
                      searchTerm={searchTerm}
                      favorites={favorites}
                    />
                  </div>
                </TabsContent>
              </>
            )}
          </div>
        </Tabs>
      </div>

      {/* Render the NewContact modal */}
      <NewContact
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddContact={handleAddContact}
        onAddAddress={handleNewAddAddress} // This is for the modal
      />

      {/* Render the AddAddress modal */}
      <AddAddress
        isOpen={isAddAddressModalOpen}
        onClose={() => setIsAddAddressModalOpen(false)}
        onAddAddress={handleNewAddAddress}
        contactName={selectedContactName} // Pass the selected contact name
      />

      {/* Render the EditContact modal */}
      <EditContactNameModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        contactId={selectedContactId!} // Ensure selectedContactId is not null
        onEditContact={handleEditContact} // Pass the function here
      />

      {/* Render the Notification */}
      {showNotification && (
        <div className="fixed bottom-4 left-4 max-w-sm z-50 rounded-[20px]">
          <Notification
            title="Address added to favorites!"
            description="You've successfully added this address to your favorites."
            status="success"
            className="shadow-2xl"
            onClose={() => setShowNotification(false)} // Close notification
          />
        </div>
      )}
    </main>
  );
}

function isValidTab(tab: string): tab is TabType {
  return tab === "contacts" || tab === "addresses";
}

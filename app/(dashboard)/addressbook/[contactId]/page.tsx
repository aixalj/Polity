"use client";

import { Button } from "@/components/ui/button";
import { Edit, Copy, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { contacts } from "@/components/ui/addressbookData";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { blo } from "blo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
async function fetchContactData(
  contactId: string
): Promise<ContactType | null> {
  // Find the contact in our local data
  const contact = contacts.find((c) => c.id === contactId);

  if (!contact) {
    return null;
  }

  // Transform the data to match ContactType interface
  return {
    id: contact.id,
    name: contact.name,
    addresses: contact.addresses || [],
    isFavorite: false, // You can add this field to your data if needed
  };
}

const ViewContact: React.FC<{ params: { contactId: string } }> = ({
  params,
}) => {
  const router = useRouter();
  const { contactId } = params;
  const [contact, setContact] = useState<ContactType | null>(null);
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);

  useEffect(() => {
    const getContact = async () => {
      const data = await fetchContactData(contactId);
      setContact(data);
    };
    getContact();
  }, [contactId]);

  if (!contact) {
    return <div>No contact available</div>;
  }

  const toggleTooltip = (id: string) => {
    setOpenTooltipId((prevId) => (prevId === id ? null : id));
  };

  // Group addresses by network
  const groupedAddresses = contact.addresses.reduce((acc, address) => {
    if (!acc[address.network]) {
      acc[address.network] = [];
    }
    acc[address.network].push({
      ...address,
      contactId: contactId,
    });
    return acc;
  }, {} as Record<string, Address[]>);

  return (
    <main className="w-full h-full">
      <div className="x-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll">
        <div className="w-full sticky top-0 backdrop-blur-md z-10 bg-white/60">
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
                    href="/addressbook"
                    className="block transition text-gray-600 font-semibold"
                  >
                    Address Book
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
                  <span className="block transition text-gray-800 font-semibold">
                    {contact.name}
                  </span>
                </li>
              </ol>
            </nav>

            <div className="w-full mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-medium leading-tight">
                  Address Book
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 w-full flex-grow overflow-y-auto">
          <div className="w-full justify-between flex items-center mb-6">
            <div className="flex items-center gap-2">
              <Button variant="link" size="icon" onClick={() => router.back()}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-2xl font-bold">{contact.name}</h1>
            </div>
            <Button
              onClick={() => {
                /* Implement edit logic */
              }}
            >
              Edit Contact
            </Button>
          </div>

          {Object.entries(groupedAddresses).map(([network, addresses]) => (
            <div key={network} className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8">
                  <Image
                    src={`/icons/networks/${network
                      .split(" ")[0]
                      .toUpperCase()}.svg`}
                    alt={network}
                    width={32}
                    height={32}
                  />
                </div>
                <h2 className="text-xl font-semibold">
                  {network} ({addresses.length} addresses)
                </h2>
              </div>

              <div className="w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs mb-2">
                <div className="w-1/4 px-6 py-3">Name</div>
                <div className="w-1/2 px-6 py-3">Address</div>
                <div className="w-1/4 px-6 py-3">Actions</div>
              </div>

              <div className="flex flex-col gap-1">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className="w-full min-w-fit flex hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm"
                  >
                    <div className="w-1/4 px-6 py-4 flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6">
                          <Image
                            src={`/icons/assets/${address.asset.toUpperCase()}.svg`}
                            alt={address.asset}
                            width={24}
                            height={24}
                          />
                        </div>
                        <span>{address.asset}</span>
                      </div>
                    </div>

                    <div className="w-1/2 px-6 py-4 flex items-center">
                      <TooltipProvider>
                        <Tooltip
                          open={openTooltipId === address.id}
                          onOpenChange={() => toggleTooltip(address.id)}
                        >
                          <TooltipTrigger
                            onClick={() => {
                              navigator.clipboard.writeText(address.address);
                              toggleTooltip(address.id);
                            }}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <div className="w-6 h-6 overflow-hidden rounded-md border border-gray-200">
                              <Image
                                alt={address.address}
                                src={blo(`0x${address.address.slice(2)}`)}
                                width={24}
                                height={24}
                              />
                            </div>
                            <code className="text-sm bg-gray-100 p-1 rounded">
                              {`${address.address.slice(
                                0,
                                6
                              )}...${address.address.slice(-4)}`}
                            </code>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Click to copy</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="w-1/4 px-6 py-4 flex items-center justify-end space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          navigator.clipboard.writeText(address.address)
                        }
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          /* Implement edit logic */
                        }}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ViewContact;

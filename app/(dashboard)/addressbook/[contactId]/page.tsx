"use client";

import { Button } from "@/components/ui/button";
import { Edit, Copy, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { contacts } from "@/components/ui/addressbookData";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { blo } from "blo";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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
          <div className="relative w-full flex flex-col">
            <div className="py-2.5 relative flex justify-between w-full justify-items-stretch flex-row place-content-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="link"
                  size="icon"
                  onClick={() => router.back()}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-xl font-medium">{contact.name}</h2>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => {
                    /* Implement edit logic */
                  }}
                >
                  Edit Contact
                </Button>
              </div>
            </div>

            <div className="w-full flex flex-col gap-1 overflow-y-scroll">
              {Object.entries(groupedAddresses).map(([network, addresses]) => (
                <Collapsible
                  key={network}
                  className="w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm"
                >
                  <CollapsibleTrigger className="w-full ease-in-out duration-200">
                    <div className="w-full flex text-left text-gray-900">
                      <div className="w-9 flex-none h-16 flex items-center justify-center align-middle">
                        <svg
                          className="mx-auto"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="19"
                            height="19"
                            rx="5.5"
                            fill="white"
                          />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="19"
                            height="19"
                            rx="5.5"
                            stroke="#D0D5DD"
                          />
                          <path
                            d="M13 12.0001C13.412 12.0001 13.6472 11.5297 13.4 11.2001L10.4 7.20008C10.2 6.93341 9.8 6.93341 9.6 7.20008L6.6 11.2001C6.35279 11.5297 6.58798 12.0001 7 12.0001H13Z"
                            fill="#1D2939"
                          />
                        </svg>
                      </div>
                      <div className="w-80 font-medium break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-2 h-16">
                        <Image
                          src={`/icons/networks/${
                            network.toLowerCase() === "bitcoin network"
                              ? "BTC"
                              : network.toLowerCase() === "ethereum network"
                              ? "ETH"
                              : network.toLowerCase() === "polygon network"
                              ? "MATIC"
                              : network.toUpperCase()
                          }.svg`}
                          alt={network}
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <p>{network}</p>
                          <p>{addresses.length} addresses</p>
                        </div>
                      </div>
                      <div className="w-36 flex-auto px-6 py-3 h-16 flex items-center"></div>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="items-start">
                    <div className="flex gap-2 items-center break-keep text-xs">
                      <div className="w-9 flex-none flex items-center justify-center align-middle"></div>
                      <p className="break-keep w-auto whitespace-nowrap pl-3 text-gray-600">
                        Addresses
                      </p>
                      <div className="w-full bg-gray-300 h-[1px]"></div>
                    </div>

                    {addresses.map((address) => (
                      <div
                        key={address.id}
                        className="w-full flex text-gray-900 text-md"
                      >
                        <div className="w-9 flex-none"></div>
                        <div className="w-80 flex-none px-6 py-3 flex items-center gap-3 max-h-16">
                          <Image
                            src={`/icons/tokens/${
                              address.asset.toLowerCase() === "bitcoin"
                                ? "BTC"
                                : address.asset.toLowerCase() === "ethereum"
                                ? "ETH"
                                : address.asset.toLowerCase() === "tether"
                                ? "USDT"
                                : address.asset.toUpperCase()
                            }.svg`}
                            alt={address.asset}
                            width={24}
                            height={24}
                          />
                          <div className="w-full font-medium">
                            <p className="text-sm">{address.asset}</p>
                            <p className="text-xs text-gray-700">
                              {network} ({address.address.slice(0, 6)}...
                              {address.address.slice(-4)})
                            </p>
                          </div>
                        </div>
                        <div className="w-60 flex-none px-6 py-3 h-16 flex items-center gap-3">
                          50.00%
                          <Progress value={50} />
                        </div>
                        <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                          5.00% ($500.00)
                        </div>
                        <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                          $10,000.00
                        </div>
                        <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                          100.00 {address.asset}
                        </div>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewContact;

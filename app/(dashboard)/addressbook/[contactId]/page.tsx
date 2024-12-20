'use client';

import { Button } from '@/components/ui/button';
import { Edit, Copy, ArrowLeft, Edit3 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { contacts } from '@/components/ui/addressbookData';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { blo } from 'blo';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Progress } from '@/components/ui/progress';
import EditContactNameModal from '@/components/ui/modals/editContactName';
import { FavoriteStar } from '@/components/ui/favoritestar';
import EditAddressModal from '@/components/ui/modals/editAddress';

interface Address {
  id: string;
  network: string;
  asset: string;
  address: string;
  contactId: string;
  isFavorite?: boolean;
  addressname: string;
}

interface ContactType {
  id: string;
  name: string;
  addresses: Address[];
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
  };
}

const ViewContact: React.FC<{ params: { contactId: string } }> = ({
  params,
}) => {
  const router = useRouter();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { contactId } = params;
  const [contact, setContact] = useState<ContactType | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]); // State for favorites
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [isModalOpen, setIsModalOpen] = useState(false); // Add state for modal
  const [selectedContactId, setSelectedContactId] = useState<string | null>(
    null
  ); // State for selected contact ID

  const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null
  );

  const openModal = (id: string) => {
    // Define openModal function
    setSelectedContactId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Define closeModal function
    setIsModalOpen(false);
    setSelectedContactId(null);
  };

  const handleEditContact = (contactId: string, contact: { name: string }) => {
    // Logic to update the contact in your state or data source
    console.log(`Editing contact ID: ${contactId}, New Name: ${contact.name}`);
    // Update your contacts state here
  };

  const handleToggleFavorite = (addressId: string) => {
    // Toggle the favorite status of the address
    setContact((prevContact) => {
      if (!prevContact) return null; // Handle case where contact is not available

      const updatedAddresses = prevContact.addresses.map((addr) =>
        addr.id === addressId
          ? { ...addr, isFavorite: !addr.isFavorite } // Toggle isFavorite
          : addr
      );

      return { ...prevContact, addresses: updatedAddresses }; // Return updated contact
    });

    // Update the favorites state
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(addressId)) {
        return prevFavorites.filter((id) => id !== addressId); // Remove from favorites
      } else {
        return [...prevFavorites, addressId]; // Add to favorites
      }
    });

    // Show notification if the address was added to favorites
    // const address = contact?.addresses.find((addr) => addr.id === addressId);
    // if (address && !address.isFavorite) {
    //   setShowNotification(true);
    //   setTimeout(() => {
    //     setShowNotification(false);
    //   }, 5000);
    // }
  };

  const handleEdit = (addressId: string) => {
    setSelectedAddressId(addressId);
    setIsEditAddressModalOpen(true);
  };

  const handleSave = (updatedAddress: any) => {
    console.log('Saving address:', updatedAddress);
    // Add your save logic here
    setIsEditAddressModalOpen(false);
  };

  const handleRemove = (addressId: string, callback: () => void) => {
    console.log('Removing address:', addressId);
    // Add your remove logic here
    callback();
    setIsEditAddressModalOpen(false);
  };

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
    <main className='w-full h-full'>
      <div className='x-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll'>
        <div className='w-full sticky top-0 backdrop-blur-md z-10 bg-white/60'>
          <div className='max-w-screen-xl mx-auto px-6 pt-6 pb-4'>
            <nav aria-label='Breadcrumb' className='mb-4'>
              <ol className='flex items-center gap-1 text-xs text-gray-600'>
                <li>
                  <a
                    href='#'
                    className='block transition hover:text-gray-700 font-semibold'
                  >
                    Avatar Name
                  </a>
                </li>
                <li className='rtl:rotate-180'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.83337 18.3334L14.1667 1.66675'
                      stroke='#D0D5DD'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </li>
                <li>
                  <a
                    href='/addressbook'
                    className='block transition text-gray-600 font-semibold'
                  >
                    Address Book
                  </a>
                </li>
                <li className='rtl:rotate-180'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.83337 18.3334L14.1667 1.66675'
                      stroke='#D0D5DD'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </li>
                <li>
                  <span className='block transition text-gray-800 font-semibold'>
                    {contact.name}
                  </span>
                </li>
              </ol>
            </nav>

            <div className='w-full mt-4 flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <h1 className='text-3xl font-medium leading-tight'>
                  Address Book
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-6 w-full flex-grow overflow-y-auto'>
          <div className='relative w-full flex flex-col'>
            <div className='py-2.5 relative flex justify-between w-full justify-items-stretch flex-row place-content-between'>
              <div className='flex items-center gap-2'>
                <Button
                  variant='link'
                  size='icon'
                  onClick={() => router.back()}
                >
                  <ArrowLeft className='h-4 w-4' />
                </Button>
                <h2 className='text-xl font-medium'>{contact.name}</h2>
              </div>
              <div className='flex gap-3'>
                <Button onClick={() => openModal(contact.id)}>
                  Edit Contact
                </Button>
              </div>
            </div>

            <div className='w-full flex flex-col gap-1 overflow-y-scroll'>
              {Object.entries(groupedAddresses).map(([network, addresses]) => (
                <Collapsible
                  key={network}
                  className='w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm'
                >
                  <CollapsibleTrigger className='w-full ease-in-out duration-200'>
                    <div className='w-full flex text-left text-gray-900'>
                      <div className='w-9 flex-none h-16 flex items-center justify-center align-middle'>
                        <svg
                          className='mx-auto'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            x='0.5'
                            y='0.5'
                            width='19'
                            height='19'
                            rx='5.5'
                            fill='white'
                          />
                          <rect
                            x='0.5'
                            y='0.5'
                            width='19'
                            height='19'
                            rx='5.5'
                            stroke='#D0D5DD'
                          />
                          <path
                            d='M13 12.0001C13.412 12.0001 13.6472 11.5297 13.4 11.2001L10.4 7.20008C10.2 6.93341 9.8 6.93341 9.6 7.20008L6.6 11.2001C6.35279 11.5297 6.58798 12.0001 7 12.0001H13Z'
                            fill='#1D2939'
                          />
                        </svg>
                      </div>
                      <div className='w-80 font-medium break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-2 h-16'>
                        <Image
                          src={`/icons/networks/${
                            network.toLowerCase() === 'bitcoin network'
                              ? 'BTC'
                              : network.toLowerCase() === 'ethereum network'
                              ? 'ETH'
                              : network.toLowerCase() === 'polygon network'
                              ? 'MATIC'
                              : network.toUpperCase()
                          }.svg`}
                          alt={network}
                          width={32}
                          height={32}
                        />
                        <div className='flex flex-col'>
                          <p>{network}</p>
                          <p className='text-xs font-regular text-gray-600'>
                            {addresses.length} addresses
                          </p>
                        </div>
                      </div>
                      <div className='w-36 flex-auto px-6 py-3 h-16 flex items-center'></div>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent className='items-start'>
                    <div className='flex gap-2 items-center break-keep text-xs'>
                      <div className='w-9 flex-none flex items-center justify-center align-middle'></div>
                      <p className='break-keep w-auto whitespace-nowrap pl-3 text-gray-600'>
                        Addresses
                      </p>
                      <div className='w-full bg-gray-300 h-[1px]'></div>
                    </div>

                    {addresses.map((address) => (
                      <div
                        key={address.id}
                        className='w-full flex items-center text-gray-900 text-md'
                      >
                        <div className='w-9 flex-none'></div>

                        <div className='w-[300px] flex-none px-6 py-3 flex items-center gap-3'>
                          <FavoriteStar
                            isFavorite={favorites.includes(address.id)}
                            onToggle={() => handleToggleFavorite(address.id)}
                          />
                          <div className='w-full font-medium'>
                            <p className='text-md font-medium text-gray-900 truncate'>
                              {address.addressname}
                            </p>
                          </div>
                        </div>

                        <div className='w-[300px] flex-none px-6 py-3 flex items-center gap-3'>
                          <Image
                            src={`/icons/tokens/${
                              address.asset.toLowerCase() === 'bitcoin'
                                ? 'BTC'
                                : address.asset.toLowerCase() === 'ethereum'
                                ? 'ETH'
                                : address.asset.toLowerCase() === 'tether'
                                ? 'USDT'
                                : address.asset.toUpperCase()
                            }.svg`}
                            alt={address.asset}
                            width={24}
                            height={24}
                          />
                          <div className='font-medium'>
                            <p className='text-sm font-medium text-gray-800'>
                              {address.asset}{' '}
                              <span className='text-gray-600'>
                                {address.asset.toLowerCase() === 'bitcoin'
                                  ? 'BTC'
                                  : address.asset.toLowerCase() === 'ethereum'
                                  ? 'ETH'
                                  : address.asset.toLowerCase() === 'tether'
                                  ? 'USDT'
                                  : address.asset.toUpperCase()}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className='w-[250px] flex-none px-6 py-3 flex items-center'>
                          <div ref={tooltipRef}>
                            <TooltipProvider>
                              <Tooltip
                                open={openTooltipId === address.id}
                                onOpenChange={() => toggleTooltip(address.id)}
                              >
                                <TooltipTrigger
                                  onClick={(e) => {
                                    e.preventDefault();
                                    toggleTooltip(address.id);
                                    navigator.clipboard.writeText(
                                      address.address
                                    );
                                  }}
                                  asChild
                                >
                                  <span className='flex items-center gap-2 cursor-pointer'>
                                    <div className='w-6 h-6 overflow-hidden rounded-md border border-gray-200'>
                                      <Image
                                        alt={address.address}
                                        src={blo(
                                          `0x${address.address.slice(2)}`
                                        )}
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <p className='text-sm font-medium text-gray-700 underline underline-offset-4'>
                                      {address.address.slice(0, 6)}...
                                      {address.address.slice(-4)}
                                    </p>
                                    <svg
                                      width='12'
                                      height='12'
                                      viewBox='0 0 12 12'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <g clipPath='url(#clip0_1278_40151)'>
                                        <path
                                          d='M2.5 7.5C2.03406 7.5 1.80109 7.5 1.61732 7.42388C1.37229 7.32239 1.17761 7.12771 1.07612 6.88268C1 6.69891 1 6.46594 1 6V2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H6C6.46594 1 6.69891 1 6.88268 1.07612C7.12771 1.17761 7.32239 1.37229 7.42388 1.61732C7.5 1.80109 7.5 2.03406 7.5 2.5M6.1 11H9.4C9.96005 11 10.2401 11 10.454 10.891C10.6422 10.7951 10.7951 10.6422 10.891 10.454C11 10.2401 11 9.96005 11 9.4V6.1C11 5.53995 11 5.25992 10.891 5.04601C10.7951 4.85785 10.6422 4.70487 10.454 4.60899C10.2401 4.5 9.96005 4.5 9.4 4.5H6.1C5.53995 4.5 5.25992 4.5 5.04601 4.60899C4.85785 4.70487 4.70487 4.85785 4.60899 5.04601C4.5 5.25992 4.5 5.53995 4.5 6.1V9.4C4.5 9.96005 4.5 10.2401 4.60899 10.454C4.70487 10.6422 4.85785 10.7951 5.04601 10.891C5.25992 11 5.53995 11 6.1 11Z'
                                          stroke='#344054'
                                          strokeWidth='1.25'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id='clip0_1278_40151'>
                                          <rect
                                            width='12'
                                            height='12'
                                            fill='white'
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p id={address.id}>Click to copy</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>

                        <div className='flex-1 px-6 py-3 flex justify-end'>
                          <Button
                            variant='outline'
                            size='sm'
                            className='h-8'
                            onClick={() => handleEdit(address.id)}
                          >
                            <Edit3 className='h-4 w-4' />
                            Edit
                          </Button>
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
      {/* Modal for editing contact name */}
      <EditContactNameModal
        isOpen={isModalOpen}
        onClose={closeModal}
        contactId={selectedContactId!} // Ensure selectedContactId is not null
        onEditContact={handleEditContact} // Pass the function here
      />
      <EditAddressModal
        isOpen={isEditAddressModalOpen}
        onClose={() => setIsEditAddressModalOpen(false)}
        addressData={{
          ...(contact?.addresses.find(
            (addr) => addr.id === selectedAddressId
          ) || {
            id: '',
            network: '',
            asset: '',
            address: '',
            contactId: '',
          }),
          contactName: contact?.name || '',
          addressname:
            contact?.addresses.find((addr) => addr.id === selectedAddressId)
              ?.asset || '',
        }}
        onSave={handleSave}
        onRemove={handleRemove}
      />
    </main>
  );
};

export default ViewContact;

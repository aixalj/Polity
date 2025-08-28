export interface Contact {
  id: string;
  name: string;
  addressCount: number;
  avatar: string;
  addresses?: Address[]; // Changed to an array of Address
}

export interface Address {
  id: string;
  contactId: string;
  contactName: string;
  addressname: string;
  network: string;
  asset: string;
  address: string;
}

export interface ContactWithFormattedCount extends Contact {
  formattedAddressCount: string;
}

// Updated addresses array with full-length addresses
export const addresses: Address[] = [
  {
    id: '1',
    contactId: '1',
    contactName: 'John Doe',
    addressname: 'John Savings',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '2',
    contactId: '1',
    contactName: 'John Doe',
    addressname: 'John Personal',
    network: 'Bitcoin Network',
    asset: '',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '3',
    contactId: '1',
    contactName: 'John Doe',
    addressname: 'John Work',
    network: 'Polygon Network',
    asset: 'Tether',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '4',
    contactId: '1',
    contactName: 'John Doe',
    addressname: 'John Vacation',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '5',
    contactId: '2',
    contactName: 'Jane Smith',
    addressname: 'Jane Holiday',
    network: 'Polygon Network',
    asset: '',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '6',
    contactId: '2',
    contactName: 'Jane Smith',
    addressname: 'Jane Work',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '7',
    contactId: '2',
    contactName: 'Jane Smith',
    addressname: 'Jane Home',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '8',
    contactId: '3',
    contactName: 'Alice Johnson',
    addressname: 'Alice Shopping',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '9',
    contactId: '3',
    contactName: 'Alice Johnson',
    addressname: 'Alice Home',
    network: 'Bitcoin Network',
    asset: 'Bitcoin',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '10',
    contactId: '4',
    contactName: 'Bob Williams',
    addressname: 'Bob Christmas',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '11',
    contactId: '4',
    contactName: 'Bob Williams',
    addressname: 'Bob Work',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '12',
    contactId: '5',
    contactName: 'Emma Davis',
    addressname: 'Emma Summer',
    network: 'Polygon Network',
    asset: 'USDC',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '13',
    contactId: '5',
    contactName: 'Emma Davis',
    addressname: 'Emma Winter',
    network: 'Polygon Network',
    asset: 'USDC',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '14',
    contactId: '6',
    contactName: 'Michael Brown',
    addressname: 'Michael Personal',
    network: 'Bitcoin Network',
    asset: 'Bitcoin',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '15',
    contactId: '6',
    contactName: 'Michael Brown',
    addressname: 'Michael Work',
    network: 'Bitcoin Network',
    asset: 'Bitcoin',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '16',
    contactId: '7',
    contactName: 'Sophia Lee',
    addressname: 'Sophia AVAX',
    network: 'Bitcoin Network',
    asset: 'Bitcoin',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '17',
    contactId: '8',
    contactName: 'Daniel Wilson',
    addressname: 'Daniel Personal',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '18',
    contactId: '9',
    contactName: 'Olivia Taylor',
    addressname: 'Olivia Savings',
    network: 'Bitcoin Network',
    asset: 'Bitcoin',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '19',
    contactId: '10',
    contactName: 'Jenny Roberts',
    addressname: 'Jenny Personal',
    network: 'Bitcoin Network',
    asset: 'Bitcoin',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '20',
    contactId: '10',
    contactName: 'Jenny Roberts',
    addressname: 'Jenny Work',
    network: 'Bitcoin Network',
    asset: 'Bitcoin',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '21',
    contactId: '10',
    contactName: 'Jenny Roberts',
    addressname: 'Jenny Savings',
    network: 'Bitcoin Network',
    asset: 'Bitcoin',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '22',
    contactId: '10',
    contactName: 'Jenny Roberts',
    addressname: 'Jenny Holiday',
    network: 'Bitcoin Network',
    asset: 'Bitcoin',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },


  {
    id: '23',
    contactId: '7',
    contactName: 'Sophia Lee',
    addressname: 'Sophia Business',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '24',
    contactId: '7',
    contactName: 'Sophia Lee',
    addressname: 'Sophia Personal',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '25',
    contactId: '8',
    contactName: 'Daniel Wilson',
    addressname: 'Daniel Work',
    network: 'Bitcoin Network',
    asset: 'Bitcoin',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
  {
    id: '26',
    contactId: '8',
    contactName: 'Daniel Wilson',
    addressname: 'Daniel Investment',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '27',
    contactId: '9',
    contactName: 'Olivia Taylor',
    addressname: 'Olivia Business',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0x1234567890abcdef1234567890abcdef12345678', // Full-length address
  },
  {
    id: '28',
    contactId: '9',
    contactName: 'Olivia Taylor',
    addressname: 'Olivia Personal',
    network: 'Ethereum Network',
    asset: 'Tether',
    address: '0xabcdef1234567890abcdef1234567890abcdef12', // Full-length address
  },
];

const contactIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const calculateAddressCounts = (
  addresses: Address[],
  contactIds: string[]
): { [key: string]: number } => {
  const counts: { [key: string]: number } = {};
  contactIds.forEach((id) => {
    counts[id] = 0; // Initialize count to 0 for all contacts
  });
  addresses.forEach((address) => {
    counts[address.contactId] += 1;
  });
  return counts;
};

const addressCounts = calculateAddressCounts(addresses, contactIds);

// Updated contacts array to include multiple addresses
export const contacts: Contact[] = [
  {
    id: '1',
    name: 'John Doe',
    addressCount: addressCounts['1'],
    avatar: 'https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg',
    addresses: [
      {
        id: '1',
        contactId: '1',
        contactName: 'John Doe',
        addressname: 'John Savings',
        network: 'Ethereum Network',
        asset: 'Tether',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
      {
        id: '2',
        contactId: '1',
        contactName: 'John Doe',
        addressname: 'John Personal',
        network: 'Bitcoin Network',
        asset: 'Bitcoin',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
      {
        id: '3',
        contactId: '1',
        contactName: 'John Doe',
        addressname: 'John Work',
        network: 'Polygon Network',
        asset: 'Tether',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
      {
        id: '4',
        contactId: '1',
        contactName: 'John Doe',
        addressname: 'John Vacation',
        network: 'Ethereum Network',
        asset: 'Tether',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    addressCount: addressCounts['2'],
    avatar: 'https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg',
    addresses: [
      {
        id: '5',
        contactId: '2',
        contactName: 'Jane Smith',
        addressname: 'Jane Holiday',
        network: 'Polygon Network',
        asset: 'USDT',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
      {
        id: '6',
        contactId: '2',
        contactName: 'Jane Smith',
        addressname: 'Jane Work',
        network: 'Ethereum Network',
        asset: 'Tether',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
      {
        id: '7',
        contactId: '2',
        contactName: 'Jane Smith',
        addressname: 'Jane Home',
        network: 'Ethereum Network',
        asset: 'Tether',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
    ],
  },
  {
    id: '3',
    name: 'Alice Johnson',
    addressCount: addressCounts['3'],
    avatar: 'https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg',
    addresses: [
      {
        id: '8',
        contactId: '3',
        contactName: 'Alice Johnson',
        addressname: 'Alice Shopping',
        network: 'Ethereum Network',
        asset: 'Tether',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
      {
        id: '9',
        contactId: '3',
        contactName: 'Alice Johnson',
        addressname: 'Alice Home',
        network: 'Bitcoin Network',
        asset: 'Bitcoin',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
    ],
  },
  {
    id: '4',
    name: 'Bob Brown',
    addressCount: addressCounts['4'],
    avatar: 'https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg',
    addresses: [
      {
        id: '10',
        contactId: '4',
        contactName: 'Bob Williams',
        addressname: 'Bob Christmas',
        network: 'Ethereum Network',
        asset: 'Tether',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
      {
        id: '11',
        contactId: '4',
        contactName: 'Bob Williams',
        addressname: 'Bob Work',
        network: 'Ethereum Network',
        asset: 'Tether',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
    ],
  },
  {
    id: '5',
    name: 'Emma Davis',
    addressCount: addressCounts['5'],
    avatar: 'https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg',
    addresses: [
      {
        id: '12',
        contactId: '5',
        contactName: 'Emma Davis',
        addressname: 'Emma Summer',
        network: 'Polygon Network',
        asset: 'USDC',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
      {
        id: '13',
        contactId: '5',
        contactName: 'Emma Davis',
        addressname: 'Emma Winter',
        network: 'Polygon Network',
        asset: 'USDC',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
    ],
  },
  {
    id: '6',
    name: 'Michael Brown',
    addressCount: addressCounts['6'],
    avatar: 'https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg',
    addresses: [
      {
        id: '14',
        contactId: '6',
        contactName: 'Michael Brown',
        addressname: 'Michael Personal',
        network: 'Bitcoin Network',
        asset: 'Bitcoin',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
      {
        id: '15',
        contactId: '6',
        contactName: 'Michael Brown',
        addressname: 'Michael Work',
        network: 'Bitcoin Network',
        asset: 'Bitcoin',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
    ],
  },
  {
    id: '7',
    name: 'Sophia Lee',
    addressCount: addressCounts['7'],
    avatar: 'https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg',
    addresses: [
      {
        id: '16',
        contactId: '7',
        contactName: 'Sophia Lee',
        addressname: 'Sophia AVAX',
        network: 'Bitcoin Network',
        asset: 'Bitcoin',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
      {
        id: '23',
        contactId: '7',
        contactName: 'Sophia Lee',
        addressname: 'Sophia Business',
        network: 'Ethereum Network',
        asset: 'USDC',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
      {
        id: '24',
        contactId: '7',
        contactName: 'Sophia Lee',
        addressname: 'Sophia Personal',
        network: 'Polygon Network',
        asset: 'Tether',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
    ],
  },
  {
    id: '8',
    name: 'Daniel Wilson',
    addressCount: addressCounts['8'],
    avatar: 'https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg',
    addresses: [
      {
        id: '17',
        contactId: '8',
        contactName: 'Daniel Wilson',
        addressname: 'Daniel Personal',
        network: 'Ethereum Network',
        asset: 'Tether',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
      {
        id: '25',
        contactId: '8',
        contactName: 'Daniel Wilson',
        addressname: 'Daniel Work',
        network: 'Bitcoin Network',
        asset: 'Bitcoin',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
      {
        id: '26',
        contactId: '8',
        contactName: 'Daniel Wilson',
        addressname: 'Daniel Investment',
        network: 'Polygon Network',
        asset: 'USDC',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
    ],
  },
  {
    id: '9',
    name: 'Olivia Taylor',
    addressCount: addressCounts['9'],
    avatar: 'https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg',
    addresses: [
      {
        id: '18',
        contactId: '9',
        contactName: 'Olivia Taylor',
        addressname: 'Olivia Savings',
        network: 'Bitcoin Network',
        asset: 'Bitcoin',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
      {
        id: '27',
        contactId: '9',
        contactName: 'Olivia Taylor',
        addressname: 'Olivia Business',
        network: 'Ethereum Network',
        asset: 'Tether',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
      {
        id: '28',
        contactId: '9',
        contactName: 'Olivia Taylor',
        addressname: 'Olivia Personal',
        network: 'Polygon Network',
        asset: 'USDC',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
    ],
  },
  {
    id: '10',
    name: 'Jenny Roberts',
    addressCount: addressCounts['10'],
    avatar: 'https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg',
    addresses: [
      {
        id: '19',
        contactId: '10',
        contactName: 'Jenny Roberts',
        addressname: 'Jenny Personal',
        network: 'Bitcoin Network',
        asset: 'Bitcoin',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
      {
        id: '20',
        contactId: '10',
        contactName: 'Jenny Roberts',
        addressname: 'Jenny Work',
        network: 'Bitcoin Network',
        asset: 'Bitcoin',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
      {
        id: '21',
        contactId: '10',
        contactName: 'Jenny Roberts',
        addressname: 'Jenny Savings',
        network: 'Bitcoin Network',
        asset: 'Bitcoin',
        address: '0x1234567890abcdef1234567890abcdef12345678',
      },
      {
        id: '22',
        contactId: '10',
        contactName: 'Jenny Roberts',
        addressname: 'Jenny Holiday',
        network: 'Bitcoin Network',
        asset: 'Bitcoin',
        address: '0xabcdef1234567890abcdef1234567890abcdef12',
      },
    ],
  },
];

export const getAllContacts = (): ContactWithFormattedCount[] => {
  return contacts.map((contact) => ({
    ...contact,
    formattedAddressCount: contact.addressCount.toString(),
  }));
};

export const getAllAddresses = (): Address[] => {
  return addresses;
};

export const addAddress = (newAddress: Omit<Address, 'id'>): void => {
  // Omit 'id' since it will be generated
  const completeAddress: Address = {
    ...newAddress,
    id: Date.now().toString(), // Generate a unique ID
  };
  addresses.push(completeAddress);
  const newCounts = calculateAddressCounts(addresses, contactIds);
  contacts.forEach((contact) => {
    contact.addressCount = newCounts[contact.id];
  });
};

export const removeAddress = (addressId: string): void => {
  const index = addresses.findIndex((addr) => addr.id === addressId);
  if (index !== -1) {
    addresses.splice(index, 1);
    const newCounts = calculateAddressCounts(addresses, contactIds);
    contacts.forEach((contact) => {
      contact.addressCount = newCounts[contact.id];
    });
  }
};

export const addContact = (
  newContact: Omit<Contact, 'id' | 'addressCount'>
): void => {
  const newId = (contacts.length + 1).toString();
  contacts.push({
    ...newContact,
    id: newId,
    addressCount: 1, // New contacts start with 1 address
  });
  contactIds.push(newId);
};

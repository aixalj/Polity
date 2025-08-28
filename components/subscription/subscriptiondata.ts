// Define the Agreement interface
export interface Subscription {
  id: string;
  name: string;
  network: string;
  category: string;
  yourBid: number;
  startTime: Date;
  endTime: Date;
  status: string;
  isFireblocksInactive?: boolean;
}

// Create an array of simulated agreements
export const subscriptions: Subscription[] = [
  /*{
    id: '(0x7e...93f1)',
    name: 'Fireblocks - Premium',
    network: 'Fireblocks',
    category: 'Fireblocks Wallet',
    yourBid: 15.96,
    startTime: new Date('2023-07-18'),
    endTime: new Date('2023-08-18'),
    status: 'Inactive',
  },*/
  {
    id: '(0x7e...93f1)',
    name: 'Safeheron - Premium',
    network: 'Safeheron',
    category: 'Safeheron Wallet',
    yourBid: 15.96,
    startTime: new Date('2023-07-18'),
    endTime: new Date('2023-08-18'),
    status: 'Pending',
  },

  {
    id: '(0x5d...82e4)',
    name: 'DFNS - Premium',
    network: 'DFNS',
    category: 'Wallet Name',
    yourBid: 15.96,
    startTime: new Date('2023-07-18'),
    endTime: new Date('2023-08-18'),
    status: 'Active',
  },
  {
    id: '(428f...47d2)',
    name: 'Bitcoin Network Account',
    network: 'BTC',
    category: 'Network Account Name',
    yourBid: 1.99,
    startTime: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
    endTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    status: 'Active',
  },

  {
    id: '(0x8f...47d2)',
    name: 'Ethereum Network Account',
    network: 'ETH',
    category: 'Network Account Name',
    yourBid: 1.99,
    startTime: new Date(Date.now() - 12 * 7 * 24 * 60 * 60 * 1000),
    endTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    status: 'Active',
  },

  {
    id: '(0x9f...47e3)',
    name: 'Polygon Network Account',
    network: 'MATIC',
    category: 'Network Account Name',
    yourBid: 1.99,
    startTime: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    endTime: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    status: 'Inactive',
  },
];

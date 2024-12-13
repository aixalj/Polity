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
}

// Create an array of simulated agreements
export const subscriptions: Subscription[] = [
  {
    id: "(428f...47d2)",
    name: "Bitcoin Network Account",
    network: "BTC",
    category: "Network Account Name",
    yourBid: 1.99,
    startTime: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
    endTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    status: "Active",
  },

  {
    id: "(0x8f...47d2)",
    name: "Ethereum Network Account",
    network: "ETH",
    category: "Network Account Name",
    yourBid: 1.99,
    startTime: new Date(Date.now() - 12 * 7 * 24 * 60 * 60 * 1000),
    endTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    status: "Active",
  },

  {
    id: "(0x9f...47e3)",
    name: "Polygon Network Account",
    network: "MATIC",
    category: "Network Account Name",
    yourBid: 1.99,
    startTime: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    endTime: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    status: "Inactive"
  },
];


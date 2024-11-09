// Define the Agreement interface
interface Subscription {
  name: string;
  network: string;
  category: string;
  yourBid: number;
  startTime: Date;
  endTime: Date;
  status: string;
}

// Create an array of simulated agreements
const subscriptions: Subscription[] = [
  {
    name: "Bitcoin Network Account",
    network: "BTC",
    category: "Network Account Name",
    yourBid: 1.99,
    startTime: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
    endTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    status: "Active",
  },

  {
    name: "Ethereum Network Account",
    network: "ETH",
    category: "Network Account Name",
    yourBid: 1.99,
    startTime: new Date(Date.now() - 12 * 7 * 24 * 60 * 60 * 1000),
    endTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    status: "Active",
  },
];

export { subscriptions };
export type { Subscription };

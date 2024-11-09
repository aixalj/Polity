// Define the Agreement interface
interface Subscription {
  name: string;
  category: string;
  yourBid: number;
  startTime: Date;
  endTime: Date;
  status: string;
}

// Create an array of simulated agreements
const subscriptions: Subscription[] = [
  {
    name: "Coinfirm AML/KYC Risk Report",
    category: "10 Reports Package",
    yourBid: 31,
    startTime: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
    endTime: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
    status: "Active",
  },

  {
    name: "Coinfirm AML/KYC Risk Report",
    category: "25 Reports Package",
    yourBid: 28,
    startTime: new Date(Date.now() - 12 * 7 * 24 * 60 * 60 * 1000),
    endTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    status: "Active",
  },
];

export { subscriptions };
export type { Subscription };

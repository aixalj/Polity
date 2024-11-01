// Define the Agreement interface
interface Bid {
  name: string;
  category: string;
  yourBid: number;
  highestBid: number;
  endTime: Date;
  status: string;
  url: string;
}

// Create an array of simulated agreements
const bids: Bid[] = [
  {
    name: "Coinfirm AML/KYC Risk Report",
    category: "10 Reports Package",
    yourBid: 31,
    highestBid: 31,
    endTime: new Date(Date.now() + 1355 * 1000),
    status: "Top Bidder",
    url: "/marketplace/coinfirm/report",
  },

  {
    name: "Coinfirm AML/KYC Risk Report",
    category: "25 Reports Package",
    yourBid: 28,
    highestBid: 35,
    endTime: new Date(Date.now() + 13550 * 1000),
    status: "Outbid",
    url: "/marketplace/coinfirm/report",
  },
];

export { bids };
export type { Bid };

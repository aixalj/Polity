// Define the Agreement interface
interface Billing {
  name: string;
  category: string;
  amount: number;

  billingDate: Date;
  status: string;
}

// Create an array of simulated agreements
const billings: Billing[] = [
  {
    name: "DFNS",
    category: "DFNS",
    amount: 9.99,

    billingDate: new Date(Date.now() + 1355 * 1000),
    status: "Paid",
  },

  {
    name: "DFNS",
    category: "DFNS",
    amount: 9.99,

    billingDate: new Date(Date.now() + 13550 * 1000),
    status: "Paid",
  },
];

export { billings };
export type { Billing };

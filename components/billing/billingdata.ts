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
    name: "Onramper",
    category: "Onramper",
    amount: 10,

    billingDate: new Date(Date.now() + 1355 * 1000),
    status: "Paid",
  },

  {
    name: "Onramper",
    category: "Onramper",
    amount: 10,

    billingDate: new Date(Date.now() + 13550 * 1000),
    status: "Paid",
  },
];

export { billings };
export type { Billing };

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
    name: "Coinfirm AML/KYC Risk Report",
    category: "10 Reports Package",
    amount: 31,

    billingDate: new Date(Date.now() + 1355 * 1000),
    status: "Paid",
  },

  {
    name: "Coinfirm AML/KYC Risk Report",
    category: "25 Reports Package",
    amount: 28,

    billingDate: new Date(Date.now() + 13550 * 1000),
    status: "Paid",
  },
];

export { billings };
export type { Billing };

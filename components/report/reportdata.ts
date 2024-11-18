// Define the Report interface
interface Report {
  name: string;
  network: string;
  address: string;
  generationDate: Date;
  status: string;
}

// Create an array of simulated reports
const reports: Report[] = [
  {
    name: "Savings Vault",
    network: "ETH",
    address: "0x9c...5b3d",
    generationDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
    status: "Active",
  },
  {
    name: "Savings Vault",
    network: "ETH",
    address: "0x9c...5b3d",
    generationDate: new Date(Date.now() - 12 * 7 * 24 * 60 * 60 * 1000),
    status: "Active",
  },
];

export { reports };
export type { Report };

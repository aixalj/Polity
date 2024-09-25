// Define the Agreement interface
interface Agreement {
  name: string;
  nspName: string;
  nspUsername: string;
  dateSigned: string;
  status: string;
}

// Create an array of simulated agreements
const agreements: Agreement[] = [
  {
    name: "Network Service Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion_admin",
    dateSigned: "2024-03-15T09:30:00Z",
    status: "Active",
  },
  {
    name: "Virtual Currency Wallet Agreement - DFNS",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion_wallet",
    dateSigned: "2024-02-28T14:45:00Z",
    status: "Pending Approval",
  },
  {
    name: "Data Storage and Management Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion_storage",
    dateSigned: "2024-01-10T11:15:00Z",
    status: "Active",
  },
  {
    name: "Decentralized Identity Service Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion_identity",
    dateSigned: "2024-03-05T16:20:00Z",
    status: "Under Review",
  },
  {
    name: "Smart Contract Deployment Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion_contracts",
    dateSigned: "2024-02-12T10:00:00Z",
    status: "Active",
  },
  {
    name: "Blockchain Node Hosting Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion_nodes",
    dateSigned: "2024-03-20T13:30:00Z",
    status: "Pending Signature",
  },
  {
    name: "Decentralized Finance (DeFi) Integration Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion_defi",
    dateSigned: "2024-01-25T15:45:00Z",
    status: "Active",
  },
  {
    name: "Cryptographic Key Management Service Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion_keymanagement",
    dateSigned: "2024-03-01T09:00:00Z",
    status: "Active",
  },
];

export { agreements };
export type { Agreement };

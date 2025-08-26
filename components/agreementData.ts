// Define the Agreement interface
interface Agreement {
  name: string;
  nspName: string;
  nspUsername: string;
  dateSigned: string;
  status: string;
  url: string;
}

// Create an array of simulated agreements
const agreements: Agreement[] = [
  {
    name: "Network Service Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion",
    dateSigned: "2024-03-15T09:30:00Z",
    status: "Signed",
    url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
  },
  {
    name: "Virtual Currency Wallet Agreement - DFNS",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion",
    dateSigned: "2024-02-28T14:45:00Z",
    status: "Pending",
    url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
  },
  {
    name: "Virtual Currency Wallet Agreement - Safeheron",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion",
    dateSigned: "2024-02-28T14:45:00Z",
    status: "Pending",
    url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
  },
  {
    name: "Master Purchase & Subscription Agreement (Products and Services) + Annexes",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion",
    dateSigned: "2024-02-28T14:45:00Z",
    status: "Pending",
    url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
  },
  /*{
    name: "Data Storage and Management Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion",
    dateSigned: "2024-01-10T11:15:00Z",
    status: "Signed",
    url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
  },*/
 /* {
    name: "Decentralized Identity Service Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion",
    dateSigned: "2024-03-05T16:20:00Z",
    status: "Pending",
    url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
  },
  {
    name: "Smart Contract Deployment Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion",
    dateSigned: "2024-02-12T10:00:00Z",
    status: "Signed",
    url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
  },
  /*{
    name: "Blockchain Node Hosting Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion",
    dateSigned: "2024-03-20T13:30:00Z",
    status: "Pending",
    url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
  },
  {
    name: "Decentralized Finance (DeFi) Integration Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion",
    dateSigned: "2024-01-25T15:45:00Z",
    status: "Signed",
    url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
  },
  {
    name: "Cryptographic Key Management Service Agreement",
    nspName: "Bastion Cooperative",
    nspUsername: "bastion",
    dateSigned: "2024-03-01T09:00:00Z",
    status: "Signed",
    url: "https://ethereum.org/content/whitepaper/whitepaper-pdf/Ethereum_Whitepaper_-_Buterin_2014.pdf",
  },*/
];

export { agreements };
export type { Agreement };

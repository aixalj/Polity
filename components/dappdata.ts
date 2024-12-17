interface DApp {
  name: string;
  url: string;
  logo: string;
  network: string;
  token: string;
  tokenSymbol: string;
}

const dapps: DApp[] = [
  {
    name: "dHEDGE",
    url: "app.dhedge.org",
    logo: "/dhedge-logo.svg",
    network: "Ethereum",
    token: "Ethereum",
    tokenSymbol: "ETH",
  },
  {
    name: "Uniswap",
    url: "app.uniswap.org",
    logo: "/uniswap-logo.svg",
    network: "Ethereum",
    token: "Ethereum",
    tokenSymbol: "ETH",
  },
  {
    name: "Aave",
    url: "app.aave.com",
    logo: "/aave-logo.svg",
    network: "Ethereum",
    token: "Ethereum",
    tokenSymbol: "ETH",
  },
];

export { dapps };
export type { DApp }; 
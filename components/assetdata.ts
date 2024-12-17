interface Asset {
  name: string;
  symbol: string;
  balance: number;
  value: number;
  change24h: number;
  type: string;
}

const assets: Asset[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    balance: 0.5,
    value: 21000,
    change24h: 2.5,
    type: "Cryptocurrency",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    balance: 5.0,
    value: 1800,
    change24h: -1.2,
    type: "Cryptocurrency",
  },
];

export { assets };
export type { Asset }; 
interface Asset {
  name: string;
  symbol: string;
  balance: number;
  value: number;
  change24h: number;
  allocation: number;
  price: number;
  return: number;
}

const assets: Asset[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    balance: 0.5,
    value: 21000,
    change24h: 2.5,
    allocation: 35.5,
    price: 42000,
    return: 15.2,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    balance: 5.0,
    value: 1800,
    change24h: -1.2,
    allocation: 25.3,
    price: 360,
    return: -3.5,
  },
];

export { assets };
export type { Asset }; 
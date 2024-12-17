interface Position {
  name: string;
  symbol: string;
  size: number;
  entryPrice: number;
  markPrice: number;
  pnl: number;
  pnlPercent: number;
  liquidationPrice: number;
  type: "Long" | "Short";
}

const positions: Position[] = [
  {
    name: "Bitcoin",
    symbol: "BTC-PERP",
    size: 1.5,
    entryPrice: 42000,
    markPrice: 43500,
    pnl: 2250,
    pnlPercent: 3.57,
    liquidationPrice: 38000,
    type: "Long",
  },
  {
    name: "Ethereum",
    symbol: "ETH-PERP",
    size: 10,
    entryPrice: 2200,
    markPrice: 2150,
    pnl: -500,
    pnlPercent: -2.27,
    liquidationPrice: 2400,
    type: "Short",
  },
];

export { positions };
export type { Position }; 
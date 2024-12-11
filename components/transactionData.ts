// Define the Transaction interface
interface Transaction {
  method: string;
  timestamp: string;
  token: string;
  value: number;
  network: string;
  wallet: string;
  fromAddress: string;
  toAddress: string;
  transactionFee: number;
  status: string;
  transactionHash: string;
  toToken?: string; // For Swap transactions
  dApp?: string; // For Swap, Stake, Unstake, Lend transactions
  valueTo?: number; // For Swap transactions
  apy?: string; // For Lend transactions
}

// Create an array of simulated transactions
const transactions: Transaction[] = [
  {
    method: "Send",
    timestamp: "2024-09-25T10:30:00Z",
    token: "ETH",
    value: 1.5,
    network: "Ethereum",
    wallet: "Main Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    transactionFee: 0.002,
    status: "Completed",
    transactionHash:
      "0x123abc456def789ghi012jkl345mno678pqr901stu234vwx567yz890abc",
  },
  {
    method: "Receive",
    timestamp: "2024-09-25T15:45:00Z",
    token: "USDC",
    value: 500,
    network: "Ethereum",
    wallet: "Main Wallet",
    fromAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    toAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    transactionFee: 0.001,
    status: "Completed",
    transactionHash:
      "0x456def789ghi012jkl345mno678pqr901stu234vwx567yz890abc123def",
  },
  {
    method: "Swap",
    timestamp: "2024-09-25T19:15:00Z",
    token: "ETH",
    value: 0.5,
    valueTo: 1314.13,
    toToken: "USDC",
    network: "Ethereum",
    wallet: "Main Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // Uniswap router address
    transactionFee: 0.003,
    status: "Completed",
    transactionHash:
      "0x789ghi012jkl345mno678pqr901stu234vwx567yz890abc123def456ghi",
    dApp: "Uniswap",
  },
  {
    method: "Stake",
    timestamp: "2024-09-24T14:30:00Z",
    token: "ETH",
    value: 5,
    network: "Ethereum",
    wallet: "Main Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x00000000219ab540356cBB839Cbe05303d7705Fa", // Ethereum 2.0 deposit contract
    transactionFee: 0.002,
    status: "Completed",
    transactionHash:
      "0xghi789jkl012mno345pqr678stu901vwx234yz567abc890def123ghi456",
    dApp: "Ethereum 2.0",
  },
  {
    method: "Unstake",
    timestamp: "2024-09-23T09:45:00Z",
    token: "ETH",
    value: 2.5,
    network: "Ethereum",
    wallet: "Main Wallet",
    fromAddress: "0x00000000219ab540356cBB839Cbe05303d7705Fa", // Ethereum 2.0 deposit contract
    toAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    transactionFee: 0.001,
    status: "Completed",
    transactionHash:
      "0xjkl012mno345pqr678stu901vwx234yz567abc890def123ghi456jkl789",
    dApp: "Ethereum 2.0",
  },
  {
    method: "Lend",
    timestamp: "2024-09-22T16:20:00Z",
    token: "USDC",
    value: 1000,
    network: "Ethereum",
    wallet: "Second Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B", // Compound protocol address
    transactionFee: 0.002,
    status: "Open",
    transactionHash:
      "0xmno345pqr678stu901vwx234yz567abc890def123ghi456jkl789mno012",
    dApp: "Compound",
    apy: "4.32"
  },
  {
    method: "Send",
    timestamp: "2024-08-15T08:30:00Z",
    token: "ETH",
    value: 2.0,
    network: "Ethereum",
    wallet: "Main Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x123456789abcdef0123456789abcdef012345678",
    transactionFee: 0.003,
    status: "Completed",
    transactionHash:
      "0xpqr678stu901vwx234yz567abc890def123ghi456jkl789mno012pqr345",
  },
  {
    method: "Receive",
    timestamp: "2024-07-20T14:45:00Z",
    token: "LINK",
    value: 50,
    network: "Ethereum",
    wallet: "Second Wallet",
    fromAddress: "0x987654321fedcba0987654321fedcba098765432",
    toAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    transactionFee: 0.002,
    status: "Completed",
    transactionHash:
      "0xstu901vwx234yz567abc890def123ghi456jkl789mno012pqr345stu678",
  },
  {
    method: "Swap",
    timestamp: "2024-06-10T11:20:00Z",
    token: "USDT",
    value: 1000,
    valueTo: 1000,
    toToken: "USDC",
    network: "Ethereum",
    wallet: "Main Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    transactionFee: 0.005,
    status: "Completed",
    transactionHash:
      "0xvwx234yz567abc890def123ghi456jkl789mno012pqr345stu678vwx901",
    dApp: "Uniswap",
  },
  {
    method: "Send",
    timestamp: "2024-05-05T09:15:00Z",
    token: "BTC",
    value: 0.1,
    network: "Bitcoin",
    wallet: "Main Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    transactionFee: 0.0002,
    status: "Completed",
    transactionHash:
      "0xyz567abc890def123ghi456jkl789mno012pqr345stu678vwx901yz234",
  },
  {
    method: "Receive",
    timestamp: "2024-04-18T16:40:00Z",
    token: "MATIC",
    value: 500,
    network: "Polygon",
    wallet: "Second Wallet",
    fromAddress: "0xabcdef0123456789abcdef0123456789abcdef01",
    toAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    transactionFee: 0.01,
    status: "Completed",
    transactionHash:
      "0xabc890def123ghi456jkl789mno012pqr345stu678vwx901yz234abc567",
  },
  {
    method: "Stake",
    timestamp: "2024-03-10T12:10:00Z",
    token: "MATIC",
    value: 1000,
    network: "Polygon",
    wallet: "Main Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x5e3Ef299fDDf15eAa0432E6e66473ace8c13D908", // Polygon staking contract
    transactionFee: 0.1,
    status: "Completed",
    transactionHash:
      "0xdef123ghi456jkl789mno012pqr345stu678vwx901yz234abc567def012",
    dApp: "Polygon PoS",
  },
];

export { transactions };
export type { Transaction };

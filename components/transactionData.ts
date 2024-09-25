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
    network: "Ethereum",
    wallet: "Main Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // Uniswap router address
    transactionFee: 0.003,
    status: "Completed",
    transactionHash:
      "0x789ghi012jkl345mno678pqr901stu234vwx567yz890abc123def456ghi",
  },
  {
    method: "Send",
    timestamp: "2024-09-25T22:20:00Z",
    token: "MATIC",
    value: 100,
    network: "Polygon",
    wallet: "Second Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x3FD0C54eE3A6d7014B8913F57550Ba1aA49e9BCB",
    transactionFee: 0.01,
    status: "Completed",
    transactionHash:
      "0xabc123def456ghi789jkl012mno345pqr678stu901vwx234yz567abc890",
  },
  {
    method: "Receive",
    timestamp: "2024-09-24T11:00:00Z",
    token: "BTC",
    value: 0.05,
    network: "Bitcoin",
    wallet: "Main Wallet",
    fromAddress: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
    toAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    transactionFee: 0.0001,
    status: "Completed",
    transactionHash:
      "0xdef456ghi789jkl012mno345pqr678stu901vwx234yz567abc890def123",
  },
  {
    method: "Send",
    timestamp: "2024-09-24T14:30:00Z",
    token: "USDT",
    value: 1000,
    network: "Polygon",
    wallet: "Second Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    transactionFee: 0.05,
    status: "Pending",
    transactionHash:
      "0xghi789jkl012mno345pqr678stu901vwx234yz567abc890def123ghi456",
  },
  {
    method: "Swap",
    timestamp: "2024-09-23T09:45:00Z",
    token: "USDC",
    value: 250,
    network: "Ethereum",
    wallet: "Main Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", // Uniswap router address
    transactionFee: 0.002,
    status: "Completed",
    transactionHash:
      "0xjkl012mno345pqr678stu901vwx234yz567abc890def123ghi456jkl789",
  },
  {
    method: "Receive",
    timestamp: "2024-09-23T16:20:00Z",
    token: "ETH",
    value: 0.75,
    network: "Ethereum",
    wallet: "Second Wallet",
    fromAddress: "0x3FD0C54eE3A6d7014B8913F57550Ba1aA49e9BCB",
    toAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    transactionFee: 0.001,
    status: "Completed",
    transactionHash:
      "0xmno345pqr678stu901vwx234yz567abc890def123ghi456jkl789mno012",
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
    network: "Ethereum",
    wallet: "Main Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    transactionFee: 0.005,
    status: "Completed",
    transactionHash:
      "0xvwx234yz567abc890def123ghi456jkl789mno012pqr345stu678vwx901",
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
    method: "Send",
    timestamp: "2024-03-10T12:10:00Z",
    token: "ETH",
    value: 0.01,
    network: "Ethereum",
    wallet: "Main Wallet",
    fromAddress: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    toAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    transactionFee: 0.0001,
    status: "Completed",
    transactionHash:
      "0xdef123ghi456jkl789mno012pqr345stu678vwx901yz234abc567def012",
  },
];

export { transactions };
export type { Transaction };

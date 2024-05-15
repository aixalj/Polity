// data.js
const networkAccounts: any[] = [
  {
    name: "Ethereum network account",
    id: "ETH",
    walletName: "Main Wallet",
    network: "Ethereum",
    address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    assets: [
      {
        name: "Ethereum",
        symbol: "ETH",
        price: 2904.48,
        return: 33822,
        value: 715751.0064,
        balance: 246.43,
        value24HoursAgo: 7900,
        allocation: 0,
        networkAccountName: "Ethereum network account",
        walletName: "Main Wallet",
      },
      {
        name: "USDC",
        symbol: "USDC",
        price: 1,
        return: 2.45,
        value: 38402.25,
        balance: 38402.25,
        value24HoursAgo: 3.5,
        allocation: 0,
        networkAccountName: "Ethereum network account",
        walletName: "Main Wallet",
      },
    ],
    get allocation() {
      return (this.value / wealth.totalAssets) * 100;
    },
    get return() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.return,
        0
      );
    },
    get value() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.value,
        0
      );
    },
    get balance() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.balance,
        0
      );
    },
  },
  {
    name: "Polygon network account",
    id: "MATIC",
    walletName: "Main Wallet",
    network: "Polygon",
    address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    assets: [
      {
        name: "Cardano",
        symbol: "ADA",
        price: 0.44,
        return: 1224,
        value: 1165.6172,
        balance: 2649.13,
        value24HoursAgo: 3.5,
        allocation: 0,
        networkAccountName: "Ethereum network account",
        walletName: "Main Wallet",
      },
    ],
    get allocation() {
      return (this.value / wealth.totalAssets) * 100;
    },
    get return() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.return,
        0
      );
    },
    get value() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.value,
        0
      );
    },
    get balance() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.balance,
        0
      );
    },
  },
  {
    name: "Bitcoin network account",
    id: "BTC",
    walletName: "Main Wallet",
    network: "Bitcoin",
    address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    assets: [
      {
        name: "Bitcoin",
        symbol: "BTC",
        price: 63953.7,
        return: 24523,
        value: 801339.861,
        balance: 12.53,
        value24HoursAgo: 3.5,
        allocation: 0,
        networkAccountName: "Bitcoin network account",
        walletName: "Main Wallet",
      },
    ],
    get allocation() {
      return (this.value / wealth.totalAssets) * 100;
    },
    get return() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.return,
        0
      );
    },
    get value() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.value,
        0
      );
    },
    get balance() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.balance,
        0
      );
    },
  },
  {
    name: "Polygon network account",
    id: "MATIC",
    walletName: "Second Wallet",
    network: "Polygon",
    address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    assets: [
      {
        name: "MATIC",
        symbol: "MATIC",
        price: 0.6577,
        return: 1224,
        value: 27114.491471,
        balance: 41226.23,
        value24HoursAgo: 7900,
        allocation: 0,
        networkAccountName: "Polygon network account",
        walletName: "Second Wallet",
      },
      {
        name: "Tether",
        symbol: "USDT",
        price: 1,
        return: 896.5,
        value: 127461.64,
        balance: 127461.64,
        value24HoursAgo: 3.5,
        allocation: 0,
        networkAccountName: "Polygon network account",
        walletName: "Second Wallet",
      },
    ],
    get allocation() {
      return (this.value / wealth.totalAssets) * 100;
    },
    get return() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.return,
        0
      );
    },
    get value() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.value,
        0
      );
    },
    get balance() {
      return this.assets.reduce(
        (sum: number, asset: any) => sum + asset.balance,
        0
      );
    },
  },
];

const wallets: any[] = [
  {
    wallet_name: "Main Wallet",
    wallet_id: "wallet1",
    get networkAccounts() {
      return networkAccounts.filter(
        (account) => account.walletName === this.wallet_name
      );
    },
    get allocation() {
      return (this.value / wealth.totalAssets) * 100;
    },
    get return() {
      return this.networkAccounts.reduce(
        (sum: number, account: any) => sum + account.return,
        0
      );
    },
    get value() {
      return this.networkAccounts.reduce(
        (sum: number, account: any) => sum + account.value,
        0
      );
    },
    get balance() {
      return this.networkAccounts.reduce(
        (sum: number, account: any) => sum + account.balance,
        0
      );
    },
  },
  {
    wallet_name: "Second Wallet",
    wallet_id: "wallet2",
    get networkAccounts() {
      return networkAccounts.filter(
        (account) => account.walletName === this.wallet_name
      );
    },
    get allocation() {
      return (this.value / wealth.totalAssets) * 100;
    },
    get return() {
      return this.networkAccounts.reduce(
        (sum: number, account: any) => sum + account.return,
        0
      );
    },
    get value() {
      return this.networkAccounts.reduce(
        (sum: number, account: any) => sum + account.value,
        0
      );
    },
    get balance() {
      return this.networkAccounts.reduce(
        (sum: number, account: any) => sum + account.balance,
        0
      );
    },
  },
];

const wealth = {
  get netWorth() {
    return this.totalAssets - this.totalDebts;
  },
  get totalAssets() {
    return wallets.reduce((sum, wallet) => sum + wallet.value, 0);
  },
  totalDebts: 0,
  totalClaimable: 0,
};

// Function to get all assets as an array
function getAllAssets() {
  console.log(
    "Assets:",
    networkAccounts.flatMap((account) => account.assets)
  );

  return networkAccounts.flatMap((account) => account.assets);
}

export { networkAccounts, wallets, wealth, getAllAssets };

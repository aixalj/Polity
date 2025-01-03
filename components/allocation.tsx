import Image from 'next/image';
import type { Config } from 'tailwindcss';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
  protocols,
  networks,
} from '@/components/data';

interface Asset {
  name: string;
  symbol: string;
  allocation: number;
  price: number;
  return: number;
  value: number;
  balance: number;
}

const getColorForAsset = (symbol: string): string => {
  const colorMap: { [key: string]: string } = {
    POL: 'bg-yellow-300',
    ETH: 'bg-blue-300',
    USDT: 'bg-green-300',
    USDC: 'bg-red-300',
    BTC: 'bg-orange-300',
    ADA: 'bg-purple-300',
    // Add more mappings as needed
  };

  return colorMap[symbol] || 'bg-gray-300'; // Default color if symbol not found
};

const getColorForProtocol = (symbol: string): string => {
  const colorMap: { [key: string]: string } = {
    Aave: 'bg-blue-200',
    dHedge: 'bg-green-200',
    Lido: 'bg-orange-200',
    ParaSwap: 'bg-rose-300',
    OTHER: 'bg-purple-300',
    // Add more mappings as needed
  };

  return colorMap[symbol] || 'bg-gray-300'; // Default color if symbol not found
};

const getColorForNetwork = (symbol: string): string => {
  const colorMap: { [key: string]: string } = {
    BTC: 'bg-orange-300',
    ETH: 'bg-gray-300',
    MATIC: 'bg-purple-300',
    // Add more mappings as needed
  };

  return colorMap[symbol] || 'bg-gray-300'; // Default color if symbol not found
};

const Allocation: React.FC<{
  getAllAssets: Asset[];
}> = ({ getAllAssets }) => {
  return (
    <main className='w-full h-full flex flex-col gap-3'>
      <div className='relative w-full  bg-white border rounded-2xl border-gray-300 px-5 pt-5 pb-4 flex flex-col gap-6'>
        <div className='relative flex justify-between w-full justify-items-stretch flex-row place-content-between	'>
          <div className='flex flex-col max-w-[30rem]'>
            <h2 className='text-lg font-medium'>Allocation</h2>
          </div>
        </div>
        <Tabs defaultValue='assets'>
          <TabsList className='absolute right-0 top-0 mt-5 mr-5'>
            <TabsTrigger value='assets'>Assets</TabsTrigger>
            <TabsTrigger value='protocols'>Protocols</TabsTrigger>
            <TabsTrigger value='networks'>Networks</TabsTrigger>
          </TabsList>
          <TabsContent className='w-full py-2' value='assets'>
            <div className='w-full h-6 flex rounded-lg overflow-hidden'>
              {Array.isArray(getAllAssets) && getAllAssets.length > 0 ? (
                <div className='w-full h-6 flex rounded-lg overflow-hidden'>
                  {getAllAssets
                    .sort((a, b) => b.value - a.value)
                    .map((asset, index) => (
                      <div
                        key={asset.name}
                        className={`h-full min-w-3 ${getColorForAsset(
                          asset.symbol
                        )}`}
                        style={{
                          width: `${
                            (asset.value /
                              getAllAssets.reduce(
                                (sum, asset) => sum + asset.value,
                                0
                              )) *
                            100
                          }%`,
                        }}
                      ></div>
                    ))}
                </div>
              ) : (
                <p>No assets to display.</p>
              )}
            </div>

            <div className='text-sm text-gray-700 font-medium flex items-center gap-3 mt-2'>
              {Array.isArray(getAllAssets) && getAllAssets.length > 0 ? (
                <div className='text-sm text-gray-700 font-medium flex items-center gap-3 mt-4'>
                  {getAllAssets
                    .sort((a, b) => b.value - a.value)
                    .map((asset, index) => (
                      <div
                        key={asset.name}
                        className='flex items-center gap-2 py-1 px-2.5'
                      >
                        <div
                          className={`size-2 rounded-full ${getColorForAsset(
                            asset.symbol
                          )}`}
                        ></div>
                        <Image
                          src={`/icons/tokens/${asset.symbol}.svg`}
                          alt={asset.name}
                          width={24}
                          height={24}
                        />
                        {asset.symbol} •{' '}
                        {(
                          (asset.value /
                            getAllAssets.reduce(
                              (sum, asset) => sum + asset.value,
                              0
                            )) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                    ))}
                </div>
              ) : (
                <p>No assets to display.</p>
              )}
            </div>
          </TabsContent>
          <TabsContent className='w-full py-2 ' value='protocols'>
            <div className='w-full flex flex-col'>
              {/* Protocol Allocation Bar */}
              <div className='w-full h-6 flex rounded-lg overflow-hidden'>
                {Array.isArray(protocols) && protocols.length > 0 ? (
                  <div className='w-full h-6 flex rounded-lg overflow-hidden'>
                    {protocols
                      .sort((a, b) => b.value - a.value)
                      .map((protocol) => (
                        <div
                          key={protocol.symbol}
                          className={`h-full min-w-3 ${getColorForProtocol(
                            protocol.symbol
                          )}`}
                          style={{
                            width: `${
                              (protocol.value /
                                protocols.reduce(
                                  (sum: number, protocol: any) =>
                                    sum + protocol.value,
                                  0
                                )) *
                              100
                            }%`,
                          }}
                        ></div>
                      ))}
                  </div>
                ) : (
                  <p>No protocols to display.</p>
                )}
              </div>

              {/* Protocol Data */}
              <div className='text-sm text-gray-700 font-medium flex items-center gap-3 mt-2'>
                {Array.isArray(protocols) && protocols.length > 0 ? (
                  <div className='text-sm text-gray-700 font-medium flex items-center gap-3 mt-4'>
                    {protocols
                      .sort((a, b) => b.value - a.value)
                      .map((protocol) => (
                        <div
                          key={protocol.symbol}
                          className='flex items-center gap-2 py-1 px-2.5'
                        >
                          <div
                            className={`size-2 rounded-full ${getColorForProtocol(
                              protocol.symbol
                            )}`}
                          ></div>
                          {protocol.symbol !== 'OTHER' && (
                            <Image
                              src={`/icons/protocols/${protocol.symbol}.svg`}
                              alt={protocol.name}
                              width={24}
                              height={24}
                            />
                          )}
                          {protocol.symbol} •{' '}
                          {(
                            (protocol.value /
                              protocols.reduce(
                                (sum: number, protocol: any) =>
                                  sum + protocol.value,
                                0
                              )) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                      ))}
                  </div>
                ) : (
                  <p>No protocols to display.</p>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent className='w-full py-2' value='networks'>
            <div className='w-full flex flex-col'>
              {/* Network Allocation Bar */}
              <div className='w-full h-6 flex rounded-lg overflow-hidden'>
                {Array.isArray(networks) && networks.length > 0 ? (
                  <div className='w-full h-6 flex rounded-lg overflow-hidden'>
                    {networks
                      .sort((a, b) => b.value - a.value)
                      .map((network) => (
                        <div
                          key={network.symbol}
                          className={`h-full min-w-3 ${getColorForNetwork(
                            network.symbol
                          )}`}
                          style={{
                            width: `${
                              (network.value /
                                networks.reduce(
                                  (sum: number, network: any) =>
                                    sum + network.value,
                                  0
                                )) *
                              100
                            }%`,
                          }}
                        ></div>
                      ))}
                  </div>
                ) : (
                  <p>No networks to display.</p>
                )}
              </div>

              {/* Network Data */}
              <div className='text-sm text-gray-700 font-medium flex items-center gap-3 mt-2'>
                {Array.isArray(networks) && networks.length > 0 ? (
                  <div className='text-sm text-gray-700 font-medium flex items-center gap-3 mt-4'>
                    {networks
                      .sort((a, b) => b.value - a.value)
                      .map((network) => (
                        <div
                          key={network.symbol}
                          className='flex items-center gap-2 py-1 px-2.5'
                        >
                          <div
                            className={`size-2 rounded-full ${getColorForNetwork(
                              network.symbol
                            )}`}
                          ></div>
                          <Image
                            src={`/icons/networks/${network.symbol}.svg`}
                            alt={network.name}
                            width={24}
                            height={24}
                          />
                          {network.name} •{' '}
                          {(
                            (network.value /
                              networks.reduce(
                                (sum: number, network: any) =>
                                  sum + network.value,
                                0
                              )) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                      ))}
                  </div>
                ) : (
                  <p>No networks to display.</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Allocation;

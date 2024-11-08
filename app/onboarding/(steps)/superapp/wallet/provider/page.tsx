'use client';
import { useWalletSelection } from '@/app/contexts/WalletSelectionContext';
import OnboardingBlock from '@/components/onboardingblock';
import Wallet from '@/public/walletgraphic.svg';
import DFNS from '@/public/providers/DFNS.svg';
import FB from '@/public/providers/FB.svg';
import SH from '@/public/providers/SH.svg';
import Blowfish from '@/public/integrations/Blowfish.svg';
import DeFi from '@/public/integrations/DeFi.svg';
import Moralis from '@/public/integrations/Moralis.svg';
import WalletConnect from '@/public/integrations/Wallet-Connect.svg';
import { CreditCardSearch, File02, Wallet01 } from '@untitled-ui/icons-react';
import { ArrowLeft, ArrowRight } from '@untitled-ui/icons-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import CheckIcon from '@/public/icons/check.svg';
import FBBanner from '@/public/providers/banners/FB.svg';
import SHBanner from '@/public/providers/banners/SH.svg';
import DFNSBanner from '@/public/providers/banners/DFNS.svg';

export default function Agreement() {
  const { selectedProvider, setSelectedProvider } = useWalletSelection();

  const walletProviders = [
    {
      name: 'DFNS',
      logo: DFNS,
      banner: DFNSBanner,
      description:
        'Network institutional-grade multi-party computation (MPC) wallet. Built on DFNS user infrastructure.',
      learnMoreUrl: 'https://dfns.io',
      features: [
        'MPC-based cryptography eliminates the potential risk of a single point of failure on private keys.',
        'Zero-trust security architecture defends against third-party malicious acts.',
        'Users have complete control of recovery phrases of all key shards.',
      ],
      integrations: [
        { name: 'DeFi', icon: DeFi },
        { name: 'Moralis', icon: Moralis },
        { name: 'Blowfish', icon: Blowfish },
        { name: 'WalletConnect', icon: WalletConnect },
      ],
    },
    {
      name: 'Safeheron',
      logo: SH,
      banner: SHBanner,
      description:
        'An institutional-grade MPC self-custody platform for digital assets.',
      learnMoreUrl: 'https://www.safeheron.com',
      features: [
        'Utilizes MPC for distributed key management, increasing security by dividing key control.',
        'Securely connect to dApps, flexibly access EVM and non-EVM chains.',
        'Maintain full control and ownership, ensuring no risk of asset misappropriation.',
      ],
      integrations: [
        { name: 'DeFi', icon: DeFi },
        { name: 'Moralis', icon: Moralis },
        { name: 'Blowfish', icon: Blowfish },
        { name: 'WalletConnect', icon: WalletConnect },
      ],
    },
    {
      name: 'Fireblocks',
      logo: FB,
      banner: FBBanner,
      description:
        'Battle-tested and flexible wallet infrastructure with multi-layer security.',
      learnMoreUrl: 'https://www.fireblocks.com',
      features: [
        'Utilizes MPC for distributed key management, increasing security by dividing key control.',
        'Securely connect to dApps, flexibly access EVM and non-EVM chains.',
        'Maintain full control and ownership, ensuring no risk of asset misappropriation.',
      ],
      integrations: [
        { name: 'DeFi', icon: DeFi },
        { name: 'Moralis', icon: Moralis },
        { name: 'Blowfish', icon: Blowfish },
        { name: 'WalletConnect', icon: WalletConnect },
      ],
    },
  ];

  const handleSelect = (provider: (typeof walletProviders)[0]) => {
    setSelectedProvider(
      selectedProvider?.name === provider.name ? null : provider
    );
  };

  return (
    <div className='w-full h-full flex flex-col gap-5 px-6'>
      <div className='relative h-fit border gap-0 flex-none border-gray-300 rounded-3xl flex-col px-0 grid shadow-sm max-w-screen-xl mx-auto w-full bg-white duration-200 overflow-hidden'>
        <div className='px-6 pt-6 pb-3 border-b border-gray-200 flex flex-col'>
          <div className='w-full mb-4 flex justify-between items-center'>
            <CreditCardSearch className='w-8 h-8 text-gray-700' />
          </div>
          <div className='text-xl'>
            <div>Select your Provider</div>
          </div>
          <div className='text-gray-600 flex text-sm flex-col items-start gap-4'>
            <p>
              Our wallet partners provide enterprise-grade MPC and security, so
              you&apos;ve got all you need to explore the DeFi world with
              confidence.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full grid grid-cols-3 max-w-screen-xl mx-auto gap-6 justify-start'>
        {walletProviders.map((provider, index) => (
          <div
            key={index}
            className='w-full flex flex-col gap-3 max-w-full border border-gray-300 bg-white rounded-3xl'
          >
            <div className='w-full flex flex-col p-2'></div>
            <div className='w-full px-6 pb-4 justify-between flex items-center border-b border-gray-200'>
              <div className='flex flex-row gap-2.5 items-center'>
                <Image
                  src={provider.logo}
                  className='w-8 h-8'
                  alt={provider.name}
                  width={32}
                  height={32}
                />
                <h3 className='text-xl font-medium'>{provider.name}</h3>
              </div>
              <input
                type='radio'
                name='walletProvider'
                id={`provider-${provider.name}`}
                className='w-5 h-5 text-teal-600 border-gray-300 shadow-md rounded-full focus:ring-teal-500'
                onChange={() => handleSelect(provider)}
                checked={selectedProvider?.name === provider.name}
              />
            </div>
            <p className='text-sm px-6 text-gray-600 mt-2'>
              {provider.description}
            </p>
            <a
              href={provider.learnMoreUrl}
              target='_blank'
              className='text-sm px-6 cursor-pointer font-semibold text-teal-600'
            >
              Learn more about {provider.name}
            </a>
            <div className='group px-6'>
              <p className='text-sm text-gray-800 mb-1'>Wallet Features</p>
              <ul className='flex flex-col gap-3'>
                {provider.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className='flex gap-3 text-gray-600 text-sm items-center'
                  >
                    <Image
                      src={CheckIcon}
                      className='w-5 h-5'
                      alt='Check'
                      width={20}
                      height={20}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className='text-sm font-medium text-gray-800 mt-4 mb-2'>Integrations</p>
              <div className='flex flex-wrap gap-2'>
                {provider.integrations.map((integration, index) => (
                  <span
                    key={index}
                    className='flex items-center rounded-lg bg-gray-50 border border-gray-200 text-gray-800 font-medium px-2 py-1 text-sm'
                  >
                    <Image
                      src={integration.icon}
                      className='w-4 h-4 mr-1'
                      alt={integration.name}
                      width={16}
                      height={16}
                    />
                    {integration.name}
                  </span>
                ))}
              </div>
            </div>
            <div className='flex w-full p-4 border-t border-gray-200'>
              <Button
                variant={
                  selectedProvider?.name === provider.name
                    ? 'default'
                    : 'outline'
                }
                className='w-full'
                onClick={() => handleSelect(provider)}
              >
                {selectedProvider?.name === provider.name
                  ? 'Selected'
                  : 'Select'}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-3 max-w-screen-xl mx-auto w-full justify-end'>
        <Link href={'/onboarding/superapp/wallet'}>
          <Button variant='outline'>
            <ArrowLeft className='w-5 h-5' /> Back
          </Button>
        </Link>

        <Link href={'/onboarding/superapp/wallet/customize'}>
          <Button disabled={!selectedProvider}>
            Continue <ArrowRight className='w-5 h-5' />
          </Button>
        </Link>
      </div>
    </div>
  );
}
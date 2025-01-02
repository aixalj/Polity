'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Lock03 } from '@untitled-ui/icons-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import ETHNetwork from 'public/icons/networks/ETH.svg';
import POLNetwork from 'public/icons/networks/MATIC.svg';
import WCCryptoIcon from '@/public/WCcryptoicons.svg';
import Link from 'next/link';
type VariantType = 'warning' | 'critical' | 'secure';

interface BlowFishProps {
  isOpen: boolean;
  onClose: () => void;
  onApprove: () => void;
  variant?: VariantType;
  networkAccountName: string;
  networkAccountImage: string;
  balance: string;
  selectedDApp?: {
    name: string;
    icon: string;
    url: string;
  };
  onDAppConnect?: (dApp: { name: string; icon: string; url: string }) => void;
}

export default function BlowFish({
  isOpen,
  onClose,
  onApprove,
  variant: initialVariant = 'warning',
  networkAccountName,
  networkAccountImage,
  balance,
  selectedDApp,
  onDAppConnect,
}: BlowFishProps) {
  const [variant, setVariant] = useState<VariantType>(initialVariant);

  useEffect(() => {
    console.log('BlowFish - selectedDApp changed:', {
      name: selectedDApp?.name,
      icon: selectedDApp?.icon,
      url: selectedDApp?.url,
      isOpen,
    });
  }, [selectedDApp, isOpen]);

  // Helper function to determine if we're on Polygon network
  const isPolygonNetwork = networkAccountName.toLowerCase().includes('polygon');

  // Helper function to get network-specific currency label
  const getCurrencyLabel = () => (isPolygonNetwork ? 'MATIC' : 'ETH');

  // Helper function to get network name
  const getNetworkName = () => (isPolygonNetwork ? 'Polygon' : 'Ethereum');

  const getVariantStyles = () => {
    switch (variant) {
      case 'warning':
        return {
          bgColor: 'bg-amber-500',
          borderColor: 'border-amber-300',
          textColor: 'text-amber-700',
          bgLight: 'bg-amber-50',
          bgDark: 'bg-amber-100',
          buttonBg: 'bg-amber-600',
          buttonHover: 'hover:bg-amber-700',
          iconColor: '#DC6803',
          bannerText:
            'You are allowing this website to withdraw funds from your account in the future',
        };
      case 'critical':
        return {
          bgColor: 'bg-rose-500',
          borderColor: 'border-rose-300',
          textColor: 'text-rose-700',
          bgLight: 'bg-rose-50',
          bgDark: 'bg-rose-100',
          buttonBg: 'bg-rose-600',
          buttonHover: 'hover:bg-rose-700',
          iconColor: '#E11D48',
          bannerText:
            'We believe this transaction is malicious and unsafe to sign. Approving may lead to loss of funds.',
        };
      case 'secure':
        return {
          bgColor: 'bg-green-500',
          borderColor: 'border-green-300',
          textColor: 'text-green-700',
          bgLight: 'bg-green-50',
          bgDark: 'bg-green-100',
          buttonBg: 'bg-primary-600',
          buttonHover: 'hover:bg-green-700',
          iconColor: '#16A34A',
          bannerText:
            'Your transaction has been verified as secure. You may proceed with confidence.',
        };
    }
  };

  const styles = getVariantStyles();

  const cycleVariant = () => {
    setVariant((currentVariant) => {
      switch (currentVariant) {
        case 'warning':
          return 'critical';
        case 'critical':
          return 'secure';
        case 'secure':
          return 'warning';
      }
    });
  };

  const handleApprove = () => {
    if (selectedDApp && onDAppConnect) {
      onDAppConnect(selectedDApp);
    }
    onApprove();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='w-[440px] p-0 rounded-[37px]'>
        <DialogTitle className='sr-only'>
          Connect to {selectedDApp?.name || 'DApp'}
        </DialogTitle>
        <div className={`${styles.bgColor} p-1 rounded-[36px] w-full`}>
          <div className='bg-white rounded-[32px]'>
            <div className='flex flex-col items-center pt-7 pb-5 px-6'>
              <div className='rounded-full h-12 w-12 mb-4 flex items-center justify-center'>
                {selectedDApp?.icon && selectedDApp?.name ? (
                  <div className='rounded-full overflow-hidden'>
                    <Image
                      src={selectedDApp.icon}
                      alt={selectedDApp.name}
                      width={48}
                      height={48}
                      className='object-contain'
                      priority
                    />
                  </div>
                ) : (
                  <div className='rounded-full overflow-hidden'>
                    <Image
                      src={WCCryptoIcon}
                      alt='WalletConnect'
                      width={48}
                      height={48}
                    />
                  </div>
                )}
              </div>
              <div className='flex items-center gap-1'>
                <Lock03 className='h-5 w-5' />
                <Link
                  href={selectedDApp?.url || 'app.dhedge.org'}
                  target='_blank'
                  className='text-lg font-medium'
                >
                  {selectedDApp?.url || 'app.dhedge.org'}
                </Link>
              </div>
              <div className='flex mt-2 gap-3'>
                <Badge variant='transaction'>
                  <div className='w-1.5 h-1.5 bg-green-500 m-[1px] rounded-full'></div>{' '}
                  {getNetworkName()}
                </Badge>
                <Badge variant='transaction'>
                  <Image
                    src={isPolygonNetwork ? POLNetwork : ETHNetwork}
                    alt={getCurrencyLabel()}
                    width={12}
                    height={12}
                  />{' '}
                  {getCurrencyLabel()}
                </Badge>
              </div>
              <div className='flex flex-col mt-5 gap-1 text-center'>
                <p className='text-lg font-medium'>Approve this transaction?</p>
                <p className='text-sm text-gray-600'>
                  By clicking connect, you allow this app to connect to your
                  Network Account.{' '}
                </p>
              </div>
            </div>
            <div>
              <div>
                <div className='w-full bg-gray-50 uppercase px-6 text-xs  font-medium text-gray-600 py-2'>
                  TRANSACTION DETAILS
                </div>
                <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                  <div className='w-full justify-between flex  py-1.5'>
                    {' '}
                    <p>Transaction Fee</p>
                    <p className='flex gap-2 font-medium items-center'>
                      0.056789 {getCurrencyLabel()} ($5.50)
                    </p>
                  </div>
                  <div className='w-full justify-between  flex py-1.5'>
                    {' '}
                    <p>Total Transaction Amount</p>
                    <p className='flex gap-2 font-medium items-center'>
                      $105.50
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='w-full bg-gray-50 uppercase px-6 text-xs  font-medium text-gray-600 py-2'>
                  NETWORK ACCOUNT BALANCE
                </div>
                <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                  <div className='w-full justify-between flex  py-1.5'>
                    <p>Network Asset Balance</p>
                    <p className='flex gap-2 font-medium items-center'>
                      {balance}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className='w-full bg-gray-50 uppercase px-6 text-xs  font-medium text-gray-600 py-2'>
                  To
                </div>
                <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                  <div className='w-full justify-between flex  py-1.5'>
                    <p>Network Account</p>
                    <p className='flex gap-2 font-medium items-center'>
                      {networkAccountName}
                    </p>
                  </div>
                </div>
              </div>
              <div className='px-6 pt-5 pb-6'>
                <div
                  className={`w-full rounded-2xl border p-1 ${styles.borderColor} text-sm ${styles.bgLight} ${styles.textColor} cursor-pointer`}
                  onClick={cycleVariant}
                  role='button'
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      cycleVariant();
                    }
                  }}
                >
                  <div className='p-4 flex gap-3'>
                    <svg
                      className='min-w-6 min-h-6'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M11.9836 0L14.8169 3.81643L13.367 4.89284L11.999 3.05008L10.7131 4.81919L9.25243 3.75751L11.9836 0ZM20.5112 3.53454L19.7855 8.12271L18.0019 7.8406L18.3435 5.68038L16.0732 6.01602L15.8091 4.22968L20.5112 3.53454ZM3.50623 3.55193L8.20829 4.24714L7.94422 6.03349L5.67384 5.69784L6.01552 7.85799L4.2319 8.1401L3.50623 3.55193ZM3.05008 12.0185L4.89284 10.6504L3.81643 9.20048L0 12.0338L3.75751 14.765L4.81919 13.3043L3.05008 12.0185ZM20.1836 9.20048L24 12.0338L20.2425 14.765L19.1808 13.3043L20.9499 12.0185L19.1072 10.6504L20.1836 9.20048ZM5.68908 18.3435L6.02479 16.0732L4.23837 15.8091L3.54323 20.5112L8.1314 19.7855L7.84929 18.0019L5.68908 18.3435ZM19.7877 15.8178L20.4829 20.5199L15.8947 19.7942L16.1768 18.0106L18.337 18.3522L18.0014 16.0819L19.7877 15.8178ZM14.8169 20.1836L11.9836 24L9.25243 20.2425L10.7131 19.1808L11.999 20.9499L13.367 19.1072L14.8169 20.1836Z'
                        fill={styles.iconColor}
                      />
                      <path
                        d='M12 8V12M12 16H12.01'
                        stroke={styles.iconColor}
                        strokeWidth='1.66667'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>

                    <div>
                      <h3 className='font-semibold text-sm mb-1'>
                        {variant === 'secure'
                          ? 'TRANSACTION SECURED'
                          : variant === 'critical'
                          ? 'CRITICAL WARNING'
                          : 'WARNING'}
                      </h3>
                      <p className='text-sm'>{styles.bannerText}</p>
                    </div>
                  </div>
                  <div
                    className={`p-4 flex items-center justify-center h-11 ${styles.bgDark} rounded-xl`}
                  >
                    <svg
                      className='h-6'
                      width='170'
                      height='24'
                      viewBox='0 0 170 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_311_39695)'>
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M89.1357 0L91.9873 3.81642L90.5281 4.89283L89.1515 3.05012L87.8569 4.8192L86.3867 3.75749L89.1357 0ZM97.719 3.53452L96.9885 8.1227L95.1933 7.84061L95.5369 5.68042L93.2521 6.01603L92.9862 4.22969L97.719 3.53452ZM80.6032 3.55193L85.336 4.24711L85.0701 6.03346L82.7853 5.69779L83.1289 7.85803L81.3337 8.14013L80.6032 3.55193ZM80.1443 12.0184L81.999 10.6504L80.9157 9.2005L77.0742 12.0338L80.8561 14.765L81.9246 13.3044L80.1443 12.0184ZM97.3893 9.2005L101.23 12.0338L97.4483 14.765L96.3798 13.3044L98.1601 12.0184L96.3059 10.6504L97.3893 9.2005ZM82.8001 18.3435L83.1381 16.0732L81.3405 15.8091L80.6406 20.5112L85.2587 19.7855L84.9745 18.0019L82.8001 18.3435ZM96.9909 15.8178L97.6902 20.5199L93.0721 19.7942L93.3563 18.0106L95.5307 18.3523L95.1928 16.0819L96.9909 15.8178ZM91.9873 20.1836L89.1357 24L86.3867 20.2425L87.8569 19.1808L89.1515 20.9499L90.5281 19.1072L91.9873 20.1836Z'
                          fill='black'
                        />
                        <path
                          d='M106.502 17.474H111.606C113.773 17.474 115.089 16.1313 115.089 14.2133C115.089 12.9026 114.35 11.9595 113.292 11.5439C114.158 11.0804 114.768 10.1693 114.768 9.08236C114.768 7.37207 113.468 6.28516 111.414 6.28516H106.502V17.474ZM108.477 15.6678V12.455H111.333C112.457 12.455 113.083 13.0145 113.083 14.0374C113.083 15.0604 112.441 15.6678 111.333 15.6678H108.477ZM108.477 10.7607V8.09135H111.141C112.136 8.09135 112.762 8.5389 112.762 9.41802C112.762 10.2652 112.168 10.7607 111.141 10.7607H108.477Z'
                          fill='black'
                        />
                        <path
                          d='M118.759 17.474H120.428V15.7957H119.514C119.129 15.7957 118.984 15.6358 118.984 15.2682V6.28516H117.074V15.9236C117.074 17.0424 117.588 17.474 118.759 17.474Z'
                          fill='black'
                        />
                        <path
                          d='M125.324 17.7134C127.747 17.7134 129.417 16.051 129.417 13.5735C129.417 11.096 127.747 9.43359 125.324 9.43359C122.917 9.43359 121.247 11.096 121.247 13.5735C121.247 16.051 122.917 17.7134 125.324 17.7134ZM123.221 13.5735C123.221 12.1349 124.056 11.1599 125.324 11.1599C126.592 11.1599 127.442 12.1349 127.442 13.5735C127.442 15.0121 126.592 15.9871 125.324 15.9871C124.056 15.9871 123.221 15.0121 123.221 13.5735Z'
                          fill='black'
                        />
                        <path
                          d='M132.513 17.4741H134.776L136.317 11.8157L137.842 17.4741H140.105L142.448 9.67383H140.458L138.933 15.3482L137.408 9.67383H135.209L133.685 15.3482L132.16 9.67383H130.17L132.513 17.4741Z'
                          fill='black'
                        />
                        <path
                          d='M144.978 8.50693V9.67376H142.972V11.3521H144.978V17.474H146.888V11.3521H149.408V9.67376H146.888V8.71472C146.888 8.18725 147.193 7.96348 147.691 7.96348H149.889V6.28516H147.257C145.829 6.28516 144.978 7.06837 144.978 8.50693Z'
                          fill='black'
                        />
                        <path
                          d='M150.896 17.4742H152.806V9.67392H150.896V17.4742ZM150.832 8.31528H152.886V6.36523H150.832V8.31528Z'
                          fill='black'
                        />
                        <path
                          d='M157.872 17.7134C159.958 17.7134 161.258 16.7064 161.258 15.1399C161.258 13.8452 160.408 12.9821 158.931 12.8063L157.663 12.6624C156.877 12.5665 156.508 12.3108 156.508 11.8472C156.508 11.3038 157.021 10.9841 157.84 10.9841C158.706 10.9841 159.252 11.2718 159.284 11.8952H161.194C161.098 10.2648 159.846 9.43359 157.872 9.43359C155.882 9.43359 154.63 10.3926 154.63 11.9431C154.63 13.2698 155.545 14.1329 157.005 14.2928L158.257 14.4206C158.947 14.4846 159.332 14.7403 159.332 15.2358C159.332 15.8113 158.803 16.1789 157.936 16.1789C156.973 16.1789 156.412 15.8592 156.347 15.2039H154.373C154.453 16.8502 155.737 17.7134 157.872 17.7134Z'
                          fill='black'
                        />
                        <path
                          d='M162.818 17.474H164.728V13.0145C164.728 11.8956 165.418 11.1603 166.462 11.1603C167.472 11.1603 168.05 11.7357 168.05 12.9505V17.474H169.96V12.7587C169.96 10.6488 168.773 9.434 166.847 9.434C165.98 9.434 165.226 9.72172 164.728 10.2812V6.28516H162.818V17.474Z'
                          fill='black'
                        />
                        <path
                          d='M0.0400391 7.89258H3.91564C4.90868 7.89258 5.67644 8.13464 6.21893 8.61882C6.76143 9.09387 7.03268 9.75618 7.03268 10.6058C7.03268 11.4645 6.76143 12.136 6.21893 12.6201C5.67644 13.1043 4.90868 13.3464 3.91564 13.3464H1.07445V17.4847H0.0400391V7.89258ZM3.88805 12.3872C4.55927 12.3872 5.07418 12.2319 5.43279 11.9213C5.79135 11.6107 5.97068 11.1722 5.97068 10.6058C5.97068 10.0394 5.79135 9.60546 5.43279 9.30397C5.07418 9.00253 4.55927 8.85176 3.88805 8.85176H1.07445V12.3872H3.88805Z'
                          fill='black'
                        />
                        <path
                          d='M11.1882 17.6641C10.5353 17.6641 9.95605 17.5225 9.45032 17.2393C8.95381 16.9469 8.56304 16.5449 8.27802 16.0334C8.00216 15.5127 7.86426 14.9143 7.86426 14.2383C7.86426 13.5623 8.00216 12.9685 8.27802 12.4569C8.56304 11.9362 8.95381 11.5342 9.45032 11.251C9.95605 10.9587 10.5353 10.8125 11.1882 10.8125C11.8318 10.8125 12.4018 10.9587 12.8984 11.251C13.4041 11.5342 13.7948 11.9362 14.0707 12.4569C14.3557 12.9685 14.4983 13.5623 14.4983 14.2383C14.4983 14.9143 14.3557 15.5127 14.0707 16.0334C13.7948 16.5449 13.4041 16.9469 12.8984 17.2393C12.4018 17.5225 11.8318 17.6641 11.1882 17.6641ZM8.89866 14.2383C8.89866 14.9874 9.11015 15.5949 9.53307 16.0608C9.95605 16.5267 10.5077 16.7597 11.1882 16.7597C11.8686 16.7597 12.4157 16.5313 12.8294 16.0745C13.2524 15.6086 13.4638 14.9965 13.4638 14.2383C13.4638 13.4801 13.2524 12.8726 12.8294 12.4158C12.4157 11.9499 11.8686 11.7169 11.1882 11.7169C10.5077 11.7169 9.95605 11.9499 9.53307 12.4158C9.11015 12.8817 8.89866 13.4892 8.89866 14.2383Z'
                          fill='black'
                        />
                        <path
                          d='M15.4663 10.9902H16.5145L18.1696 16.3619L19.8246 10.9902H20.9694L22.6244 16.3619L24.2795 10.9902H25.3277L23.2313 17.4855H22.059L20.4039 12.155L18.735 17.4855H17.5627L15.4663 10.9902Z'
                          fill='black'
                        />
                        <path
                          d='M29.4226 17.6641C28.7789 17.6641 28.2135 17.5225 27.7261 17.2393C27.248 16.9561 26.8756 16.5541 26.609 16.0334C26.3423 15.5127 26.209 14.9052 26.209 14.2109C26.209 13.5166 26.3377 12.9137 26.5951 12.4021C26.8618 11.8905 27.2296 11.4977 27.6985 11.2236C28.1766 10.9495 28.7191 10.8125 29.326 10.8125C30.2731 10.8125 31.0225 11.1003 31.5741 11.6758C32.1258 12.2422 32.4017 13.0096 32.4017 13.9779C32.4017 14.0601 32.3879 14.2474 32.3603 14.5397H27.2158C27.2342 15.2432 27.4411 15.7959 27.8365 16.1978C28.2318 16.5998 28.7651 16.8007 29.4364 16.8007C29.8685 16.8007 30.2409 16.7048 30.5535 16.513C30.8661 16.3212 31.1006 16.0425 31.2569 15.6771H32.2775C32.0569 16.3074 31.7029 16.7962 31.2155 17.1433C30.7282 17.4905 30.1305 17.6641 29.4226 17.6641ZM31.3949 13.7176V13.6217C31.3949 13.037 31.2064 12.562 30.8294 12.1965C30.4616 11.822 29.9605 11.6347 29.326 11.6347C28.71 11.6347 28.2089 11.8265 27.8226 12.2102C27.4457 12.5939 27.2434 13.0963 27.2158 13.7176H31.3949Z'
                          fill='black'
                        />
                        <path
                          d='M34.1396 10.9902H35.0361V12.018C35.1189 11.6982 35.2752 11.447 35.5051 11.2643C35.7349 11.0816 36.0384 10.9902 36.4154 10.9902H37.7118V11.8672H36.3326C35.9189 11.8672 35.6154 11.9906 35.4224 12.2372C35.2292 12.4839 35.1327 12.8539 35.1327 13.3472V17.4855H34.1396V10.9902Z'
                          fill='black'
                        />
                        <path
                          d='M41.4504 17.6641C40.8067 17.6641 40.2413 17.5225 39.754 17.2393C39.2758 16.9561 38.9034 16.5541 38.6368 16.0334C38.3702 15.5127 38.2368 14.9052 38.2368 14.2109C38.2368 13.5166 38.3656 12.9137 38.623 12.4021C38.8897 11.8905 39.2574 11.4977 39.7264 11.2236C40.2045 10.9495 40.747 10.8125 41.3538 10.8125C42.3009 10.8125 43.0503 11.1003 43.602 11.6758C44.1536 12.2422 44.4295 13.0096 44.4295 13.9779C44.4295 14.0601 44.4157 14.2474 44.3881 14.5397H39.2437C39.262 15.2432 39.4689 15.7959 39.8643 16.1978C40.2597 16.5998 40.793 16.8007 41.4642 16.8007C41.8963 16.8007 42.2687 16.7048 42.5813 16.513C42.894 16.3212 43.1284 16.0425 43.2847 15.6771H44.3054C44.0847 16.3074 43.7307 16.7962 43.2434 17.1433C42.7561 17.4905 42.1584 17.6641 41.4504 17.6641ZM43.4227 13.7176V13.6217C43.4227 13.037 43.2342 12.562 42.8572 12.1965C42.4894 11.822 41.9883 11.6347 41.3538 11.6347C40.7378 11.6347 40.2367 11.8265 39.8505 12.2102C39.4735 12.5939 39.2712 13.0963 39.2437 13.7176H43.4227Z'
                          fill='black'
                        />
                        <path
                          d='M48.843 17.6629C48.2266 17.6629 47.6796 17.5213 47.2015 17.2381C46.7325 16.9458 46.3648 16.5438 46.0981 16.0322C45.8406 15.5115 45.7119 14.9131 45.7119 14.2371C45.7119 13.5611 45.8406 12.9673 46.0981 12.4557C46.3648 11.935 46.7325 11.533 47.2015 11.2498C47.6796 10.9575 48.2266 10.8113 48.843 10.8113C49.3854 10.8113 49.8495 10.9118 50.2359 11.1128C50.631 11.3138 50.9391 11.6015 51.1599 11.9761V7.89258H52.1665V17.4847H51.2703V16.3473C51.0586 16.7676 50.7414 17.0919 50.3185 17.3203C49.9047 17.5487 49.4127 17.6629 48.843 17.6629ZM46.7464 14.2371C46.7464 14.9953 46.9486 15.6074 47.3532 16.0733C47.7669 16.5301 48.3097 16.7585 48.9807 16.7585C49.6518 16.7585 50.185 16.5301 50.5806 16.0733C50.9852 15.6074 51.1873 14.9953 51.1873 14.2371C51.1873 13.4789 50.9852 12.8714 50.5806 12.4146C50.185 11.9487 49.6518 11.7157 48.9807 11.7157C48.3097 11.7157 47.7669 11.9487 47.3532 12.4146C46.9486 12.8714 46.7464 13.4789 46.7464 14.2371Z'
                          fill='black'
                        />
                        <path
                          d='M61.3301 17.6629C60.7599 17.6629 60.2683 17.5532 59.8546 17.334C59.4403 17.1056 59.1279 16.7813 58.9167 16.3611V17.4847H58.02V7.89258H59.0131V12.0035C59.2243 11.6198 59.5277 11.3275 59.9232 11.1265C60.3187 10.9164 60.7877 10.8113 61.3301 10.8113C61.9459 10.8113 62.4888 10.9575 62.9578 11.2498C63.4359 11.533 63.8035 11.935 64.0608 12.4557C64.3277 12.9673 64.4611 13.5611 64.4611 14.2371C64.4611 14.9131 64.3277 15.5115 64.0608 16.0322C63.8035 16.5438 63.4359 16.9458 62.9578 17.2381C62.4888 17.5213 61.9459 17.6629 61.3301 17.6629ZM58.9853 14.2371C58.9853 14.9953 59.1831 15.6074 59.5786 16.0733C59.9832 16.5301 60.5208 16.7585 61.1923 16.7585C61.8634 16.7585 62.4015 16.5301 62.8061 16.0733C63.2199 15.6074 63.4267 14.9953 63.4267 14.2371C63.4267 13.4789 63.2199 12.8714 62.8061 12.4146C62.4015 11.9487 61.8634 11.7157 61.1923 11.7157C60.5208 11.7157 59.9832 11.9487 59.5786 12.4146C59.1831 12.8714 58.9853 13.4789 58.9853 14.2371Z'
                          fill='black'
                        />
                        <path
                          d='M65.3026 19.034H66.3648C66.613 19.034 66.7968 18.9974 66.9163 18.9243C67.045 18.8512 67.1554 18.7188 67.2475 18.527L67.9095 17.0744L65.1235 10.9902H66.2818L68.4471 15.9508L70.6128 10.9902H71.7576L68.1024 18.9792C67.9464 19.3263 67.753 19.573 67.5231 19.7191C67.3027 19.8744 66.9763 19.9521 66.5439 19.9521H65.3026V19.034Z'
                          fill='black'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_311_39695'>
                          <rect
                            width='169.92'
                            height='24'
                            fill='white'
                            transform='translate(0.0400391)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-2 px-4 pb-5'>
              <Button
                variant='outline'
                className='flex-1 shadow-none border border-gray-300 text-sm'
                onClick={onClose}
              >
                Reject
              </Button>
              <Button
                variant='secondary'
                className={`${styles.buttonBg} text-white ${styles.buttonHover} flex-1 text-sm`}
                onClick={handleApprove}
              >
                Approve
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

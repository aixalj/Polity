'use client';

import * as React from 'react';

import { useState, useEffect } from 'react';

import CheckIcon from '@/public/icons/check.svg';
import Image from 'next/image';

import { RadioGroup, RadioGroupItem } from '@/components/ui/largeradio';

import type { Config } from 'tailwindcss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import { ReceiveForm } from '@/components/receive';

import { RecipientForm } from '@/components/recipientform';

import { PaymentForm } from '@/components/paymentform';

import { NetworkSelectForm } from '@/components/networkselectform';

import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from '@/components/ui/form';

import {
  FSDialog,
  FSDialogClose,
  FSDialogContent,
  FSDialogDescription,
  FSDialogHeader,
  FSDialogTitle,
  FSDialogTrigger,
} from '@/components/ui/fsdialog';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useContext } from 'react';
import { useWallet } from '@/components/ui/formcontext';
import { useSubscribe } from '@/components/ui/subscribecontext';
import {
  Scan,
  ShoppingBag01,
  Wallet01,
  Wallet02,
} from '@untitled-ui/icons-react';
import { BidAmountForm } from './bid/amountform';

// export const ConfirmationStep = () => {
//   const { formData } = useContext(FormContext);

//   const handleConfirm = () => {
//     // Submit the form data to the server or perform any necessary actions
//     console.log(formData);
//   };
// };

const BuyReportModal = () => {
  const tabValues = ['payment', 'recipient', 'amount', 'confirm'];
  const [activeTab, setActiveTab] = useState(tabValues[0]);
  // const [bitcoinCount, setBitcoinCount] = useState(0);
  const {
    bitcoinCount,
    setBitcoinCount,
    ethCount,
    setEthCount,
    polygonCount,
    setPolygonCount,
  } = useSubscribe();

  // const [count, setCount] = useState(0);

  const cryptoValues = {
    ethValue: 3004.9, // Example ETH value in USD
    usdcValue: 1, // Example USDC value in USD
    usdtValue: 1, // Example USDT value in USD
  };

  // Add this type definition
  type TimeLeft = {
    hours: number;
    minutes: number;
    seconds: number;
  };

  const {
    availableBalance,
    usdEquivalent,
    selectedWallet,
    setSelectedWallet,
    selectedNetwork,
    setSelectedNetwork,
    selectedAsset,
    setSelectedAsset,
    selectedRecipient,
    setSelectedRecipient,
    selectedPayment,
    setSelectedPayment,
  } = useWallet();

  const handleContinue = () => {
    const currentIndex = tabValues.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabValues.length; // cycle through tabs
    setActiveTab(tabValues[nextIndex]);
  };

  const handleConfirm = () => {
    console.log('loading');
    const tabs = document.getElementById('send-tabs');
    if (tabs) {
      tabs.style.display = 'none'; // Hides the tabs with id "send-tabs"
      const loadingDiv = document.getElementById('loading');
      const completeDiv = document.getElementById('complete');
      if (loadingDiv && completeDiv) {
        loadingDiv.style.display = 'flex'; // Show loading div
        setTimeout(() => {
          loadingDiv.style.display = 'none'; // Hide loading div after 3 seconds
          completeDiv.style.display = 'flex'; // Show complete div
        }, 6000);
      }
    }
  };

  const handleBack = () => {
    const currentIndex = tabValues.indexOf(activeTab);
    const nextIndex = (currentIndex - 1 + tabValues.length) % tabValues.length; // cycle through tabs in reverse
    setActiveTab(tabValues[nextIndex]);
  };

  console.log('Active Tab:', activeTab, 'Selected Asset:', selectedAsset);

  const canContinue = () => {
    if (
      activeTab === 'payment' ||
      (activeTab === 'payment' &&
        selectedWallet.length >= 3 &&
        selectedNetwork.length >= 3 &&
        selectedAsset.length >= 3) ||
      activeTab === 'recipient' ||
      (activeTab === 'amount' && selectedAsset.length > 1) ||
      activeTab === 'confirm'
    ) {
      return true;
    }
  };

  // Add inside BuyReportModal component, near the top with other state declarations
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 2,
    minutes: 15,
    seconds: 5,
  });

  // Add this useEffect to handle the countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1;
        const newMinutes =
          newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;

        if (newHours < 0) {
          clearInterval(timer);
          return prevTime; // Timer completed
        }

        return {
          hours: newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Helper function to format the time display
  const formatTimeLeft = () => {
    return `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`;
  };

  return (
    <div className='flex w-screen h-screen bg-gray-50'>
      <div className='absolute top-[-40%]'>
        <svg
          //   width="1600"
          //   height="1120"
          viewBox='0 0 1600 1120'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_138_106587)'>
            <mask
              id='mask0_138_106587'
              style={{ maskType: 'alpha' }}
              maskUnits='userSpaceOnUse'
              x='80'
              y='0'
              width='1440'
              height='1440'
            >
              <path
                d='M1520 0H80V1440H1520V0Z'
                fill='url(#paint0_radial_138_106587)'
              />
            </mask>
            <g mask='url(#mask0_138_106587)'>
              <path
                d='M160 80V81H161V80H160ZM159 0V80H161V0H159ZM160 79H80V81H160V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 80V81H241V80H240ZM239 0V80H241V0H239ZM240 79H160V81H240V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 80V81H321V80H320ZM319 0V80H321V0H319ZM320 79H240V81H320V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 80V81H401V80H400ZM399 0V80H401V0H399ZM400 79H320V81H400V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 80V81H481V80H480ZM479 0V80H481V0H479ZM480 79H400V81H480V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 80V81H561V80H560ZM559 0V80H561V0H559ZM560 79H480V81H560V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 80V81H641V80H640ZM639 0V80H641V0H639ZM640 79H560V81H640V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 80V81H721V80H720ZM719 0V80H721V0H719ZM720 79H640V81H720V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 80V81H801V80H800ZM799 0V80H801V0H799ZM800 79H720V81H800V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 80V81H881V80H880ZM879 0V80H881V0H879ZM880 79H800V81H880V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 80V81H961V80H960ZM959 0V80H961V0H959ZM960 79H880V81H960V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 80V81H1041V80H1040ZM1039 0V80H1041V0H1039ZM1040 79H960V81H1040V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 80V81H1121V80H1120ZM1119 0V80H1121V0H1119ZM1120 79H1040V81H1120V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 80V81H1201V80H1200ZM1199 0V80H1201V0H1199ZM1200 79H1120V81H1200V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 80V81H1281V80H1280ZM1279 0V80H1281V0H1279ZM1280 79H1200V81H1280V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 80V81H1361V80H1360ZM1359 0V80H1361V0H1359ZM1360 79H1280V81H1360V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 80V81H1441V80H1440ZM1439 0V80H1441V0H1439ZM1440 79H1360V81H1440V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 80V81H1521V80H1520ZM1519 0V80H1521V0H1519ZM1520 79H1440V81H1520V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 160V161H161V160H160ZM159 80V160H161V80H159ZM160 159H80V161H160V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 160V161H241V160H240ZM239 80V160H241V80H239ZM240 159H160V161H240V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 160V161H321V160H320ZM319 80V160H321V80H319ZM320 159H240V161H320V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 160V161H401V160H400ZM399 80V160H401V80H399ZM400 159H320V161H400V159Z'
                fill='#D0D5DD'
              />
              <path d='M400 80H480V160H400V80Z' fill='#F2F4F7' />
              <path
                d='M480 160V161H481V160H480ZM479 80V160H481V80H479ZM480 159H400V161H480V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 160V161H561V160H560ZM559 80V160H561V80H559ZM560 159H480V161H560V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 160V161H641V160H640ZM639 80V160H641V80H639ZM640 159H560V161H640V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 160V161H721V160H720ZM719 80V160H721V80H719ZM720 159H640V161H720V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 160V161H801V160H800ZM799 80V160H801V80H799ZM800 159H720V161H800V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 160V161H881V160H880ZM879 80V160H881V80H879ZM880 159H800V161H880V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 160V161H961V160H960ZM959 80V160H961V80H959ZM960 159H880V161H960V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 160V161H1041V160H1040ZM1039 80V160H1041V80H1039ZM1040 159H960V161H1040V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 160V161H1121V160H1120ZM1119 80V160H1121V80H1119ZM1120 159H1040V161H1120V159Z'
                fill='#D0D5DD'
              />
              <path d='M1120 80H1200V160H1120V80Z' fill='#F2F4F7' />
              <path
                d='M1200 160V161H1201V160H1200ZM1199 80V160H1201V80H1199ZM1200 159H1120V161H1200V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 160V161H1281V160H1280ZM1279 80V160H1281V80H1279ZM1280 159H1200V161H1280V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 160V161H1361V160H1360ZM1359 80V160H1361V80H1359ZM1360 159H1280V161H1360V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 160V161H1441V160H1440ZM1439 80V160H1441V80H1439ZM1440 159H1360V161H1440V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 160V161H1521V160H1520ZM1519 80V160H1521V80H1519ZM1520 159H1440V161H1520V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 240V241H161V240H160ZM159 160V240H161V160H159ZM160 239H80V241H160V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 240V241H241V240H240ZM239 160V240H241V160H239ZM240 239H160V241H240V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 240V241H321V240H320ZM319 160V240H321V160H319ZM320 239H240V241H320V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 240V241H401V240H400ZM399 160V240H401V160H399ZM400 239H320V241H400V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 240V241H481V240H480ZM479 160V240H481V160H479ZM480 239H400V241H480V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 240V241H561V240H560ZM559 160V240H561V160H559ZM560 239H480V241H560V239Z'
                fill='#D0D5DD'
              />
              <path d='M560 160H640V240H560V160Z' fill='#F2F4F7' />
              <path
                d='M640 240V241H641V240H640ZM639 160V240H641V160H639ZM640 239H560V241H640V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 240V241H721V240H720ZM719 160V240H721V160H719ZM720 239H640V241H720V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 240V241H801V240H800ZM799 160V240H801V160H799ZM800 239H720V241H800V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 240V241H881V240H880ZM879 160V240H881V160H879ZM880 239H800V241H880V239Z'
                fill='#D0D5DD'
              />
              <path d='M880 160H960V240H880V160Z' fill='#F2F4F7' />
              <path
                d='M960 240V241H961V240H960ZM959 160V240H961V160H959ZM960 239H880V241H960V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 240V241H1041V240H1040ZM1039 160V240H1041V160H1039ZM1040 239H960V241H1040V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 240V241H1121V240H1120ZM1119 160V240H1121V160H1119ZM1120 239H1040V241H1120V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 240V241H1201V240H1200ZM1199 160V240H1201V160H1199ZM1200 239H1120V241H1200V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 240V241H1281V240H1280ZM1279 160V240H1281V160H1279ZM1280 239H1200V241H1280V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 240V241H1361V240H1360ZM1359 160V240H1361V160H1359ZM1360 239H1280V241H1360V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 240V241H1441V240H1440ZM1439 160V240H1441V160H1439ZM1440 239H1360V241H1440V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 240V241H1521V240H1520ZM1519 160V240H1521V160H1519ZM1520 239H1440V241H1520V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 320V321H161V320H160ZM159 240V320H161V240H159ZM160 319H80V321H160V319Z'
                fill='#D0D5DD'
              />
              <path d='M160 240H240V320H160V240Z' fill='#F2F4F7' />
              <path
                d='M240 320V321H241V320H240ZM239 240V320H241V240H239ZM240 319H160V321H240V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 320V321H321V320H320ZM319 240V320H321V240H319ZM320 319H240V321H320V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 320V321H401V320H400ZM399 240V320H401V240H399ZM400 319H320V321H400V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 320V321H481V320H480ZM479 240V320H481V240H479ZM480 319H400V321H480V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 320V321H561V320H560ZM559 240V320H561V240H559ZM560 319H480V321H560V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 320V321H641V320H640ZM639 240V320H641V240H639ZM640 319H560V321H640V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 320V321H721V320H720ZM719 240V320H721V240H719ZM720 319H640V321H720V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 320V321H801V320H800ZM799 240V320H801V240H799ZM800 319H720V321H800V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 320V321H881V320H880ZM879 240V320H881V240H879ZM880 319H800V321H880V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 320V321H961V320H960ZM959 240V320H961V240H959ZM960 319H880V321H960V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 320V321H1041V320H1040ZM1039 240V320H1041V240H1039ZM1040 319H960V321H1040V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 320V321H1121V320H1120ZM1119 240V320H1121V240H1119ZM1120 319H1040V321H1120V319Z'
                fill='#D0D5DD'
              />
              <path d='M1120 240H1200V320H1120V240Z' fill='#F2F4F7' />
              <path
                d='M1200 320V321H1201V320H1200ZM1199 240V320H1201V240H1199ZM1200 319H1120V321H1200V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 320V321H1281V320H1280ZM1279 240V320H1281V240H1279ZM1280 319H1200V321H1280V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 320V321H1361V320H1360ZM1359 240V320H1361V240H1359ZM1360 319H1280V321H1360V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 320V321H1441V320H1440ZM1439 240V320H1441V240H1439ZM1440 319H1360V321H1440V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 320V321H1521V320H1520ZM1519 240V320H1521V240H1519ZM1520 319H1440V321H1520V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 400V401H161V400H160ZM159 320V400H161V320H159ZM160 399H80V401H160V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 400V401H241V400H240ZM239 320V400H241V320H239ZM240 399H160V401H240V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 400V401H321V400H320ZM319 320V400H321V320H319ZM320 399H240V401H320V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 400V401H401V400H400ZM399 320V400H401V320H399ZM400 399H320V401H400V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 400V401H481V400H480ZM479 320V400H481V320H479ZM480 399H400V401H480V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 400V401H561V400H560ZM559 320V400H561V320H559ZM560 399H480V401H560V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 400V401H641V400H640ZM639 320V400H641V320H639ZM640 399H560V401H640V399Z'
                fill='#D0D5DD'
              />
              <path d='M640 320H720V400H640V320Z' fill='#F2F4F7' />
              <path
                d='M720 400V401H721V400H720ZM719 320V400H721V320H719ZM720 399H640V401H720V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 400V401H801V400H800ZM799 320V400H801V320H799ZM800 399H720V401H800V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 400V401H881V400H880ZM879 320V400H881V320H879ZM880 399H800V401H880V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 400V401H961V400H960ZM959 320V400H961V320H959ZM960 399H880V401H960V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 400V401H1041V400H1040ZM1039 320V400H1041V320H1039ZM1040 399H960V401H1040V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 400V401H1121V400H1120ZM1119 320V400H1121V320H1119ZM1120 399H1040V401H1120V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 400V401H1201V400H1200ZM1199 320V400H1201V320H1199ZM1200 399H1120V401H1200V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 400V401H1281V400H1280ZM1279 320V400H1281V320H1279ZM1280 399H1200V401H1280V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 400V401H1361V400H1360ZM1359 320V400H1361V320H1359ZM1360 399H1280V401H1360V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 400V401H1441V400H1440ZM1439 320V400H1441V320H1439ZM1440 399H1360V401H1440V399Z'
                fill='#D0D5DD'
              />
              <path d='M1440 320H1520V400H1440V320Z' fill='#F2F4F7' />
              <path
                d='M1520 400V401H1521V400H1520ZM1519 320V400H1521V320H1519ZM1520 399H1440V401H1520V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 480V481H161V480H160ZM159 400V480H161V400H159ZM160 479H80V481H160V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 480V481H241V480H240ZM239 400V480H241V400H239ZM240 479H160V481H240V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 480V481H321V480H320ZM319 400V480H321V400H319ZM320 479H240V481H320V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 480V481H401V480H400ZM399 400V480H401V400H399ZM400 479H320V481H400V479Z'
                fill='#D0D5DD'
              />
              <path d='M400 400H480V480H400V400Z' fill='#F2F4F7' />
              <path
                d='M480 480V481H481V480H480ZM479 400V480H481V400H479ZM480 479H400V481H480V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 480V481H561V480H560ZM559 400V480H561V400H559ZM560 479H480V481H560V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 480V481H641V480H640ZM639 400V480H641V400H639ZM640 479H560V481H640V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 480V481H721V480H720ZM719 400V480H721V400H719ZM720 479H640V481H720V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 480V481H801V480H800ZM799 400V480H801V400H799ZM800 479H720V481H800V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 480V481H881V480H880ZM879 400V480H881V400H879ZM880 479H800V481H880V479Z'
                fill='#D0D5DD'
              />
              <path d='M880 400H960V480H880V400Z' fill='#F2F4F7' />
              <path
                d='M960 480V481H961V480H960ZM959 400V480H961V400H959ZM960 479H880V481H960V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 480V481H1041V480H1040ZM1039 400V480H1041V400H1039ZM1040 479H960V481H1040V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 480V481H1121V480H1120ZM1119 400V480H1121V400H1119ZM1120 479H1040V481H1120V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 480V481H1201V480H1200ZM1199 400V480H1201V400H1199ZM1200 479H1120V481H1200V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 480V481H1281V480H1280ZM1279 400V480H1281V400H1279ZM1280 479H1200V481H1280V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 480V481H1361V480H1360ZM1359 400V480H1361V400H1359ZM1360 479H1280V481H1360V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 480V481H1441V480H1440ZM1439 400V480H1441V400H1439ZM1440 479H1360V481H1440V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 480V481H1521V480H1520ZM1519 400V480H1521V400H1519ZM1520 479H1440V481H1520V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 560V561H161V560H160ZM159 480V560H161V480H159ZM160 559H80V561H160V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 560V561H241V560H240ZM239 480V560H241V480H239ZM240 559H160V561H240V559Z'
                fill='#D0D5DD'
              />
              <path d='M240 480H320V560H240V480Z' fill='#F2F4F7' />
              <path
                d='M320 560V561H321V560H320ZM319 480V560H321V480H319ZM320 559H240V561H320V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 560V561H401V560H400ZM399 480V560H401V480H399ZM400 559H320V561H400V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 560V561H481V560H480ZM479 480V560H481V480H479ZM480 559H400V561H480V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 560V561H561V560H560ZM559 480V560H561V480H559ZM560 559H480V561H560V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 560V561H641V560H640ZM639 480V560H641V480H639ZM640 559H560V561H640V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 560V561H721V560H720ZM719 480V560H721V480H719ZM720 559H640V561H720V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 560V561H801V560H800ZM799 480V560H801V480H799ZM800 559H720V561H800V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 560V561H881V560H880ZM879 480V560H881V480H879ZM880 559H800V561H880V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 560V561H961V560H960ZM959 480V560H961V480H959ZM960 559H880V561H960V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 560V561H1041V560H1040ZM1039 480V560H1041V480H1039ZM1040 559H960V561H1040V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 560V561H1121V560H1120ZM1119 480V560H1121V480H1119ZM1120 559H1040V561H1120V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 560V561H1201V560H1200ZM1199 480V560H1201V480H1199ZM1200 559H1120V561H1200V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 560V561H1281V560H1280ZM1279 480V560H1281V480H1279ZM1280 559H1200V561H1280V559Z'
                fill='#D0D5DD'
              />
              <path d='M1280 480H1360V560H1280V480Z' fill='#F2F4F7' />
              <path
                d='M1360 560V561H1361V560H1360ZM1359 480V560H1361V480H1359ZM1360 559H1280V561H1360V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 560V561H1441V560H1440ZM1439 480V560H1441V480H1439ZM1440 559H1360V561H1440V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 560V561H1521V560H1520ZM1519 480V560H1521V480H1519ZM1520 559H1440V561H1520V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 640V641H161V640H160ZM159 560V640H161V560H159ZM160 639H80V641H160V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 640V641H241V640H240ZM239 560V640H241V560H239ZM240 639H160V641H240V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 640V641H321V640H320ZM319 560V640H321V560H319ZM320 639H240V641H320V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 640V641H401V640H400ZM399 560V640H401V560H399ZM400 639H320V641H400V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 640V641H481V640H480ZM479 560V640H481V560H479ZM480 639H400V641H480V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 640V641H561V640H560ZM559 560V640H561V560H559ZM560 639H480V641H560V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 640V641H641V640H640ZM639 560V640H641V560H639ZM640 639H560V641H640V639Z'
                fill='#D0D5DD'
              />
              <path d='M640 560H720V640H640V560Z' fill='#F2F4F7' />
              <path
                d='M720 640V641H721V640H720ZM719 560V640H721V560H719ZM720 639H640V641H720V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 640V641H801V640H800ZM799 560V640H801V560H799ZM800 639H720V641H800V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 640V641H881V640H880ZM879 560V640H881V560H879ZM880 639H800V641H880V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 640V641H961V640H960ZM959 560V640H961V560H959ZM960 639H880V641H960V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 640V641H1041V640H1040ZM1039 560V640H1041V560H1039ZM1040 639H960V641H1040V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 640V641H1121V640H1120ZM1119 560V640H1121V560H1119ZM1120 639H1040V641H1120V639Z'
                fill='#D0D5DD'
              />
              <path d='M1120 560H1200V640H1120V560Z' fill='#F2F4F7' />
              <path
                d='M1200 640V641H1201V640H1200ZM1199 560V640H1201V560H1199ZM1200 639H1120V641H1200V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 640V641H1281V640H1280ZM1279 560V640H1281V560H1279ZM1280 639H1200V641H1280V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 640V641H1361V640H1360ZM1359 560V640H1361V560H1359ZM1360 639H1280V641H1360V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 640V641H1441V640H1440ZM1439 560V640H1441V560H1439ZM1440 639H1360V641H1440V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 640V641H1521V640H1520ZM1519 560V640H1521V560H1519ZM1520 639H1440V641H1520V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 720V721H161V720H160ZM159 640V720H161V640H159ZM160 719H80V721H160V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 720V721H241V720H240ZM239 640V720H241V640H239ZM240 719H160V721H240V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 720V721H321V720H320ZM319 640V720H321V640H319ZM320 719H240V721H320V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 720V721H401V720H400ZM399 640V720H401V640H399ZM400 719H320V721H400V719Z'
                fill='#D0D5DD'
              />
              <path d='M400 640H480V720H400V640Z' fill='#F2F4F7' />
              <path
                d='M480 720V721H481V720H480ZM479 640V720H481V640H479ZM480 719H400V721H480V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 720V721H561V720H560ZM559 640V720H561V640H559ZM560 719H480V721H560V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 720V721H641V720H640ZM639 640V720H641V640H639ZM640 719H560V721H640V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 720V721H721V720H720ZM719 640V720H721V640H719ZM720 719H640V721H720V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 720V721H801V720H800ZM799 640V720H801V640H799ZM800 719H720V721H800V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 720V721H881V720H880ZM879 640V720H881V640H879ZM880 719H800V721H880V719Z'
                fill='#D0D5DD'
              />
              <path d='M880 640H960V720H880V640Z' fill='#F2F4F7' />
              <path
                d='M960 720V721H961V720H960ZM959 640V720H961V640H959ZM960 719H880V721H960V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 720V721H1041V720H1040ZM1039 640V720H1041V640H1039ZM1040 719H960V721H1040V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 720V721H1121V720H1120ZM1119 640V720H1121V640H1119ZM1120 719H1040V721H1120V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 720V721H1201V720H1200ZM1199 640V720H1201V640H1199ZM1200 719H1120V721H1200V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 720V721H1281V720H1280ZM1279 640V720H1281V640H1279ZM1280 719H1200V721H1280V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 720V721H1361V720H1360ZM1359 640V720H1361V640H1359ZM1360 719H1280V721H1360V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 720V721H1441V720H1440ZM1439 640V720H1441V640H1439ZM1440 719H1360V721H1440V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 720V721H1521V720H1520ZM1519 640V720H1521V640H1519ZM1520 719H1440V721H1520V719Z'
                fill='#D0D5DD'
              />
              <path d='M80 720H160V800H80V720Z' fill='#F2F4F7' />
              <path
                d='M160 800V801H161V800H160ZM159 720V800H161V720H159ZM160 799H80V801H160V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 800V801H241V800H240ZM239 720V800H241V720H239ZM240 799H160V801H240V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 800V801H321V800H320ZM319 720V800H321V720H319ZM320 799H240V801H320V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 800V801H401V800H400ZM399 720V800H401V720H399ZM400 799H320V801H400V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 800V801H481V800H480ZM479 720V800H481V720H479ZM480 799H400V801H480V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 800V801H561V800H560ZM559 720V800H561V720H559ZM560 799H480V801H560V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 800V801H641V800H640ZM639 720V800H641V720H639ZM640 799H560V801H640V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 800V801H721V800H720ZM719 720V800H721V720H719ZM720 799H640V801H720V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 800V801H801V800H800ZM799 720V800H801V720H799ZM800 799H720V801H800V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 800V801H881V800H880ZM879 720V800H881V720H879ZM880 799H800V801H880V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 800V801H961V800H960ZM959 720V800H961V720H959ZM960 799H880V801H960V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 800V801H1041V800H1040ZM1039 720V800H1041V720H1039ZM1040 799H960V801H1040V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 800V801H1121V800H1120ZM1119 720V800H1121V720H1119ZM1120 799H1040V801H1120V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 800V801H1201V800H1200ZM1199 720V800H1201V720H1199ZM1200 799H1120V801H1200V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 800V801H1281V800H1280ZM1279 720V800H1281V720H1279ZM1280 799H1200V801H1280V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 800V801H1361V800H1360ZM1359 720V800H1361V720H1359ZM1360 799H1280V801H1360V799Z'
                fill='#D0D5DD'
              />
              <path d='M1360 720H1440V800H1360V720Z' fill='#F2F4F7' />
              <path
                d='M1440 800V801H1441V800H1440ZM1439 720V800H1441V720H1439ZM1440 799H1360V801H1440V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 800V801H1521V800H1520ZM1519 720V800H1521V720H1519ZM1520 799H1440V801H1520V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 880V881H161V880H160ZM159 800V880H161V800H159ZM160 879H80V881H160V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 880V881H241V880H240ZM239 800V880H241V800H239ZM240 879H160V881H240V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 880V881H321V880H320ZM319 800V880H321V800H319ZM320 879H240V881H320V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 880V881H401V880H400ZM399 800V880H401V800H399ZM400 879H320V881H400V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 880V881H481V880H480ZM479 800V880H481V800H479ZM480 879H400V881H480V879Z'
                fill='#D0D5DD'
              />
              <path d='M480 800H560V880H480V800Z' fill='#F2F4F7' />
              <path
                d='M560 880V881H561V880H560ZM559 800V880H561V800H559ZM560 879H480V881H560V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 880V881H641V880H640ZM639 800V880H641V800H639ZM640 879H560V881H640V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 880V881H721V880H720ZM719 800V880H721V800H719ZM720 879H640V881H720V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 880V881H801V880H800ZM799 800V880H801V800H799ZM800 879H720V881H800V879Z'
                fill='#D0D5DD'
              />
              <path d='M800 800H880V880H800V800Z' fill='#F2F4F7' />
              <path
                d='M880 880V881H881V880H880ZM879 800V880H881V800H879ZM880 879H800V881H880V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 880V881H961V880H960ZM959 800V880H961V800H959ZM960 879H880V881H960V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 880V881H1041V880H1040ZM1039 800V880H1041V800H1039ZM1040 879H960V881H1040V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 880V881H1121V880H1120ZM1119 800V880H1121V800H1119ZM1120 879H1040V881H1120V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 880V881H1201V880H1200ZM1199 800V880H1201V800H1199ZM1200 879H1120V881H1200V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 880V881H1281V880H1280ZM1279 800V880H1281V800H1279ZM1280 879H1200V881H1280V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 880V881H1361V880H1360ZM1359 800V880H1361V800H1359ZM1360 879H1280V881H1360V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 880V881H1441V880H1440ZM1439 800V880H1441V800H1439ZM1440 879H1360V881H1440V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 880V881H1521V880H1520ZM1519 800V880H1521V800H1519ZM1520 879H1440V881H1520V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 960V961H161V960H160ZM159 880V960H161V880H159ZM160 959H80V961H160V959Z'
                fill='#D0D5DD'
              />
              <path d='M160 880H240V960H160V880Z' fill='#F2F4F7' />
              <path
                d='M240 960V961H241V960H240ZM239 880V960H241V880H239ZM240 959H160V961H240V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 960V961H321V960H320ZM319 880V960H321V880H319ZM320 959H240V961H320V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 960V961H401V960H400ZM399 880V960H401V880H399ZM400 959H320V961H400V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 960V961H481V960H480ZM479 880V960H481V880H479ZM480 959H400V961H480V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 960V961H561V960H560ZM559 880V960H561V880H559ZM560 959H480V961H560V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 960V961H641V960H640ZM639 880V960H641V880H639ZM640 959H560V961H640V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 960V961H721V960H720ZM719 880V960H721V880H719ZM720 959H640V961H720V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 960V961H801V960H800ZM799 880V960H801V880H799ZM800 959H720V961H800V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 960V961H881V960H880ZM879 880V960H881V880H879ZM880 959H800V961H880V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 960V961H961V960H960ZM959 880V960H961V880H959ZM960 959H880V961H960V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 960V961H1041V960H1040ZM1039 880V960H1041V880H1039ZM1040 959H960V961H1040V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 960V961H1121V960H1120ZM1119 880V960H1121V880H1119ZM1120 959H1040V961H1120V959Z'
                fill='#D0D5DD'
              />
              <path d='M1120 880H1200V960H1120V880Z' fill='#F2F4F7' />
              <path
                d='M1200 960V961H1201V960H1200ZM1199 880V960H1201V880H1199ZM1200 959H1120V961H1200V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 960V961H1281V960H1280ZM1279 880V960H1281V880H1279ZM1280 959H1200V961H1280V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 960V961H1361V960H1360ZM1359 880V960H1361V880H1359ZM1360 959H1280V961H1360V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 960V961H1441V960H1440ZM1439 880V960H1441V880H1439ZM1440 959H1360V961H1440V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 960V961H1521V960H1520ZM1519 880V960H1521V880H1519ZM1520 959H1440V961H1520V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 1040V1041H161V1040H160ZM159 960V1040H161V960H159ZM160 1039H80V1041H160V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 1040V1041H241V1040H240ZM239 960V1040H241V960H239ZM240 1039H160V1041H240V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 1040V1041H321V1040H320ZM319 960V1040H321V960H319ZM320 1039H240V1041H320V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 1040V1041H401V1040H400ZM399 960V1040H401V960H399ZM400 1039H320V1041H400V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 1040V1041H481V1040H480ZM479 960V1040H481V960H479ZM480 1039H400V1041H480V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 1040V1041H561V1040H560ZM559 960V1040H561V960H559ZM560 1039H480V1041H560V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 1040V1041H641V1040H640ZM639 960V1040H641V960H639ZM640 1039H560V1041H640V1039Z'
                fill='#D0D5DD'
              />
              <path d='M640 960H720V1040H640V960Z' fill='#F2F4F7' />
              <path
                d='M720 1040V1041H721V1040H720ZM719 960V1040H721V960H719ZM720 1039H640V1041H720V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 1040V1041H801V1040H800ZM799 960V1040H801V960H799ZM800 1039H720V1041H800V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 1040V1041H881V1040H880ZM879 960V1040H881V960H879ZM880 1039H800V1041H880V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 1040V1041H961V1040H960ZM959 960V1040H961V960H959ZM960 1039H880V1041H960V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 1040V1041H1041V1040H1040ZM1039 960V1040H1041V960H1039ZM1040 1039H960V1041H1040V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 1040V1041H1121V1040H1120ZM1119 960V1040H1121V960H1119ZM1120 1039H1040V1041H1120V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 1040V1041H1201V1040H1200ZM1199 960V1040H1201V960H1199ZM1200 1039H1120V1041H1200V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 1040V1041H1281V1040H1280ZM1279 960V1040H1281V960H1279ZM1280 1039H1200V1041H1280V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 1040V1041H1361V1040H1360ZM1359 960V1040H1361V960H1359ZM1360 1039H1280V1041H1360V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 1040V1041H1441V1040H1440ZM1439 960V1040H1441V960H1439ZM1440 1039H1360V1041H1440V1039Z'
                fill='#D0D5DD'
              />
              <path d='M1440 960H1520V1040H1440V960Z' fill='#F2F4F7' />
              <path
                d='M1520 1040V1041H1521V1040H1520ZM1519 960V1040H1521V960H1519ZM1520 1039H1440V1041H1520V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 1120V1121H161V1120H160ZM159 1040V1120H161V1040H159ZM160 1119H80V1121H160V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 1120V1121H241V1120H240ZM239 1040V1120H241V1040H239ZM240 1119H160V1121H240V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 1120V1121H321V1120H320ZM319 1040V1120H321V1040H319ZM320 1119H240V1121H320V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 1120V1121H401V1120H400ZM399 1040V1120H401V1040H399ZM400 1119H320V1121H400V1119Z'
                fill='#D0D5DD'
              />
              <path d='M400 1040H480V1120H400V1040Z' fill='#F2F4F7' />
              <path
                d='M480 1120V1121H481V1120H480ZM479 1040V1120H481V1040H479ZM480 1119H400V1121H480V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 1120V1121H561V1120H560ZM559 1040V1120H561V1040H559ZM560 1119H480V1121H560V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 1120V1121H641V1120H640ZM639 1040V1120H641V1040H639ZM640 1119H560V1121H640V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 1120V1121H721V1120H720ZM719 1040V1120H721V1040H719ZM720 1119H640V1121H720V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 1120V1121H801V1120H800ZM799 1040V1120H801V1040H799ZM800 1119H720V1121H800V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 1120V1121H881V1120H880ZM879 1040V1120H881V1040H879ZM880 1119H800V1121H880V1119Z'
                fill='#D0D5DD'
              />
              <path d='M880 1040H960V1120H880V1040Z' fill='#F2F4F7' />
              <path
                d='M960 1120V1121H961V1120H960ZM959 1040V1120H961V1040H959ZM960 1119H880V1121H960V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 1120V1121H1041V1120H1040ZM1039 1040V1120H1041V1040H1039ZM1040 1119H960V1121H1040V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 1120V1121H1121V1120H1120ZM1119 1040V1120H1121V1040H1119ZM1120 1119H1040V1121H1120V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 1120V1121H1201V1120H1200ZM1199 1040V1120H1201V1040H1199ZM1200 1119H1120V1121H1200V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 1120V1121H1281V1120H1280ZM1279 1040V1120H1281V1040H1279ZM1280 1119H1200V1121H1280V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 1120V1121H1361V1120H1360ZM1359 1040V1120H1361V1040H1359ZM1360 1119H1280V1121H1360V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 1120V1121H1441V1120H1440ZM1439 1040V1120H1441V1040H1439ZM1440 1119H1360V1121H1440V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1520 1120V1121H1521V1120H1520ZM1519 1040V1120H1521V1040H1519ZM1520 1119H1440V1121H1520V1119Z'
                fill='#D0D5DD'
              />
            </g>
          </g>
          <defs>
            <radialGradient
              id='paint0_radial_138_106587'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(800 -0.000129104) rotate(90) scale(1083 565.257)'
            >
              <stop />
              <stop offset='0.953125' stop-opacity='0' />
            </radialGradient>
            <clipPath id='clip0_138_106587'>
              <rect width='1600' height='1120' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        defaultValue='payment'
        id='send-tabs'
        className='flex w-screen h-screen bg-gray-50'
      >
        <div className='fixed inset-0 w-screen h-screen mx-auto -translate-y-10 overflow-hidden '>
          <div className='absolute inset-0 z-10 h-full bg-gradient-to-b from-transparent via-gray-50/60 to-gray-50 opacity-100'></div>
          <div className='absolute inset-0 z-10 h-full bg-gradient-to-l from-transparent via-gray-50/30 to-gray-50 opacity-100'></div>
          <div className='absolute inset-0 z-10 h-full bg-gradient-to-r from-transparent via-gray-50/30 to-gray-50 opacity-100'></div>
          <svg
            width='100vw'
            height='100vh'
            viewBox='0 0 1440 1440'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask
              id='mask0_173_20898'
              mask-type='alpha'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='1440'
              height='1440'
            >
              <path
                d='M1440 0H0V1440H1440V0Z'
                fill='url(#paint0_radial_173_20898)'
              />
            </mask>
            <g mask='url(#mask0_173_20898)'>
              <path
                d='M80 80V81H81V80H80ZM79 0V80H81V0H79ZM80 79H0V81H80V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 80V81H161V80H160ZM159 0V80H161V0H159ZM160 79H80V81H160V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 80V81H241V80H240ZM239 0V80H241V0H239ZM240 79H160V81H240V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 80V81H321V80H320ZM319 0V80H321V0H319ZM320 79H240V81H320V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 80V81H401V80H400ZM399 0V80H401V0H399ZM400 79H320V81H400V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 80V81H481V80H480ZM479 0V80H481V0H479ZM480 79H400V81H480V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 80V81H561V80H560ZM559 0V80H561V0H559ZM560 79H480V81H560V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 80V81H641V80H640ZM639 0V80H641V0H639ZM640 79H560V81H640V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 80V81H721V80H720ZM719 0V80H721V0H719ZM720 79H640V81H720V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 80V81H801V80H800ZM799 0V80H801V0H799ZM800 79H720V81H800V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 80V81H881V80H880ZM879 0V80H881V0H879ZM880 79H800V81H880V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 80V81H961V80H960ZM959 0V80H961V0H959ZM960 79H880V81H960V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 80V81H1041V80H1040ZM1039 0V80H1041V0H1039ZM1040 79H960V81H1040V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 80V81H1121V80H1120ZM1119 0V80H1121V0H1119ZM1120 79H1040V81H1120V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 80V81H1201V80H1200ZM1199 0V80H1201V0H1199ZM1200 79H1120V81H1200V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 80V81H1281V80H1280ZM1279 0V80H1281V0H1279ZM1280 79H1200V81H1280V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 80V81H1361V80H1360ZM1359 0V80H1361V0H1359ZM1360 79H1280V81H1360V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 80V81H1441V80H1440ZM1439 0V80H1441V0H1439ZM1440 79H1360V81H1440V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 160V161H81V160H80ZM79 80V160H81V80H79ZM80 159H0V161H80V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 160V161H161V160H160ZM159 80V160H161V80H159ZM160 159H80V161H160V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 160V161H241V160H240ZM239 80V160H241V80H239ZM240 159H160V161H240V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 160V161H321V160H320ZM319 80V160H321V80H319ZM320 159H240V161H320V159Z'
                fill='#D0D5DD'
              />
              <path d='M320 80H400V160H320V80Z' fill='#F2F4F7' />
              <path
                d='M400 160V161H401V160H400ZM399 80V160H401V80H399ZM400 159H320V161H400V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 160V161H481V160H480ZM479 80V160H481V80H479ZM480 159H400V161H480V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 160V161H561V160H560ZM559 80V160H561V80H559ZM560 159H480V161H560V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 160V161H641V160H640ZM639 80V160H641V80H639ZM640 159H560V161H640V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 160V161H721V160H720ZM719 80V160H721V80H719ZM720 159H640V161H720V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 160V161H801V160H800ZM799 80V160H801V80H799ZM800 159H720V161H800V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 160V161H881V160H880ZM879 80V160H881V80H879ZM880 159H800V161H880V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 160V161H961V160H960ZM959 80V160H961V80H959ZM960 159H880V161H960V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 160V161H1041V160H1040ZM1039 80V160H1041V80H1039ZM1040 159H960V161H1040V159Z'
                fill='#D0D5DD'
              />
              <path d='M1040 80H1120V160H1040V80Z' fill='#F2F4F7' />
              <path
                d='M1120 160V161H1121V160H1120ZM1119 80V160H1121V80H1119ZM1120 159H1040V161H1120V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 160V161H1201V160H1200ZM1199 80V160H1201V80H1199ZM1200 159H1120V161H1200V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 160V161H1281V160H1280ZM1279 80V160H1281V80H1279ZM1280 159H1200V161H1280V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 160V161H1361V160H1360ZM1359 80V160H1361V80H1359ZM1360 159H1280V161H1360V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 160V161H1441V160H1440ZM1439 80V160H1441V80H1439ZM1440 159H1360V161H1440V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 240V241H81V240H80ZM79 160V240H81V160H79ZM80 239H0V241H80V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 240V241H161V240H160ZM159 160V240H161V160H159ZM160 239H80V241H160V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 240V241H241V240H240ZM239 160V240H241V160H239ZM240 239H160V241H240V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 240V241H321V240H320ZM319 160V240H321V160H319ZM320 239H240V241H320V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 240V241H401V240H400ZM399 160V240H401V160H399ZM400 239H320V241H400V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 240V241H481V240H480ZM479 160V240H481V160H479ZM480 239H400V241H480V239Z'
                fill='#D0D5DD'
              />
              <path d='M480 160H560V240H480V160Z' fill='#F2F4F7' />
              <path
                d='M560 240V241H561V240H560ZM559 160V240H561V160H559ZM560 239H480V241H560V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 240V241H641V240H640ZM639 160V240H641V160H639ZM640 239H560V241H640V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 240V241H721V240H720ZM719 160V240H721V160H719ZM720 239H640V241H720V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 240V241H801V240H800ZM799 160V240H801V160H799ZM800 239H720V241H800V239Z'
                fill='#D0D5DD'
              />
              <path d='M800 160H880V240H800V160Z' fill='#F2F4F7' />
              <path
                d='M880 240V241H881V240H880ZM879 160V240H881V160H879ZM880 239H800V241H880V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 240V241H961V240H960ZM959 160V240H961V160H959ZM960 239H880V241H960V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 240V241H1041V240H1040ZM1039 160V240H1041V160H1039ZM1040 239H960V241H1040V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 240V241H1121V240H1120ZM1119 160V240H1121V160H1119ZM1120 239H1040V241H1120V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 240V241H1201V240H1200ZM1199 160V240H1201V160H1199ZM1200 239H1120V241H1200V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 240V241H1281V240H1280ZM1279 160V240H1281V160H1279ZM1280 239H1200V241H1280V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 240V241H1361V240H1360ZM1359 160V240H1361V160H1359ZM1360 239H1280V241H1360V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 240V241H1441V240H1440ZM1439 160V240H1441V160H1439ZM1440 239H1360V241H1440V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 320V321H81V320H80ZM79 240V320H81V240H79ZM80 319H0V321H80V319Z'
                fill='#D0D5DD'
              />
              <path d='M80 240H160V320H80V240Z' fill='#F2F4F7' />
              <path
                d='M160 320V321H161V320H160ZM159 240V320H161V240H159ZM160 319H80V321H160V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 320V321H241V320H240ZM239 240V320H241V240H239ZM240 319H160V321H240V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 320V321H321V320H320ZM319 240V320H321V240H319ZM320 319H240V321H320V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 320V321H401V320H400ZM399 240V320H401V240H399ZM400 319H320V321H400V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 320V321H481V320H480ZM479 240V320H481V240H479ZM480 319H400V321H480V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 320V321H561V320H560ZM559 240V320H561V240H559ZM560 319H480V321H560V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 320V321H641V320H640ZM639 240V320H641V240H639ZM640 319H560V321H640V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 320V321H721V320H720ZM719 240V320H721V240H719ZM720 319H640V321H720V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 320V321H801V320H800ZM799 240V320H801V240H799ZM800 319H720V321H800V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 320V321H881V320H880ZM879 240V320H881V240H879ZM880 319H800V321H880V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 320V321H961V320H960ZM959 240V320H961V240H959ZM960 319H880V321H960V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 320V321H1041V320H1040ZM1039 240V320H1041V240H1039ZM1040 319H960V321H1040V319Z'
                fill='#D0D5DD'
              />
              <path d='M1040 240H1120V320H1040V240Z' fill='#F2F4F7' />
              <path
                d='M1120 320V321H1121V320H1120ZM1119 240V320H1121V240H1119ZM1120 319H1040V321H1120V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 320V321H1201V320H1200ZM1199 240V320H1201V240H1199ZM1200 319H1120V321H1200V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 320V321H1281V320H1280ZM1279 240V320H1281V240H1279ZM1280 319H1200V321H1280V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 320V321H1361V320H1360ZM1359 240V320H1361V240H1359ZM1360 319H1280V321H1360V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 320V321H1441V320H1440ZM1439 240V320H1441V240H1439ZM1440 319H1360V321H1440V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 400V401H81V400H80ZM79 320V400H81V320H79ZM80 399H0V401H80V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 400V401H161V400H160ZM159 320V400H161V320H159ZM160 399H80V401H160V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 400V401H241V400H240ZM239 320V400H241V320H239ZM240 399H160V401H240V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 400V401H321V400H320ZM319 320V400H321V320H319ZM320 399H240V401H320V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 400V401H401V400H400ZM399 320V400H401V320H399ZM400 399H320V401H400V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 400V401H481V400H480ZM479 320V400H481V320H479ZM480 399H400V401H480V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 400V401H561V400H560ZM559 320V400H561V320H559ZM560 399H480V401H560V399Z'
                fill='#D0D5DD'
              />
              <path d='M560 320H640V400H560V320Z' fill='#F2F4F7' />
              <path
                d='M640 400V401H641V400H640ZM639 320V400H641V320H639ZM640 399H560V401H640V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 400V401H721V400H720ZM719 320V400H721V320H719ZM720 399H640V401H720V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 400V401H801V400H800ZM799 320V400H801V320H799ZM800 399H720V401H800V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 400V401H881V400H880ZM879 320V400H881V320H879ZM880 399H800V401H880V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 400V401H961V400H960ZM959 320V400H961V320H959ZM960 399H880V401H960V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 400V401H1041V400H1040ZM1039 320V400H1041V320H1039ZM1040 399H960V401H1040V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 400V401H1121V400H1120ZM1119 320V400H1121V320H1119ZM1120 399H1040V401H1120V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 400V401H1201V400H1200ZM1199 320V400H1201V320H1199ZM1200 399H1120V401H1200V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 400V401H1281V400H1280ZM1279 320V400H1281V320H1279ZM1280 399H1200V401H1280V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 400V401H1361V400H1360ZM1359 320V400H1361V320H1359ZM1360 399H1280V401H1360V399Z'
                fill='#D0D5DD'
              />
              <path d='M1360 320H1440V400H1360V320Z' fill='#F2F4F7' />
              <path
                d='M1440 400V401H1441V400H1440ZM1439 320V400H1441V320H1439ZM1440 399H1360V401H1440V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 480V481H81V480H80ZM79 400V480H81V400H79ZM80 479H0V481H80V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 480V481H161V480H160ZM159 400V480H161V400H159ZM160 479H80V481H160V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 480V481H241V480H240ZM239 400V480H241V400H239ZM240 479H160V481H240V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 480V481H321V480H320ZM319 400V480H321V400H319ZM320 479H240V481H320V479Z'
                fill='#D0D5DD'
              />
              <path d='M320 400H400V480H320V400Z' fill='#F2F4F7' />
              <path
                d='M400 480V481H401V480H400ZM399 400V480H401V400H399ZM400 479H320V481H400V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 480V481H481V480H480ZM479 400V480H481V400H479ZM480 479H400V481H480V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 480V481H561V480H560ZM559 400V480H561V400H559ZM560 479H480V481H560V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 480V481H641V480H640ZM639 400V480H641V400H639ZM640 479H560V481H640V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 480V481H721V480H720ZM719 400V480H721V400H719ZM720 479H640V481H720V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 480V481H801V480H800ZM799 400V480H801V400H799ZM800 479H720V481H800V479Z'
                fill='#D0D5DD'
              />
              <path d='M800 400H880V480H800V400Z' fill='#F2F4F7' />
              <path
                d='M880 480V481H881V480H880ZM879 400V480H881V400H879ZM880 479H800V481H880V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 480V481H961V480H960ZM959 400V480H961V400H959ZM960 479H880V481H960V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 480V481H1041V480H1040ZM1039 400V480H1041V400H1039ZM1040 479H960V481H1040V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 480V481H1121V480H1120ZM1119 400V480H1121V400H1119ZM1120 479H1040V481H1120V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 480V481H1201V480H1200ZM1199 400V480H1201V400H1199ZM1200 479H1120V481H1200V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 480V481H1281V480H1280ZM1279 400V480H1281V400H1279ZM1280 479H1200V481H1280V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 480V481H1361V480H1360ZM1359 400V480H1361V400H1359ZM1360 479H1280V481H1360V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 480V481H1441V480H1440ZM1439 400V480H1441V400H1439ZM1440 479H1360V481H1440V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 560V561H81V560H80ZM79 480V560H81V480H79ZM80 559H0V561H80V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 560V561H161V560H160ZM159 480V560H161V480H159ZM160 559H80V561H160V559Z'
                fill='#D0D5DD'
              />
              <path d='M160 480H240V560H160V480Z' fill='#F2F4F7' />
              <path
                d='M240 560V561H241V560H240ZM239 480V560H241V480H239ZM240 559H160V561H240V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 560V561H321V560H320ZM319 480V560H321V480H319ZM320 559H240V561H320V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 560V561H401V560H400ZM399 480V560H401V480H399ZM400 559H320V561H400V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 560V561H481V560H480ZM479 480V560H481V480H479ZM480 559H400V561H480V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 560V561H561V560H560ZM559 480V560H561V480H559ZM560 559H480V561H560V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 560V561H641V560H640ZM639 480V560H641V480H639ZM640 559H560V561H640V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 560V561H721V560H720ZM719 480V560H721V480H719ZM720 559H640V561H720V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 560V561H801V560H800ZM799 480V560H801V480H799ZM800 559H720V561H800V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 560V561H881V560H880ZM879 480V560H881V480H879ZM880 559H800V561H880V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 560V561H961V560H960ZM959 480V560H961V480H959ZM960 559H880V561H960V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 560V561H1041V560H1040ZM1039 480V560H1041V480H1039ZM1040 559H960V561H1040V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 560V561H1121V560H1120ZM1119 480V560H1121V480H1119ZM1120 559H1040V561H1120V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 560V561H1201V560H1200ZM1199 480V560H1201V480H1199ZM1200 559H1120V561H1200V559Z'
                fill='#D0D5DD'
              />
              <path d='M1200 480H1280V560H1200V480Z' fill='#F2F4F7' />
              <path
                d='M1280 560V561H1281V560H1280ZM1279 480V560H1281V480H1279ZM1280 559H1200V561H1280V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 560V561H1361V560H1360ZM1359 480V560H1361V480H1359ZM1360 559H1280V561H1360V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 560V561H1441V560H1440ZM1439 480V560H1441V480H1439ZM1440 559H1360V561H1440V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 640V641H81V640H80ZM79 560V640H81V560H79ZM80 639H0V641H80V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 640V641H161V640H160ZM159 560V640H161V560H159ZM160 639H80V641H160V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 640V641H241V640H240ZM239 560V640H241V560H239ZM240 639H160V641H240V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 640V641H321V640H320ZM319 560V640H321V560H319ZM320 639H240V641H320V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 640V641H401V640H400ZM399 560V640H401V560H399ZM400 639H320V641H400V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 640V641H481V640H480ZM479 560V640H481V560H479ZM480 639H400V641H480V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 640V641H561V640H560ZM559 560V640H561V560H559ZM560 639H480V641H560V639Z'
                fill='#D0D5DD'
              />
              <path d='M560 560H640V640H560V560Z' fill='#F2F4F7' />
              <path
                d='M640 640V641H641V640H640ZM639 560V640H641V560H639ZM640 639H560V641H640V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 640V641H721V640H720ZM719 560V640H721V560H719ZM720 639H640V641H720V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 640V641H801V640H800ZM799 560V640H801V560H799ZM800 639H720V641H800V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 640V641H881V640H880ZM879 560V640H881V560H879ZM880 639H800V641H880V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 640V641H961V640H960ZM959 560V640H961V560H959ZM960 639H880V641H960V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 640V641H1041V640H1040ZM1039 560V640H1041V560H1039ZM1040 639H960V641H1040V639Z'
                fill='#D0D5DD'
              />
              <path d='M1040 560H1120V640H1040V560Z' fill='#F2F4F7' />
              <path
                d='M1120 640V641H1121V640H1120ZM1119 560V640H1121V560H1119ZM1120 639H1040V641H1120V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 640V641H1201V640H1200ZM1199 560V640H1201V560H1199ZM1200 639H1120V641H1200V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 640V641H1281V640H1280ZM1279 560V640H1281V560H1279ZM1280 639H1200V641H1280V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 640V641H1361V640H1360ZM1359 560V640H1361V560H1359ZM1360 639H1280V641H1360V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 640V641H1441V640H1440ZM1439 560V640H1441V560H1439ZM1440 639H1360V641H1440V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 720V721H81V720H80ZM79 640V720H81V640H79ZM80 719H0V721H80V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 720V721H161V720H160ZM159 640V720H161V640H159ZM160 719H80V721H160V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 720V721H241V720H240ZM239 640V720H241V640H239ZM240 719H160V721H240V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 720V721H321V720H320ZM319 640V720H321V640H319ZM320 719H240V721H320V719Z'
                fill='#D0D5DD'
              />
              <path d='M320 640H400V720H320V640Z' fill='#F2F4F7' />
              <path
                d='M400 720V721H401V720H400ZM399 640V720H401V640H399ZM400 719H320V721H400V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 720V721H481V720H480ZM479 640V720H481V640H479ZM480 719H400V721H480V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 720V721H561V720H560ZM559 640V720H561V640H559ZM560 719H480V721H560V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 720V721H641V720H640ZM639 640V720H641V640H639ZM640 719H560V721H640V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 720V721H721V720H720ZM719 640V720H721V640H719ZM720 719H640V721H720V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 720V721H801V720H800ZM799 640V720H801V640H799ZM800 719H720V721H800V719Z'
                fill='#D0D5DD'
              />
              <path d='M800 640H880V720H800V640Z' fill='#F2F4F7' />
              <path
                d='M880 720V721H881V720H880ZM879 640V720H881V640H879ZM880 719H800V721H880V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 720V721H961V720H960ZM959 640V720H961V640H959ZM960 719H880V721H960V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 720V721H1041V720H1040ZM1039 640V720H1041V640H1039ZM1040 719H960V721H1040V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 720V721H1121V720H1120ZM1119 640V720H1121V640H1119ZM1120 719H1040V721H1120V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 720V721H1201V720H1200ZM1199 640V720H1201V640H1199ZM1200 719H1120V721H1200V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 720V721H1281V720H1280ZM1279 640V720H1281V640H1279ZM1280 719H1200V721H1280V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 720V721H1361V720H1360ZM1359 640V720H1361V640H1359ZM1360 719H1280V721H1360V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 720V721H1441V720H1440ZM1439 640V720H1441V640H1439ZM1440 719H1360V721H1440V719Z'
                fill='#D0D5DD'
              />
              <path d='M0 720H80V800H0V720Z' fill='#F2F4F7' />
              <path
                d='M80 800V801H81V800H80ZM79 720V800H81V720H79ZM80 799H0V801H80V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 800V801H161V800H160ZM159 720V800H161V720H159ZM160 799H80V801H160V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 800V801H241V800H240ZM239 720V800H241V720H239ZM240 799H160V801H240V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 800V801H321V800H320ZM319 720V800H321V720H319ZM320 799H240V801H320V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 800V801H401V800H400ZM399 720V800H401V720H399ZM400 799H320V801H400V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 800V801H481V800H480ZM479 720V800H481V720H479ZM480 799H400V801H480V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 800V801H561V800H560ZM559 720V800H561V720H559ZM560 799H480V801H560V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 800V801H641V800H640ZM639 720V800H641V720H639ZM640 799H560V801H640V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 800V801H721V800H720ZM719 720V800H721V720H719ZM720 799H640V801H720V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 800V801H801V800H800ZM799 720V800H801V720H799ZM800 799H720V801H800V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 800V801H881V800H880ZM879 720V800H881V720H879ZM880 799H800V801H880V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 800V801H961V800H960ZM959 720V800H961V720H959ZM960 799H880V801H960V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 800V801H1041V800H1040ZM1039 720V800H1041V720H1039ZM1040 799H960V801H1040V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 800V801H1121V800H1120ZM1119 720V800H1121V720H1119ZM1120 799H1040V801H1120V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 800V801H1201V800H1200ZM1199 720V800H1201V720H1199ZM1200 799H1120V801H1200V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 800V801H1281V800H1280ZM1279 720V800H1281V720H1279ZM1280 799H1200V801H1280V799Z'
                fill='#D0D5DD'
              />
              <path d='M1280 720H1360V800H1280V720Z' fill='#F2F4F7' />
              <path
                d='M1360 800V801H1361V800H1360ZM1359 720V800H1361V720H1359ZM1360 799H1280V801H1360V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 800V801H1441V800H1440ZM1439 720V800H1441V720H1439ZM1440 799H1360V801H1440V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 880V881H81V880H80ZM79 800V880H81V800H79ZM80 879H0V881H80V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 880V881H161V880H160ZM159 800V880H161V800H159ZM160 879H80V881H160V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 880V881H241V880H240ZM239 800V880H241V800H239ZM240 879H160V881H240V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 880V881H321V880H320ZM319 800V880H321V800H319ZM320 879H240V881H320V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 880V881H401V880H400ZM399 800V880H401V800H399ZM400 879H320V881H400V879Z'
                fill='#D0D5DD'
              />
              <path d='M400 800H480V880H400V800Z' fill='#F2F4F7' />
              <path
                d='M480 880V881H481V880H480ZM479 800V880H481V800H479ZM480 879H400V881H480V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 880V881H561V880H560ZM559 800V880H561V800H559ZM560 879H480V881H560V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 880V881H641V880H640ZM639 800V880H641V800H639ZM640 879H560V881H640V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 880V881H721V880H720ZM719 800V880H721V800H719ZM720 879H640V881H720V879Z'
                fill='#D0D5DD'
              />
              <path d='M720 800H800V880H720V800Z' fill='#F2F4F7' />
              <path
                d='M800 880V881H801V880H800ZM799 800V880H801V800H799ZM800 879H720V881H800V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 880V881H881V880H880ZM879 800V880H881V800H879ZM880 879H800V881H880V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 880V881H961V880H960ZM959 800V880H961V800H959ZM960 879H880V881H960V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 880V881H1041V880H1040ZM1039 800V880H1041V800H1039ZM1040 879H960V881H1040V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 880V881H1121V880H1120ZM1119 800V880H1121V800H1119ZM1120 879H1040V881H1120V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 880V881H1201V880H1200ZM1199 800V880H1201V800H1199ZM1200 879H1120V881H1200V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 880V881H1281V880H1280ZM1279 800V880H1281V800H1279ZM1280 879H1200V881H1280V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 880V881H1361V880H1360ZM1359 800V880H1361V800H1359ZM1360 879H1280V881H1360V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 880V881H1441V880H1440ZM1439 800V880H1441V800H1439ZM1440 879H1360V881H1440V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 960V961H81V960H80ZM79 880V960H81V880H79ZM80 959H0V961H80V959Z'
                fill='#D0D5DD'
              />
              <path d='M80 880H160V960H80V880Z' fill='#F2F4F7' />
              <path
                d='M160 960V961H161V960H160ZM159 880V960H161V880H159ZM160 959H80V961H160V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 960V961H241V960H240ZM239 880V960H241V880H239ZM240 959H160V961H240V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 960V961H321V960H320ZM319 880V960H321V880H319ZM320 959H240V961H320V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 960V961H401V960H400ZM399 880V960H401V880H399ZM400 959H320V961H400V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 960V961H481V960H480ZM479 880V960H481V880H479ZM480 959H400V961H480V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 960V961H561V960H560ZM559 880V960H561V880H559ZM560 959H480V961H560V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 960V961H641V960H640ZM639 880V960H641V880H639ZM640 959H560V961H640V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 960V961H721V960H720ZM719 880V960H721V880H719ZM720 959H640V961H720V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 960V961H801V960H800ZM799 880V960H801V880H799ZM800 959H720V961H800V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 960V961H881V960H880ZM879 880V960H881V880H879ZM880 959H800V961H880V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 960V961H961V960H960ZM959 880V960H961V880H959ZM960 959H880V961H960V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 960V961H1041V960H1040ZM1039 880V960H1041V880H1039ZM1040 959H960V961H1040V959Z'
                fill='#D0D5DD'
              />
              <path d='M1040 880H1120V960H1040V880Z' fill='#F2F4F7' />
              <path
                d='M1120 960V961H1121V960H1120ZM1119 880V960H1121V880H1119ZM1120 959H1040V961H1120V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 960V961H1201V960H1200ZM1199 880V960H1201V880H1199ZM1200 959H1120V961H1200V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 960V961H1281V960H1280ZM1279 880V960H1281V880H1279ZM1280 959H1200V961H1280V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 960V961H1361V960H1360ZM1359 880V960H1361V880H1359ZM1360 959H1280V961H1360V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 960V961H1441V960H1440ZM1439 880V960H1441V880H1439ZM1440 959H1360V961H1440V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 1040V1041H81V1040H80ZM79 960V1040H81V960H79ZM80 1039H0V1041H80V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 1040V1041H161V1040H160ZM159 960V1040H161V960H159ZM160 1039H80V1041H160V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 1040V1041H241V1040H240ZM239 960V1040H241V960H239ZM240 1039H160V1041H240V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 1040V1041H321V1040H320ZM319 960V1040H321V960H319ZM320 1039H240V1041H320V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 1040V1041H401V1040H400ZM399 960V1040H401V960H399ZM400 1039H320V1041H400V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 1040V1041H481V1040H480ZM479 960V1040H481V960H479ZM480 1039H400V1041H480V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 1040V1041H561V1040H560ZM559 960V1040H561V960H559ZM560 1039H480V1041H560V1039Z'
                fill='#D0D5DD'
              />
              <path d='M560 960H640V1040H560V960Z' fill='#F2F4F7' />
              <path
                d='M640 1040V1041H641V1040H640ZM639 960V1040H641V960H639ZM640 1039H560V1041H640V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 1040V1041H721V1040H720ZM719 960V1040H721V960H719ZM720 1039H640V1041H720V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 1040V1041H801V1040H800ZM799 960V1040H801V960H799ZM800 1039H720V1041H800V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 1040V1041H881V1040H880ZM879 960V1040H881V960H879ZM880 1039H800V1041H880V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 1040V1041H961V1040H960ZM959 960V1040H961V960H959ZM960 1039H880V1041H960V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 1040V1041H1041V1040H1040ZM1039 960V1040H1041V960H1039ZM1040 1039H960V1041H1040V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 1040V1041H1121V1040H1120ZM1119 960V1040H1121V960H1119ZM1120 1039H1040V1041H1120V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 1040V1041H1201V1040H1200ZM1199 960V1040H1201V960H1199ZM1200 1039H1120V1041H1200V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 1040V1041H1281V1040H1280ZM1279 960V1040H1281V960H1279ZM1280 1039H1200V1041H1280V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 1040V1041H1361V1040H1360ZM1359 960V1040H1361V960H1359ZM1360 1039H1280V1041H1360V1039Z'
                fill='#D0D5DD'
              />
              <path d='M1360 960H1440V1040H1360V960Z' fill='#F2F4F7' />
              <path
                d='M1440 1040V1041H1441V1040H1440ZM1439 960V1040H1441V960H1439ZM1440 1039H1360V1041H1440V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 1120V1121H81V1120H80ZM79 1040V1120H81V1040H79ZM80 1119H0V1121H80V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 1120V1121H161V1120H160ZM159 1040V1120H161V1040H159ZM160 1119H80V1121H160V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 1120V1121H241V1120H240ZM239 1040V1120H241V1040H239ZM240 1119H160V1121H240V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 1120V1121H321V1120H320ZM319 1040V1120H321V1040H319ZM320 1119H240V1121H320V1119Z'
                fill='#D0D5DD'
              />
              <path d='M320 1040H400V1120H320V1040Z' fill='#F2F4F7' />
              <path
                d='M400 1120V1121H401V1120H400ZM399 1040V1120H401V1040H399ZM400 1119H320V1121H400V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 1120V1121H481V1120H480ZM479 1040V1120H481V1040H479ZM480 1119H400V1121H480V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 1120V1121H561V1120H560ZM559 1040V1120H561V1040H559ZM560 1119H480V1121H560V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 1120V1121H641V1120H640ZM639 1040V1120H641V1040H639ZM640 1119H560V1121H640V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 1120V1121H721V1120H720ZM719 1040V1120H721V1040H719ZM720 1119H640V1121H720V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 1120V1121H801V1120H800ZM799 1040V1120H801V1040H799ZM800 1119H720V1121H800V1119Z'
                fill='#D0D5DD'
              />
              <path d='M800 1040H880V1120H800V1040Z' fill='#F2F4F7' />
              <path
                d='M880 1120V1121H881V1120H880ZM879 1040V1120H881V1040H879ZM880 1119H800V1121H880V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 1120V1121H961V1120H960ZM959 1040V1120H961V1040H959ZM960 1119H880V1121H960V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 1120V1121H1041V1120H1040ZM1039 1040V1120H1041V1040H1039ZM1040 1119H960V1121H1040V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 1120V1121H1121V1120H1120ZM1119 1040V1120H1121V1040H1119ZM1120 1119H1040V1121H1120V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 1120V1121H1201V1120H1200ZM1199 1040V1120H1201V1040H1199ZM1200 1119H1120V1121H1200V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 1120V1121H1281V1120H1280ZM1279 1040V1120H1281V1040H1279ZM1280 1119H1200V1121H1280V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 1120V1121H1361V1120H1360ZM1359 1040V1120H1361V1040H1359ZM1360 1119H1280V1121H1360V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 1120V1121H1441V1120H1440ZM1439 1040V1120H1441V1040H1439ZM1440 1119H1360V1121H1440V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 1200V1201H81V1200H80ZM79 1120V1200H81V1120H79ZM80 1199H0V1201H80V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 1200V1201H161V1200H160ZM159 1120V1200H161V1120H159ZM160 1199H80V1201H160V1199Z'
                fill='#D0D5DD'
              />
              <path d='M160 1120H240V1200H160V1120Z' fill='#F2F4F7' />
              <path
                d='M240 1200V1201H241V1200H240ZM239 1120V1200H241V1120H239ZM240 1199H160V1201H240V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 1200V1201H321V1200H320ZM319 1120V1200H321V1120H319ZM320 1199H240V1201H320V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 1200V1201H401V1200H400ZM399 1120V1200H401V1120H399ZM400 1199H320V1201H400V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 1200V1201H481V1200H480ZM479 1120V1200H481V1120H479ZM480 1199H400V1201H480V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 1200V1201H561V1200H560ZM559 1120V1200H561V1120H559ZM560 1199H480V1201H560V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 1200V1201H641V1200H640ZM639 1120V1200H641V1120H639ZM640 1199H560V1201H640V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 1200V1201H721V1200H720ZM719 1120V1200H721V1120H719ZM720 1199H640V1201H720V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 1200V1201H801V1200H800ZM799 1120V1200H801V1120H799ZM800 1199H720V1201H800V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 1200V1201H881V1200H880ZM879 1120V1200H881V1120H879ZM880 1199H800V1201H880V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 1200V1201H961V1200H960ZM959 1120V1200H961V1120H959ZM960 1199H880V1201H960V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 1200V1201H1041V1200H1040ZM1039 1120V1200H1041V1120H1039ZM1040 1199H960V1201H1040V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 1200V1201H1121V1200H1120ZM1119 1120V1200H1121V1120H1119ZM1120 1199H1040V1201H1120V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 1200V1201H1201V1200H1200ZM1199 1120V1200H1201V1120H1199ZM1200 1199H1120V1201H1200V1199Z'
                fill='#D0D5DD'
              />
              <path d='M1200 1120H1280V1200H1200V1120Z' fill='#F2F4F7' />
              <path
                d='M1280 1200V1201H1281V1200H1280ZM1279 1120V1200H1281V1120H1279ZM1280 1199H1200V1201H1280V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 1200V1201H1361V1200H1360ZM1359 1120V1200H1361V1120H1359ZM1360 1199H1280V1201H1360V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 1200V1201H1441V1200H1440ZM1439 1120V1200H1441V1120H1439ZM1440 1199H1360V1201H1440V1199Z'
                fill='#D0D5DD'
              />
            </g>
            <defs>
              <radialGradient
                id='paint0_radial_173_20898'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(720 -0.000129104) rotate(90) scale(1083 565.257)'
              >
                <stop />
                <stop offset='0.953125' stop-opacity='0' />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className='absolute left-0 top-0  bg-gray-50/50 backdrop-blur-lg h-full flex z-40 flex-col px-6 py-12 w-80 gap-3'>
          <h3 className='text-lg font-medium leading-none'>
            <svg
              width='161'
              height='24'
              viewBox='0 0 161 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M21.3 10.1113V17.0324C21.3 17.724 20.9324 18.3624 20.3327 18.7082L11.6173 23.7406C11.0176 24.0865 10.2824 24.0865 9.6827 23.7406L7.31063 22.371V15.3396H13.7456C14.6807 15.3396 15.4383 14.5819 15.4383 13.6468V10.1113H21.3ZM21.3 8.66034V6.9676C21.3 6.27598 20.9324 5.63756 20.3327 5.29175L15.4383 2.46567V8.66034H21.3ZM13.9874 1.62787V8.66034H7.55245C6.61735 8.66034 5.85967 9.41801 5.85967 10.3531V13.8886H0V6.9676C0 6.27598 0.367575 5.63756 0.967303 5.29175L9.6827 0.259358C10.2824 -0.0864527 11.0176 -0.0864527 11.6173 0.259358L13.9874 1.62787ZM0 15.3396V17.0324C0 17.724 0.367575 18.3624 0.967303 18.7082L5.85967 21.5332V15.3396H0ZM7.55245 10.1113H13.9874V13.6468C13.9874 13.7806 13.8793 13.8886 13.7456 13.8886H7.31063V10.3531C7.31063 10.2194 7.41869 10.1113 7.55245 10.1113Z'
                fill='#1F756B'
              />
              <path
                d='M30.6 23.31V5.91H37.512C40.024 5.91 41.28 7.174 41.28 9.702V14.718C41.28 17.246 40.024 18.51 37.512 18.51H33.408V23.31H30.6ZM33.408 16.062H37.368C38.104 16.062 38.472 15.694 38.472 14.958V9.462C38.472 8.726 38.104 8.358 37.368 8.358H33.408V16.062Z'
                fill='#101828'
              />
              <path
                d='M44.0139 14.718V9.702C44.0139 7.174 45.2779 5.91 47.8059 5.91H51.1659C53.6779 5.91 54.9339 7.174 54.9339 9.702V14.718C54.9339 17.246 53.6779 18.51 51.1659 18.51H47.8059C45.2779 18.51 44.0139 17.246 44.0139 14.718ZM46.8219 14.958C46.8219 15.694 47.1899 16.062 47.9259 16.062H51.0219C51.7579 16.062 52.1259 15.694 52.1259 14.958V9.462C52.1259 8.726 51.7579 8.358 51.0219 8.358H47.9259C47.1899 8.358 46.8219 8.726 46.8219 9.462V14.958Z'
                fill='#101828'
              />
              <path
                d='M57.7627 14.334V0.75H60.5707V14.622C60.5707 15.662 61.0987 16.222 62.1547 16.302V18.726C59.2267 18.726 57.7627 17.262 57.7627 14.334Z'
                fill='#101828'
              />
              <path
                d='M64.3145 3.726V0.87H67.2665V3.726H64.3145ZM64.3865 18.51V5.91H67.1945V18.51H64.3865Z'
                fill='#101828'
              />
              <path
                d='M70.209 14.718V1.95H73.017V5.91H77.313V8.358H73.017V14.958C73.017 15.694 73.385 16.062 74.121 16.062H77.553V17.574L76.281 18.51H74.001C71.473 18.51 70.209 17.246 70.209 14.718Z'
                fill='#101828'
              />
              <path
                d='M78.395 6.342L78.683 5.91H81.107L84.275 16.062H84.635L87.803 5.91H90.227L90.515 6.342L85.019 23.31H82.595L82.307 22.878L83.819 18.51H82.355L78.395 6.342Z'
                fill='#101828'
              />
              <path
                d='M104.707 12.2536H102.877C102.877 11.9486 102.828 11.6785 102.728 11.4432C102.629 11.2045 102.49 11.0024 102.311 10.8366C102.132 10.6709 101.919 10.5466 101.674 10.4638C101.429 10.3776 101.157 10.3345 100.859 10.3345C100.289 10.3345 99.7585 10.4787 99.268 10.767C98.7774 11.0554 98.3615 11.4747 98.0201 12.0249C97.6787 12.5717 97.4417 13.2363 97.3092 14.0185C97.1865 14.7808 97.1981 15.4188 97.344 15.9325C97.4931 16.4463 97.7516 16.834 98.1195 17.0959C98.4874 17.3544 98.9349 17.4837 99.4619 17.4837C99.7834 17.4837 100.092 17.4439 100.387 17.3643C100.682 17.2815 100.953 17.1605 101.202 17.0014C101.454 16.839 101.674 16.6418 101.863 16.4098C102.055 16.1778 102.205 15.9143 102.311 15.6193H104.165C104.013 16.1032 103.789 16.5589 103.494 16.9865C103.199 17.4107 102.844 17.7853 102.43 18.1101C102.016 18.4316 101.552 18.6835 101.038 18.8658C100.524 19.0481 99.9706 19.1392 99.3774 19.1392C98.4659 19.1392 97.6854 18.9271 97.0357 18.5028C96.3894 18.0753 95.9254 17.4638 95.6437 16.6683C95.362 15.8696 95.3122 14.9134 95.4945 13.7997C95.6768 12.7159 96.0282 11.7929 96.5485 11.0305C97.0722 10.2682 97.7102 9.68655 98.4626 9.28551C99.2183 8.88115 100.032 8.67898 100.904 8.67898C101.48 8.67898 102.004 8.75852 102.475 8.91761C102.949 9.0767 103.355 9.31037 103.693 9.61861C104.031 9.92353 104.288 10.2981 104.463 10.7422C104.642 11.183 104.723 11.6868 104.707 12.2536ZM107.753 14.5256L107.017 19H105.213L106.903 8.81818H108.668L108.032 12.6612H108.126C108.368 12.227 108.698 11.8857 109.115 11.6371C109.536 11.3885 110.042 11.2642 110.632 11.2642C111.155 11.2642 111.596 11.3752 111.954 11.5973C112.312 11.8194 112.564 12.1442 112.71 12.5717C112.859 12.9993 112.884 13.5213 112.784 14.1378L111.969 19H110.164L110.93 14.4162C111.013 13.9025 110.945 13.5031 110.726 13.218C110.511 12.9297 110.169 12.7855 109.702 12.7855C109.381 12.7855 109.084 12.8551 108.812 12.9943C108.54 13.1302 108.312 13.3274 108.126 13.5859C107.944 13.8445 107.82 14.1577 107.753 14.5256ZM117.155 19.1491C116.389 19.1491 115.756 18.9901 115.255 18.6719C114.755 18.3504 114.404 17.8963 114.201 17.3097C114.003 16.7197 113.969 16.0253 114.102 15.2266C114.231 14.4411 114.495 13.7517 114.892 13.1584C115.29 12.5618 115.787 12.0978 116.384 11.7663C116.984 11.4316 117.647 11.2642 118.373 11.2642C118.843 11.2642 119.276 11.3404 119.67 11.4929C120.065 11.642 120.398 11.8741 120.669 12.1889C120.941 12.5038 121.128 12.9048 121.231 13.392C121.334 13.8759 121.329 14.4527 121.216 15.1222L121.132 15.674H114.868L115.061 14.4609H119.596C119.655 14.1162 119.635 13.8097 119.536 13.5412C119.436 13.2694 119.271 13.0556 119.039 12.8999C118.807 12.7441 118.517 12.6662 118.169 12.6662C117.814 12.6662 117.483 12.7573 117.174 12.9396C116.869 13.1186 116.613 13.3506 116.404 13.6357C116.195 13.9207 116.062 14.2206 116.006 14.5355L115.802 15.6989C115.729 16.1761 115.746 16.5656 115.852 16.8672C115.958 17.1688 116.144 17.3909 116.409 17.5334C116.674 17.6759 117.009 17.7472 117.413 17.7472C117.678 17.7472 117.923 17.7107 118.149 17.6378C118.374 17.5649 118.575 17.4555 118.75 17.3097C118.929 17.1605 119.079 16.9782 119.198 16.7628L120.843 16.9517C120.661 17.3958 120.394 17.7836 120.043 18.1151C119.692 18.4432 119.271 18.6984 118.78 18.8807C118.293 19.0597 117.751 19.1491 117.155 19.1491ZM125.417 19.1491C124.655 19.1491 124.029 18.9818 123.538 18.647C123.048 18.3123 122.704 17.8499 122.509 17.2599C122.317 16.6667 122.285 15.9839 122.414 15.2116C122.54 14.4361 122.801 13.7517 123.195 13.1584C123.593 12.5618 124.093 12.0978 124.696 11.7663C125.3 11.4316 125.974 11.2642 126.72 11.2642C127.34 11.2642 127.868 11.3786 128.306 11.6072C128.747 11.8326 129.075 12.1525 129.29 12.5668C129.509 12.9777 129.593 13.4583 129.544 14.0085H127.819C127.812 13.6406 127.698 13.334 127.476 13.0888C127.253 12.8402 126.929 12.7159 126.501 12.7159C126.13 12.7159 125.789 12.8153 125.477 13.0142C125.165 13.2098 124.902 13.4915 124.686 13.8594C124.471 14.2273 124.322 14.6681 124.239 15.1818C124.153 15.7022 124.155 16.1496 124.244 16.5241C124.337 16.8954 124.504 17.1821 124.746 17.3842C124.991 17.5831 125.301 17.6825 125.676 17.6825C125.941 17.6825 126.188 17.6328 126.417 17.5334C126.645 17.4306 126.846 17.2831 127.018 17.0909C127.194 16.8987 127.331 16.665 127.431 16.3899H129.151C129.015 16.9302 128.773 17.4091 128.425 17.8267C128.08 18.241 127.653 18.5658 127.142 18.8011C126.632 19.0331 126.057 19.1491 125.417 19.1491ZM132.22 16.6037L132.573 14.4311H132.861L136.127 11.3636H138.23L134.233 15.1222H133.865L132.22 16.6037ZM130.186 19L131.877 8.81818H133.676L131.986 19H130.186ZM134.979 19L133.07 15.5249L134.497 14.2571L137.132 19H134.979ZM141.193 19.1491C140.441 19.1491 139.815 18.9834 139.314 18.652C138.817 18.3205 138.467 17.8549 138.265 17.255C138.063 16.6551 138.027 15.959 138.156 15.1669C138.285 14.3847 138.544 13.7003 138.931 13.1136C139.322 12.527 139.815 12.0729 140.408 11.7514C141.004 11.4266 141.672 11.2642 142.411 11.2642C143.164 11.2642 143.789 11.4316 144.286 11.7663C144.783 12.0978 145.133 12.5634 145.335 13.1634C145.54 13.7633 145.578 14.4626 145.449 15.2614C145.323 16.0402 145.063 16.7214 144.669 17.3047C144.277 17.888 143.785 18.3421 143.192 18.6669C142.599 18.9884 141.933 19.1491 141.193 19.1491ZM141.343 17.7074C141.76 17.7074 142.126 17.5947 142.441 17.3693C142.759 17.1406 143.02 16.834 143.222 16.4496C143.427 16.0618 143.57 15.6309 143.649 15.157C143.722 14.6996 143.724 14.2853 143.654 13.9141C143.585 13.5395 143.436 13.2429 143.207 13.0241C142.982 12.8021 142.668 12.6911 142.267 12.6911C141.85 12.6911 141.48 12.8071 141.159 13.0391C140.84 13.2678 140.58 13.576 140.378 13.9638C140.176 14.3482 140.037 14.7775 139.96 15.2514C139.884 15.7088 139.881 16.1231 139.951 16.4943C140.02 16.8655 140.169 17.1605 140.398 17.3793C140.627 17.598 140.942 17.7074 141.343 17.7074ZM151.759 15.7884L152.5 11.3636H154.3L153.027 19H151.282L151.511 17.6428H151.431C151.193 18.0703 150.851 18.42 150.407 18.6918C149.966 18.9635 149.459 19.0994 148.886 19.0994C148.385 19.0994 147.963 18.9884 147.618 18.7663C147.273 18.541 147.028 18.2145 146.882 17.7869C146.74 17.3561 146.718 16.8357 146.818 16.2259L147.633 11.3636H149.433L148.667 15.9474C148.591 16.4313 148.66 16.8158 148.876 17.1009C149.095 17.3859 149.419 17.5284 149.85 17.5284C150.115 17.5284 150.382 17.4638 150.651 17.3345C150.922 17.2053 151.159 17.013 151.362 16.7578C151.564 16.4993 151.696 16.1761 151.759 15.7884ZM159.964 11.3636L159.73 12.7557H155.345L155.574 11.3636H159.964ZM156.956 9.53409H158.756L157.562 16.7031C157.526 16.9451 157.533 17.1307 157.582 17.2599C157.635 17.3859 157.72 17.4721 157.836 17.5185C157.955 17.5649 158.089 17.5881 158.239 17.5881C158.348 17.5881 158.451 17.5798 158.547 17.5632C158.643 17.5433 158.719 17.5284 158.775 17.5185L158.855 18.9254C158.746 18.9586 158.598 18.995 158.413 19.0348C158.23 19.0746 158.011 19.0978 157.756 19.1044C157.299 19.1143 156.901 19.0447 156.563 18.8956C156.228 18.7431 155.983 18.5095 155.827 18.1946C155.675 17.8764 155.64 17.4787 155.723 17.0014L156.956 9.53409Z'
                fill='#475467'
              />
            </svg>
          </h3>{' '}
          <TabsList className='flex relative bg-gray-50/0 flex-col gap-1 py-6 w-full items-start`z-50'>
            <TabsTrigger
              value='payment'
              style={{ pointerEvents: 'none' }}
              className={`w-full items-center justify-start group focus:ring-0 outline-none focus:tap-highlight-transparent focus:outline-none relative flex gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out ${
                tabValues.indexOf('payment') > tabValues.indexOf(activeTab)
                  ? 'text-gray-400'
                  : 'text-gray-900 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-300 data-[state=active]:border-gray-300 data-[state=active]:border'
              }`}
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.3334 7.08334H1.66669M1.66669 10.4167H4.62225C5.07241 10.4167 5.29749 10.4167 5.51513 10.4555C5.70832 10.4899 5.89677 10.547 6.07661 10.6255C6.27922 10.7139 6.4665 10.8388 6.84105 11.0885L7.32566 11.4115C7.70021 11.6612 7.88749 11.7861 8.0901 11.8745C8.26994 11.9531 8.45839 12.0101 8.65157 12.0445C8.86922 12.0833 9.0943 12.0833 9.54446 12.0833H10.4556C10.9057 12.0833 11.1308 12.0833 11.3485 12.0445C11.5416 12.0101 11.7301 11.9531 11.9099 11.8745C12.1126 11.7861 12.2998 11.6612 12.6744 11.4115L13.159 11.0885C13.5335 10.8388 13.7208 10.7139 13.9234 10.6255C14.1033 10.547 14.2917 10.4899 14.4849 10.4555C14.7026 10.4167 14.9276 10.4167 15.3778 10.4167H18.3334M1.66669 6.00001L1.66669 14C1.66669 14.9334 1.66669 15.4001 1.84834 15.7567C2.00813 16.0703 2.2631 16.3252 2.5767 16.485C2.93322 16.6667 3.39993 16.6667 4.33335 16.6667L15.6667 16.6667C16.6001 16.6667 17.0668 16.6667 17.4233 16.485C17.7369 16.3252 17.9919 16.0703 18.1517 15.7567C18.3334 15.4001 18.3334 14.9334 18.3334 14V6.00001C18.3334 5.06659 18.3334 4.59988 18.1517 4.24336C17.9919 3.92976 17.7369 3.67479 17.4233 3.515C17.0668 3.33334 16.6001 3.33334 15.6667 3.33334L4.33335 3.33334C3.39993 3.33334 2.93322 3.33334 2.5767 3.515C2.2631 3.67479 2.00813 3.92976 1.84834 4.24336C1.66669 4.59988 1.66669 5.06659 1.66669 6.00001Z'
                  stroke='currentColor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Product Features
              {tabValues.indexOf('payment') < tabValues.indexOf(activeTab) && (
                <div className='ml-auto'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='20' height='20' rx='10' fill='#CCFBEF' />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M14.247 6.15838L8.2803 11.9167L6.69696 10.2251C6.4053 9.95005 5.94696 9.93338 5.61363 10.1667C5.28863 10.4084 5.19696 10.8334 5.39696 11.1751L7.27196 14.2251C7.4553 14.5084 7.77196 14.6834 8.1303 14.6834C8.47196 14.6834 8.79696 14.5084 8.9803 14.2251C9.2803 13.8334 15.0053 7.00838 15.0053 7.00838C15.7553 6.24172 14.847 5.56672 14.247 6.15005V6.15838Z'
                      fill='#1F756B'
                    />
                  </svg>
                </div>
              )}
            </TabsTrigger>
            <TabsTrigger
              style={{ pointerEvents: 'none' }}
              value='recipient'
              className={`w-full items-center justify-start group focus:ring-0 outline-none focus:tap-highlight-transparent focus:outline-none relative flex gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out ${
                tabValues.indexOf('recipient') > tabValues.indexOf(activeTab)
                  ? 'text-gray-400'
                  : 'text-gray-900 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-300 data-[state=active]:border-gray-300 data-[state=active]:border'
              }`}
            >
              <ShoppingBag01 className='w-5 h-5' />
              Purchase Options
              {tabValues.indexOf('recipient') <
                tabValues.indexOf(activeTab) && (
                <div className='ml-auto'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='20' height='20' rx='10' fill='#CCFBEF' />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M14.247 6.15838L8.2803 11.9167L6.69696 10.2251C6.4053 9.95005 5.94696 9.93338 5.61363 10.1667C5.28863 10.4084 5.19696 10.8334 5.39696 11.1751L7.27196 14.2251C7.4553 14.5084 7.77196 14.6834 8.1303 14.6834C8.47196 14.6834 8.79696 14.5084 8.9803 14.2251C9.2803 13.8334 15.0053 7.00838 15.0053 7.00838C15.7553 6.24172 14.847 5.56672 14.247 6.15005V6.15838Z'
                      fill='#1F756B'
                    />
                  </svg>
                </div>
              )}
            </TabsTrigger>
            <TabsTrigger
              value='amount'
              style={{ pointerEvents: 'none' }}
              //   className=" w-full items-center justify-start group focus:ring-0 outline-none  focus:tap-highlight-transparent focus:outline-none relative flex  gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-300 data-[state=active]:border-gray-300 data-[state=active]:border"
              className={`w-full items-center justify-start group focus:ring-0 outline-none focus:tap-highlight-transparent focus:outline-none relative flex gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out ${
                tabValues.indexOf('amount') > tabValues.indexOf(activeTab)
                  ? 'text-gray-400'
                  : 'text-gray-900 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-300 data-[state=active]:border-gray-300 data-[state=active]:border'
              }`}
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.3333 6.66668V3.75055C13.3333 3.05744 13.3333 2.71088 13.1873 2.4979C13.0598 2.31183 12.8622 2.18542 12.6398 2.14758C12.3852 2.10426 12.0706 2.24949 11.4413 2.53994L4.04918 5.95167C3.48792 6.21071 3.20729 6.34023 3.00175 6.54111C2.82005 6.71869 2.68135 6.93547 2.59625 7.17487C2.5 7.44567 2.5 7.75474 2.5 8.3729V12.5M13.75 12.0833H13.7583M2.5 9.33334L2.5 14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3184C3.76654 17.5 4.23325 17.5 5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3184C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7668 17.5 14.8333V9.33334C17.5 8.39992 17.5 7.93321 17.3183 7.57669C17.1586 7.26309 16.9036 7.00812 16.59 6.84833C16.2335 6.66668 15.7668 6.66668 14.8333 6.66668L5.16667 6.66668C4.23325 6.66668 3.76654 6.66668 3.41002 6.84833C3.09641 7.00812 2.84144 7.26309 2.68166 7.57669C2.5 7.93321 2.5 8.39992 2.5 9.33334ZM14.1667 12.0833C14.1667 12.3135 13.9801 12.5 13.75 12.5C13.5199 12.5 13.3333 12.3135 13.3333 12.0833C13.3333 11.8532 13.5199 11.6667 13.75 11.6667C13.9801 11.6667 14.1667 11.8532 14.1667 12.0833Z'
                  stroke='currentColor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Payment Method
              {tabValues.indexOf('amount') < tabValues.indexOf(activeTab) && (
                <div className='ml-auto'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='20' height='20' rx='10' fill='#CCFBEF' />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M14.247 6.15838L8.2803 11.9167L6.69696 10.2251C6.4053 9.95005 5.94696 9.93338 5.61363 10.1667C5.28863 10.4084 5.19696 10.8334 5.39696 11.1751L7.27196 14.2251C7.4553 14.5084 7.77196 14.6834 8.1303 14.6834C8.47196 14.6834 8.79696 14.5084 8.9803 14.2251C9.2803 13.8334 15.0053 7.00838 15.0053 7.00838C15.7553 6.24172 14.847 5.56672 14.247 6.15005V6.15838Z'
                      fill='#1F756B'
                    />
                  </svg>
                </div>
              )}
            </TabsTrigger>
            <TabsTrigger
              value='confirm'
              style={{ pointerEvents: 'none' }}
              className={`w-full items-center justify-start group focus:ring-0 outline-none focus:tap-highlight-transparent focus:outline-none relative flex gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out ${
                tabValues.indexOf('confirm') > tabValues.indexOf(activeTab)
                  ? 'text-gray-400'
                  : 'text-gray-900 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-300 data-[state=active]:border-gray-300 data-[state=active]:border'
              }`}
            >
              <Scan className='w-5 h-5' />
              Review Order
              {tabValues.indexOf('confirm') < tabValues.indexOf(activeTab) && (
                <div className='ml-auto'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='20' height='20' rx='10' fill='#CCFBEF' />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M14.247 6.15838L8.2803 11.9167L6.69696 10.2251C6.4053 9.95005 5.94696 9.93338 5.61363 10.1667C5.28863 10.4084 5.19696 10.8334 5.39696 11.1751L7.27196 14.2251C7.4553 14.5084 7.77196 14.6834 8.1303 14.6834C8.47196 14.6834 8.79696 14.5084 8.9803 14.2251C9.2803 13.8334 15.0053 7.00838 15.0053 7.00838C15.7553 6.24172 14.847 5.56672 14.247 6.15005V6.15838Z'
                      fill='#1F756B'
                    />
                  </svg>
                </div>
              )}
            </TabsTrigger>
          </TabsList>
        </div>
        <div className='fixed w-full h-full '>
          <TabsContent value='payment' className=' '>
            <div
              className='relative h-fit border gap-0 flex-none border-gray-300 rounded-3xl 
flex-col  p-0  grid   shadow-sm  max-w-[512px] mx-auto w-full  
 bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'
            >
              <FSDialogHeader className='px-6 pt-6 pb-3 flex flex-col'>
                <div className='w-full mb-2 flex justify-between items-center'>
                  <div className='flex items-center gap-2 text-lg mb-3 font-medium'>
                    <div className='border w-8 h-8 overflow-hidden  rounded-lg border-gray-300 flex items-center justify-center'>
                      <img
                        src='https://www.fintechfutures.com/files/2021/09/coinfirm.jpg'
                        alt='Coinfirm'
                        width={32}
                        height={32}
                      />
                    </div>
                    <h2>Coinfirm</h2>
                  </div>
                  <div className='rounded-lg text-gray-800 font-medium bg-gray-100 border border-gray-200 text-sm px-3 py-1 leading-2 h-7 items-center flex'>
                    Premium
                  </div>
                </div>
                <FSDialogTitle className='text-xl'>
                  <div>AML Risk Report</div>
                </FSDialogTitle>
                <FSDialogDescription className='text-gray-800 flex flex-col items-start gap-4 '>
                  The Coinfirm AML Risk Report provides you with advanced
                  personal risk analysis for any blockchain address, enhancing
                  your vigilance against money laundering and terrorism
                  financing activities.
                  {/* <Button
                  variant="link"
                  className="p-0 shadow-none text-teal-800 font-semibold h-auto"
                >
                  Learn more about Safeheron
                </Button> */}
                </FSDialogDescription>
              </FSDialogHeader>
              <div>
                <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                  Features
                </div>
                <div className='px-6 flex flex-col gap-2 text-gray-600 text-sm mb-6'>
                  <div className='w-full gap-3 flex  py-1.5'>
                    <Image
                      src={CheckIcon}
                      alt='Check'
                      className='min-w-5'
                      width={20}
                      height={20}
                    />

                    <p>
                      Risk Assessment Score (C-Score): Gauge the level of risk
                      with an easy-to-understand score. A higher score indicates
                      a higher risk associated with the address.
                    </p>
                  </div>
                  <div className='w-full gap-3 flex  py-1.5'>
                    <Image
                      src={CheckIcon}
                      className='min-w-5'
                      alt='Check'
                      width={20}
                      height={20}
                    />

                    <p>
                      Profile Tagging: Classify whether the address has been
                      involved in ransomware activities or not.
                    </p>
                  </div>
                  <div className='w-full gap-3 flex  py-1.5'>
                    <Image
                      src={CheckIcon}
                      className='min-w-5'
                      alt='Check'
                      width={20}
                      height={20}
                    />

                    <p>
                      Transaction Analysis: Understand the nature of
                      transactions associated with the address, including
                      significant outgoing transactions and patterns indicative
                      of AML risks.
                    </p>
                  </div>

                  <div className='w-full gap-3 flex  py-1.5'>
                    <Image
                      src={CheckIcon}
                      className='min-w-5'
                      alt='Check'
                      width={20}
                      height={20}
                    />

                    <p>
                      Recommendations: Receive clear guidance on whether to
                      transact with the address or not based on its risk
                      profile.
                    </p>
                  </div>
                </div>

                <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 mt-6 font-medium text-gray-600 py-2'>
                  How it works
                </div>
                <div className='px-6 flex flex-col gap-2 text-gray-600 text-sm mb-6'>
                  <div className='w-full gap-3 flex  py-1.5'>
                    <div className='min-w-5 h-5 rounded-md border border-gray-200 text-xs text-gray-700 flex items-center justify-center flex'>
                      1
                    </div>

                    <p>
                      Submit Any Address: Provide the address from any supported
                      blockchain network for analysis.
                    </p>
                  </div>
                  <div className='w-full gap-3 flex  py-1.5'>
                    <div className='min-w-5 h-5 rounded-md border border-gray-200 text-xs text-gray-700 flex items-center justify-center flex'>
                      2
                    </div>

                    <p>
                      Instant Risk Report: Receive a detailed report with a risk
                      score, balance, transaction analysis, and actionable
                      recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='recipient' className=' '>
            <div
              className='relative h-fit border flex-none border-gray-300 rounded-3xl 
flex-col  p-0   grid   shadow-sm  max-w-[512px] mx-auto w-full  
gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'
            >
              <FSDialogHeader className='px-6 pt-6 pb-3 flex flex-col'>
                <div className='mb-2'>
                  <ShoppingBag01 className='w-6 h-6' />
                </div>
                <FSDialogTitle className='text-xl'>
                  Purchase Options
                </FSDialogTitle>
                <FSDialogDescription className='text-gray-700'>
                  Choose how to acquire your Coinfirm AML Risk Report: Buy
                  instantly at a fixed price per report, or participate in our
                  auction for a chance to get multiple reports at a potentially
                  lower cost. Both options provide the same high-quality risk
                  assessment.
                </FSDialogDescription>
              </FSDialogHeader>
              <div>
                <div className='w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2'>
                  SELECT PURCHASE OPTION
                </div>
                <div className='px-6 flex flex-col gap-3 text-gray-600 text-sm w-full'>
                  <div className='w-full flex gap-3 pb-6 flex-col items-center py-1 justify-between'>
                    <RadioGroup defaultValue='' className='w-full gap-3 pt-3'>
                      <RadioGroupItem
                        value='1'
                        id='1'
                        className='w-full items-center'
                      >
                        <div className='w-8 h-8 rounded-lg border bg-white flex items-center justify-center pb-0.5 border-gray-300 mr-2'>
                          <Image
                            src='/icons/coinfirm.png'
                            alt='single'
                            width={22}
                            height={22}
                          />
                        </div>
                        <div className='flex flex-col text-left'>
                          <p className='font-medium text-sm'>
                            Buy a Single Report
                          </p>
                          <p className='text-sm text-gray-600'>One-time fee</p>
                        </div>
                        <div className='text-md font-medium flex gap-1.5 items-center ml-auto '>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <g clip-path='url(#clip0_150_11733)'>
                              <rect
                                width='16'
                                height='16'
                                rx='8'
                                fill='#50AF95'
                              />
                              <path
                                d='M15.7589 9.93524C14.6904 14.221 10.3496 16.8292 6.06335 15.7605C1.77889 14.692 -0.829339 10.351 0.239588 6.06558C1.30758 1.77935 5.64835 -0.829071 9.93329 0.239387C14.2192 1.30785 16.8273 5.64936 15.7587 9.93532L15.7588 9.93524H15.7589Z'
                                fill='#50AF95'
                              />
                              <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M9.01232 8.90696C8.95575 8.91121 8.66349 8.92865 8.01155 8.92865C7.49302 8.92865 7.12486 8.91309 6.9957 8.90696C4.9918 8.81881 3.49607 8.46998 3.49607 8.05233C3.49607 7.63467 4.9918 7.28631 6.9957 7.19675V8.55955C7.12675 8.56897 7.50198 8.59113 8.02051 8.59113C8.64275 8.59113 8.95434 8.5652 9.01044 8.56002V7.19769C11.0101 7.28678 12.5025 7.63562 12.5025 8.05233C12.5025 8.46904 11.0106 8.81787 9.01044 8.90649L9.01232 8.90696ZM9.01232 7.05674V5.83725H11.803V3.9776H4.20505V5.83725H6.99523V7.05627C4.72735 7.16045 3.02185 7.60969 3.02185 8.14802C3.02185 8.68635 4.72735 9.13512 6.99523 9.23977V13.1476H9.01185V9.23835C11.2745 9.13418 12.9772 8.68541 12.9772 8.14755C12.9772 7.60969 11.276 7.16092 9.01185 7.05627L9.01232 7.05674Z'
                                fill='white'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_150_11733'>
                                <rect
                                  width='16'
                                  height='16'
                                  rx='8'
                                  fill='white'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          4.99 USDT
                        </div>
                      </RadioGroupItem>

                      <RadioGroupItem
                        value='2'
                        id='2'
                        className='w-full items-center'
                      >
                        <div className='w-8 h-8 rounded-lg border bg-white flex items-center justify-center pb-0.5 border-gray-300 mr-2'>
                          <Image
                            src='/icons/coinfirm.png'
                            alt='single'
                            width={22}
                            height={22}
                          />
                        </div>
                        <div className='flex flex-col text-left'>
                          <p className='font-medium text-sm'>
                            Purchase x10 Reports
                          </p>
                          <p className='text-sm text-gray-600'>
                            Participate in Auction
                          </p>
                        </div>
                        <div className='flex flex-col items-end ml-auto'>
                          <div className='text-md font-medium flex gap-1.5 items-center ml-auto '>
                            <svg
                              width='16'
                              height='16'
                              viewBox='0 0 16 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g clip-path='url(#clip0_150_11733)'>
                                <rect
                                  width='16'
                                  height='16'
                                  rx='8'
                                  fill='#50AF95'
                                />
                                <path
                                  d='M15.7589 9.93524C14.6904 14.221 10.3496 16.8292 6.06335 15.7605C1.77889 14.692 -0.829339 10.351 0.239588 6.06558C1.30758 1.77935 5.64835 -0.829071 9.93329 0.239387C14.2192 1.30785 16.8273 5.64936 15.7587 9.93532L15.7588 9.93524H15.7589Z'
                                  fill='#50AF95'
                                />
                                <path
                                  fill-rule='evenodd'
                                  clip-rule='evenodd'
                                  d='M9.01232 8.90696C8.95575 8.91121 8.66349 8.92865 8.01155 8.92865C7.49302 8.92865 7.12486 8.91309 6.9957 8.90696C4.9918 8.81881 3.49607 8.46998 3.49607 8.05233C3.49607 7.63467 4.9918 7.28631 6.9957 7.19675V8.55955C7.12675 8.56897 7.50198 8.59113 8.02051 8.59113C8.64275 8.59113 8.95434 8.5652 9.01044 8.56002V7.19769C11.0101 7.28678 12.5025 7.63562 12.5025 8.05233C12.5025 8.46904 11.0106 8.81787 9.01044 8.90649L9.01232 8.90696ZM9.01232 7.05674V5.83725H11.803V3.9776H4.20505V5.83725H6.99523V7.05627C4.72735 7.16045 3.02185 7.60969 3.02185 8.14802C3.02185 8.68635 4.72735 9.13512 6.99523 9.23977V13.1476H9.01185V9.23835C11.2745 9.13418 12.9772 8.68541 12.9772 8.14755C12.9772 7.60969 11.276 7.16092 9.01185 7.05627L9.01232 7.05674Z'
                                  fill='white'
                                />
                              </g>
                              <defs>
                                <clipPath id='clip0_150_11733'>
                                  <rect
                                    width='16'
                                    height='16'
                                    rx='8'
                                    fill='white'
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            30.50 USDT
                          </div>
                          <p className='text-sm font-medium'>
                            Current highest bid
                          </p>
                        </div>
                      </RadioGroupItem>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='amount' className=''>
          <div className='relative h-full max-h-[80vh] border flex-none border-gray-300 rounded-3xl flex-col p-0 grid shadow-sm max-w-[512px] mx-auto w-full gap-4 bg-white duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] overflow-y-auto'>              <FSDialogHeader className='px-6 pt-6 pb-3 flex flex-col'>
                <div className='mb-2'>
                  <Wallet02 className='w-8 h-8 text-gray-700' />
                </div>
                <FSDialogTitle className='text-xl'>
                  Payment Method
                </FSDialogTitle>
                <FSDialogDescription className='text-gray-700'>
                  Select a wallet associated with a Network Account for Polygon
                  USDT transactions and proceed to execute the payment in the
                  next step.
                </FSDialogDescription>
              </FSDialogHeader>
              <div>
                <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                  AUCTION INFORMATION
                </div>
                <div className='px-6 pb-5 flex flex-col gap-2 text-gray-700 text-sm'>
                  <div className='w-full justify-between flex  py-1.5'>
                    {' '}
                    <p>Auction Package</p>
                    <p className='flex gap-2 font-medium items-center'>
                      10 Coinfirm AML Risk Report
                    </p>
                  </div>
                  <div className='w-full justify-between  flex py-1.5'>
                    {' '}
                    <p>Current Highest Bid</p>
                    <p className='flex gap-2 font-medium items-center'>
                      <div className='text-md font-medium flex gap-1.5 items-center ml-auto '>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clip-path='url(#clip0_150_11733)'>
                            <rect
                              width='16'
                              height='16'
                              rx='8'
                              fill='#50AF95'
                            />
                            <path
                              d='M15.7589 9.93524C14.6904 14.221 10.3496 16.8292 6.06335 15.7605C1.77889 14.692 -0.829339 10.351 0.239588 6.06558C1.30758 1.77935 5.64835 -0.829071 9.93329 0.239387C14.2192 1.30785 16.8273 5.64936 15.7587 9.93532L15.7588 9.93524H15.7589Z'
                              fill='#50AF95'
                            />
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M9.01232 8.90696C8.95575 8.91121 8.66349 8.92865 8.01155 8.92865C7.49302 8.92865 7.12486 8.91309 6.9957 8.90696C4.9918 8.81881 3.49607 8.46998 3.49607 8.05233C3.49607 7.63467 4.9918 7.28631 6.9957 7.19675V8.55955C7.12675 8.56897 7.50198 8.59113 8.02051 8.59113C8.64275 8.59113 8.95434 8.5652 9.01044 8.56002V7.19769C11.0101 7.28678 12.5025 7.63562 12.5025 8.05233C12.5025 8.46904 11.0106 8.81787 9.01044 8.90649L9.01232 8.90696ZM9.01232 7.05674V5.83725H11.803V3.9776H4.20505V5.83725H6.99523V7.05627C4.72735 7.16045 3.02185 7.60969 3.02185 8.14802C3.02185 8.68635 4.72735 9.13512 6.99523 9.23977V13.1476H9.01185V9.23835C11.2745 9.13418 12.9772 8.68541 12.9772 8.14755C12.9772 7.60969 11.276 7.16092 9.01185 7.05627L9.01232 7.05674Z'
                              fill='white'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_150_11733'>
                              <rect
                                width='16'
                                height='16'
                                rx='8'
                                fill='white'
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        30 USDT
                      </div>
                    </p>
                  </div>
                  <div className='w-full justify-between  flex py-1.5'>
                    {' '}
                    <p>Time Left</p>
                    <p className='flex gap-2 font-medium items-center'>
                      {formatTimeLeft()}
                    </p>
                  </div>
                </div>
                <div className='w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2'>
                  Pay with
                </div>
                <div className='flex gap-3 mt-3 items-center mb-6 px-6'>
                  <div className='flex flex-col gap-8 w-full'>
                    <ReceiveForm />
                    <div className='w-full h-px bg-gray-200'></div>
                    <div className='w-full flex flex-col gap-3 items-center'>
                      <BidAmountForm />
                      <p className='text-sm text-gray-700 font-medium'>
                        +1 USDT minimum bid increment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='confirm' className=''>
            <div className='flex flex-col gap-2'>
              <div
                className='relative h-fit border flex-none border-gray-300 rounded-3xl 
flex-col  p-0   grid   shadow-sm  max-w-[512px] mx-auto w-full  
gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'
              >
                <FSDialogHeader className='px-6 pt-6 pb-3 flex flex-col'>
                  <div className='mb-2'>
                    <Scan className='w-8 h-8 text-gray-700' />
                  </div>
                  <FSDialogTitle className='text-xl'>
                    Review Order
                  </FSDialogTitle>
                  <FSDialogDescription className='text-gray-700'>
                    Before finalizing your transaction, carefully review your
                    order summary, including the selected wallet, Network
                    Account for USDT on Polygon, and the total amount with fees.
                    Ensure all details are correct and confirm to proceed.
                  </FSDialogDescription>
                </FSDialogHeader>
                <div>
                  <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                    Bid Summary
                  </div>
                  <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                    <div className='w-full justify-between flex  py-1.5'>
                      {' '}
                      <p>Auction Package</p>
                      <div className='flex gap-2 font-medium items-center'>
                        <p className=''>10 Coinfirm AML Risk Report</p>
                      </div>
                    </div>

                    <div className='w-full justify-between flex  py-1.5'>
                      {' '}
                      <p>Time Left</p>
                      <div className='flex gap-2 font-medium items-center'>
                        <p className=''>{formatTimeLeft()}</p>
                      </div>
                    </div>
                    <div className='w-full justify-between flex  py-1.5'>
                      {' '}
                      <p>Your Bid Amount</p>
                      <div className='flex gap-2 font-medium items-center'>
                        {selectedAsset && (
                          <img src={`/icons/tokens/${selectedAsset}.svg`} />
                        )}

                        <div className='flex gap-1'>
                          {bitcoinCount.toFixed(2)}
                          <p className=''> USDT</p>
                        </div>
                      </div>
                    </div>

                    <div className='w-full justify-between flex  py-1.5 mb-3'>
                      {' '}
                      <p>Gas Fee</p>
                      <p className='flex gap-2 font-medium items-center'>
                        {selectedAsset && (
                          <img src={`/icons/tokens/${selectedAsset}.svg`} />
                        )}
                        0.00 USDT
                      </p>
                    </div>
                  </div>

                  <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                    Payment Method
                  </div>
                  <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                    <div className='w-full justify-between flex  py-1.5'>
                      {' '}
                      <p>Wallet</p>
                      <p className='flex gap-2 font-medium items-center'>
                        {selectedWallet}
                      </p>
                    </div>
                    <div className='w-full justify-between  flex py-1.5 mb-3'>
                      {' '}
                      <p>Network Account</p>
                      <p className='flex gap-2 font-medium items-center'>
                        {selectedNetwork === 'MATIC' ? (
                          <div className='flex gap-2 items-center'>
                            <img src='/icons/networks/MATIC.svg' />
                            <p>Network Account Name</p>
                            <p>(0x8f...47d2)</p>
                          </div>
                        ) : selectedNetwork === 'BTC' ? (
                          <div className='flex gap-2 items-center'>
                            <img src='/icons/networks/BTC.svg' />
                            <p>Network Account Name</p>
                            <p>(0x8f...47d2)</p>
                          </div>
                        ) : selectedNetwork === 'ETH' ? (
                          <div className='flex gap-2 items-center'>
                            <img src='/icons/networks/ETH.svg' />
                            <p>Network Account Name</p>
                            <p>(0x8f...47d2)</p>
                          </div>
                        ) : (
                          <div>-</div>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                    Balance
                  </div>
                  <div className='px-6 flex pb-5 flex-col gap-2 text-gray-700 text-sm'>
                    <div className='w-full justify-between flex  py-1.5'>
                      {' '}
                      <p>Available Balance</p>
                      <p className='flex gap-2 font-medium items-center'>
                        {selectedAsset && (
                          <img src={`/icons/tokens/${selectedAsset}.svg`} />
                        )}
                        {availableBalance}
                      </p>
                    </div>
                    <div className='w-full justify-between flex  py-1.5'>
                      {' '}
                      <p>Required Hold</p>
                      <p className='flex gap-2 font-medium items-center'>
                        {selectedAsset && (
                          <img src={`/icons/tokens/${selectedAsset}.svg`} />
                        )}
                        {bitcoinCount.toFixed(2)} USDT
                      </p>
                    </div>
                    <div className='w-full justify-between flex  py-1.5'>
                      {' '}
                      <p>Remaining Balance if Won</p>
                      <p className='flex gap-2 font-medium items-center'>
                        {selectedAsset && (
                          <img src={`/icons/tokens/${selectedAsset}.svg`} />
                        )}
                        {(1272.25 - bitcoinCount).toFixed(2)} USDT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <div className=' max-w-[512px] w-full mx-auto  z-50'>
            <div className='w-full h-20 items-center flex justify-between py-4 '>
              <div>
                <div className=' inline-flex w-44 h-11 items-center justify-center bg-white border border-gray-300 gap-2  z-50 rounded-xl text-sm mx-auto  font-medium text-gray-700 p-3'>
                  Powered by
                  <svg
                    width='67'
                    height='12'
                    viewBox='0 0 67 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_4_25542)'>
                      <path
                        d='M12.8621 7.4115C12.8621 4.58757 14.9057 2.80528 17.945 2.80528C20.9843 2.80528 23.0279 4.58757 23.0279 7.4115C23.0279 10.2354 20.9843 12 17.945 12C14.9057 12 12.8621 10.2 12.8621 7.4115ZM20.3799 7.4115C20.3799 5.85838 19.74 5.13544 17.945 5.13544C16.1499 5.13544 15.51 5.85937 15.51 7.4115C15.51 8.96364 16.1321 9.6531 17.945 9.6531C19.7579 9.6531 20.3799 8.9646 20.3799 7.4115Z'
                        fill='#101828'
                      />
                      <path
                        d='M23.7739 7.4115C23.7739 4.58757 25.8176 2.80528 28.8569 2.80528C31.8961 2.80528 33.9398 4.58757 33.9398 7.4115C33.9398 10.2354 31.8961 12 28.8569 12C25.8176 12 23.7739 10.2 23.7739 7.4115ZM31.2919 7.4115C31.2919 5.85838 30.6519 5.13544 28.8569 5.13544C27.0619 5.13544 26.4219 5.85937 26.4219 7.4115C26.4219 8.96364 27.044 9.6531 28.8569 9.6531C30.6697 9.6531 31.2919 8.9646 31.2919 7.4115Z'
                        fill='#101828'
                      />
                      <path
                        d='M35.6235 11.8238C35.2924 11.8234 35.0247 11.5549 35.0247 11.2238V3.20291C35.0247 3.08107 35.1241 2.98231 35.2468 2.98231H37.2731C37.3958 2.98231 37.4953 3.08107 37.4953 3.20291V5.58875C37.4953 5.63064 37.5295 5.6646 37.5717 5.6646C37.6097 5.6646 37.6419 5.6368 37.6477 5.59951C37.8772 4.14228 38.7723 2.80624 40.9794 2.80624C43.0074 2.80624 44.0556 4.01897 44.2749 5.62036C44.2811 5.66561 44.3197 5.7 44.3658 5.7C44.4109 5.7 44.4492 5.66692 44.4562 5.62257C44.6892 4.15239 45.6035 2.80624 47.8573 2.80624C50.1506 2.80624 51.27 4.30624 51.27 6.3177V11.6033C51.27 11.7251 51.1705 11.8239 51.0478 11.8239H48.8264C48.7037 11.8239 48.6042 11.7251 48.6042 11.6033V7.20096C48.6042 5.7364 48.0891 5.18952 46.5606 5.18952C44.9428 5.18952 44.4812 5.82492 44.4812 7.36032V11.6043C44.4812 11.7262 44.3818 11.8249 44.2591 11.8249H42.0376C41.9149 11.8249 41.8155 11.7262 41.8155 11.6043V7.20198C41.8155 5.73738 41.3003 5.1905 39.7717 5.1905C38.1541 5.1905 37.6924 5.82591 37.6924 7.36134V11.6053C37.6924 11.7271 37.593 11.8259 37.4703 11.8259C37.3342 11.8259 36.3027 11.8246 35.6235 11.8238Z'
                        fill='#101828'
                      />
                      <path
                        d='M53.2191 11.8228C52.8878 11.8227 52.6191 11.5541 52.6191 11.2228V0.220601C52.6191 0.0987666 52.7186 0 52.8413 0H62.4745C62.5975 0 62.6971 0.098766 62.6971 0.220601V2.16169C62.6971 2.28352 62.5975 2.38229 62.4745 2.38229H55.5081C55.3854 2.38229 55.2859 2.48105 55.2859 2.60289V4.82627C55.2859 4.9481 55.3854 5.04686 55.5081 5.04686H62.2081C62.3311 5.04686 62.4301 5.14564 62.4301 5.26747V7.19082C62.4301 7.31268 62.3311 7.41144 62.2081 7.41144H55.5081C55.3854 7.41144 55.2859 7.5102 55.2859 7.63206V11.6023C55.2859 11.7241 55.1864 11.8229 55.0637 11.8229L53.2191 11.8228Z'
                        fill='#101828'
                      />
                      <path
                        d='M64.0562 2.40983C63.9338 2.40983 63.8342 2.31106 63.8342 2.18923V0.2206C63.8342 0.098766 63.9338 0 64.0562 0H66.278C66.4004 0 66.5 0.098766 66.5 0.220601V2.18923C66.5 2.31106 66.4004 2.40983 66.278 2.40983H64.0562ZM64.0562 11.8239C63.9338 11.8239 63.8342 11.7251 63.8342 11.6033V3.71239C63.8342 3.59056 63.9338 3.49179 64.0562 3.49179H66.278C66.4004 3.49179 66.5 3.59056 66.5 3.71239V11.6033C66.5 11.7251 66.4004 11.8239 66.278 11.8239H64.0562Z'
                        fill='#101828'
                      />
                      <path
                        d='M11.0566 6.58266C10.5248 6.08916 9.73982 5.79709 8.70092 5.70679C8.65646 5.70293 8.6219 5.66583 8.6219 5.62114C8.6219 5.57626 8.65724 5.53904 8.70194 5.53532C10.4971 5.38585 11.3943 4.49983 11.3943 2.8766C11.3943 1.94713 11.0746 1.23547 10.4344 0.741282C9.79496 0.247095 8.86496 0 7.64438 0H0.906857C0.682069 0 0.5 0.180776 0.5 0.40397V4.49046C0.5 4.6029 0.591882 4.69413 0.705124 4.69413H2.76416C2.89774 4.69413 2.9842 4.72342 3.05947 4.7968C3.13474 4.87019 3.16559 4.96513 3.16559 5.06443V6.61128C3.16559 6.72978 3.11168 6.79812 3.07473 6.82944C3.03777 6.86076 2.99031 6.8766 2.86893 6.88434H2.02978C1.97384 6.88434 1.90738 6.86208 1.87314 6.83382C1.84263 6.80856 1.82229 6.7419 1.82229 6.68232V5.99222C1.82229 5.88079 1.73108 5.79023 1.61886 5.79023H0.703428C0.591204 5.79023 0.5 5.88079 0.5 5.99222V6.68232C0.5 6.79374 0.591204 6.88434 0.703428 6.88434H1.61886C1.67616 6.88872 1.72294 6.92034 1.75447 6.95166C1.78635 6.98328 1.82229 7.03512 1.82229 7.0863V7.77642C1.82229 7.88784 1.91349 7.97838 2.02572 7.97838H2.94114C3.05337 7.97838 3.14457 7.88784 3.14457 7.77642V7.17516C3.14457 7.1001 3.15372 7.0173 3.20492 6.96576C3.25612 6.91428 3.32392 6.88296 3.36902 6.88296H7.66202C8.20724 6.88296 8.59814 6.98298 8.83514 7.1829C9.07214 7.37112 9.19046 7.69464 9.19046 8.15346C9.19046 8.61228 9.07214 8.95938 8.83514 9.15936C8.59814 9.34752 8.20724 9.44178 7.66202 9.44178H3.36936C3.25713 9.44178 3.16593 9.53232 3.16593 9.6441V11.6202C3.16593 11.7326 3.25781 11.8242 3.37105 11.8242H7.98212C9.28538 11.8242 10.2629 11.536 10.9145 10.9594C11.5662 10.3831 11.892 9.57678 11.892 8.5416C11.892 7.72998 11.6136 7.07688 11.0566 6.58266ZM8.39066 4.42953C8.17742 4.60593 7.82786 4.69413 7.34198 4.69413H3.49379C3.3619 4.69413 3.26663 4.67763 3.22527 4.64633C3.1839 4.61502 3.16593 4.57159 3.16593 4.50998V2.38207H7.3067C7.80446 2.38207 8.16584 2.47633 8.39102 2.66452C8.61614 2.84092 8.7287 3.13514 8.7287 3.54685C8.7287 3.95857 8.61578 4.24135 8.39066 4.42953Z'
                        fill='#101828'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_4_25542'>
                        <rect
                          width='66'
                          height='12'
                          fill='white'
                          transform='translate(0.5)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                {activeTab === 'payment' && (
                  <FSDialogClose>
                    <Button variant='outline'>Cancel</Button>
                  </FSDialogClose>
                )}
                {activeTab !== 'payment' && (
                  <Button onClick={handleBack} variant='outline'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M16.6667 10H3.33337M3.33337 10L8.33337 15M3.33337 10L8.33337 5'
                        stroke='#344054'
                        stroke-width='1.66667'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                    Back
                  </Button>
                )}

                <div className='flex items-center '>
                  <div className='flex  items-center '>
                    {activeTab !== 'confirm' && (
                      <Button
                        onClick={handleContinue}
                        disabled={!canContinue()}
                      >
                        Continue
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M3.33325 10H16.6666M16.6666 10L11.6666 5M16.6666 10L11.6666 15'
                            stroke='white'
                            stroke-width='1.66667'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </Button>
                    )}
                  </div>
                  {activeTab == 'confirm' && (
                    <Button onClick={handleConfirm}>Place Bid</Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tabs>

      <div id='loading' className='hidden relative w-full h-full'>
        <div className='fixed inset-0 w-screen h-screen mx-auto -translate-y-10 overflow-hidden '>
          <div className='absolute inset-0 z-10 h-full bg-gradient-to-b from-transparent via-gray-50/60 to-gray-50 opacity-100'></div>
          <div className='absolute inset-0 z-10 h-full bg-gradient-to-l from-transparent via-gray-50/30 to-gray-50 opacity-100'></div>
          <div className='absolute inset-0 z-10 h-full bg-gradient-to-r from-transparent via-gray-50/30 to-gray-50 opacity-100'></div>
          <svg
            width='100vw'
            height='100vh'
            viewBox='0 0 1440 1440'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask
              id='mask0_173_20898'
              mask-type='alpha'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='1440'
              height='1440'
            >
              <path
                d='M1440 0H0V1440H1440V0Z'
                fill='url(#paint0_radial_173_20898)'
              />
            </mask>
            <g mask='url(#mask0_173_20898)'>
              <path
                d='M80 80V81H81V80H80ZM79 0V80H81V0H79ZM80 79H0V81H80V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 80V81H161V80H160ZM159 0V80H161V0H159ZM160 79H80V81H160V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 80V81H241V80H240ZM239 0V80H241V0H239ZM240 79H160V81H240V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 80V81H321V80H320ZM319 0V80H321V0H319ZM320 79H240V81H320V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 80V81H401V80H400ZM399 0V80H401V0H399ZM400 79H320V81H400V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 80V81H481V80H480ZM479 0V80H481V0H479ZM480 79H400V81H480V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 80V81H561V80H560ZM559 0V80H561V0H559ZM560 79H480V81H560V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 80V81H641V80H640ZM639 0V80H641V0H639ZM640 79H560V81H640V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 80V81H721V80H720ZM719 0V80H721V0H719ZM720 79H640V81H720V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 80V81H801V80H800ZM799 0V80H801V0H799ZM800 79H720V81H800V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 80V81H881V80H880ZM879 0V80H881V0H879ZM880 79H800V81H880V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 80V81H961V80H960ZM959 0V80H961V0H959ZM960 79H880V81H960V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 80V81H1041V80H1040ZM1039 0V80H1041V0H1039ZM1040 79H960V81H1040V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 80V81H1121V80H1120ZM1119 0V80H1121V0H1119ZM1120 79H1040V81H1120V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 80V81H1201V80H1200ZM1199 0V80H1201V0H1199ZM1200 79H1120V81H1200V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 80V81H1281V80H1280ZM1279 0V80H1281V0H1279ZM1280 79H1200V81H1280V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 80V81H1361V80H1360ZM1359 0V80H1361V0H1359ZM1360 79H1280V81H1360V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 80V81H1441V80H1440ZM1439 0V80H1441V0H1439ZM1440 79H1360V81H1440V79Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 160V161H81V160H80ZM79 80V160H81V80H79ZM80 159H0V161H80V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 160V161H161V160H160ZM159 80V160H161V80H159ZM160 159H80V161H160V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 160V161H241V160H240ZM239 80V160H241V80H239ZM240 159H160V161H240V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 160V161H321V160H320ZM319 80V160H321V80H319ZM320 159H240V161H320V159Z'
                fill='#D0D5DD'
              />
              <path d='M320 80H400V160H320V80Z' fill='#F2F4F7' />
              <path
                d='M400 160V161H401V160H400ZM399 80V160H401V80H399ZM400 159H320V161H400V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 160V161H481V160H480ZM479 80V160H481V80H479ZM480 159H400V161H480V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 160V161H561V160H560ZM559 80V160H561V80H559ZM560 159H480V161H560V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 160V161H641V160H640ZM639 80V160H641V80H639ZM640 159H560V161H640V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 160V161H721V160H720ZM719 80V160H721V80H719ZM720 159H640V161H720V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 160V161H801V160H800ZM799 80V160H801V80H799ZM800 159H720V161H800V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 160V161H881V160H880ZM879 80V160H881V80H879ZM880 159H800V161H880V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 160V161H961V160H960ZM959 80V160H961V80H959ZM960 159H880V161H960V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 160V161H1041V160H1040ZM1039 80V160H1041V80H1039ZM1040 159H960V161H1040V159Z'
                fill='#D0D5DD'
              />
              <path d='M1040 80H1120V160H1040V80Z' fill='#F2F4F7' />
              <path
                d='M1120 160V161H1121V160H1120ZM1119 80V160H1121V80H1119ZM1120 159H1040V161H1120V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 160V161H1201V160H1200ZM1199 80V160H1201V80H1199ZM1200 159H1120V161H1200V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 160V161H1281V160H1280ZM1279 80V160H1281V80H1279ZM1280 159H1200V161H1280V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 160V161H1361V160H1360ZM1359 80V160H1361V80H1359ZM1360 159H1280V161H1360V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 160V161H1441V160H1440ZM1439 80V160H1441V80H1439ZM1440 159H1360V161H1440V159Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 240V241H81V240H80ZM79 160V240H81V160H79ZM80 239H0V241H80V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 240V241H161V240H160ZM159 160V240H161V160H159ZM160 239H80V241H160V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 240V241H241V240H240ZM239 160V240H241V160H239ZM240 239H160V241H240V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 240V241H321V240H320ZM319 160V240H321V160H319ZM320 239H240V241H320V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 240V241H401V240H400ZM399 160V240H401V160H399ZM400 239H320V241H400V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 240V241H481V240H480ZM479 160V240H481V160H479ZM480 239H400V241H480V239Z'
                fill='#D0D5DD'
              />
              <path d='M480 160H560V240H480V160Z' fill='#F2F4F7' />
              <path
                d='M560 240V241H561V240H560ZM559 160V240H561V160H559ZM560 239H480V241H560V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 240V241H641V240H640ZM639 160V240H641V160H639ZM640 239H560V241H640V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 240V241H721V240H720ZM719 160V240H721V160H719ZM720 239H640V241H720V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 240V241H801V240H800ZM799 160V240H801V160H799ZM800 239H720V241H800V239Z'
                fill='#D0D5DD'
              />
              <path d='M800 160H880V240H800V160Z' fill='#F2F4F7' />
              <path
                d='M880 240V241H881V240H880ZM879 160V240H881V160H879ZM880 239H800V241H880V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 240V241H961V240H960ZM959 160V240H961V160H959ZM960 239H880V241H960V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 240V241H1041V240H1040ZM1039 160V240H1041V160H1039ZM1040 239H960V241H1040V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 240V241H1121V240H1120ZM1119 160V240H1121V160H1119ZM1120 239H1040V241H1120V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 240V241H1201V240H1200ZM1199 160V240H1201V160H1199ZM1200 239H1120V241H1200V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 240V241H1281V240H1280ZM1279 160V240H1281V160H1279ZM1280 239H1200V241H1280V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 240V241H1361V240H1360ZM1359 160V240H1361V160H1359ZM1360 239H1280V241H1360V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 240V241H1441V240H1440ZM1439 160V240H1441V160H1439ZM1440 239H1360V241H1440V239Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 320V321H81V320H80ZM79 240V320H81V240H79ZM80 319H0V321H80V319Z'
                fill='#D0D5DD'
              />
              <path d='M80 240H160V320H80V240Z' fill='#F2F4F7' />
              <path
                d='M160 320V321H161V320H160ZM159 240V320H161V240H159ZM160 319H80V321H160V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 320V321H241V320H240ZM239 240V320H241V240H239ZM240 319H160V321H240V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 320V321H321V320H320ZM319 240V320H321V240H319ZM320 319H240V321H320V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 320V321H401V320H400ZM399 240V320H401V240H399ZM400 319H320V321H400V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 320V321H481V320H480ZM479 240V320H481V240H479ZM480 319H400V321H480V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 320V321H561V320H560ZM559 240V320H561V240H559ZM560 319H480V321H560V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 320V321H641V320H640ZM639 240V320H641V240H639ZM640 319H560V321H640V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 320V321H721V320H720ZM719 240V320H721V240H719ZM720 319H640V321H720V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 320V321H801V320H800ZM799 240V320H801V240H799ZM800 319H720V321H800V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 320V321H881V320H880ZM879 240V320H881V240H879ZM880 319H800V321H880V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 320V321H961V320H960ZM959 240V320H961V240H959ZM960 319H880V321H960V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 320V321H1041V320H1040ZM1039 240V320H1041V240H1039ZM1040 319H960V321H1040V319Z'
                fill='#D0D5DD'
              />
              <path d='M1040 240H1120V320H1040V240Z' fill='#F2F4F7' />
              <path
                d='M1120 320V321H1121V320H1120ZM1119 240V320H1121V240H1119ZM1120 319H1040V321H1120V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 320V321H1201V320H1200ZM1199 240V320H1201V240H1199ZM1200 319H1120V321H1200V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 320V321H1281V320H1280ZM1279 240V320H1281V240H1279ZM1280 319H1200V321H1280V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 320V321H1361V320H1360ZM1359 240V320H1361V240H1359ZM1360 319H1280V321H1360V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 320V321H1441V320H1440ZM1439 240V320H1441V240H1439ZM1440 319H1360V321H1440V319Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 400V401H81V400H80ZM79 320V400H81V320H79ZM80 399H0V401H80V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 400V401H161V400H160ZM159 320V400H161V320H159ZM160 399H80V401H160V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 400V401H241V400H240ZM239 320V400H241V320H239ZM240 399H160V401H240V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 400V401H321V400H320ZM319 320V400H321V320H319ZM320 399H240V401H320V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 400V401H401V400H400ZM399 320V400H401V320H399ZM400 399H320V401H400V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 400V401H481V400H480ZM479 320V400H481V320H479ZM480 399H400V401H480V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 400V401H561V400H560ZM559 320V400H561V320H559ZM560 399H480V401H560V399Z'
                fill='#D0D5DD'
              />
              <path d='M560 320H640V400H560V320Z' fill='#F2F4F7' />
              <path
                d='M640 400V401H641V400H640ZM639 320V400H641V320H639ZM640 399H560V401H640V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 400V401H721V400H720ZM719 320V400H721V320H719ZM720 399H640V401H720V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 400V401H801V400H800ZM799 320V400H801V320H799ZM800 399H720V401H800V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 400V401H881V400H880ZM879 320V400H881V320H879ZM880 399H800V401H880V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 400V401H961V400H960ZM959 320V400H961V320H959ZM960 399H880V401H960V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 400V401H1041V400H1040ZM1039 320V400H1041V320H1039ZM1040 399H960V401H1040V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 400V401H1121V400H1120ZM1119 320V400H1121V320H1119ZM1120 399H1040V401H1120V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 400V401H1201V400H1200ZM1199 320V400H1201V320H1199ZM1200 399H1120V401H1200V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 400V401H1281V400H1280ZM1279 320V400H1281V320H1279ZM1280 399H1200V401H1280V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 400V401H1361V400H1360ZM1359 320V400H1361V320H1359ZM1360 399H1280V401H1360V399Z'
                fill='#D0D5DD'
              />
              <path d='M1360 320H1440V400H1360V320Z' fill='#F2F4F7' />
              <path
                d='M1440 400V401H1441V400H1440ZM1439 320V400H1441V320H1439ZM1440 399H1360V401H1440V399Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 480V481H81V480H80ZM79 400V480H81V400H79ZM80 479H0V481H80V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 480V481H161V480H160ZM159 400V480H161V400H159ZM160 479H80V481H160V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 480V481H241V480H240ZM239 400V480H241V400H239ZM240 479H160V481H240V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 480V481H321V480H320ZM319 400V480H321V400H319ZM320 479H240V481H320V479Z'
                fill='#D0D5DD'
              />
              <path d='M320 400H400V480H320V400Z' fill='#F2F4F7' />
              <path
                d='M400 480V481H401V480H400ZM399 400V480H401V400H399ZM400 479H320V481H400V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 480V481H481V480H480ZM479 400V480H481V400H479ZM480 479H400V481H480V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 480V481H561V480H560ZM559 400V480H561V400H559ZM560 479H480V481H560V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 480V481H641V480H640ZM639 400V480H641V400H639ZM640 479H560V481H640V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 480V481H721V480H720ZM719 400V480H721V400H719ZM720 479H640V481H720V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 480V481H801V480H800ZM799 400V480H801V400H799ZM800 479H720V481H800V479Z'
                fill='#D0D5DD'
              />
              <path d='M800 400H880V480H800V400Z' fill='#F2F4F7' />
              <path
                d='M880 480V481H881V480H880ZM879 400V480H881V400H879ZM880 479H800V481H880V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 480V481H961V480H960ZM959 400V480H961V400H959ZM960 479H880V481H960V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 480V481H1041V480H1040ZM1039 400V480H1041V400H1039ZM1040 479H960V481H1040V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 480V481H1121V480H1120ZM1119 400V480H1121V400H1119ZM1120 479H1040V481H1120V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 480V481H1201V480H1200ZM1199 400V480H1201V400H1199ZM1200 479H1120V481H1200V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 480V481H1281V480H1280ZM1279 400V480H1281V400H1279ZM1280 479H1200V481H1280V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 480V481H1361V480H1360ZM1359 400V480H1361V400H1359ZM1360 479H1280V481H1360V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 480V481H1441V480H1440ZM1439 400V480H1441V400H1439ZM1440 479H1360V481H1440V479Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 560V561H81V560H80ZM79 480V560H81V480H79ZM80 559H0V561H80V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 560V561H161V560H160ZM159 480V560H161V480H159ZM160 559H80V561H160V559Z'
                fill='#D0D5DD'
              />
              <path d='M160 480H240V560H160V480Z' fill='#F2F4F7' />
              <path
                d='M240 560V561H241V560H240ZM239 480V560H241V480H239ZM240 559H160V561H240V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 560V561H321V560H320ZM319 480V560H321V480H319ZM320 559H240V561H320V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 560V561H401V560H400ZM399 480V560H401V480H399ZM400 559H320V561H400V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 560V561H481V560H480ZM479 480V560H481V480H479ZM480 559H400V561H480V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 560V561H561V560H560ZM559 480V560H561V480H559ZM560 559H480V561H560V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 560V561H641V560H640ZM639 480V560H641V480H639ZM640 559H560V561H640V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 560V561H721V560H720ZM719 480V560H721V480H719ZM720 559H640V561H720V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 560V561H801V560H800ZM799 480V560H801V480H799ZM800 559H720V561H800V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 560V561H881V560H880ZM879 480V560H881V480H879ZM880 559H800V561H880V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 560V561H961V560H960ZM959 480V560H961V480H959ZM960 559H880V561H960V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 560V561H1041V560H1040ZM1039 480V560H1041V480H1039ZM1040 559H960V561H1040V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 560V561H1121V560H1120ZM1119 480V560H1121V480H1119ZM1120 559H1040V561H1120V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 560V561H1201V560H1200ZM1199 480V560H1201V480H1199ZM1200 559H1120V561H1200V559Z'
                fill='#D0D5DD'
              />
              <path d='M1200 480H1280V560H1200V480Z' fill='#F2F4F7' />
              <path
                d='M1280 560V561H1281V560H1280ZM1279 480V560H1281V480H1279ZM1280 559H1200V561H1280V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 560V561H1361V560H1360ZM1359 480V560H1361V480H1359ZM1360 559H1280V561H1360V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 560V561H1441V560H1440ZM1439 480V560H1441V480H1439ZM1440 559H1360V561H1440V559Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 640V641H81V640H80ZM79 560V640H81V560H79ZM80 639H0V641H80V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 640V641H161V640H160ZM159 560V640H161V560H159ZM160 639H80V641H160V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 640V641H241V640H240ZM239 560V640H241V560H239ZM240 639H160V641H240V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 640V641H321V640H320ZM319 560V640H321V560H319ZM320 639H240V641H320V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 640V641H401V640H400ZM399 560V640H401V560H399ZM400 639H320V641H400V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 640V641H481V640H480ZM479 560V640H481V560H479ZM480 639H400V641H480V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 640V641H561V640H560ZM559 560V640H561V560H559ZM560 639H480V641H560V639Z'
                fill='#D0D5DD'
              />
              <path d='M560 560H640V640H560V560Z' fill='#F2F4F7' />
              <path
                d='M640 640V641H641V640H640ZM639 560V640H641V560H639ZM640 639H560V641H640V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 640V641H721V640H720ZM719 560V640H721V560H719ZM720 639H640V641H720V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 640V641H801V640H800ZM799 560V640H801V560H799ZM800 639H720V641H800V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 640V641H881V640H880ZM879 560V640H881V560H879ZM880 639H800V641H880V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 640V641H961V640H960ZM959 560V640H961V560H959ZM960 639H880V641H960V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 640V641H1041V640H1040ZM1039 560V640H1041V560H1039ZM1040 639H960V641H1040V639Z'
                fill='#D0D5DD'
              />
              <path d='M1040 560H1120V640H1040V560Z' fill='#F2F4F7' />
              <path
                d='M1120 640V641H1121V640H1120ZM1119 560V640H1121V560H1119ZM1120 639H1040V641H1120V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 640V641H1201V640H1200ZM1199 560V640H1201V560H1199ZM1200 639H1120V641H1200V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 640V641H1281V640H1280ZM1279 560V640H1281V560H1279ZM1280 639H1200V641H1280V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 640V641H1361V640H1360ZM1359 560V640H1361V560H1359ZM1360 639H1280V641H1360V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 640V641H1441V640H1440ZM1439 560V640H1441V560H1439ZM1440 639H1360V641H1440V639Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 720V721H81V720H80ZM79 640V720H81V640H79ZM80 719H0V721H80V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 720V721H161V720H160ZM159 640V720H161V640H159ZM160 719H80V721H160V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 720V721H241V720H240ZM239 640V720H241V640H239ZM240 719H160V721H240V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 720V721H321V720H320ZM319 640V720H321V640H319ZM320 719H240V721H320V719Z'
                fill='#D0D5DD'
              />
              <path d='M320 640H400V720H320V640Z' fill='#F2F4F7' />
              <path
                d='M400 720V721H401V720H400ZM399 640V720H401V640H399ZM400 719H320V721H400V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 720V721H481V720H480ZM479 640V720H481V640H479ZM480 719H400V721H480V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 720V721H561V720H560ZM559 640V720H561V640H559ZM560 719H480V721H560V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 720V721H641V720H640ZM639 640V720H641V640H639ZM640 719H560V721H640V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 720V721H721V720H720ZM719 640V720H721V640H719ZM720 719H640V721H720V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 720V721H801V720H800ZM799 640V720H801V640H799ZM800 719H720V721H800V719Z'
                fill='#D0D5DD'
              />
              <path d='M800 640H880V720H800V640Z' fill='#F2F4F7' />
              <path
                d='M880 720V721H881V720H880ZM879 640V720H881V640H879ZM880 719H800V721H880V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 720V721H961V720H960ZM959 640V720H961V640H959ZM960 719H880V721H960V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 720V721H1041V720H1040ZM1039 640V720H1041V640H1039ZM1040 719H960V721H1040V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 720V721H1121V720H1120ZM1119 640V720H1121V640H1119ZM1120 719H1040V721H1120V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 720V721H1201V720H1200ZM1199 640V720H1201V640H1199ZM1200 719H1120V721H1200V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 720V721H1281V720H1280ZM1279 640V720H1281V640H1279ZM1280 719H1200V721H1280V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 720V721H1361V720H1360ZM1359 640V720H1361V640H1359ZM1360 719H1280V721H1360V719Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 720V721H1441V720H1440ZM1439 640V720H1441V640H1439ZM1440 719H1360V721H1440V719Z'
                fill='#D0D5DD'
              />
              <path d='M0 720H80V800H0V720Z' fill='#F2F4F7' />
              <path
                d='M80 800V801H81V800H80ZM79 720V800H81V720H79ZM80 799H0V801H80V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 800V801H161V800H160ZM159 720V800H161V720H159ZM160 799H80V801H160V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 800V801H241V800H240ZM239 720V800H241V720H239ZM240 799H160V801H240V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 800V801H321V800H320ZM319 720V800H321V720H319ZM320 799H240V801H320V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 800V801H401V800H400ZM399 720V800H401V720H399ZM400 799H320V801H400V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 800V801H481V800H480ZM479 720V800H481V720H479ZM480 799H400V801H480V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 800V801H561V800H560ZM559 720V800H561V720H559ZM560 799H480V801H560V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 800V801H641V800H640ZM639 720V800H641V720H639ZM640 799H560V801H640V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 800V801H721V800H720ZM719 720V800H721V720H719ZM720 799H640V801H720V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 800V801H801V800H800ZM799 720V800H801V720H799ZM800 799H720V801H800V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 800V801H881V800H880ZM879 720V800H881V720H879ZM880 799H800V801H880V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 800V801H961V800H960ZM959 720V800H961V720H959ZM960 799H880V801H960V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 800V801H1041V800H1040ZM1039 720V800H1041V720H1039ZM1040 799H960V801H1040V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 800V801H1121V800H1120ZM1119 720V800H1121V720H1119ZM1120 799H1040V801H1120V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 800V801H1201V800H1200ZM1199 720V800H1201V720H1199ZM1200 799H1120V801H1200V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 800V801H1281V800H1280ZM1279 720V800H1281V720H1279ZM1280 799H1200V801H1280V799Z'
                fill='#D0D5DD'
              />
              <path d='M1280 720H1360V800H1280V720Z' fill='#F2F4F7' />
              <path
                d='M1360 800V801H1361V800H1360ZM1359 720V800H1361V720H1359ZM1360 799H1280V801H1360V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 800V801H1441V800H1440ZM1439 720V800H1441V720H1439ZM1440 799H1360V801H1440V799Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 880V881H81V880H80ZM79 800V880H81V800H79ZM80 879H0V881H80V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 880V881H161V880H160ZM159 800V880H161V800H159ZM160 879H80V881H160V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 880V881H241V880H240ZM239 800V880H241V800H239ZM240 879H160V881H240V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 880V881H321V880H320ZM319 800V880H321V800H319ZM320 879H240V881H320V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 880V881H401V880H400ZM399 800V880H401V800H399ZM400 879H320V881H400V879Z'
                fill='#D0D5DD'
              />
              <path d='M400 800H480V880H400V800Z' fill='#F2F4F7' />
              <path
                d='M480 880V881H481V880H480ZM479 800V880H481V800H479ZM480 879H400V881H480V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 880V881H561V880H560ZM559 800V880H561V800H559ZM560 879H480V881H560V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 880V881H641V880H640ZM639 800V880H641V800H639ZM640 879H560V881H640V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 880V881H721V880H720ZM719 800V880H721V800H719ZM720 879H640V881H720V879Z'
                fill='#D0D5DD'
              />
              <path d='M720 800H800V880H720V800Z' fill='#F2F4F7' />
              <path
                d='M800 880V881H801V880H800ZM799 800V880H801V800H799ZM800 879H720V881H800V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 880V881H881V880H880ZM879 800V880H881V800H879ZM880 879H800V881H880V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 880V881H961V880H960ZM959 800V880H961V800H959ZM960 879H880V881H960V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 880V881H1041V880H1040ZM1039 800V880H1041V800H1039ZM1040 879H960V881H1040V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 880V881H1121V880H1120ZM1119 800V880H1121V800H1119ZM1120 879H1040V881H1120V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 880V881H1201V880H1200ZM1199 800V880H1201V800H1199ZM1200 879H1120V881H1200V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 880V881H1281V880H1280ZM1279 800V880H1281V800H1279ZM1280 879H1200V881H1280V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 880V881H1361V880H1360ZM1359 800V880H1361V800H1359ZM1360 879H1280V881H1360V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 880V881H1441V880H1440ZM1439 800V880H1441V800H1439ZM1440 879H1360V881H1440V879Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 960V961H81V960H80ZM79 880V960H81V880H79ZM80 959H0V961H80V959Z'
                fill='#D0D5DD'
              />
              <path d='M80 880H160V960H80V880Z' fill='#F2F4F7' />
              <path
                d='M160 960V961H161V960H160ZM159 880V960H161V880H159ZM160 959H80V961H160V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 960V961H241V960H240ZM239 880V960H241V880H239ZM240 959H160V961H240V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 960V961H321V960H320ZM319 880V960H321V880H319ZM320 959H240V961H320V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 960V961H401V960H400ZM399 880V960H401V880H399ZM400 959H320V961H400V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 960V961H481V960H480ZM479 880V960H481V880H479ZM480 959H400V961H480V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 960V961H561V960H560ZM559 880V960H561V880H559ZM560 959H480V961H560V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 960V961H641V960H640ZM639 880V960H641V880H639ZM640 959H560V961H640V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 960V961H721V960H720ZM719 880V960H721V880H719ZM720 959H640V961H720V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 960V961H801V960H800ZM799 880V960H801V880H799ZM800 959H720V961H800V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 960V961H881V960H880ZM879 880V960H881V880H879ZM880 959H800V961H880V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 960V961H961V960H960ZM959 880V960H961V880H959ZM960 959H880V961H960V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 960V961H1041V960H1040ZM1039 880V960H1041V880H1039ZM1040 959H960V961H1040V959Z'
                fill='#D0D5DD'
              />
              <path d='M1040 880H1120V960H1040V880Z' fill='#F2F4F7' />
              <path
                d='M1120 960V961H1121V960H1120ZM1119 880V960H1121V880H1119ZM1120 959H1040V961H1120V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 960V961H1201V960H1200ZM1199 880V960H1201V880H1199ZM1200 959H1120V961H1200V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 960V961H1281V960H1280ZM1279 880V960H1281V880H1279ZM1280 959H1200V961H1280V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 960V961H1361V960H1360ZM1359 880V960H1361V880H1359ZM1360 959H1280V961H1360V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 960V961H1441V960H1440ZM1439 880V960H1441V880H1439ZM1440 959H1360V961H1440V959Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 1040V1041H81V1040H80ZM79 960V1040H81V960H79ZM80 1039H0V1041H80V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 1040V1041H161V1040H160ZM159 960V1040H161V960H159ZM160 1039H80V1041H160V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 1040V1041H241V1040H240ZM239 960V1040H241V960H239ZM240 1039H160V1041H240V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 1040V1041H321V1040H320ZM319 960V1040H321V960H319ZM320 1039H240V1041H320V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 1040V1041H401V1040H400ZM399 960V1040H401V960H399ZM400 1039H320V1041H400V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 1040V1041H481V1040H480ZM479 960V1040H481V960H479ZM480 1039H400V1041H480V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 1040V1041H561V1040H560ZM559 960V1040H561V960H559ZM560 1039H480V1041H560V1039Z'
                fill='#D0D5DD'
              />
              <path d='M560 960H640V1040H560V960Z' fill='#F2F4F7' />
              <path
                d='M640 1040V1041H641V1040H640ZM639 960V1040H641V960H639ZM640 1039H560V1041H640V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 1040V1041H721V1040H720ZM719 960V1040H721V960H719ZM720 1039H640V1041H720V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 1040V1041H801V1040H800ZM799 960V1040H801V960H799ZM800 1039H720V1041H800V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 1040V1041H881V1040H880ZM879 960V1040H881V960H879ZM880 1039H800V1041H880V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 1040V1041H961V1040H960ZM959 960V1040H961V960H959ZM960 1039H880V1041H960V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 1040V1041H1041V1040H1040ZM1039 960V1040H1041V960H1039ZM1040 1039H960V1041H1040V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 1040V1041H1121V1040H1120ZM1119 960V1040H1121V960H1119ZM1120 1039H1040V1041H1120V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 1040V1041H1201V1040H1200ZM1199 960V1040H1201V960H1199ZM1200 1039H1120V1041H1200V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 1040V1041H1281V1040H1280ZM1279 960V1040H1281V960H1279ZM1280 1039H1200V1041H1280V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 1040V1041H1361V1040H1360ZM1359 960V1040H1361V960H1359ZM1360 1039H1280V1041H1360V1039Z'
                fill='#D0D5DD'
              />
              <path d='M1360 960H1440V1040H1360V960Z' fill='#F2F4F7' />
              <path
                d='M1440 1040V1041H1441V1040H1440ZM1439 960V1040H1441V960H1439ZM1440 1039H1360V1041H1440V1039Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 1120V1121H81V1120H80ZM79 1040V1120H81V1040H79ZM80 1119H0V1121H80V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 1120V1121H161V1120H160ZM159 1040V1120H161V1040H159ZM160 1119H80V1121H160V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M240 1120V1121H241V1120H240ZM239 1040V1120H241V1040H239ZM240 1119H160V1121H240V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 1120V1121H321V1120H320ZM319 1040V1120H321V1040H319ZM320 1119H240V1121H320V1119Z'
                fill='#D0D5DD'
              />
              <path d='M320 1040H400V1120H320V1040Z' fill='#F2F4F7' />
              <path
                d='M400 1120V1121H401V1120H400ZM399 1040V1120H401V1040H399ZM400 1119H320V1121H400V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 1120V1121H481V1120H480ZM479 1040V1120H481V1040H479ZM480 1119H400V1121H480V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 1120V1121H561V1120H560ZM559 1040V1120H561V1040H559ZM560 1119H480V1121H560V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 1120V1121H641V1120H640ZM639 1040V1120H641V1040H639ZM640 1119H560V1121H640V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 1120V1121H721V1120H720ZM719 1040V1120H721V1040H719ZM720 1119H640V1121H720V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 1120V1121H801V1120H800ZM799 1040V1120H801V1040H799ZM800 1119H720V1121H800V1119Z'
                fill='#D0D5DD'
              />
              <path d='M800 1040H880V1120H800V1040Z' fill='#F2F4F7' />
              <path
                d='M880 1120V1121H881V1120H880ZM879 1040V1120H881V1040H879ZM880 1119H800V1121H880V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 1120V1121H961V1120H960ZM959 1040V1120H961V1040H959ZM960 1119H880V1121H960V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 1120V1121H1041V1120H1040ZM1039 1040V1120H1041V1040H1039ZM1040 1119H960V1121H1040V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 1120V1121H1121V1120H1120ZM1119 1040V1120H1121V1040H1119ZM1120 1119H1040V1121H1120V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 1120V1121H1201V1120H1200ZM1199 1040V1120H1201V1040H1199ZM1200 1119H1120V1121H1200V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1280 1120V1121H1281V1120H1280ZM1279 1040V1120H1281V1040H1279ZM1280 1119H1200V1121H1280V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 1120V1121H1361V1120H1360ZM1359 1040V1120H1361V1040H1359ZM1360 1119H1280V1121H1360V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 1120V1121H1441V1120H1440ZM1439 1040V1120H1441V1040H1439ZM1440 1119H1360V1121H1440V1119Z'
                fill='#D0D5DD'
              />
              <path
                d='M80 1200V1201H81V1200H80ZM79 1120V1200H81V1120H79ZM80 1199H0V1201H80V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M160 1200V1201H161V1200H160ZM159 1120V1200H161V1120H159ZM160 1199H80V1201H160V1199Z'
                fill='#D0D5DD'
              />
              <path d='M160 1120H240V1200H160V1120Z' fill='#F2F4F7' />
              <path
                d='M240 1200V1201H241V1200H240ZM239 1120V1200H241V1120H239ZM240 1199H160V1201H240V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M320 1200V1201H321V1200H320ZM319 1120V1200H321V1120H319ZM320 1199H240V1201H320V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M400 1200V1201H401V1200H400ZM399 1120V1200H401V1120H399ZM400 1199H320V1201H400V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M480 1200V1201H481V1200H480ZM479 1120V1200H481V1120H479ZM480 1199H400V1201H480V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M560 1200V1201H561V1200H560ZM559 1120V1200H561V1120H559ZM560 1199H480V1201H560V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M640 1200V1201H641V1200H640ZM639 1120V1200H641V1120H639ZM640 1199H560V1201H640V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M720 1200V1201H721V1200H720ZM719 1120V1200H721V1120H719ZM720 1199H640V1201H720V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M800 1200V1201H801V1200H800ZM799 1120V1200H801V1120H799ZM800 1199H720V1201H800V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M880 1200V1201H881V1200H880ZM879 1120V1200H881V1120H879ZM880 1199H800V1201H880V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M960 1200V1201H961V1200H960ZM959 1120V1200H961V1120H959ZM960 1199H880V1201H960V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M1040 1200V1201H1041V1200H1040ZM1039 1120V1200H1041V1120H1039ZM1040 1199H960V1201H1040V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M1120 1200V1201H1121V1200H1120ZM1119 1120V1200H1121V1120H1119ZM1120 1199H1040V1201H1120V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M1200 1200V1201H1201V1200H1200ZM1199 1120V1200H1201V1120H1199ZM1200 1199H1120V1201H1200V1199Z'
                fill='#D0D5DD'
              />
              <path d='M1200 1120H1280V1200H1200V1120Z' fill='#F2F4F7' />
              <path
                d='M1280 1200V1201H1281V1200H1280ZM1279 1120V1200H1281V1120H1279ZM1280 1199H1200V1201H1280V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M1360 1200V1201H1361V1200H1360ZM1359 1120V1200H1361V1120H1359ZM1360 1199H1280V1201H1360V1199Z'
                fill='#D0D5DD'
              />
              <path
                d='M1440 1200V1201H1441V1200H1440ZM1439 1120V1200H1441V1120H1439ZM1440 1199H1360V1201H1440V1199Z'
                fill='#D0D5DD'
              />
            </g>
            <defs>
              <radialGradient
                id='paint0_radial_173_20898'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(720 -0.000129104) rotate(90) scale(1083 565.257)'
              >
                <stop />
                <stop offset='0.953125' stop-opacity='0' />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className=' w-full h-full absolute z-10 flex flex-col gap-4  text-sm font-medium text-gray-700 justify-center items-center'>
          <div className='w-12 h-12  relative flex justify-center items-center'>
            <DotLottiePlayer
              src='https://lottie.host/d300e245-fabd-4d2d-8ddd-81e1266a372f/inxUh6Y5hU.lottie'
              autoplay
              loop
              className='w-full h-full'
            >
              {/* <Controls /> */}
            </DotLottiePlayer>
          </div>
          Processing your bid... Please wait.
        </div>
      </div>
      <div id='complete' className='hidden w-full h-full'>
        <div className=' w-full h-full flex flex-col gap-4  text-sm font-medium text-gray-700 justify-center items-center'>
          <div className='fixed inset-0 w-screen h-screen mx-auto -translate-y-10 overflow-hidden '>
            <div className='absolute inset-0 z-10 h-full bg-gradient-to-b from-transparent via-gray-50/60 to-gray-50 opacity-100'></div>
            <div className='absolute inset-0 z-10 h-full bg-gradient-to-l from-transparent via-gray-50/30 to-gray-50 opacity-100'></div>
            <div className='absolute inset-0 z-10 h-full bg-gradient-to-r from-transparent via-gray-50/30 to-gray-50 opacity-100'></div>
            <svg
              width='100vw'
              height='100vh'
              viewBox='0 0 1440 1440'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <mask
                id='mask0_173_20898'
                mask-type='alpha'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='1440'
                height='1440'
              >
                <path
                  d='M1440 0H0V1440H1440V0Z'
                  fill='url(#paint0_radial_173_20898)'
                />
              </mask>
              <g mask='url(#mask0_173_20898)'>
                <path
                  d='M80 80V81H81V80H80ZM79 0V80H81V0H79ZM80 79H0V81H80V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 80V81H161V80H160ZM159 0V80H161V0H159ZM160 79H80V81H160V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 80V81H241V80H240ZM239 0V80H241V0H239ZM240 79H160V81H240V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 80V81H321V80H320ZM319 0V80H321V0H319ZM320 79H240V81H320V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M400 80V81H401V80H400ZM399 0V80H401V0H399ZM400 79H320V81H400V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 80V81H481V80H480ZM479 0V80H481V0H479ZM480 79H400V81H480V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 80V81H561V80H560ZM559 0V80H561V0H559ZM560 79H480V81H560V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 80V81H641V80H640ZM639 0V80H641V0H639ZM640 79H560V81H640V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 80V81H721V80H720ZM719 0V80H721V0H719ZM720 79H640V81H720V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 80V81H801V80H800ZM799 0V80H801V0H799ZM800 79H720V81H800V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M880 80V81H881V80H880ZM879 0V80H881V0H879ZM880 79H800V81H880V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 80V81H961V80H960ZM959 0V80H961V0H959ZM960 79H880V81H960V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 80V81H1041V80H1040ZM1039 0V80H1041V0H1039ZM1040 79H960V81H1040V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1120 80V81H1121V80H1120ZM1119 0V80H1121V0H1119ZM1120 79H1040V81H1120V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 80V81H1201V80H1200ZM1199 0V80H1201V0H1199ZM1200 79H1120V81H1200V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 80V81H1281V80H1280ZM1279 0V80H1281V0H1279ZM1280 79H1200V81H1280V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 80V81H1361V80H1360ZM1359 0V80H1361V0H1359ZM1360 79H1280V81H1360V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 80V81H1441V80H1440ZM1439 0V80H1441V0H1439ZM1440 79H1360V81H1440V79Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 160V161H81V160H80ZM79 80V160H81V80H79ZM80 159H0V161H80V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 160V161H161V160H160ZM159 80V160H161V80H159ZM160 159H80V161H160V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 160V161H241V160H240ZM239 80V160H241V80H239ZM240 159H160V161H240V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 160V161H321V160H320ZM319 80V160H321V80H319ZM320 159H240V161H320V159Z'
                  fill='#D0D5DD'
                />
                <path d='M320 80H400V160H320V80Z' fill='#F2F4F7' />
                <path
                  d='M400 160V161H401V160H400ZM399 80V160H401V80H399ZM400 159H320V161H400V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 160V161H481V160H480ZM479 80V160H481V80H479ZM480 159H400V161H480V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 160V161H561V160H560ZM559 80V160H561V80H559ZM560 159H480V161H560V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 160V161H641V160H640ZM639 80V160H641V80H639ZM640 159H560V161H640V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 160V161H721V160H720ZM719 80V160H721V80H719ZM720 159H640V161H720V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 160V161H801V160H800ZM799 80V160H801V80H799ZM800 159H720V161H800V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M880 160V161H881V160H880ZM879 80V160H881V80H879ZM880 159H800V161H880V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 160V161H961V160H960ZM959 80V160H961V80H959ZM960 159H880V161H960V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 160V161H1041V160H1040ZM1039 80V160H1041V80H1039ZM1040 159H960V161H1040V159Z'
                  fill='#D0D5DD'
                />
                <path d='M1040 80H1120V160H1040V80Z' fill='#F2F4F7' />
                <path
                  d='M1120 160V161H1121V160H1120ZM1119 80V160H1121V80H1119ZM1120 159H1040V161H1120V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 160V161H1201V160H1200ZM1199 80V160H1201V80H1199ZM1200 159H1120V161H1200V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 160V161H1281V160H1280ZM1279 80V160H1281V80H1279ZM1280 159H1200V161H1280V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 160V161H1361V160H1360ZM1359 80V160H1361V80H1359ZM1360 159H1280V161H1360V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 160V161H1441V160H1440ZM1439 80V160H1441V80H1439ZM1440 159H1360V161H1440V159Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 240V241H81V240H80ZM79 160V240H81V160H79ZM80 239H0V241H80V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 240V241H161V240H160ZM159 160V240H161V160H159ZM160 239H80V241H160V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 240V241H241V240H240ZM239 160V240H241V160H239ZM240 239H160V241H240V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 240V241H321V240H320ZM319 160V240H321V160H319ZM320 239H240V241H320V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M400 240V241H401V240H400ZM399 160V240H401V160H399ZM400 239H320V241H400V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 240V241H481V240H480ZM479 160V240H481V160H479ZM480 239H400V241H480V239Z'
                  fill='#D0D5DD'
                />
                <path d='M480 160H560V240H480V160Z' fill='#F2F4F7' />
                <path
                  d='M560 240V241H561V240H560ZM559 160V240H561V160H559ZM560 239H480V241H560V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 240V241H641V240H640ZM639 160V240H641V160H639ZM640 239H560V241H640V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 240V241H721V240H720ZM719 160V240H721V160H719ZM720 239H640V241H720V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 240V241H801V240H800ZM799 160V240H801V160H799ZM800 239H720V241H800V239Z'
                  fill='#D0D5DD'
                />
                <path d='M800 160H880V240H800V160Z' fill='#F2F4F7' />
                <path
                  d='M880 240V241H881V240H880ZM879 160V240H881V160H879ZM880 239H800V241H880V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 240V241H961V240H960ZM959 160V240H961V160H959ZM960 239H880V241H960V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 240V241H1041V240H1040ZM1039 160V240H1041V160H1039ZM1040 239H960V241H1040V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1120 240V241H1121V240H1120ZM1119 160V240H1121V160H1119ZM1120 239H1040V241H1120V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 240V241H1201V240H1200ZM1199 160V240H1201V160H1199ZM1200 239H1120V241H1200V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 240V241H1281V240H1280ZM1279 160V240H1281V160H1279ZM1280 239H1200V241H1280V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 240V241H1361V240H1360ZM1359 160V240H1361V160H1359ZM1360 239H1280V241H1360V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 240V241H1441V240H1440ZM1439 160V240H1441V160H1439ZM1440 239H1360V241H1440V239Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 320V321H81V320H80ZM79 240V320H81V240H79ZM80 319H0V321H80V319Z'
                  fill='#D0D5DD'
                />
                <path d='M80 240H160V320H80V240Z' fill='#F2F4F7' />
                <path
                  d='M160 320V321H161V320H160ZM159 240V320H161V240H159ZM160 319H80V321H160V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 320V321H241V320H240ZM239 240V320H241V240H239ZM240 319H160V321H240V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 320V321H321V320H320ZM319 240V320H321V240H319ZM320 319H240V321H320V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M400 320V321H401V320H400ZM399 240V320H401V240H399ZM400 319H320V321H400V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 320V321H481V320H480ZM479 240V320H481V240H479ZM480 319H400V321H480V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 320V321H561V320H560ZM559 240V320H561V240H559ZM560 319H480V321H560V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 320V321H641V320H640ZM639 240V320H641V240H639ZM640 319H560V321H640V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 320V321H721V320H720ZM719 240V320H721V240H719ZM720 319H640V321H720V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 320V321H801V320H800ZM799 240V320H801V240H799ZM800 319H720V321H800V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M880 320V321H881V320H880ZM879 240V320H881V240H879ZM880 319H800V321H880V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 320V321H961V320H960ZM959 240V320H961V240H959ZM960 319H880V321H960V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 320V321H1041V320H1040ZM1039 240V320H1041V240H1039ZM1040 319H960V321H1040V319Z'
                  fill='#D0D5DD'
                />
                <path d='M1040 240H1120V320H1040V240Z' fill='#F2F4F7' />
                <path
                  d='M1120 320V321H1121V320H1120ZM1119 240V320H1121V240H1119ZM1120 319H1040V321H1120V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 320V321H1201V320H1200ZM1199 240V320H1201V240H1199ZM1200 319H1120V321H1200V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 320V321H1281V320H1280ZM1279 240V320H1281V240H1279ZM1280 319H1200V321H1280V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 320V321H1361V320H1360ZM1359 240V320H1361V240H1359ZM1360 319H1280V321H1360V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 320V321H1441V320H1440ZM1439 240V320H1441V240H1439ZM1440 319H1360V321H1440V319Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 400V401H81V400H80ZM79 320V400H81V320H79ZM80 399H0V401H80V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 400V401H161V400H160ZM159 320V400H161V320H159ZM160 399H80V401H160V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 400V401H241V400H240ZM239 320V400H241V320H239ZM240 399H160V401H240V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 400V401H321V400H320ZM319 320V400H321V320H319ZM320 399H240V401H320V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M400 400V401H401V400H400ZM399 320V400H401V320H399ZM400 399H320V401H400V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 400V401H481V400H480ZM479 320V400H481V320H479ZM480 399H400V401H480V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 400V401H561V400H560ZM559 320V400H561V320H559ZM560 399H480V401H560V399Z'
                  fill='#D0D5DD'
                />
                <path d='M560 320H640V400H560V320Z' fill='#F2F4F7' />
                <path
                  d='M640 400V401H641V400H640ZM639 320V400H641V320H639ZM640 399H560V401H640V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 400V401H721V400H720ZM719 320V400H721V320H719ZM720 399H640V401H720V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 400V401H801V400H800ZM799 320V400H801V320H799ZM800 399H720V401H800V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M880 400V401H881V400H880ZM879 320V400H881V320H879ZM880 399H800V401H880V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 400V401H961V400H960ZM959 320V400H961V320H959ZM960 399H880V401H960V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 400V401H1041V400H1040ZM1039 320V400H1041V320H1039ZM1040 399H960V401H1040V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1120 400V401H1121V400H1120ZM1119 320V400H1121V320H1119ZM1120 399H1040V401H1120V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 400V401H1201V400H1200ZM1199 320V400H1201V320H1199ZM1200 399H1120V401H1200V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 400V401H1281V400H1280ZM1279 320V400H1281V320H1279ZM1280 399H1200V401H1280V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 400V401H1361V400H1360ZM1359 320V400H1361V320H1359ZM1360 399H1280V401H1360V399Z'
                  fill='#D0D5DD'
                />
                <path d='M1360 320H1440V400H1360V320Z' fill='#F2F4F7' />
                <path
                  d='M1440 400V401H1441V400H1440ZM1439 320V400H1441V320H1439ZM1440 399H1360V401H1440V399Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 480V481H81V480H80ZM79 400V480H81V400H79ZM80 479H0V481H80V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 480V481H161V480H160ZM159 400V480H161V400H159ZM160 479H80V481H160V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 480V481H241V480H240ZM239 400V480H241V400H239ZM240 479H160V481H240V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 480V481H321V480H320ZM319 400V480H321V400H319ZM320 479H240V481H320V479Z'
                  fill='#D0D5DD'
                />
                <path d='M320 400H400V480H320V400Z' fill='#F2F4F7' />
                <path
                  d='M400 480V481H401V480H400ZM399 400V480H401V400H399ZM400 479H320V481H400V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 480V481H481V480H480ZM479 400V480H481V400H479ZM480 479H400V481H480V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 480V481H561V480H560ZM559 400V480H561V400H559ZM560 479H480V481H560V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 480V481H641V480H640ZM639 400V480H641V400H639ZM640 479H560V481H640V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 480V481H721V480H720ZM719 400V480H721V400H719ZM720 479H640V481H720V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 480V481H801V480H800ZM799 400V480H801V400H799ZM800 479H720V481H800V479Z'
                  fill='#D0D5DD'
                />
                <path d='M800 400H880V480H800V400Z' fill='#F2F4F7' />
                <path
                  d='M880 480V481H881V480H880ZM879 400V480H881V400H879ZM880 479H800V481H880V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 480V481H961V480H960ZM959 400V480H961V400H959ZM960 479H880V481H960V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 480V481H1041V480H1040ZM1039 400V480H1041V400H1039ZM1040 479H960V481H1040V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1120 480V481H1121V480H1120ZM1119 400V480H1121V400H1119ZM1120 479H1040V481H1120V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 480V481H1201V480H1200ZM1199 400V480H1201V400H1199ZM1200 479H1120V481H1200V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 480V481H1281V480H1280ZM1279 400V480H1281V400H1279ZM1280 479H1200V481H1280V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 480V481H1361V480H1360ZM1359 400V480H1361V400H1359ZM1360 479H1280V481H1360V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 480V481H1441V480H1440ZM1439 400V480H1441V400H1439ZM1440 479H1360V481H1440V479Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 560V561H81V560H80ZM79 480V560H81V480H79ZM80 559H0V561H80V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 560V561H161V560H160ZM159 480V560H161V480H159ZM160 559H80V561H160V559Z'
                  fill='#D0D5DD'
                />
                <path d='M160 480H240V560H160V480Z' fill='#F2F4F7' />
                <path
                  d='M240 560V561H241V560H240ZM239 480V560H241V480H239ZM240 559H160V561H240V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 560V561H321V560H320ZM319 480V560H321V480H319ZM320 559H240V561H320V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M400 560V561H401V560H400ZM399 480V560H401V480H399ZM400 559H320V561H400V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 560V561H481V560H480ZM479 480V560H481V480H479ZM480 559H400V561H480V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 560V561H561V560H560ZM559 480V560H561V480H559ZM560 559H480V561H560V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 560V561H641V560H640ZM639 480V560H641V480H639ZM640 559H560V561H640V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 560V561H721V560H720ZM719 480V560H721V480H719ZM720 559H640V561H720V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 560V561H801V560H800ZM799 480V560H801V480H799ZM800 559H720V561H800V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M880 560V561H881V560H880ZM879 480V560H881V480H879ZM880 559H800V561H880V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 560V561H961V560H960ZM959 480V560H961V480H959ZM960 559H880V561H960V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 560V561H1041V560H1040ZM1039 480V560H1041V480H1039ZM1040 559H960V561H1040V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1120 560V561H1121V560H1120ZM1119 480V560H1121V480H1119ZM1120 559H1040V561H1120V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 560V561H1201V560H1200ZM1199 480V560H1201V480H1199ZM1200 559H1120V561H1200V559Z'
                  fill='#D0D5DD'
                />
                <path d='M1200 480H1280V560H1200V480Z' fill='#F2F4F7' />
                <path
                  d='M1280 560V561H1281V560H1280ZM1279 480V560H1281V480H1279ZM1280 559H1200V561H1280V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 560V561H1361V560H1360ZM1359 480V560H1361V480H1359ZM1360 559H1280V561H1360V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 560V561H1441V560H1440ZM1439 480V560H1441V480H1439ZM1440 559H1360V561H1440V559Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 640V641H81V640H80ZM79 560V640H81V560H79ZM80 639H0V641H80V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 640V641H161V640H160ZM159 560V640H161V560H159ZM160 639H80V641H160V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 640V641H241V640H240ZM239 560V640H241V560H239ZM240 639H160V641H240V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 640V641H321V640H320ZM319 560V640H321V560H319ZM320 639H240V641H320V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M400 640V641H401V640H400ZM399 560V640H401V560H399ZM400 639H320V641H400V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 640V641H481V640H480ZM479 560V640H481V560H479ZM480 639H400V641H480V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 640V641H561V640H560ZM559 560V640H561V560H559ZM560 639H480V641H560V639Z'
                  fill='#D0D5DD'
                />
                <path d='M560 560H640V640H560V560Z' fill='#F2F4F7' />
                <path
                  d='M640 640V641H641V640H640ZM639 560V640H641V560H639ZM640 639H560V641H640V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 640V641H721V640H720ZM719 560V640H721V560H719ZM720 639H640V641H720V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 640V641H801V640H800ZM799 560V640H801V560H799ZM800 639H720V641H800V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M880 640V641H881V640H880ZM879 560V640H881V560H879ZM880 639H800V641H880V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 640V641H961V640H960ZM959 560V640H961V560H959ZM960 639H880V641H960V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 640V641H1041V640H1040ZM1039 560V640H1041V560H1039ZM1040 639H960V641H1040V639Z'
                  fill='#D0D5DD'
                />
                <path d='M1040 560H1120V640H1040V560Z' fill='#F2F4F7' />
                <path
                  d='M1120 640V641H1121V640H1120ZM1119 560V640H1121V560H1119ZM1120 639H1040V641H1120V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 640V641H1201V640H1200ZM1199 560V640H1201V560H1199ZM1200 639H1120V641H1200V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 640V641H1281V640H1280ZM1279 560V640H1281V560H1279ZM1280 639H1200V641H1280V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 640V641H1361V640H1360ZM1359 560V640H1361V560H1359ZM1360 639H1280V641H1360V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 640V641H1441V640H1440ZM1439 560V640H1441V560H1439ZM1440 639H1360V641H1440V639Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 720V721H81V720H80ZM79 640V720H81V640H79ZM80 719H0V721H80V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 720V721H161V720H160ZM159 640V720H161V640H159ZM160 719H80V721H160V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 720V721H241V720H240ZM239 640V720H241V640H239ZM240 719H160V721H240V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 720V721H321V720H320ZM319 640V720H321V640H319ZM320 719H240V721H320V719Z'
                  fill='#D0D5DD'
                />
                <path d='M320 640H400V720H320V640Z' fill='#F2F4F7' />
                <path
                  d='M400 720V721H401V720H400ZM399 640V720H401V640H399ZM400 719H320V721H400V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 720V721H481V720H480ZM479 640V720H481V640H479ZM480 719H400V721H480V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 720V721H561V720H560ZM559 640V720H561V640H559ZM560 719H480V721H560V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 720V721H641V720H640ZM639 640V720H641V640H639ZM640 719H560V721H640V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 720V721H721V720H720ZM719 640V720H721V640H719ZM720 719H640V721H720V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 720V721H801V720H800ZM799 640V720H801V640H799ZM800 719H720V721H800V719Z'
                  fill='#D0D5DD'
                />
                <path d='M800 640H880V720H800V640Z' fill='#F2F4F7' />
                <path
                  d='M880 720V721H881V720H880ZM879 640V720H881V640H879ZM880 719H800V721H880V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 720V721H961V720H960ZM959 640V720H961V640H959ZM960 719H880V721H960V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 720V721H1041V720H1040ZM1039 640V720H1041V640H1039ZM1040 719H960V721H1040V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1120 720V721H1121V720H1120ZM1119 640V720H1121V640H1119ZM1120 719H1040V721H1120V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 720V721H1201V720H1200ZM1199 640V720H1201V640H1199ZM1200 719H1120V721H1200V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 720V721H1281V720H1280ZM1279 640V720H1281V640H1279ZM1280 719H1200V721H1280V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 720V721H1361V720H1360ZM1359 640V720H1361V640H1359ZM1360 719H1280V721H1360V719Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 720V721H1441V720H1440ZM1439 640V720H1441V640H1439ZM1440 719H1360V721H1440V719Z'
                  fill='#D0D5DD'
                />
                <path d='M0 720H80V800H0V720Z' fill='#F2F4F7' />
                <path
                  d='M80 800V801H81V800H80ZM79 720V800H81V720H79ZM80 799H0V801H80V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 800V801H161V800H160ZM159 720V800H161V720H159ZM160 799H80V801H160V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 800V801H241V800H240ZM239 720V800H241V720H239ZM240 799H160V801H240V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 800V801H321V800H320ZM319 720V800H321V720H319ZM320 799H240V801H320V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M400 800V801H401V800H400ZM399 720V800H401V720H399ZM400 799H320V801H400V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 800V801H481V800H480ZM479 720V800H481V720H479ZM480 799H400V801H480V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 800V801H561V800H560ZM559 720V800H561V720H559ZM560 799H480V801H560V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 800V801H641V800H640ZM639 720V800H641V720H639ZM640 799H560V801H640V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 800V801H721V800H720ZM719 720V800H721V720H719ZM720 799H640V801H720V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 800V801H801V800H800ZM799 720V800H801V720H799ZM800 799H720V801H800V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M880 800V801H881V800H880ZM879 720V800H881V720H879ZM880 799H800V801H880V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 800V801H961V800H960ZM959 720V800H961V720H959ZM960 799H880V801H960V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 800V801H1041V800H1040ZM1039 720V800H1041V720H1039ZM1040 799H960V801H1040V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1120 800V801H1121V800H1120ZM1119 720V800H1121V720H1119ZM1120 799H1040V801H1120V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 800V801H1201V800H1200ZM1199 720V800H1201V720H1199ZM1200 799H1120V801H1200V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 800V801H1281V800H1280ZM1279 720V800H1281V720H1279ZM1280 799H1200V801H1280V799Z'
                  fill='#D0D5DD'
                />
                <path d='M1280 720H1360V800H1280V720Z' fill='#F2F4F7' />
                <path
                  d='M1360 800V801H1361V800H1360ZM1359 720V800H1361V720H1359ZM1360 799H1280V801H1360V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 800V801H1441V800H1440ZM1439 720V800H1441V720H1439ZM1440 799H1360V801H1440V799Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 880V881H81V880H80ZM79 800V880H81V800H79ZM80 879H0V881H80V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 880V881H161V880H160ZM159 800V880H161V800H159ZM160 879H80V881H160V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 880V881H241V880H240ZM239 800V880H241V800H239ZM240 879H160V881H240V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 880V881H321V880H320ZM319 800V880H321V800H319ZM320 879H240V881H320V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M400 880V881H401V880H400ZM399 800V880H401V800H399ZM400 879H320V881H400V879Z'
                  fill='#D0D5DD'
                />
                <path d='M400 800H480V880H400V800Z' fill='#F2F4F7' />
                <path
                  d='M480 880V881H481V880H480ZM479 800V880H481V800H479ZM480 879H400V881H480V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 880V881H561V880H560ZM559 800V880H561V800H559ZM560 879H480V881H560V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 880V881H641V880H640ZM639 800V880H641V800H639ZM640 879H560V881H640V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 880V881H721V880H720ZM719 800V880H721V800H719ZM720 879H640V881H720V879Z'
                  fill='#D0D5DD'
                />
                <path d='M720 800H800V880H720V800Z' fill='#F2F4F7' />
                <path
                  d='M800 880V881H801V880H800ZM799 800V880H801V800H799ZM800 879H720V881H800V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M880 880V881H881V880H880ZM879 800V880H881V800H879ZM880 879H800V881H880V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 880V881H961V880H960ZM959 800V880H961V800H959ZM960 879H880V881H960V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 880V881H1041V880H1040ZM1039 800V880H1041V800H1039ZM1040 879H960V881H1040V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1120 880V881H1121V880H1120ZM1119 800V880H1121V800H1119ZM1120 879H1040V881H1120V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 880V881H1201V880H1200ZM1199 800V880H1201V800H1199ZM1200 879H1120V881H1200V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 880V881H1281V880H1280ZM1279 800V880H1281V800H1279ZM1280 879H1200V881H1280V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 880V881H1361V880H1360ZM1359 800V880H1361V800H1359ZM1360 879H1280V881H1360V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 880V881H1441V880H1440ZM1439 800V880H1441V800H1439ZM1440 879H1360V881H1440V879Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 960V961H81V960H80ZM79 880V960H81V880H79ZM80 959H0V961H80V959Z'
                  fill='#D0D5DD'
                />
                <path d='M80 880H160V960H80V880Z' fill='#F2F4F7' />
                <path
                  d='M160 960V961H161V960H160ZM159 880V960H161V880H159ZM160 959H80V961H160V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 960V961H241V960H240ZM239 880V960H241V880H239ZM240 959H160V961H240V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 960V961H321V960H320ZM319 880V960H321V880H319ZM320 959H240V961H320V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M400 960V961H401V960H400ZM399 880V960H401V880H399ZM400 959H320V961H400V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 960V961H481V960H480ZM479 880V960H481V880H479ZM480 959H400V961H480V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 960V961H561V960H560ZM559 880V960H561V880H559ZM560 959H480V961H560V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 960V961H641V960H640ZM639 880V960H641V880H639ZM640 959H560V961H640V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 960V961H721V960H720ZM719 880V960H721V880H719ZM720 959H640V961H720V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 960V961H801V960H800ZM799 880V960H801V880H799ZM800 959H720V961H800V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M880 960V961H881V960H880ZM879 880V960H881V880H879ZM880 959H800V961H880V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 960V961H961V960H960ZM959 880V960H961V880H959ZM960 959H880V961H960V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 960V961H1041V960H1040ZM1039 880V960H1041V880H1039ZM1040 959H960V961H1040V959Z'
                  fill='#D0D5DD'
                />
                <path d='M1040 880H1120V960H1040V880Z' fill='#F2F4F7' />
                <path
                  d='M1120 960V961H1121V960H1120ZM1119 880V960H1121V880H1119ZM1120 959H1040V961H1120V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 960V961H1201V960H1200ZM1199 880V960H1201V880H1199ZM1200 959H1120V961H1200V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 960V961H1281V960H1280ZM1279 880V960H1281V880H1279ZM1280 959H1200V961H1280V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 960V961H1361V960H1360ZM1359 880V960H1361V880H1359ZM1360 959H1280V961H1360V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 960V961H1441V960H1440ZM1439 880V960H1441V880H1439ZM1440 959H1360V961H1440V959Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 1040V1041H81V1040H80ZM79 960V1040H81V960H79ZM80 1039H0V1041H80V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 1040V1041H161V1040H160ZM159 960V1040H161V960H159ZM160 1039H80V1041H160V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 1040V1041H241V1040H240ZM239 960V1040H241V960H239ZM240 1039H160V1041H240V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 1040V1041H321V1040H320ZM319 960V1040H321V960H319ZM320 1039H240V1041H320V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M400 1040V1041H401V1040H400ZM399 960V1040H401V960H399ZM400 1039H320V1041H400V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 1040V1041H481V1040H480ZM479 960V1040H481V960H479ZM480 1039H400V1041H480V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 1040V1041H561V1040H560ZM559 960V1040H561V960H559ZM560 1039H480V1041H560V1039Z'
                  fill='#D0D5DD'
                />
                <path d='M560 960H640V1040H560V960Z' fill='#F2F4F7' />
                <path
                  d='M640 1040V1041H641V1040H640ZM639 960V1040H641V960H639ZM640 1039H560V1041H640V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 1040V1041H721V1040H720ZM719 960V1040H721V960H719ZM720 1039H640V1041H720V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 1040V1041H801V1040H800ZM799 960V1040H801V960H799ZM800 1039H720V1041H800V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M880 1040V1041H881V1040H880ZM879 960V1040H881V960H879ZM880 1039H800V1041H880V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 1040V1041H961V1040H960ZM959 960V1040H961V960H959ZM960 1039H880V1041H960V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 1040V1041H1041V1040H1040ZM1039 960V1040H1041V960H1039ZM1040 1039H960V1041H1040V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1120 1040V1041H1121V1040H1120ZM1119 960V1040H1121V960H1119ZM1120 1039H1040V1041H1120V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 1040V1041H1201V1040H1200ZM1199 960V1040H1201V960H1199ZM1200 1039H1120V1041H1200V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 1040V1041H1281V1040H1280ZM1279 960V1040H1281V960H1279ZM1280 1039H1200V1041H1280V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 1040V1041H1361V1040H1360ZM1359 960V1040H1361V960H1359ZM1360 1039H1280V1041H1360V1039Z'
                  fill='#D0D5DD'
                />
                <path d='M1360 960H1440V1040H1360V960Z' fill='#F2F4F7' />
                <path
                  d='M1440 1040V1041H1441V1040H1440ZM1439 960V1040H1441V960H1439ZM1440 1039H1360V1041H1440V1039Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 1120V1121H81V1120H80ZM79 1040V1120H81V1040H79ZM80 1119H0V1121H80V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 1120V1121H161V1120H160ZM159 1040V1120H161V1040H159ZM160 1119H80V1121H160V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M240 1120V1121H241V1120H240ZM239 1040V1120H241V1040H239ZM240 1119H160V1121H240V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 1120V1121H321V1120H320ZM319 1040V1120H321V1040H319ZM320 1119H240V1121H320V1119Z'
                  fill='#D0D5DD'
                />
                <path d='M320 1040H400V1120H320V1040Z' fill='#F2F4F7' />
                <path
                  d='M400 1120V1121H401V1120H400ZM399 1040V1120H401V1040H399ZM400 1119H320V1121H400V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 1120V1121H481V1120H480ZM479 1040V1120H481V1040H479ZM480 1119H400V1121H480V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 1120V1121H561V1120H560ZM559 1040V1120H561V1040H559ZM560 1119H480V1121H560V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 1120V1121H641V1120H640ZM639 1040V1120H641V1040H639ZM640 1119H560V1121H640V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 1120V1121H721V1120H720ZM719 1040V1120H721V1040H719ZM720 1119H640V1121H720V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 1120V1121H801V1120H800ZM799 1040V1120H801V1040H799ZM800 1119H720V1121H800V1119Z'
                  fill='#D0D5DD'
                />
                <path d='M800 1040H880V1120H800V1040Z' fill='#F2F4F7' />
                <path
                  d='M880 1120V1121H881V1120H880ZM879 1040V1120H881V1040H879ZM880 1119H800V1121H880V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 1120V1121H961V1120H960ZM959 1040V1120H961V1040H959ZM960 1119H880V1121H960V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 1120V1121H1041V1120H1040ZM1039 1040V1120H1041V1040H1039ZM1040 1119H960V1121H1040V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1120 1120V1121H1121V1120H1120ZM1119 1040V1120H1121V1040H1119ZM1120 1119H1040V1121H1120V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 1120V1121H1201V1120H1200ZM1199 1040V1120H1201V1040H1199ZM1200 1119H1120V1121H1200V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1280 1120V1121H1281V1120H1280ZM1279 1040V1120H1281V1040H1279ZM1280 1119H1200V1121H1280V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 1120V1121H1361V1120H1360ZM1359 1040V1120H1361V1040H1359ZM1360 1119H1280V1121H1360V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 1120V1121H1441V1120H1440ZM1439 1040V1120H1441V1040H1439ZM1440 1119H1360V1121H1440V1119Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M80 1200V1201H81V1200H80ZM79 1120V1200H81V1120H79ZM80 1199H0V1201H80V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M160 1200V1201H161V1200H160ZM159 1120V1200H161V1120H159ZM160 1199H80V1201H160V1199Z'
                  fill='#D0D5DD'
                />
                <path d='M160 1120H240V1200H160V1120Z' fill='#F2F4F7' />
                <path
                  d='M240 1200V1201H241V1200H240ZM239 1120V1200H241V1120H239ZM240 1199H160V1201H240V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M320 1200V1201H321V1200H320ZM319 1120V1200H321V1120H319ZM320 1199H240V1201H320V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M400 1200V1201H401V1200H400ZM399 1120V1200H401V1120H399ZM400 1199H320V1201H400V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M480 1200V1201H481V1200H480ZM479 1120V1200H481V1120H479ZM480 1199H400V1201H480V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M560 1200V1201H561V1200H560ZM559 1120V1200H561V1120H559ZM560 1199H480V1201H560V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M640 1200V1201H641V1200H640ZM639 1120V1200H641V1120H639ZM640 1199H560V1201H640V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M720 1200V1201H721V1200H720ZM719 1120V1200H721V1120H719ZM720 1199H640V1201H720V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M800 1200V1201H801V1200H800ZM799 1120V1200H801V1120H799ZM800 1199H720V1201H800V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M880 1200V1201H881V1200H880ZM879 1120V1200H881V1120H879ZM880 1199H800V1201H880V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M960 1200V1201H961V1200H960ZM959 1120V1200H961V1120H959ZM960 1199H880V1201H960V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1040 1200V1201H1041V1200H1040ZM1039 1120V1200H1041V1120H1039ZM1040 1199H960V1201H1040V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1120 1200V1201H1121V1200H1120ZM1119 1120V1200H1121V1120H1119ZM1120 1199H1040V1201H1120V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1200 1200V1201H1201V1200H1200ZM1199 1120V1200H1201V1120H1199ZM1200 1199H1120V1201H1200V1199Z'
                  fill='#D0D5DD'
                />
                <path d='M1200 1120H1280V1200H1200V1120Z' fill='#F2F4F7' />
                <path
                  d='M1280 1200V1201H1281V1200H1280ZM1279 1120V1200H1281V1120H1279ZM1280 1199H1200V1201H1280V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1360 1200V1201H1361V1200H1360ZM1359 1120V1200H1361V1120H1359ZM1360 1199H1280V1201H1360V1199Z'
                  fill='#D0D5DD'
                />
                <path
                  d='M1440 1200V1201H1441V1200H1440ZM1439 1120V1200H1441V1120H1439ZM1440 1199H1360V1201H1440V1199Z'
                  fill='#D0D5DD'
                />
              </g>
              <defs>
                <radialGradient
                  id='paint0_radial_173_20898'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(720 -0.000129104) rotate(90) scale(1083 565.257)'
                >
                  <stop />
                  <stop offset='0.953125' stop-opacity='0' />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className='fixed w-full h-full'>
            <div
              className='relative h-fit border flex-none border-gray-300 rounded-3xl 
flex-col  p-0   grid   shadow-sm  max-w-[512px] mx-auto w-full  
gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'
            >
              <div className='px-6 pt-6 pb-0 flex flex-col text-center items-center'>
                <div className='-mb-8'>
                  <svg
                    width='216'
                    height='196'
                    viewBox='0 0 216 196'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g filter='url(#filter0_f_168_14996)'>
                      <circle cx='108' cy='88' r='28' fill='#D0D5DD' />
                    </g>
                    <g filter='url(#filter1_bdd_168_14996)'>
                      <g clip-path='url(#clip0_168_14996)'>
                        <rect
                          x='68'
                          y='48'
                          width='80'
                          height='80'
                          rx='40'
                          fill='white'
                        />
                        <rect
                          x='68'
                          y='48'
                          width='80'
                          height='80'
                          rx='40'
                          fill='url(#paint0_linear_168_14996)'
                        />
                        <rect
                          x='89.7142'
                          y='69.1426'
                          width='36.5714'
                          height='36.5714'
                          rx='18.2857'
                          fill='#D0D5DD'
                        />
                        <rect
                          opacity='0.5'
                          x='82.8572'
                          y='62.2861'
                          width='50.2857'
                          height='50.2857'
                          rx='25.1429'
                          fill='#D0D5DD'
                        />
                        <rect
                          opacity='0.4'
                          x='76'
                          y='55.4287'
                          width='64'
                          height='64'
                          rx='32'
                          fill='#D0D5DD'
                        />
                        <rect
                          width='80'
                          height='80'
                          rx='40'
                          transform='matrix(0 -1 -1 0 148 128)'
                          fill='url(#paint1_linear_168_14996)'
                        />
                        <rect
                          x='94'
                          y='74'
                          width='28'
                          height='28'
                          rx='14'
                          fill='white'
                        />
                        <rect
                          x='94'
                          y='74'
                          width='28'
                          height='28'
                          rx='14'
                          fill='url(#paint2_linear_168_14996)'
                        />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M113.946 82.6219L105.592 90.6836L103.376 88.3153C102.967 87.9303 102.326 87.9069 101.859 88.2336C101.404 88.5719 101.276 89.1669 101.556 89.6453L104.181 93.9153C104.437 94.3119 104.881 94.5569 105.382 94.5569C105.861 94.5569 106.316 94.3119 106.572 93.9153C106.992 93.3669 115.007 83.8119 115.007 83.8119C116.057 82.7386 114.786 81.7936 113.946 82.6103V82.6219Z'
                          fill='white'
                        />
                      </g>
                      <rect
                        x='68.5'
                        y='48.5'
                        width='79'
                        height='79'
                        rx='39.5'
                        stroke='url(#paint3_linear_168_14996)'
                        stroke-opacity='0.3'
                      />
                    </g>
                    <defs>
                      <filter
                        id='filter0_f_168_14996'
                        x='0'
                        y='-20'
                        width='216'
                        height='216'
                        filterUnits='userSpaceOnUse'
                        color-interpolation-filters='sRGB'
                      >
                        <feFlood
                          flood-opacity='0'
                          result='BackgroundImageFix'
                        />
                        <feBlend
                          mode='normal'
                          in='SourceGraphic'
                          in2='BackgroundImageFix'
                          result='shape'
                        />
                        <feGaussianBlur
                          stdDeviation='40'
                          result='effect1_foregroundBlur_168_14996'
                        />
                      </filter>
                      <filter
                        id='filter1_bdd_168_14996'
                        x='48'
                        y='28'
                        width='120'
                        height='124'
                        filterUnits='userSpaceOnUse'
                        color-interpolation-filters='sRGB'
                      >
                        <feFlood
                          flood-opacity='0'
                          result='BackgroundImageFix'
                        />
                        <feGaussianBlur
                          in='BackgroundImageFix'
                          stdDeviation='10'
                        />
                        <feComposite
                          in2='SourceAlpha'
                          operator='in'
                          result='effect1_backgroundBlur_168_14996'
                        />
                        <feColorMatrix
                          in='SourceAlpha'
                          type='matrix'
                          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                          result='hardAlpha'
                        />
                        <feMorphology
                          radius='2'
                          operator='erode'
                          in='SourceAlpha'
                          result='effect2_dropShadow_168_14996'
                        />
                        <feOffset dy='4' />
                        <feGaussianBlur stdDeviation='3' />
                        <feComposite in2='hardAlpha' operator='out' />
                        <feColorMatrix
                          type='matrix'
                          values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0'
                        />
                        <feBlend
                          mode='normal'
                          in2='effect1_backgroundBlur_168_14996'
                          result='effect2_dropShadow_168_14996'
                        />
                        <feColorMatrix
                          in='SourceAlpha'
                          type='matrix'
                          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                          result='hardAlpha'
                        />
                        <feMorphology
                          radius='4'
                          operator='erode'
                          in='SourceAlpha'
                          result='effect3_dropShadow_168_14996'
                        />
                        <feOffset dy='12' />
                        <feGaussianBlur stdDeviation='8' />
                        <feComposite in2='hardAlpha' operator='out' />
                        <feColorMatrix
                          type='matrix'
                          values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0'
                        />
                        <feBlend
                          mode='normal'
                          in2='effect2_dropShadow_168_14996'
                          result='effect3_dropShadow_168_14996'
                        />
                        <feBlend
                          mode='normal'
                          in='SourceGraphic'
                          in2='effect3_dropShadow_168_14996'
                          result='shape'
                        />
                      </filter>
                      <linearGradient
                        id='paint0_linear_168_14996'
                        x1='108'
                        y1='48'
                        x2='108'
                        y2='128'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='#F6F6F6' />
                        <stop
                          offset='0.385412'
                          stop-color='#F2F4F7'
                          stop-opacity='0'
                        />
                      </linearGradient>
                      <linearGradient
                        id='paint1_linear_168_14996'
                        x1='80'
                        y1='40'
                        x2='-2.44489e-06'
                        y2='40'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='#FCFCFD' stop-opacity='0' />
                        <stop offset='0.729176' stop-color='#FCFCFD' />
                      </linearGradient>
                      <linearGradient
                        id='paint2_linear_168_14996'
                        x1='108'
                        y1='74'
                        x2='108'
                        y2='102'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='#1F756B' />
                        <stop
                          offset='1'
                          stop-color='#1F756B'
                          stop-opacity='0.6'
                        />
                      </linearGradient>
                      <linearGradient
                        id='paint3_linear_168_14996'
                        x1='108'
                        y1='48'
                        x2='108'
                        y2='128'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop offset='0.0468566' stop-color='#98A2B3' />
                        <stop
                          offset='1'
                          stop-color='#98A2B3'
                          stop-opacity='0.3'
                        />
                      </linearGradient>
                      <clipPath id='clip0_168_14996'>
                        <rect
                          x='68'
                          y='48'
                          width='80'
                          height='80'
                          rx='40'
                          fill='white'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className='text-2xl font-medium mb-1'>
                  Bid successfully placed!
                </h3>
                <p className='text-sm font-normal text-gray-600'>
                  Your bid for the Coinfirm AML Risk Report has been
                  successfully placed. If your bid wins, you will be able to
                  view and generate reports on the Coinfirm reports page.
                </p>
              </div>
              <div>
                <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                  Paid with
                </div>

                <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                  <div className='w-full justify-between flex  py-1.5'>
                    {' '}
                    <p>Wallet</p>
                    <p className='flex gap-2 font-medium items-center'>
                      {selectedWallet}
                    </p>
                  </div>
                  <div className='w-full justify-between  flex py-1.5 mb-3'>
                    {' '}
                    <p>Network Account</p>
                    <p className='flex gap-2 font-medium items-center'>
                      {selectedNetwork === 'MATIC' ? (
                        <div className='flex gap-2 items-center'>
                          <img src='/icons/networks/MATIC.svg' />
                          <p>Network Account Name</p>
                          <p>(0x8f...47d2)</p>
                        </div>
                      ) : selectedNetwork === 'BTC' ? (
                        <div className='flex gap-2 items-center'>
                          <img src='/icons/networks/BTC.svg' />
                          <p>Network Account Name</p>
                          <p>(0x8f...47d2)</p>
                        </div>
                      ) : selectedNetwork === 'ETH' ? (
                        <div className='flex gap-2 items-center'>
                          <img src='/icons/networks/ETH.svg' />
                          <p>Network Account Name</p>
                          <p>(0x8f...47d2)</p>
                        </div>
                      ) : (
                        <div>-</div>
                      )}
                    </p>
                  </div>
                </div>

                <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                  Payment Method
                </div>
                <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                  <div className='w-full justify-between flex  py-1.5'>
                    {' '}
                    <p>Total Paid</p>
                    <div className='flex gap-2 font-medium items-center'>
                      {selectedAsset && (
                        <img src={`/icons/tokens/${selectedAsset}.svg`} />
                      )}

                      <div className='flex gap-1'>
                        {bitcoinCount.toFixed(2)}
                        <p className=''> USDT</p>
                      </div>
                    </div>
                  </div>

                  <div className='w-full justify-between flex  py-1.5'>
                    {' '}
                    <p>Gas Fee</p>
                    <p className='flex gap-2 font-medium items-center'>
                      {selectedAsset && (
                        <img src={`/icons/tokens/${selectedAsset}.svg`} />
                      )}
                      0.00 USDT
                    </p>
                  </div>
                </div>

                <div className='px-6 pt-6 pb-5'>
                  <FSDialogClose className='w-full'>
                    <Button className='w-full'>Done</Button>
                  </FSDialogClose>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BuyReportModal };

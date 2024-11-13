'use client';

import * as React from 'react';

import { useState } from 'react';

import type { Config } from 'tailwindcss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import { ReceiveForm } from '@/components/receive';

import { RecipientForm } from '@/components/recipientform';

import { PaymentForm } from '@/components/paymentform';

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
import { useWallet } from './formcontext';

// export const ConfirmationStep = () => {
//   const { formData } = useContext(FormContext);

//   const handleConfirm = () => {
//     // Submit the form data to the server or perform any necessary actions
//     console.log(formData);
//   };
// };

const SendModal = () => {
  const tabValues = ['payment', 'recipient', 'amount', 'confirm'];
  const [activeTab, setActiveTab] = useState(tabValues[0]);

  const cryptoValues = {
    ethValue: 3004.9, // Example ETH value in USD
    usdcValue: 1, // Example USDC value in USD
    usdtValue: 1, // Example USDT value in USD
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
      (activeTab === 'payment' &&
        selectedWallet.length >= 3 &&
        selectedNetwork.length >= 3 &&
        selectedAsset.length >= 3) ||
      (activeTab === 'recipient' && selectedRecipient.length > 3) ||
      (activeTab === 'amount' && selectedPayment > 0.1) ||
      activeTab === 'confirm'
    ) {
      return true;
    }
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
        <div className='fixed  bottom-0 left-0 right-0 w-full p-6 mx-auto  z-50'>
          <div className='w-full h-20 items-center flex justify-between p-6 border border-gray-200 bg-white shadow-lg rounded-2xl'>
            <div>
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
            </div>

            <div className='flex items-center gap-8'>
              {activeTab !== 'confirm' && (
                <Button onClick={handleContinue} disabled={!canContinue()}>
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
              {activeTab === 'confirm' && (
                <div className='flex gap-8 items-center '>
                  <div className='flex flex-col gap-0 items-start justify-start'>
                    <p className='text-xs text-gray-700 font-medium'>
                      Total Transaction
                    </p>
                    <div className='flex gap-1 items-center'>
                      <img
                        className='w-4 h-4'
                        src={`/icons/tokens/${selectedAsset}.svg`}
                      />
                      <p className='text-md font-medium'>
                        {selectedAsset === 'ETH'
                          ? (
                              Number(selectedPayment) / cryptoValues.ethValue
                            ).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          : (Number(selectedPayment) * 1).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                      </p>
                    </div>
                    <p className='text-xs text-gray-700 font-medium'>
                      Total including fees = $
                      {(
                        cryptoValues.ethValue * 0.016789 +
                        Number(selectedPayment)
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                  <Button onClick={handleConfirm}>Confirm Payment</Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='absolute left-0 top-0  bg-gray-50/50 backdrop-blur-lg h-full flex z-40 flex-col px-6 py-12 w-80 gap-3'>
          <div className='mb-2'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.0006 25.3333V15.9999M16.3893 25.4461L25.6939 28.5611C26.4231 28.8052 26.7877 28.9272 27.0126 28.8397C27.2078 28.7636 27.3559 28.6002 27.4125 28.3984C27.4776 28.1661 27.3204 27.8152 27.006 27.1134L17.0213 4.82976C16.7139 4.1435 16.5601 3.80037 16.3459 3.69404C16.1599 3.60167 15.9414 3.60132 15.755 3.69309C15.5405 3.79873 15.3856 4.14137 15.0759 4.82664L5.00325 27.1147C4.68632 27.816 4.52786 28.1666 4.5923 28.3992C4.64826 28.6012 4.79596 28.7651 4.99105 28.8417C5.2157 28.93 5.58089 28.8088 6.31128 28.5663L15.7146 25.4453C15.8399 25.4037 15.9025 25.3829 15.9665 25.3747C16.0233 25.3675 16.0808 25.3675 16.1376 25.375C16.2016 25.3833 16.2642 25.4043 16.3893 25.4461Z'
                stroke='#344054'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <h3 className='text-lg font-medium leading-none'>Send</h3>{' '}
          <p className='text-sm text-gray-600'>
            Follow the steps to transfer funds from your Wallet and Network
            Account to a designated recipient.
          </p>
          <TabsList className='flex relative bg-gray-50/0 flex-col gap-1 py-6 w-full items-start z-50'>
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
                  d='M13.3333 6.66668V3.75055C13.3333 3.05744 13.3333 2.71088 13.1873 2.4979C13.0598 2.31183 12.8622 2.18542 12.6398 2.14758C12.3852 2.10426 12.0706 2.24949 11.4413 2.53994L4.04918 5.95167C3.48792 6.21071 3.20729 6.34023 3.00175 6.54111C2.82005 6.71869 2.68135 6.93547 2.59625 7.17487C2.5 7.44567 2.5 7.75474 2.5 8.3729V12.5M13.75 12.0833H13.7583M2.5 9.33334L2.5 14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3184C3.76654 17.5 4.23325 17.5 5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3184C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7668 17.5 14.8333V9.33334C17.5 8.39992 17.5 7.93321 17.3183 7.57669C17.1586 7.26309 16.9036 7.00812 16.59 6.84833C16.2335 6.66668 15.7668 6.66668 14.8333 6.66668L5.16667 6.66668C4.23325 6.66668 3.76654 6.66668 3.41002 6.84833C3.09641 7.00812 2.84144 7.26309 2.68166 7.57669C2.5 7.93321 2.5 8.39992 2.5 9.33334ZM14.1667 12.0833C14.1667 12.3135 13.9801 12.5 13.75 12.5C13.5199 12.5 13.3333 12.3135 13.3333 12.0833C13.3333 11.8532 13.5199 11.6667 13.75 11.6667C13.9801 11.6667 14.1667 11.8532 14.1667 12.0833Z'
                  stroke='currentColor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Payment Method
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
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.6667 17.5C16.6667 16.337 16.6667 15.7555 16.5232 15.2824C16.2 14.217 15.3663 13.3834 14.301 13.0602C13.8278 12.9167 13.2463 12.9167 12.0834 12.9167H7.91671C6.75374 12.9167 6.17225 12.9167 5.69909 13.0602C4.63375 13.3834 3.80007 14.217 3.47691 15.2824C3.33337 15.7555 3.33337 16.337 3.33337 17.5M13.75 6.25C13.75 8.32107 12.0711 10 10 10C7.92897 10 6.25004 8.32107 6.25004 6.25C6.25004 4.17893 7.92897 2.5 10 2.5C12.0711 2.5 13.75 4.17893 13.75 6.25Z'
                  stroke='currentColor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Recipient Selection
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
                <g clip-path='url(#clip0_131_92364)'>
                  <path
                    d='M13.2814 13.2814C16.1336 12.8996 18.3333 10.4567 18.3333 7.50001C18.3333 4.27834 15.7216 1.66667 12.5 1.66667C9.54328 1.66667 7.10037 3.8664 6.71852 6.71856M6.24996 10.8333L7.49996 10V14.5833M6.24996 14.5833H8.74996M13.3333 12.5C13.3333 15.7217 10.7216 18.3333 7.49996 18.3333C4.2783 18.3333 1.66663 15.7217 1.66663 12.5C1.66663 9.27834 4.2783 6.66667 7.49996 6.66667C10.7216 6.66667 13.3333 9.27834 13.3333 12.5Z'
                    stroke='currentColor'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_131_92364'>
                    <rect width='20' height='20' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              Payment Amount
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
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.50004 8.75L9.16671 10.4167L12.9167 6.66667M16.6667 17.5V6.5C16.6667 5.09987 16.6667 4.3998 16.3942 3.86502C16.1545 3.39462 15.7721 3.01217 15.3017 2.77248C14.7669 2.5 14.0668 2.5 12.6667 2.5H7.33337C5.93324 2.5 5.23318 2.5 4.6984 2.77248C4.22799 3.01217 3.84554 3.39462 3.60586 3.86502C3.33337 4.3998 3.33337 5.09987 3.33337 6.5V17.5L5.62504 15.8333L7.70837 17.5L10 15.8333L12.2917 17.5L14.375 15.8333L16.6667 17.5Z'
                  stroke='currentColor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Payment Confirmation
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

        <TabsContent value='payment' className=' fixed w-full h-full'>
          <div
            className='relative h-fit border flex-none border-gray-300 rounded-3xl flex-col  p-0  grid   shadow-sm  max-w-screen-sm mx-auto w-full gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'
          >
            <FSDialogHeader className='px-6 pt-6 pb-3 flex flex-col'>
              <div className='mb-2'>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.3333 10.6667V6.00089C21.3333 4.8919 21.3333 4.33741 21.0997 3.99665C20.8956 3.69892 20.5795 3.49668 20.2237 3.43612C19.8164 3.36681 19.3129 3.59918 18.306 4.06391L6.47869 9.52267C5.58067 9.93714 5.13167 10.1444 4.80281 10.4658C4.51208 10.7499 4.29016 11.0967 4.15401 11.4798C4 11.9131 4 12.4076 4 13.3966V20M22 19.3333H22.0133M4 14.9333L4 23.7333C4 25.2268 4 25.9736 4.29065 26.544C4.54631 27.0458 4.95426 27.4537 5.45603 27.7094C6.02646 28 6.77319 28 8.26667 28H23.7333C25.2268 28 25.9735 28 26.544 27.7094C27.0457 27.4537 27.4537 27.0458 27.7094 26.544C28 25.9736 28 25.2268 28 23.7333V14.9333C28 13.4399 28 12.6931 27.7094 12.1227C27.4537 11.6209 27.0457 11.213 26.544 10.9573C25.9735 10.6667 25.2268 10.6667 23.7333 10.6667L8.26667 10.6667C6.77319 10.6667 6.02646 10.6667 5.45603 10.9573C4.95426 11.213 4.54631 11.6209 4.29065 12.1227C4 12.6931 4 13.4399 4 14.9333ZM22.6667 19.3333C22.6667 19.7015 22.3682 20 22 20C21.6318 20 21.3333 19.7015 21.3333 19.3333C21.3333 18.9652 21.6318 18.6667 22 18.6667C22.3682 18.6667 22.6667 18.9652 22.6667 19.3333Z'
                    stroke='#344054'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <FSDialogTitle className='text-xl'>Payment Method</FSDialogTitle>
              <FSDialogDescription className='text-gray-800'>
                Follow the steps to transfer funds from your Wallet and Network
                Account to a designated recipient.
              </FSDialogDescription>
            </FSDialogHeader>
            <div>
              <div className='w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2'>
                From
              </div>
              <div className='flex gap-3 mt-3 items-center mb-6 px-6'>
                <ReceiveForm />
              </div>
              <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                Balance
              </div>
              <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
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
                <div className='w-full justify-between  flex py-1.5'>
                  {' '}
                  <p>USD Equivalent</p>
                  <p className='flex gap-2 font-medium items-center'>
                    {usdEquivalent}
                  </p>
                </div>
              </div>
              <div className='px-6 pt-6 pb-5'>
                <div className='w-full p-4 flex gap-3 rounded-xl text-sm bg-amber-50 text-amber-700'>
                  <svg
                    className='min-w-5'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.99975 7.49995V10.8333M9.99975 14.1666H10.0081M8.84585 3.24305L1.99178 15.0819C1.61161 15.7386 1.42153 16.0669 1.44962 16.3364C1.47412 16.5714 1.59727 16.785 1.7884 16.924C2.00753 17.0833 2.38691 17.0833 3.14568 17.0833H16.8538C17.6126 17.0833 17.992 17.0833 18.2111 16.924C18.4022 16.785 18.5254 16.5714 18.5499 16.3364C18.578 16.0669 18.3879 15.7386 18.0077 15.0819L11.1537 3.24305C10.7748 2.58875 10.5854 2.26159 10.3383 2.15172C10.1228 2.05587 9.87672 2.05587 9.66117 2.15172C9.41406 2.26159 9.22466 2.58875 8.84585 3.24305Z'
                      stroke='#DC6803'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>

                  <div>
                    <h3 className='font-semibold mb-1'>
                      Asset Transfer Disclaimer
                    </h3>
                    <p className=''>
                      You are initiating a blockchain network transaction, which
                      is irreversible after confirmation. Ensure the transaction
                      details are correct to avoid asset loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value='recipient' className='fixed w-full h-full'>
          <div
            className='relative h-fit border flex-none border-gray-300 rounded-3xl 
flex-col  p-0   grid   shadow-sm  max-w-screen-sm mx-auto w-full  
gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'
          >
            <FSDialogHeader className='px-6 pt-6 pb-3 flex flex-col'>
              <div className='mb-2'>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M26.6667 28C26.6667 26.1392 26.6667 25.2089 26.4371 24.4518C25.92 22.7473 24.5861 21.4134 22.8816 20.8963C22.1245 20.6667 21.1941 20.6667 19.3334 20.6667H12.6667C10.806 20.6667 9.87558 20.6667 9.11852 20.8963C7.41398 21.4134 6.08009 22.7473 5.56303 24.4518C5.33337 25.2089 5.33337 26.1392 5.33337 28M22 10C22 13.3137 19.3137 16 16 16C12.6863 16 10 13.3137 10 10C10 6.68629 12.6863 4 16 4C19.3137 4 22 6.68629 22 10Z'
                    stroke='#344054'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <FSDialogTitle className='text-xl'>
                Recipient Selection
              </FSDialogTitle>
              <FSDialogDescription className='text-gray-800'>
                Selecting a recipient from the dropdown menu, featuring your
                list of your contacts.
              </FSDialogDescription>
            </FSDialogHeader>
            <div>
              <div className='w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2'>
                To
              </div>
              <div className='flex gap-3 mt-3 items-center mb-6 px-6'>
                <RecipientForm />
              </div>
              <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                From
              </div>
              <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                <div className='w-full justify-between flex  py-1.5'>
                  {' '}
                  <p>Wallet</p>
                  <p className='flex gap-2 font-medium items-center'>
                    {selectedWallet}
                  </p>
                </div>
                <div className='w-full justify-between  flex py-1.5'>
                  {' '}
                  <p>Network Account</p>
                  <p className='font-medium'>
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
              <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium mt-3 text-gray-600 py-2'>
                Balance
              </div>
              <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
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
                <div className='w-full justify-between  flex py-1.5'>
                  {' '}
                  <p>USD Equivalent</p>
                  <p className='flex gap-2 font-medium items-center'>
                    {usdEquivalent}
                  </p>
                </div>
              </div>
              <div className='px-6 pt-6 pb-5'>
                <div className='w-full p-4 flex gap-3 rounded-xl text-sm bg-amber-50 text-amber-700'>
                  <svg
                    className='min-w-5'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.99975 7.49995V10.8333M9.99975 14.1666H10.0081M8.84585 3.24305L1.99178 15.0819C1.61161 15.7386 1.42153 16.0669 1.44962 16.3364C1.47412 16.5714 1.59727 16.785 1.7884 16.924C2.00753 17.0833 2.38691 17.0833 3.14568 17.0833H16.8538C17.6126 17.0833 17.992 17.0833 18.2111 16.924C18.4022 16.785 18.5254 16.5714 18.5499 16.3364C18.578 16.0669 18.3879 15.7386 18.0077 15.0819L11.1537 3.24305C10.7748 2.58875 10.5854 2.26159 10.3383 2.15172C10.1228 2.05587 9.87672 2.05587 9.66117 2.15172C9.41406 2.26159 9.22466 2.58875 8.84585 3.24305Z'
                      stroke='#DC6803'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>

                  <div>
                    <h3 className='font-semibold mb-1'>
                      Asset Transfer Disclaimer
                    </h3>
                    <p className=''>
                      You are initiating a blockchain network transaction, which
                      is irreversible after confirmation. Ensure the transaction
                      details are correct to avoid asset loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value='amount' className='fixed w-full h-full'>
          <div
            className='relative h-fit border flex-none border-gray-300 rounded-3xl 
flex-col  p-0   grid   shadow-sm  max-w-screen-sm mx-auto w-full  
gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'
          >
            <FSDialogHeader className='px-6 pt-6 pb-3 flex flex-col'>
              <div className='mb-2'>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.2503 21.2504C25.8137 20.6394 29.3333 16.7308 29.3333 12.0001C29.3333 6.84542 25.1546 2.66675 20 2.66675C15.2693 2.66675 11.3606 6.18631 10.7496 10.7498M9.99996 17.3334L12 16.0001V23.3334M9.99996 23.3334H14M21.3333 20.0001C21.3333 25.1547 17.1546 29.3334 12 29.3334C6.8453 29.3334 2.66663 25.1547 2.66663 20.0001C2.66663 14.8454 6.8453 10.6667 12 10.6667C17.1546 10.6667 21.3333 14.8454 21.3333 20.0001Z'
                    stroke='#344054'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <FSDialogTitle className='text-xl'>Payment Amount</FSDialogTitle>
              <FSDialogDescription className='text-gray-800'>
                Selecting a recipient from the dropdown menu, featuring your
                list of your contacts.
              </FSDialogDescription>
            </FSDialogHeader>
            <div>
              <div className='w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2'>
                Pay
              </div>
              <div className='flex gap-3 mt-3 items-center mb-6 px-6'>
                <div className='flex flex-col gap-2 w-full'>
                  <PaymentForm />
                  <p className='text-gray-700 font-medium text-sm'>
                    {selectedAsset} ≈{' '}
                    {(
                      (selectedPayment || 0) /
                      (selectedAsset === 'ETH' ? cryptoValues.ethValue : 1)
                    ).toFixed(10)}{' '}
                    {selectedAsset}
                  </p>
                </div>
              </div>
              <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                To
              </div>
              <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                <div className='w-full justify-between flex  py-1.5 mb-3'>
                  {' '}
                  <p>Recipient</p>
                  <p className='flex gap-2 font-medium items-center'>
                    {selectedRecipient}
                  </p>
                </div>
              </div>
              <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                From
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
              <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
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
                <div className='w-full justify-between  flex py-1.5'>
                  {' '}
                  <p>USD Equivalent</p>
                  <p className='flex gap-2 font-medium items-center'>
                    {usdEquivalent}
                  </p>
                </div>
              </div>
              <div className='px-6 pt-6 pb-5'>
                <div className='w-full p-4 flex gap-3 rounded-xl text-sm bg-amber-50 text-amber-700'>
                  <svg
                    className='min-w-5'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.99975 7.49995V10.8333M9.99975 14.1666H10.0081M8.84585 3.24305L1.99178 15.0819C1.61161 15.7386 1.42153 16.0669 1.44962 16.3364C1.47412 16.5714 1.59727 16.785 1.7884 16.924C2.00753 17.0833 2.38691 17.0833 3.14568 17.0833H16.8538C17.6126 17.0833 17.992 17.0833 18.2111 16.924C18.4022 16.785 18.5254 16.5714 18.5499 16.3364C18.578 16.0669 18.3879 15.7386 18.0077 15.0819L11.1537 3.24305C10.7748 2.58875 10.5854 2.26159 10.3383 2.15172C10.1228 2.05587 9.87672 2.05587 9.66117 2.15172C9.41406 2.26159 9.22466 2.58875 8.84585 3.24305Z'
                      stroke='#DC6803'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>

                  <div>
                    <h3 className='font-semibold mb-1'>
                      Asset Transfer Disclaimer
                    </h3>
                    <p className=''>
                      You are initiating a blockchain network transaction, which
                      is irreversible after confirmation. Ensure the transaction
                      details are correct to avoid asset loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value='confirm' className='fixed w-full h-full'>
          <div
            className='relative h-fit border flex-none border-gray-300 rounded-3xl 
flex-col  p-0   grid   shadow-sm  max-w-screen-sm mx-auto w-full  
gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]'
          >
            <FSDialogHeader className='px-6 pt-6 pb-3 flex flex-col'>
              <div className='mb-2'>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 14L14.6667 16.6667L20.6667 10.6667M26.6667 28V10.4C26.6667 8.15979 26.6667 7.03969 26.2307 6.18404C25.8472 5.43139 25.2353 4.81947 24.4827 4.43597C23.627 4 22.5069 4 20.2667 4H11.7334C9.49316 4 8.37306 4 7.51741 4.43597C6.76476 4.81947 6.15284 5.43139 5.76935 6.18404C5.33337 7.03969 5.33337 8.15979 5.33337 10.4V28L9.00004 25.3333L12.3334 28L16 25.3333L19.6667 28L23 25.3333L26.6667 28Z'
                    stroke='#344054'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <FSDialogTitle className='text-xl'>
                Payment Confirmation
              </FSDialogTitle>
              <FSDialogDescription className='text-gray-800'>
                Before finalizing your transaction, carefully review your
                payment, including the selected wallet, Network Account, and the
                total amount with fees. Ensure all details are correct and
                confirm to proceed.
              </FSDialogDescription>
            </FSDialogHeader>
            <div>
              <div className='w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2'>
                Paying
              </div>
              <div className='flex gap-3 mt-3 items-center mb-4 px-6'>
                <div className='flex flex-col gap-2 items-start justify-start'>
                  <p className='text-sm text-gray-700 font-medium'>Amount</p>
                  <div className='flex gap-2 items-center'>
                    <img
                      className='w-6 h-6'
                      src={`/icons/tokens/${selectedAsset}.svg`}
                    />
                    <p className='text-xl font-medium'>
                      {selectedAsset === 'ETH'
                        ? (
                            Number(selectedPayment) / cryptoValues.ethValue
                          ).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                        : (Number(selectedPayment) * 1).toLocaleString(
                            undefined,
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}
                    </p>
                  </div>
                  <p className='text-sm text-gray-700 font-medium'>
                    USD Equivalent ≈ $
                    {Number(selectedPayment).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
              <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                Transaction Details
              </div>
              <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                <div className='w-full justify-between flex  py-1.5'>
                  {' '}
                  <p>Transaction Fee</p>
                  <p className='flex gap-2 font-medium items-center'>
                    <img src={`/icons/networks/${selectedNetwork}.svg`} />
                    0.016789 {selectedNetwork} ($
                    {(cryptoValues.ethValue * 0.016789).toFixed(2)})
                  </p>
                </div>
                <div className='w-full justify-between flex  py-1.5 mb-3'>
                  {' '}
                  <p>Total Transaction Amount</p>
                  <p className='flex gap-2 font-medium items-center'>
                    $
                    {(
                      cryptoValues.ethValue * 0.016789 +
                      Number(selectedPayment)
                    ).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
              <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                To
              </div>
              <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                <div className='w-full justify-between flex  py-1.5 mb-3'>
                  {' '}
                  <p>Recipient</p>
                  <p className='flex gap-2 font-medium items-center'>
                    {selectedRecipient}
                  </p>
                </div>
              </div>
              <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                From
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
              <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
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
                <div className='w-full justify-between  flex py-1.5'>
                  {' '}
                  <p>USD Equivalent</p>
                  <p className='flex gap-2 font-medium items-center'>
                    {usdEquivalent}
                  </p>
                </div>
              </div>
              <div className='px-6 pt-6 pb-5'>
                <div className='w-full p-4 flex gap-3 rounded-xl text-sm bg-amber-50 text-amber-700'>
                  <svg
                    className='min-w-5'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.99975 7.49995V10.8333M9.99975 14.1666H10.0081M8.84585 3.24305L1.99178 15.0819C1.61161 15.7386 1.42153 16.0669 1.44962 16.3364C1.47412 16.5714 1.59727 16.785 1.7884 16.924C2.00753 17.0833 2.38691 17.0833 3.14568 17.0833H16.8538C17.6126 17.0833 17.992 17.0833 18.2111 16.924C18.4022 16.785 18.5254 16.5714 18.5499 16.3364C18.578 16.0669 18.3879 15.7386 18.0077 15.0819L11.1537 3.24305C10.7748 2.58875 10.5854 2.26159 10.3383 2.15172C10.1228 2.05587 9.87672 2.05587 9.66117 2.15172C9.41406 2.26159 9.22466 2.58875 8.84585 3.24305Z'
                      stroke='#DC6803'
                      stroke-width='1.66667'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>

                  <div>
                    <h3 className='font-semibold mb-1'>
                      Asset Transfer Disclaimer
                    </h3>
                    <p className=''>
                      You are initiating a blockchain network transaction, which
                      is irreversible after confirmation. Ensure the transaction
                      details are correct to avoid asset loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
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
          Processing your payment... Please wait.
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
flex-col  p-0   grid   shadow-sm  max-w-screen-sm mx-auto w-full  
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
                  Payment was successful!
                </h3>
                <p className='text-sm font-normal text-gray-600'>
                  You successfully sent{' '}
                  <span className='font-medium text-gray-800'>
                    {selectedAsset === 'ETH'
                      ? (
                          Number(selectedPayment) / cryptoValues.ethValue
                        ).toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : (Number(selectedPayment) * 1).toLocaleString(
                          undefined,
                          {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }
                        )}{' '}
                    {selectedAsset} (≈$
                    {Number(selectedPayment).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    )
                  </span>{' '}
                  to{' '}
                  <span className='font-medium text-gray-800'>
                    {selectedRecipient}
                  </span>
                  .
                </p>
              </div>
              <div>
                <div className='w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2'>
                  Paid
                </div>
                <div className='flex gap-3 mt-3 items-center mb-4 px-6'>
                  <div className='flex flex-col gap-2 items-start justify-start'>
                    <p className='text-sm text-gray-700 font-medium'>Amount</p>
                    <div className='flex gap-2 items-center'>
                      <img
                        className='w-6 h-6'
                        src={`/icons/tokens/${selectedAsset}.svg`}
                      />
                      <p className='text-xl font-medium'>
                        {selectedAsset === 'ETH'
                          ? (
                              Number(selectedPayment) / cryptoValues.ethValue
                            ).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          : (Number(selectedPayment) * 1).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                      </p>
                    </div>
                    <p className='text-sm text-gray-700 font-medium'>
                      USD Equivalent ≈ $
                      {Number(selectedPayment).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>
                <div className='w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2'>
                  Transaction Summary
                </div>
                <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                  <div className='w-full justify-between flex  py-1.5'>
                    {' '}
                    <p>Transaction Fee</p>
                    <p className='flex gap-2 font-medium items-center'>
                      <img src={`/icons/networks/${selectedNetwork}.svg`} />
                      0.016789 {selectedNetwork} ($
                      {(cryptoValues.ethValue * 0.016789).toFixed(2)})
                    </p>
                  </div>
                  <div className='w-full justify-between flex  py-1.5 '>
                    {' '}
                    <p>Total Transaction Amount</p>
                    <p className='flex gap-2 font-medium items-center'>
                      $
                      {(
                        cryptoValues.ethValue * 0.016789 +
                        Number(selectedPayment)
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>

                <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
                  <div className='w-full justify-between flex  py-1.5 mb-3'>
                    {' '}
                    <p>Recipient</p>
                    <p className='flex gap-2 font-medium items-center'>
                      {selectedRecipient}
                    </p>
                  </div>
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
                <div className='px-6 flex flex-col gap-2 text-gray-700 text-sm'>
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
                  <div className='w-full justify-between  flex py-1.5'>
                    {' '}
                    <p>USD Equivalent</p>
                    <p className='flex gap-2 font-medium items-center'>
                      {usdEquivalent}
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

export { SendModal };

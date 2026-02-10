'use client';

import * as React from 'react';

import { useState } from 'react';

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

import Link from 'next/link';

import { PaymentForm } from '@/components/paymentform';

import { NetworkSelectForm } from '@/components/networkselectform';

import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

import Image from 'next/image';
import veriff01 from '@/public/veriff/01.png';
import veriff02 from '@/public/veriff/02.png';
import veriff03 from '@/public/veriff/03.png';

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

import { useSubscribe } from '@/components/ui/subscribecontext';

import { WalletProvider } from '@/components/ui/formcontext';
import { SubscribeProvider } from '@/components/ui/subscribecontext';
import { LinkExternal01, UserCheck01 } from '@untitled-ui/icons-react';
import { Notification } from '@/components/ui/notification';

// export const ConfirmationStep = () => {
//   const { formData } = useContext(FormContext);

//   const handleConfirm = () => {
//     // Submit the form data to the server or perform any necessary actions
//     console.log(formData);
//   };
// };

const Onboarding = () => {
  const tabValues = ['payment', 'recipient', 'amount', 'confirm'];
  const [activeTab, setActiveTab] = useState(tabValues[0]);
  const [showVeriffPopup, setShowVeriffPopup] = useState(false);

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

  return (
    <div className='flex w-full h-full bg-gray-25'>
      {/* <div className="fixed inset-0 w-screen h-screen mx-auto -translate-y-10 overflow-hidden ">
        <div className="absolute inset-0 z-10 h-full bg-gradient-to-b from-transparent via-gray-50/60 to-gray-50 opacity-100"></div>
        <div className="absolute inset-0 z-10 h-full bg-gradient-to-l from-transparent via-gray-50/30 to-gray-50 opacity-100"></div>
        <div className="absolute inset-0 z-10 h-full bg-gradient-to-r from-transparent via-gray-50/30 to-gray-50 opacity-100"></div>
        <svg
          width="100vw"
          height="100vh"
          viewBox="0 0 1440 1440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_173_20898"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="1440"
          >
            <path
              d="M1440 0H0V1440H1440V0Z"
              fill="url(#paint0_radial_173_20898)"
            />
          </mask>
          <g mask="url(#mask0_173_20898)">
            <path
              d="M80 80V81H81V80H80ZM79 0V80H81V0H79ZM80 79H0V81H80V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 80V81H161V80H160ZM159 0V80H161V0H159ZM160 79H80V81H160V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 80V81H241V80H240ZM239 0V80H241V0H239ZM240 79H160V81H240V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 80V81H321V80H320ZM319 0V80H321V0H319ZM320 79H240V81H320V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M400 80V81H401V80H400ZM399 0V80H401V0H399ZM400 79H320V81H400V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 80V81H481V80H480ZM479 0V80H481V0H479ZM480 79H400V81H480V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 80V81H561V80H560ZM559 0V80H561V0H559ZM560 79H480V81H560V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 80V81H641V80H640ZM639 0V80H641V0H639ZM640 79H560V81H640V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 80V81H721V80H720ZM719 0V80H721V0H719ZM720 79H640V81H720V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 80V81H801V80H800ZM799 0V80H801V0H799ZM800 79H720V81H800V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M880 80V81H881V80H880ZM879 0V80H881V0H879ZM880 79H800V81H880V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 80V81H961V80H960ZM959 0V80H961V0H959ZM960 79H880V81H960V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 80V81H1041V80H1040ZM1039 0V80H1041V0H1039ZM1040 79H960V81H1040V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M1120 80V81H1121V80H1120ZM1119 0V80H1121V0H1119ZM1120 79H1040V81H1120V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 80V81H1201V80H1200ZM1199 0V80H1201V0H1199ZM1200 79H1120V81H1200V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 80V81H1281V80H1280ZM1279 0V80H1281V0H1279ZM1280 79H1200V81H1280V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 80V81H1361V80H1360ZM1359 0V80H1361V0H1359ZM1360 79H1280V81H1360V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 80V81H1441V80H1440ZM1439 0V80H1441V0H1439ZM1440 79H1360V81H1440V79Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 160V161H81V160H80ZM79 80V160H81V80H79ZM80 159H0V161H80V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 160V161H161V160H160ZM159 80V160H161V80H159ZM160 159H80V161H160V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 160V161H241V160H240ZM239 80V160H241V80H239ZM240 159H160V161H240V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 160V161H321V160H320ZM319 80V160H321V80H319ZM320 159H240V161H320V159Z"
              fill="#D0D5DD"
            />
            <path d="M320 80H400V160H320V80Z" fill="#F2F4F7" />
            <path
              d="M400 160V161H401V160H400ZM399 80V160H401V80H399ZM400 159H320V161H400V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 160V161H481V160H480ZM479 80V160H481V80H479ZM480 159H400V161H480V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 160V161H561V160H560ZM559 80V160H561V80H559ZM560 159H480V161H560V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 160V161H641V160H640ZM639 80V160H641V80H639ZM640 159H560V161H640V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 160V161H721V160H720ZM719 80V160H721V80H719ZM720 159H640V161H720V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 160V161H801V160H800ZM799 80V160H801V80H799ZM800 159H720V161H800V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M880 160V161H881V160H880ZM879 80V160H881V80H879ZM880 159H800V161H880V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 160V161H961V160H960ZM959 80V160H961V80H959ZM960 159H880V161H960V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 160V161H1041V160H1040ZM1039 80V160H1041V80H1039ZM1040 159H960V161H1040V159Z"
              fill="#D0D5DD"
            />
            <path d="M1040 80H1120V160H1040V80Z" fill="#F2F4F7" />
            <path
              d="M1120 160V161H1121V160H1120ZM1119 80V160H1121V80H1119ZM1120 159H1040V161H1120V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 160V161H1201V160H1200ZM1199 80V160H1201V80H1199ZM1200 159H1120V161H1200V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 160V161H1281V160H1280ZM1279 80V160H1281V80H1279ZM1280 159H1200V161H1280V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 160V161H1361V160H1360ZM1359 80V160H1361V80H1359ZM1360 159H1280V161H1360V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 160V161H1441V160H1440ZM1439 80V160H1441V80H1439ZM1440 159H1360V161H1440V159Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 240V241H81V240H80ZM79 160V240H81V160H79ZM80 239H0V241H80V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 240V241H161V240H160ZM159 160V240H161V160H159ZM160 239H80V241H160V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 240V241H241V240H240ZM239 160V240H241V160H239ZM240 239H160V241H240V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 240V241H321V240H320ZM319 160V240H321V160H319ZM320 239H240V241H320V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M400 240V241H401V240H400ZM399 160V240H401V160H399ZM400 239H320V241H400V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 240V241H481V240H480ZM479 160V240H481V160H479ZM480 239H400V241H480V239Z"
              fill="#D0D5DD"
            />
            <path d="M480 160H560V240H480V160Z" fill="#F2F4F7" />
            <path
              d="M560 240V241H561V240H560ZM559 160V240H561V160H559ZM560 239H480V241H560V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 240V241H641V240H640ZM639 160V240H641V160H639ZM640 239H560V241H640V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 240V241H721V240H720ZM719 160V240H721V160H719ZM720 239H640V241H720V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 240V241H801V240H800ZM799 160V240H801V160H799ZM800 239H720V241H800V239Z"
              fill="#D0D5DD"
            />
            <path d="M800 160H880V240H800V160Z" fill="#F2F4F7" />
            <path
              d="M880 240V241H881V240H880ZM879 160V240H881V160H879ZM880 239H800V241H880V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 240V241H961V240H960ZM959 160V240H961V160H959ZM960 239H880V241H960V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 240V241H1041V240H1040ZM1039 160V240H1041V160H1039ZM1040 239H960V241H1040V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M1120 240V241H1121V240H1120ZM1119 160V240H1121V160H1119ZM1120 239H1040V241H1120V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 240V241H1201V240H1200ZM1199 160V240H1201V160H1199ZM1200 239H1120V241H1200V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 240V241H1281V240H1280ZM1279 160V240H1281V160H1279ZM1280 239H1200V241H1280V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 240V241H1361V240H1360ZM1359 160V240H1361V160H1359ZM1360 239H1280V241H1360V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 240V241H1441V240H1440ZM1439 160V240H1441V160H1439ZM1440 239H1360V241H1440V239Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 320V321H81V320H80ZM79 240V320H81V240H79ZM80 319H0V321H80V319Z"
              fill="#D0D5DD"
            />
            <path d="M80 240H160V320H80V240Z" fill="#F2F4F7" />
            <path
              d="M160 320V321H161V320H160ZM159 240V320H161V240H159ZM160 319H80V321H160V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 320V321H241V320H240ZM239 240V320H241V240H239ZM240 319H160V321H240V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 320V321H321V320H320ZM319 240V320H321V240H319ZM320 319H240V321H320V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M400 320V321H401V320H400ZM399 240V320H401V240H399ZM400 319H320V321H400V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 320V321H481V320H480ZM479 240V320H481V240H479ZM480 319H400V321H480V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 320V321H561V320H560ZM559 240V320H561V240H559ZM560 319H480V321H560V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 320V321H641V320H640ZM639 240V320H641V240H639ZM640 319H560V321H640V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 320V321H721V320H720ZM719 240V320H721V240H719ZM720 319H640V321H720V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 320V321H801V320H800ZM799 240V320H801V240H799ZM800 319H720V321H800V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M880 320V321H881V320H880ZM879 240V320H881V240H879ZM880 319H800V321H880V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 320V321H961V320H960ZM959 240V320H961V240H959ZM960 319H880V321H960V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 320V321H1041V320H1040ZM1039 240V320H1041V240H1039ZM1040 319H960V321H1040V319Z"
              fill="#D0D5DD"
            />
            <path d="M1040 240H1120V320H1040V240Z" fill="#F2F4F7" />
            <path
              d="M1120 320V321H1121V320H1120ZM1119 240V320H1121V240H1119ZM1120 319H1040V321H1120V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 320V321H1201V320H1200ZM1199 240V320H1201V240H1199ZM1200 319H1120V321H1200V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 320V321H1281V320H1280ZM1279 240V320H1281V240H1279ZM1280 319H1200V321H1280V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 320V321H1361V320H1360ZM1359 240V320H1361V240H1359ZM1360 319H1280V321H1360V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 320V321H1441V320H1440ZM1439 240V320H1441V240H1439ZM1440 319H1360V321H1440V319Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 400V401H81V400H80ZM79 320V400H81V320H79ZM80 399H0V401H80V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 400V401H161V400H160ZM159 320V400H161V320H159ZM160 399H80V401H160V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 400V401H241V400H240ZM239 320V400H241V320H239ZM240 399H160V401H240V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 400V401H321V400H320ZM319 320V400H321V320H319ZM320 399H240V401H320V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M400 400V401H401V400H400ZM399 320V400H401V320H399ZM400 399H320V401H400V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 400V401H481V400H480ZM479 320V400H481V320H479ZM480 399H400V401H480V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 400V401H561V400H560ZM559 320V400H561V320H559ZM560 399H480V401H560V399Z"
              fill="#D0D5DD"
            />
            <path d="M560 320H640V400H560V320Z" fill="#F2F4F7" />
            <path
              d="M640 400V401H641V400H640ZM639 320V400H641V320H639ZM640 399H560V401H640V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 400V401H721V400H720ZM719 320V400H721V320H719ZM720 399H640V401H720V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 400V401H801V400H800ZM799 320V400H801V320H799ZM800 399H720V401H800V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M880 400V401H881V400H880ZM879 320V400H881V320H879ZM880 399H800V401H880V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 400V401H961V400H960ZM959 320V400H961V320H959ZM960 399H880V401H960V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 400V401H1041V400H1040ZM1039 320V400H1041V320H1039ZM1040 399H960V401H1040V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M1120 400V401H1121V400H1120ZM1119 320V400H1121V320H1119ZM1120 399H1040V401H1120V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 400V401H1201V400H1200ZM1199 320V400H1201V320H1199ZM1200 399H1120V401H1200V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 400V401H1281V400H1280ZM1279 320V400H1281V320H1279ZM1280 399H1200V401H1280V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 400V401H1361V400H1360ZM1359 320V400H1361V320H1359ZM1360 399H1280V401H1360V399Z"
              fill="#D0D5DD"
            />
            <path d="M1360 320H1440V400H1360V320Z" fill="#F2F4F7" />
            <path
              d="M1440 400V401H1441V400H1440ZM1439 320V400H1441V320H1439ZM1440 399H1360V401H1440V399Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 480V481H81V480H80ZM79 400V480H81V400H79ZM80 479H0V481H80V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 480V481H161V480H160ZM159 400V480H161V400H159ZM160 479H80V481H160V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 480V481H241V480H240ZM239 400V480H241V400H239ZM240 479H160V481H240V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 480V481H321V480H320ZM319 400V480H321V400H319ZM320 479H240V481H320V479Z"
              fill="#D0D5DD"
            />
            <path d="M320 400H400V480H320V400Z" fill="#F2F4F7" />
            <path
              d="M400 480V481H401V480H400ZM399 400V480H401V400H399ZM400 479H320V481H400V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 480V481H481V480H480ZM479 400V480H481V400H479ZM480 479H400V481H480V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 480V481H561V480H560ZM559 400V480H561V400H559ZM560 479H480V481H560V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 480V481H641V480H640ZM639 400V480H641V400H639ZM640 479H560V481H640V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 480V481H721V480H720ZM719 400V480H721V400H719ZM720 479H640V481H720V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 480V481H801V480H800ZM799 400V480H801V400H799ZM800 479H720V481H800V479Z"
              fill="#D0D5DD"
            />
            <path d="M800 400H880V480H800V400Z" fill="#F2F4F7" />
            <path
              d="M880 480V481H881V480H880ZM879 400V480H881V400H879ZM880 479H800V481H880V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 480V481H961V480H960ZM959 400V480H961V400H959ZM960 479H880V481H960V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 480V481H1041V480H1040ZM1039 400V480H1041V400H1039ZM1040 479H960V481H1040V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M1120 480V481H1121V480H1120ZM1119 400V480H1121V400H1119ZM1120 479H1040V481H1120V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 480V481H1201V480H1200ZM1199 400V480H1201V400H1199ZM1200 479H1120V481H1200V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 480V481H1281V480H1280ZM1279 400V480H1281V400H1279ZM1280 479H1200V481H1280V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 480V481H1361V480H1360ZM1359 400V480H1361V400H1359ZM1360 479H1280V481H1360V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 480V481H1441V480H1440ZM1439 400V480H1441V400H1439ZM1440 479H1360V481H1440V479Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 560V561H81V560H80ZM79 480V560H81V480H79ZM80 559H0V561H80V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 560V561H161V560H160ZM159 480V560H161V480H159ZM160 559H80V561H160V559Z"
              fill="#D0D5DD"
            />
            <path d="M160 480H240V560H160V480Z" fill="#F2F4F7" />
            <path
              d="M240 560V561H241V560H240ZM239 480V560H241V480H239ZM240 559H160V561H240V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 560V561H321V560H320ZM319 480V560H321V480H319ZM320 559H240V561H320V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M400 560V561H401V560H400ZM399 480V560H401V480H399ZM400 559H320V561H400V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 560V561H481V560H480ZM479 480V560H481V480H479ZM480 559H400V561H480V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 560V561H561V560H560ZM559 480V560H561V480H559ZM560 559H480V561H560V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 560V561H641V560H640ZM639 480V560H641V480H639ZM640 559H560V561H640V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 560V561H721V560H720ZM719 480V560H721V480H719ZM720 559H640V561H720V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 560V561H801V560H800ZM799 480V560H801V480H799ZM800 559H720V561H800V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M880 560V561H881V560H880ZM879 480V560H881V480H879ZM880 559H800V561H880V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 560V561H961V560H960ZM959 480V560H961V480H959ZM960 559H880V561H960V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 560V561H1041V560H1040ZM1039 480V560H1041V480H1039ZM1040 559H960V561H1040V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M1120 560V561H1121V560H1120ZM1119 480V560H1121V480H1119ZM1120 559H1040V561H1120V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 560V561H1201V560H1200ZM1199 480V560H1201V480H1199ZM1200 559H1120V561H1200V559Z"
              fill="#D0D5DD"
            />
            <path d="M1200 480H1280V560H1200V480Z" fill="#F2F4F7" />
            <path
              d="M1280 560V561H1281V560H1280ZM1279 480V560H1281V480H1279ZM1280 559H1200V561H1280V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 560V561H1361V560H1360ZM1359 480V560H1361V480H1359ZM1360 559H1280V561H1360V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 560V561H1441V560H1440ZM1439 480V560H1441V480H1439ZM1440 559H1360V561H1440V559Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 640V641H81V640H80ZM79 560V640H81V560H79ZM80 639H0V641H80V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 640V641H161V640H160ZM159 560V640H161V560H159ZM160 639H80V641H160V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 640V641H241V640H240ZM239 560V640H241V560H239ZM240 639H160V641H240V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 640V641H321V640H320ZM319 560V640H321V560H319ZM320 639H240V641H320V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M400 640V641H401V640H400ZM399 560V640H401V560H399ZM400 639H320V641H400V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 640V641H481V640H480ZM479 560V640H481V560H479ZM480 639H400V641H480V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 640V641H561V640H560ZM559 560V640H561V560H559ZM560 639H480V641H560V639Z"
              fill="#D0D5DD"
            />
            <path d="M560 560H640V640H560V560Z" fill="#F2F4F7" />
            <path
              d="M640 640V641H641V640H640ZM639 560V640H641V560H639ZM640 639H560V641H640V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 640V641H721V640H720ZM719 560V640H721V560H719ZM720 639H640V641H720V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 640V641H801V640H800ZM799 560V640H801V560H799ZM800 639H720V641H800V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M880 640V641H881V640H880ZM879 560V640H881V560H879ZM880 639H800V641H880V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 640V641H961V640H960ZM959 560V640H961V560H959ZM960 639H880V641H960V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 640V641H1041V640H1040ZM1039 560V640H1041V560H1039ZM1040 639H960V641H1040V639Z"
              fill="#D0D5DD"
            />
            <path d="M1040 560H1120V640H1040V560Z" fill="#F2F4F7" />
            <path
              d="M1120 640V641H1121V640H1120ZM1119 560V640H1121V560H1119ZM1120 639H1040V641H1120V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 640V641H1201V640H1200ZM1199 560V640H1201V560H1199ZM1200 639H1120V641H1200V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 640V641H1281V640H1280ZM1279 560V640H1281V560H1279ZM1280 639H1200V641H1280V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 640V641H1361V640H1360ZM1359 560V640H1361V560H1359ZM1360 639H1280V641H1360V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 640V641H1441V640H1440ZM1439 560V640H1441V560H1439ZM1440 639H1360V641H1440V639Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 720V721H81V720H80ZM79 640V720H81V640H79ZM80 719H0V721H80V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 720V721H161V720H160ZM159 640V720H161V640H159ZM160 719H80V721H160V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 720V721H241V720H240ZM239 640V720H241V640H239ZM240 719H160V721H240V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 720V721H321V720H320ZM319 640V720H321V640H319ZM320 719H240V721H320V719Z"
              fill="#D0D5DD"
            />
            <path d="M320 640H400V720H320V640Z" fill="#F2F4F7" />
            <path
              d="M400 720V721H401V720H400ZM399 640V720H401V640H399ZM400 719H320V721H400V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 720V721H481V720H480ZM479 640V720H481V640H479ZM480 719H400V721H480V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 720V721H561V720H560ZM559 640V720H561V640H559ZM560 719H480V721H560V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 720V721H641V720H640ZM639 640V720H641V640H639ZM640 719H560V721H640V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 720V721H721V720H720ZM719 640V720H721V640H719ZM720 719H640V721H720V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 720V721H801V720H800ZM799 640V720H801V640H799ZM800 719H720V721H800V719Z"
              fill="#D0D5DD"
            />
            <path d="M800 640H880V720H800V640Z" fill="#F2F4F7" />
            <path
              d="M880 720V721H881V720H880ZM879 640V720H881V640H879ZM880 719H800V721H880V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 720V721H961V720H960ZM959 640V720H961V640H959ZM960 719H880V721H960V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 720V721H1041V720H1040ZM1039 640V720H1041V640H1039ZM1040 719H960V721H1040V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M1120 720V721H1121V720H1120ZM1119 640V720H1121V640H1119ZM1120 719H1040V721H1120V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 720V721H1201V720H1200ZM1199 640V720H1201V640H1199ZM1200 719H1120V721H1200V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 720V721H1281V720H1280ZM1279 640V720H1281V640H1279ZM1280 719H1200V721H1280V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 720V721H1361V720H1360ZM1359 640V720H1361V640H1359ZM1360 719H1280V721H1360V719Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 720V721H1441V720H1440ZM1439 640V720H1441V640H1439ZM1440 719H1360V721H1440V719Z"
              fill="#D0D5DD"
            />
            <path d="M0 720H80V800H0V720Z" fill="#F2F4F7" />
            <path
              d="M80 800V801H81V800H80ZM79 720V800H81V720H79ZM80 799H0V801H80V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 800V801H161V800H160ZM159 720V800H161V720H159ZM160 799H80V801H160V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 800V801H241V800H240ZM239 720V800H241V720H239ZM240 799H160V801H240V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 800V801H321V800H320ZM319 720V800H321V720H319ZM320 799H240V801H320V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M400 800V801H401V800H400ZM399 720V800H401V720H399ZM400 799H320V801H400V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 800V801H481V800H480ZM479 720V800H481V720H479ZM480 799H400V801H480V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 800V801H561V800H560ZM559 720V800H561V720H559ZM560 799H480V801H560V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 800V801H641V800H640ZM639 720V800H641V720H639ZM640 799H560V801H640V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 800V801H721V800H720ZM719 720V800H721V720H719ZM720 799H640V801H720V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 800V801H801V800H800ZM799 720V800H801V720H799ZM800 799H720V801H800V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M880 800V801H881V800H880ZM879 720V800H881V720H879ZM880 799H800V801H880V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 800V801H961V800H960ZM959 720V800H961V720H959ZM960 799H880V801H960V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 800V801H1041V800H1040ZM1039 720V800H1041V720H1039ZM1040 799H960V801H1040V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M1120 800V801H1121V800H1120ZM1119 720V800H1121V720H1119ZM1120 799H1040V801H1120V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 800V801H1201V800H1200ZM1199 720V800H1201V720H1199ZM1200 799H1120V801H1200V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 800V801H1281V800H1280ZM1279 720V800H1281V720H1279ZM1280 799H1200V801H1280V799Z"
              fill="#D0D5DD"
            />
            <path d="M1280 720H1360V800H1280V720Z" fill="#F2F4F7" />
            <path
              d="M1360 800V801H1361V800H1360ZM1359 720V800H1361V720H1359ZM1360 799H1280V801H1360V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 800V801H1441V800H1440ZM1439 720V800H1441V720H1439ZM1440 799H1360V801H1440V799Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 880V881H81V880H80ZM79 800V880H81V800H79ZM80 879H0V881H80V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 880V881H161V880H160ZM159 800V880H161V800H159ZM160 879H80V881H160V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 880V881H241V880H240ZM239 800V880H241V800H239ZM240 879H160V881H240V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 880V881H321V880H320ZM319 800V880H321V800H319ZM320 879H240V881H320V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M400 880V881H401V880H400ZM399 800V880H401V800H399ZM400 879H320V881H400V879Z"
              fill="#D0D5DD"
            />
            <path d="M400 800H480V880H400V800Z" fill="#F2F4F7" />
            <path
              d="M480 880V881H481V880H480ZM479 800V880H481V800H479ZM480 879H400V881H480V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 880V881H561V880H560ZM559 800V880H561V800H559ZM560 879H480V881H560V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 880V881H641V880H640ZM639 800V880H641V800H639ZM640 879H560V881H640V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 880V881H721V880H720ZM719 800V880H721V800H719ZM720 879H640V881H720V879Z"
              fill="#D0D5DD"
            />
            <path d="M720 800H800V880H720V800Z" fill="#F2F4F7" />
            <path
              d="M800 880V881H801V880H800ZM799 800V880H801V800H799ZM800 879H720V881H800V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M880 880V881H881V880H880ZM879 800V880H881V800H879ZM880 879H800V881H880V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 880V881H961V880H960ZM959 800V880H961V800H959ZM960 879H880V881H960V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 880V881H1041V880H1040ZM1039 800V880H1041V800H1039ZM1040 879H960V881H1040V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M1120 880V881H1121V880H1120ZM1119 800V880H1121V800H1119ZM1120 879H1040V881H1120V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 880V881H1201V880H1200ZM1199 800V880H1201V800H1199ZM1200 879H1120V881H1200V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 880V881H1281V880H1280ZM1279 800V880H1281V800H1279ZM1280 879H1200V881H1280V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 880V881H1361V880H1360ZM1359 800V880H1361V800H1359ZM1360 879H1280V881H1360V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 880V881H1441V880H1440ZM1439 800V880H1441V800H1439ZM1440 879H1360V881H1440V879Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 960V961H81V960H80ZM79 880V960H81V880H79ZM80 959H0V961H80V959Z"
              fill="#D0D5DD"
            />
            <path d="M80 880H160V960H80V880Z" fill="#F2F4F7" />
            <path
              d="M160 960V961H161V960H160ZM159 880V960H161V880H159ZM160 959H80V961H160V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 960V961H241V960H240ZM239 880V960H241V880H239ZM240 959H160V961H240V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 960V961H321V960H320ZM319 880V960H321V880H319ZM320 959H240V961H320V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M400 960V961H401V960H400ZM399 880V960H401V880H399ZM400 959H320V961H400V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 960V961H481V960H480ZM479 880V960H481V880H479ZM480 959H400V961H480V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 960V961H561V960H560ZM559 880V960H561V880H559ZM560 959H480V961H560V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 960V961H641V960H640ZM639 880V960H641V880H639ZM640 959H560V961H640V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 960V961H721V960H720ZM719 880V960H721V880H719ZM720 959H640V961H720V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 960V961H801V960H800ZM799 880V960H801V880H799ZM800 959H720V961H800V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M880 960V961H881V960H880ZM879 880V960H881V880H879ZM880 959H800V961H880V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 960V961H961V960H960ZM959 880V960H961V880H959ZM960 959H880V961H960V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 960V961H1041V960H1040ZM1039 880V960H1041V880H1039ZM1040 959H960V961H1040V959Z"
              fill="#D0D5DD"
            />
            <path d="M1040 880H1120V960H1040V880Z" fill="#F2F4F7" />
            <path
              d="M1120 960V961H1121V960H1120ZM1119 880V960H1121V880H1119ZM1120 959H1040V961H1120V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 960V961H1201V960H1200ZM1199 880V960H1201V880H1199ZM1200 959H1120V961H1200V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 960V961H1281V960H1280ZM1279 880V960H1281V880H1279ZM1280 959H1200V961H1280V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 960V961H1361V960H1360ZM1359 880V960H1361V880H1359ZM1360 959H1280V961H1360V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 960V961H1441V960H1440ZM1439 880V960H1441V880H1439ZM1440 959H1360V961H1440V959Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 1040V1041H81V1040H80ZM79 960V1040H81V960H79ZM80 1039H0V1041H80V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 1040V1041H161V1040H160ZM159 960V1040H161V960H159ZM160 1039H80V1041H160V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 1040V1041H241V1040H240ZM239 960V1040H241V960H239ZM240 1039H160V1041H240V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 1040V1041H321V1040H320ZM319 960V1040H321V960H319ZM320 1039H240V1041H320V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M400 1040V1041H401V1040H400ZM399 960V1040H401V960H399ZM400 1039H320V1041H400V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 1040V1041H481V1040H480ZM479 960V1040H481V960H479ZM480 1039H400V1041H480V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 1040V1041H561V1040H560ZM559 960V1040H561V960H559ZM560 1039H480V1041H560V1039Z"
              fill="#D0D5DD"
            />
            <path d="M560 960H640V1040H560V960Z" fill="#F2F4F7" />
            <path
              d="M640 1040V1041H641V1040H640ZM639 960V1040H641V960H639ZM640 1039H560V1041H640V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 1040V1041H721V1040H720ZM719 960V1040H721V960H719ZM720 1039H640V1041H720V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 1040V1041H801V1040H800ZM799 960V1040H801V960H799ZM800 1039H720V1041H800V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M880 1040V1041H881V1040H880ZM879 960V1040H881V960H879ZM880 1039H800V1041H880V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 1040V1041H961V1040H960ZM959 960V1040H961V960H959ZM960 1039H880V1041H960V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 1040V1041H1041V1040H1040ZM1039 960V1040H1041V960H1039ZM1040 1039H960V1041H1040V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M1120 1040V1041H1121V1040H1120ZM1119 960V1040H1121V960H1119ZM1120 1039H1040V1041H1120V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 1040V1041H1201V1040H1200ZM1199 960V1040H1201V960H1199ZM1200 1039H1120V1041H1200V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 1040V1041H1281V1040H1280ZM1279 960V1040H1281V960H1279ZM1280 1039H1200V1041H1280V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 1040V1041H1361V1040H1360ZM1359 960V1040H1361V960H1359ZM1360 1039H1280V1041H1360V1039Z"
              fill="#D0D5DD"
            />
            <path d="M1360 960H1440V1040H1360V960Z" fill="#F2F4F7" />
            <path
              d="M1440 1040V1041H1441V1040H1440ZM1439 960V1040H1441V960H1439ZM1440 1039H1360V1041H1440V1039Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 1120V1121H81V1120H80ZM79 1040V1120H81V1040H79ZM80 1119H0V1121H80V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 1120V1121H161V1120H160ZM159 1040V1120H161V1040H159ZM160 1119H80V1121H160V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M240 1120V1121H241V1120H240ZM239 1040V1120H241V1040H239ZM240 1119H160V1121H240V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 1120V1121H321V1120H320ZM319 1040V1120H321V1040H319ZM320 1119H240V1121H320V1119Z"
              fill="#D0D5DD"
            />
            <path d="M320 1040H400V1120H320V1040Z" fill="#F2F4F7" />
            <path
              d="M400 1120V1121H401V1120H400ZM399 1040V1120H401V1040H399ZM400 1119H320V1121H400V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 1120V1121H481V1120H480ZM479 1040V1120H481V1040H479ZM480 1119H400V1121H480V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 1120V1121H561V1120H560ZM559 1040V1120H561V1040H559ZM560 1119H480V1121H560V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 1120V1121H641V1120H640ZM639 1040V1120H641V1040H639ZM640 1119H560V1121H640V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 1120V1121H721V1120H720ZM719 1040V1120H721V1040H719ZM720 1119H640V1121H720V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 1120V1121H801V1120H800ZM799 1040V1120H801V1040H799ZM800 1119H720V1121H800V1119Z"
              fill="#D0D5DD"
            />
            <path d="M800 1040H880V1120H800V1040Z" fill="#F2F4F7" />
            <path
              d="M880 1120V1121H881V1120H880ZM879 1040V1120H881V1040H879ZM880 1119H800V1121H880V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 1120V1121H961V1120H960ZM959 1040V1120H961V1040H959ZM960 1119H880V1121H960V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 1120V1121H1041V1120H1040ZM1039 1040V1120H1041V1040H1039ZM1040 1119H960V1121H1040V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M1120 1120V1121H1121V1120H1120ZM1119 1040V1120H1121V1040H1119ZM1120 1119H1040V1121H1120V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 1120V1121H1201V1120H1200ZM1199 1040V1120H1201V1040H1199ZM1200 1119H1120V1121H1200V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M1280 1120V1121H1281V1120H1280ZM1279 1040V1120H1281V1040H1279ZM1280 1119H1200V1121H1280V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 1120V1121H1361V1120H1360ZM1359 1040V1120H1361V1040H1359ZM1360 1119H1280V1121H1360V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 1120V1121H1441V1120H1440ZM1439 1040V1120H1441V1040H1439ZM1440 1119H1360V1121H1440V1119Z"
              fill="#D0D5DD"
            />
            <path
              d="M80 1200V1201H81V1200H80ZM79 1120V1200H81V1120H79ZM80 1199H0V1201H80V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M160 1200V1201H161V1200H160ZM159 1120V1200H161V1120H159ZM160 1199H80V1201H160V1199Z"
              fill="#D0D5DD"
            />
            <path d="M160 1120H240V1200H160V1120Z" fill="#F2F4F7" />
            <path
              d="M240 1200V1201H241V1200H240ZM239 1120V1200H241V1120H239ZM240 1199H160V1201H240V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M320 1200V1201H321V1200H320ZM319 1120V1200H321V1120H319ZM320 1199H240V1201H320V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M400 1200V1201H401V1200H400ZM399 1120V1200H401V1120H399ZM400 1199H320V1201H400V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M480 1200V1201H481V1200H480ZM479 1120V1200H481V1120H479ZM480 1199H400V1201H480V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M560 1200V1201H561V1200H560ZM559 1120V1200H561V1120H559ZM560 1199H480V1201H560V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M640 1200V1201H641V1200H640ZM639 1120V1200H641V1120H639ZM640 1199H560V1201H640V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M720 1200V1201H721V1200H720ZM719 1120V1200H721V1120H719ZM720 1199H640V1201H720V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M800 1200V1201H801V1200H800ZM799 1120V1200H801V1120H799ZM800 1199H720V1201H800V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M880 1200V1201H881V1200H880ZM879 1120V1200H881V1120H879ZM880 1199H800V1201H880V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M960 1200V1201H961V1200H960ZM959 1120V1200H961V1120H959ZM960 1199H880V1201H960V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M1040 1200V1201H1041V1200H1040ZM1039 1120V1200H1041V1120H1039ZM1040 1199H960V1201H1040V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M1120 1200V1201H1121V1200H1120ZM1119 1120V1200H1121V1120H1119ZM1120 1199H1040V1201H1120V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M1200 1200V1201H1201V1200H1200ZM1199 1120V1200H1201V1120H1199ZM1200 1199H1120V1201H1200V1199Z"
              fill="#D0D5DD"
            />
            <path d="M1200 1120H1280V1200H1200V1120Z" fill="#F2F4F7" />
            <path
              d="M1280 1200V1201H1281V1200H1280ZM1279 1120V1200H1281V1120H1279ZM1280 1199H1200V1201H1280V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M1360 1200V1201H1361V1200H1360ZM1359 1120V1200H1361V1120H1359ZM1360 1199H1280V1201H1360V1199Z"
              fill="#D0D5DD"
            />
            <path
              d="M1440 1200V1201H1441V1200H1440ZM1439 1120V1200H1441V1120H1439ZM1440 1199H1360V1201H1440V1199Z"
              fill="#D0D5DD"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_173_20898"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 -0.000129104) rotate(90) scale(1083 565.257)"
            >
              <stop />
              <stop offset="0.953125" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div> */}

      <div className='  w-full h-full flex flex-col gap-6'>
        <div className='relative h-fit border gap-0 flex-none border-gray-300 rounded-3xl flex-col  p-0  grid   shadow-sm  max-w-screen-sm mx-auto w-full bg-white'>
          <div className='px-8 pt-8 pb-3 border-b border-gray-200 flex flex-col'>
            <div className='w-full mb-4 flex justify-between items-center'>
              <UserCheck01 className='w-8 h-8 text-gray-700 stroke-[1.5]' />
            </div>
            <div className='text-xl mb-1'>
              <div>Identity Verification with Veriff</div>
            </div>
            <div className='text-gray-600 flex text-sm flex-col items-start gap-4 '>
              Veriff empowers users by verifying their identities and enabling
              access to permissioned goods and services on Polity Network.
            </div>
          </div>

          <div className='px-6 pt-5  flex flex-col  gap-4 text-gray-600 text-sm mb-6'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='w-full gap-3 flex flex-col '>
                <div>
                  <div className='inline-block rounded-lg text-gray-800 font-medium bg-gray-100 border border-gray-200 text-xs px-1.5 py-0.5 leading-2  items-center'>
                    Step 1
                  </div>
                </div>
                <div className='w-full rounded-xl flex items-center justify-center bg-[#E8E9F4]'>
                  <Image
                    src='/veriff/01.png'
                    alt='Veriff ID'
                    className='w-full h-full object-contain rounded-xl border border-[#E8E9F4]'
                    width={200}
                    height={200}
                    quality={100}
                    priority
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    Take photo of your ID
                  </h3>
                  <p className='text-xs text-gray-700'>
                    Real-time feedback & auto-detection of document type.
                  </p>
                </div>
              </div>
              <div className='w-full gap-3 flex flex-col '>
                <div>
                  <div className='inline-block rounded-lg text-gray-800 font-medium bg-gray-100 border border-gray-200 text-xs px-1.5 py-0.5 leading-2  items-center'>
                    Step 2
                  </div>
                </div>
                <div className='w-full rounded-xl flex items-center justify-center bg-[#E8E9F4]'>
                  <Image
                    src='/veriff/02.png'
                    alt='Veriff ID'
                    className='w-full h-full object-contain rounded-xl border border-[#E8E9F4]'
                    width={200}
                    height={200}
                    quality={100}
                    priority
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    Take a selfie
                  </h3>
                  <p className='text-xs text-gray-700'>
                    Assisted capture ensures clarity and liveness without
                    hassle.
                  </p>
                </div>
              </div>{' '}
              <div className='w-full gap-3 flex flex-col '>
                <div>
                  <div className='inline-block rounded-lg text-gray-800 font-medium bg-gray-100 border border-gray-200 text-xs px-1.5 py-0.5 leading-2  items-center'>
                    Step 3
                  </div>
                </div>
                <div className='w-full rounded-xl flex items-center justify-center bg-[#E8E9F4]'>
                  <Image
                    src='/veriff/03.png'
                    alt='Veriff ID'
                    className='w-full h-full object-contain rounded-xl border border-[#E8E9F4]'
                    width={200}
                    height={200}
                    quality={100}
                    priority
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    Get a decision
                  </h3>
                  <p className='text-xs text-gray-700'>
                    AI-powered verification provides results in seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-3 max-w-screen-sm mx-auto w-full justify-between'>
          <Link href='/onboarding/superapp/avatar'>
            <Button variant='outline'>Skip for Now</Button>
          </Link>
          <Button onClick={() => setShowVeriffPopup(true)}>
            Continue to Veriff
          </Button>
        </div>
      </div>

      {/* Veriff iframe popup modal */}
      {showVeriffPopup && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='relative w-full h-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-xl'>
            {/* Close button */}
            <button
              onClick={() => setShowVeriffPopup(false)}
              className='absolute top-4 right-4 z-10 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors'
            >
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            {/* iframe */}
            <iframe
              src='https://demo.veriff.me/'
              className='w-full h-full rounded-lg'
              title='Veriff Demo'
              allow='camera; microphone; geolocation'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;

import Image from "next/image";
import type { Config } from "tailwindcss";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart } from "@tremor/react";

import { Progress } from "@/components/ui/progress";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { AssetTable } from "@/components/assettable";
import { NetworkTable } from "@/components/networktable";

const data = [
  { date: "Jan 23", Value: 232, Sponsored: 0 },
  { date: "Feb 23", Value: 241, Sponsored: 0 },
  { date: "Mar 23", Value: 291, Sponsored: 0 },
  { date: "Apr 23", Value: 101, Sponsored: 0 },
  { date: "May 23", Value: 318, Sponsored: 0 },
  { date: "Jun 23", Value: 205, Sponsored: 0 },
  { date: "Jul 23", Value: 372, Sponsored: 0 },
  { date: "Aug 23", Value: 341, Sponsored: 0 },
  { date: "Sep 23", Value: 387, Sponsored: 120 },
  { date: "Oct 23", Value: 220, Sponsored: 0 },
  { date: "Nov 23", Value: 372, Sponsored: 0 },
  { date: "Dec 23", Value: 321, Sponsored: 0 },
];

const summary = [
  {
    name: "Value",
    value: 3273,
  },
  {
    name: "Sponsored",
    value: 120,
  },
];

type FinancialData = {
  assets: number[];
  debts: number[];
  claimable: number[];
};

function calculateNetWorth(data: FinancialData): {
  totalAssets: number;
  totalDebts: number;
  totalClaimable: number;
  netWorth: number;
} {
  const totalAssets = data.assets.reduce((acc, curr) => acc + curr, 0);
  const totalDebts = data.debts.reduce((acc, curr) => acc + curr, 0);
  const totalClaimable = data.claimable.reduce((acc, curr) => acc + curr, 0);
  const netWorth = totalAssets - totalDebts + totalClaimable;
  return {
    totalAssets,
    totalDebts,
    totalClaimable,
    netWorth,
  };
}

export default function BitcoinOne() {
  const financialData = {
    assets: [173346, 29338, 1923.12],
    debts: [8947, 9843.33],
    claimable: [982.12, 73.24],
  };

  const { totalAssets, totalDebts, totalClaimable, netWorth } =
    calculateNetWorth(financialData);

  // Currency formatter
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Format financial data as currency
  const formattedNetWorth = currencyFormatter.format(netWorth);
  const formattedTotalAssets = currencyFormatter.format(totalAssets);
  const formattedTotalDebts = currencyFormatter.format(totalDebts);
  const formattedTotalClaimable = currencyFormatter.format(totalClaimable);

  return (
    <main className="w-full h-full">
      <div className="mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll">
        <Tabs defaultValue="wallets">
          <div className="w-full sticky top-0 backdrop-blur-md	z-10  border-b border-gray-100 bg-white/60">
            <div className=" max-w-screen-xl mx-auto p-6">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1 text-xs text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="block transition hover:text-gray-700"
                    >
                      {" "}
                      Avatar Name{" "}
                    </a>
                  </li>

                  <li className="rtl:rotate-180">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83337 18.3334L14.1667 1.66675"
                        stroke="#D0D5DD"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </li>

                  <li>
                    <a href="#" className="block transition text-gray-800">
                      {" "}
                      Marketplace{" "}
                    </a>
                  </li>
                </ol>
              </nav>

              <div className="w-full  mt-4 flex items-center justify-between">
                {" "}
                <div>
                  <h1 className="text-3xl font-medium leading-tight">
                    Marketplace
                  </h1>{" "}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">Billing</Button>
                  <Button variant="outline">My Subscriptions</Button>
                  <Button variant="outline">My Products</Button>
                </div>
              </div>

              <div className="w-full  mt-4 flex items-center pb-1">
                {" "}
                <TabsList className="bg-gray-50">
                  <TabsTrigger value="wallets">Wallets</TabsTrigger>
                  <TabsTrigger value="xchange">X-change</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="risk">Risk</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="dApps">dApps</TabsTrigger>
                </TabsList>
              </div>
            </div>
          </div>
          <TabsContent value="wallets">
            <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
              <div className="relative w-full flex flex-col pb-40">
                <div className="py-4 relative flex w-full flex-row	">
                  <h2 className="text-2xl font-medium">Wallets</h2>
                </div>
                <div className="w-full grid grid-cols-3  gap-3 justify-start ">
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div className="w-full justify-between flex items-center">
                      <div className="flex flex-row gap-2.5 items-center">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_117_3513)">
                            <g clip-path="url(#clip1_117_3513)">
                              <rect
                                width="40"
                                height="40"
                                rx="11"
                                fill="white"
                              />
                              <g opacity="0.5">
                                <g opacity="0.1">
                                  <path
                                    d="M14.4216 20.6832H17.5703C17.89 20.6832 18.1492 20.9424 18.1492 21.2621V24.4108C16.0903 24.4108 14.4216 22.7418 14.4216 20.6832ZM14.4216 16.4472H17.5703C17.89 16.4472 18.1495 16.7064 18.1495 17.0261V19.5959C18.1494 19.7494 18.0884 19.8967 17.9797 20.0052C17.8711 20.1138 17.7239 20.1748 17.5703 20.1748H14.4216V16.4472Z"
                                    fill="#685879"
                                  />
                                </g>
                                <g opacity="0.1">
                                  <path
                                    d="M30.7962 37.5775H27.0684V41.3054H30.7962V37.5775ZM27.0684 49.7779C29.1272 49.7779 30.7962 48.1089 30.7962 46.0504H27.0684V49.7779Z"
                                    fill="#685879"
                                  />
                                </g>
                                <path
                                  opacity="0.05"
                                  d="M60.4122 32.8833H57.2635C57.11 32.8833 56.9627 32.8223 56.8542 32.7138C56.7456 32.6052 56.6846 32.4579 56.6846 32.3044V29.1555C58.7435 29.1555 60.4122 30.8244 60.4122 32.8833ZM64.643 33.3917H60.9154V37.1196H64.643V33.3917ZM-23.71 32.8833H-20.5613C-20.4077 32.8833 -20.2605 32.8223 -20.1519 32.7138C-20.0434 32.6052 -19.9824 32.4579 -19.9824 32.3044V29.1555C-22.041 29.1555 -23.71 30.8244 -23.71 32.8833Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M-7.2861 32.8809H-10.4348C-10.5883 32.8809 -10.7356 32.8199 -10.8441 32.7114C-10.9527 32.6028 -11.0137 32.4556 -11.0137 32.302V29.1531C-8.9548 29.1531 -7.2861 30.8221 -7.2861 32.8809ZM85.6093 32.8809H82.4603C82.3068 32.8809 82.1595 32.8199 82.051 32.7114C81.9424 32.6028 81.8814 32.4556 81.8814 32.302V29.1531C83.9403 29.1531 85.6093 30.8221 85.6093 32.8809ZM-2.55216 32.8809V29.1531H1.17569C1.17569 31.2119 -0.493289 32.8809 -2.55216 32.8809ZM9.63748 29.1531H5.90991V32.8809H9.63748V29.1531ZM18.1493 8.06616H14.4217V11.794H18.1493V8.06616Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M9.63676 33.3917H5.90918V37.1196H9.63676V33.3917ZM13.2886 32.8833H10.1399C10.1399 30.8244 11.8089 29.1555 13.8675 29.1555V32.3044C13.8675 32.4579 13.8065 32.6052 13.698 32.7138C13.5894 32.8223 13.4421 32.8833 13.2886 32.8833Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M13.8682 37.1162C11.8093 37.1162 10.1406 35.4472 10.1406 33.3883H13.2893C13.609 33.3883 13.8682 33.6475 13.8682 33.9672V37.1162ZM300.099 37.1162C298.038 37.1162 296.372 35.4472 296.372 33.3883H299.519C299.84 33.3883 300.099 33.6475 300.099 33.9672V37.1162ZM14.3714 33.3883C16.4302 33.3883 18.0992 35.0573 18.0992 37.1162H14.9503C14.7967 37.1162 14.6495 37.0552 14.5409 36.9466C14.4324 36.8381 14.3714 36.6908 14.3714 36.5373V33.3883ZM26.5649 29.152H22.837V32.8799H26.5649V29.152ZM43.4882 29.152H39.7606V32.8799H43.4882V29.152ZM35.0264 33.3883H31.2988V37.1162H35.0264V33.3883Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M30.7962 33.3904H27.0684V37.1182H30.7962V33.3904Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M22.8369 37.1182C24.8958 37.1182 26.5648 35.4493 26.5648 33.3904H23.4161C23.2625 33.3904 23.1153 33.4514 23.0066 33.5599C22.898 33.6685 22.837 33.8157 22.8369 33.9693V37.1182Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M22.3104 32.8833H18.6055V29.1555H22.3333V32.8606C22.3332 32.8667 22.3308 32.8724 22.3265 32.8767C22.3222 32.8809 22.3164 32.8833 22.3104 32.8833ZM22.333 33.3917C20.2742 33.3917 18.6055 35.0607 18.6055 37.1196H21.7542C21.9077 37.1196 22.0549 37.0586 22.1635 36.95C22.2721 36.8415 22.333 36.6942 22.333 36.5407V33.3917Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M-19.4571 24.9209H-15.7522V28.502C-15.7522 28.5409 -15.7676 28.5782 -15.795 28.6057C-15.8225 28.6332 -15.8597 28.6487 -15.8986 28.6487H-19.4797V24.9435C-19.4797 24.9311 -19.4695 24.9209 -19.4571 24.9209ZM22.3338 24.9209H18.6062V28.6485H22.3338V24.9209ZM13.7283 16.3549H10.0004V20.0825H13.7283V16.3549Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M1.17561 24.9218H-2.55225V28.6494H1.17561V24.9218ZM1.17561 20.6855H-2.55225V24.4131H1.17561V20.6855Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M39.2574 24.9239H35.5298V28.6515C37.5887 28.6515 39.2574 26.9825 39.2574 24.9239Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M35.0255 24.9243H31.298V28.6519H35.0255V24.9243ZM30.8594 16.3583H27.1316V20.0859H30.8594V16.3583Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M18.0999 24.9243H14.3721V28.6519H18.0999V24.9243ZM26.7159 16.3583H22.9883V20.0859H26.7159V16.3583Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M-15.2446 20.6869H-11.5397C-11.527 20.6869 -11.5168 20.6971 -11.5168 20.7096V24.3918C-11.5168 24.3979 -11.5192 24.4037 -11.5235 24.408C-11.5278 24.4123 -11.5336 24.4148 -11.5397 24.4148H-15.2446V20.6869ZM5.4068 20.1782H1.67895V16.4506C3.73782 16.4506 5.4068 18.1196 5.4068 20.1782ZM98.3019 20.1782H94.5741V16.4506C96.6329 16.4506 98.3019 18.1196 98.3019 20.1782Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M5.40705 20.6855H1.6792V24.4131H5.40705V20.6855Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M5.40705 24.9239H1.6792V28.6515H5.40705V24.9239Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M9.63676 16.4506H5.90918V20.1782H9.63676V16.4506Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M5.90576 3.74573H9.63361V7.45092C9.63354 7.45695 9.63109 7.46272 9.6268 7.46696C9.62251 7.4712 9.61671 7.47358 9.61068 7.47358H5.90576V3.74573Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M13.8638 7.98189H10.7152C10.5616 7.98189 10.4144 8.04288 10.3058 8.15144C10.1973 8.26001 10.1363 8.40725 10.1363 8.56078V11.1306C10.1363 11.4503 10.3955 11.7097 10.7152 11.7097H13.8638V7.98189ZM10.136 3.74561V6.89429C10.136 7.21399 10.3952 7.47346 10.7149 7.47346H13.8636C13.8636 5.41459 12.1946 3.74561 10.136 3.74561Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M1.17219 3.74573H-2.55566V7.47358H1.17219V3.74573ZM1.17219 12.2186H-2.55566V15.9464H1.17219V12.2186ZM14.3676 3.74573V7.47358H18.0952C18.0952 5.41471 16.4262 3.74573 14.3676 3.74573ZM30.788 7.98201H27.0605V11.7099H30.788V7.98201ZM30.788 3.74573C28.7292 3.74573 27.0605 5.41471 27.0605 7.47358H30.788V3.74573ZM35.0188 3.74573H31.2912V7.47358H34.4399C34.5934 7.47351 34.7407 7.41245 34.8492 7.30385C34.9578 7.19524 35.0188 7.04797 35.0188 6.89441V3.74573Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M22.8284 7.47318H26.5562V3.74561H22.8284V7.47318Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M18.5976 7.47318H22.3255V3.74561H18.5976V7.47318ZM18.5976 11.7097H22.3255V7.98216H18.5976V11.7097ZM18.5664 15.9391H22.2943V12.2115H18.5664V15.9391Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M5.40164 15.948C3.34443 15.948 1.67407 14.2776 1.67407 12.2204H5.40164V15.948ZM1.67407 11.7117H5.40164V7.98413H1.67407V11.7117Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M-7.29122 12.2186H-11.0188V15.9465H-7.29122V12.2186ZM69.37 -26.5222H73.0978V-30.2501H69.37V-26.5222Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M18.6021 -26.5224C20.6609 -26.5224 22.3296 -28.1913 22.3296 -30.2499H19.1809C19.0274 -30.2499 18.8802 -30.1889 18.7716 -30.0804C18.663 -29.9718 18.6021 -29.8246 18.6021 -29.671V-26.5224ZM51.9502 3.23745H48.245C48.239 3.23745 48.2332 3.23506 48.229 3.23081C48.2247 3.22656 48.2223 3.22079 48.2223 3.21479V-0.490406H51.9499V3.23745H51.9502Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M-7.2861 3.23835H-10.4348C-10.5883 3.23835 -10.7356 3.17736 -10.8441 3.0688C-10.9527 2.96023 -11.0137 2.81299 -11.0137 2.65946V-0.489502C-8.9548 -0.489502 -7.2861 1.17976 -7.2861 3.23835ZM-2.55216 3.23835V-0.489502H1.17569C1.17569 1.56937 -0.49329 3.23835 -2.55216 3.23835Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M9.63676 -0.489502H5.90918V3.23835H9.63676V-0.489502Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M13.2893 3.23863H10.1406C10.1406 1.17976 11.8096 -0.489226 13.8682 -0.489226V2.65973C13.8682 2.81327 13.8072 2.96051 13.6986 3.06907C13.59 3.17763 13.4428 3.23863 13.2893 3.23863ZM14.3713 -0.489502H18.0989V3.23835H14.394C14.3879 3.23835 14.3821 3.23593 14.3778 3.23163C14.3735 3.22733 14.3711 3.2215 14.3711 3.21542L14.3713 -0.489502ZM10.0008 12.2127H13.7283V15.9403H10.0234C10.0173 15.9403 10.0115 15.9379 10.0072 15.9336C10.0029 15.9293 10.0005 15.9234 10.0005 15.9174V12.2124L10.0008 12.2127Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M26.5648 -0.489502H22.8369V3.23835H26.5648V-0.489502ZM39.7605 3.23863H43.4881V0.089944C43.4881 0.0138994 43.4732 -0.0614061 43.4441 -0.131673C43.415 -0.201939 43.3724 -0.265789 43.3186 -0.319573C43.2648 -0.373358 43.201 -0.416024 43.1308 -0.445134C43.0605 -0.474243 42.9852 -0.489226 42.9092 -0.489226H39.7605V3.23863Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M39.2569 3.23754V-0.490313H35.5294C35.5294 1.56856 37.1984 3.23754 39.2569 3.23754ZM39.2569 -9.58267V-13.3102H35.5294C35.5294 -11.2514 37.1984 -9.58267 39.2569 -9.58267ZM31.2983 3.23754H35.0259V-0.490313C32.967 -0.490313 31.2983 1.17895 31.2983 3.23754ZM47.1398 -4.83768H43.9909C43.9909 -2.7788 45.6601 -1.10982 47.7187 -1.10982V-4.25878C47.7187 -4.3348 47.7038 -4.41008 47.6747 -4.48032C47.6456 -4.55055 47.6029 -4.61437 47.5492 -4.66812C47.4954 -4.72188 47.4316 -4.76452 47.3614 -4.79361C47.2911 -4.8227 47.2159 -4.83768 47.1398 -4.83768Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M35.5212 7.98071H38.6699C38.9896 7.98071 39.2488 8.24018 39.2488 8.55961V11.1294C39.2488 11.283 39.1878 11.4302 39.0793 11.5388C38.9707 11.6474 38.8235 11.7085 38.6699 11.7086H35.5212V7.98071Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M43.4805 7.47386H40.3316C40.178 7.47378 40.0308 7.41273 39.9222 7.30412C39.8137 7.19552 39.7527 7.04824 39.7527 6.89468V3.74601C41.8116 3.74601 43.4805 5.41499 43.4805 7.47386ZM47.7116 7.98201H43.9837V11.7099H47.7116V7.98201ZM47.7116 3.74573H43.9837V7.47358H47.7116V3.74573ZM51.9423 7.98201H48.2147V11.7099H51.9423V7.98201Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M43.9822 15.9461V12.2183H47.7101C47.7101 14.2772 46.0411 15.9461 43.9822 15.9461ZM27.1316 15.939V12.2114H30.8594C30.8594 14.2703 29.1902 15.939 27.1316 15.939ZM56.1719 7.47358H52.444V3.74573C54.5029 3.74573 56.1719 5.41471 56.1719 7.47358Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M39.2574 32.8799V29.152H35.5298C35.5298 31.2112 37.1988 32.8799 39.2574 32.8799Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M1.17219 7.98071H-2.55566V11.7086H1.17219V7.98071Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M13.8682 37.5805V40.7291C13.8682 40.8052 13.8532 40.8804 13.8241 40.9507C13.795 41.0209 13.7524 41.0847 13.6986 41.1385C13.6449 41.1922 13.5811 41.2349 13.5108 41.264C13.4406 41.2931 13.3653 41.308 13.2893 41.308H10.1406C10.1406 39.2492 11.8096 37.5805 13.8682 37.5805ZM18.1492 12.2122V15.3609C18.1492 15.5144 18.0883 15.6617 17.9797 15.7702C17.8711 15.8788 17.7239 15.9398 17.5704 15.9398H14.4217C14.4217 13.8809 16.0907 12.2122 18.1492 12.2122Z"
                                  fill="#685879"
                                />
                              </g>
                            </g>
                            <path
                              d="M8.08353 11.4371L8.16705 14.9019L11.2019 14.9864C13.1787 15.0427 14.3481 14.9582 14.5986 14.7329C14.8771 14.4793 14.9884 13.6061 14.9884 11.2117V8.00045H11.5081H8L8.08353 11.4371Z"
                              fill="#140820"
                            />
                            <path
                              d="M16.6589 11.1834C16.6589 13.2961 16.7703 14.4792 16.993 14.7046C17.4385 15.1553 22.5615 15.1553 23.007 14.7046C23.2297 14.4792 23.3411 13.2961 23.3411 11.1834V8.00032H20H16.6589V11.1834Z"
                              fill="#140820"
                            />
                            <path
                              d="M25.0115 11.2117C25.0115 13.6061 25.1228 14.4793 25.4013 14.7329C25.6518 14.9582 26.8212 15.0427 28.798 14.9864L31.8328 14.9019L31.9164 11.4371L31.9999 8.00045H28.4918H25.0115V11.2117Z"
                              fill="#140820"
                            />
                            <path
                              d="M8.08353 19.8871L8.16705 23.3519L11.0348 23.4364C15.072 23.5491 14.9884 23.6336 14.9884 19.6899V16.4504H11.5081H8L8.08353 19.8871Z"
                              fill="#140820"
                            />
                            <path
                              d="M16.993 16.7877C16.5476 17.2385 16.5476 22.7033 16.993 23.154C17.4385 23.6047 22.5615 23.6047 23.007 23.154C23.4525 22.7033 23.4525 17.2385 23.007 16.7877C22.5615 16.337 17.4385 16.337 16.993 16.7877Z"
                              fill="#140820"
                            />
                            <path
                              d="M25.0115 19.6611C25.0115 22.0555 25.1228 22.9288 25.4013 23.1823C25.6518 23.4076 26.8212 23.4921 28.798 23.4358L31.8328 23.3513L31.9164 19.8865L31.9999 16.4499H28.4918H25.0115V19.6611Z"
                              fill="#140820"
                            />
                            <path
                              d="M8.30615 25.7465C8.30615 28.3944 10.9512 31.2394 13.9581 31.8028L14.9883 32V28.7887C14.9883 26.676 14.8769 25.4648 14.6542 25.2394C14.4315 25.0141 13.2899 24.9014 11.3131 24.9014H8.30615V25.7465Z"
                              fill="#140820"
                            />
                            <path
                              d="M16.993 25.2414C16.7703 25.4667 16.6589 26.6498 16.6589 28.7625V31.9456H20H23.3411V28.7625C23.3411 26.6498 23.2297 25.4667 23.007 25.2414C22.5615 24.7907 17.4385 24.7907 16.993 25.2414Z"
                              fill="#140820"
                            />
                            <path
                              d="M25.3456 25.2394C25.1228 25.4648 25.0115 26.6197 25.0115 28.7887V32L26.0416 31.8028C29.0486 31.2394 31.3874 28.7605 31.7493 25.7465L31.8328 25.0422L28.7702 24.9577C26.6263 24.9014 25.5962 24.9859 25.3456 25.2394Z"
                              fill="#140820"
                            />
                          </g>
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="10.5"
                            stroke="#D0D5DD"
                          />
                          <defs>
                            <clipPath id="clip0_117_3513">
                              <rect
                                width="40"
                                height="40"
                                rx="11"
                                fill="white"
                              />
                            </clipPath>
                            <clipPath id="clip1_117_3513">
                              <rect
                                width="40"
                                height="40"
                                rx="11"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>

                        <h3 className="text-2xl font-medium">DFNS</h3>
                      </div>
                      <div className="bg-teal-100 border border-teal-200 py-0.5 px-2  flex gap-1 items-center rounded-md text-sm text-teal-800 font-medium">
                        Active wallet
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="xchange">
            <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
              <div className="relative w-full flex flex-col pb-40">
                <div className="py-4 relative flex w-full flex-row	">
                  <h2 className="text-2xl font-medium">X-change</h2>
                </div>
                <div className="w-full grid grid-cols-3  gap-3 justify-start ">
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div className="w-full justify-between flex items-center">
                      <div className="flex flex-row gap-2.5 items-center">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_117_3513)">
                            <g clip-path="url(#clip1_117_3513)">
                              <rect
                                width="40"
                                height="40"
                                rx="11"
                                fill="white"
                              />
                              <g opacity="0.5">
                                <g opacity="0.1">
                                  <path
                                    d="M14.4216 20.6832H17.5703C17.89 20.6832 18.1492 20.9424 18.1492 21.2621V24.4108C16.0903 24.4108 14.4216 22.7418 14.4216 20.6832ZM14.4216 16.4472H17.5703C17.89 16.4472 18.1495 16.7064 18.1495 17.0261V19.5959C18.1494 19.7494 18.0884 19.8967 17.9797 20.0052C17.8711 20.1138 17.7239 20.1748 17.5703 20.1748H14.4216V16.4472Z"
                                    fill="#685879"
                                  />
                                </g>
                                <g opacity="0.1">
                                  <path
                                    d="M30.7962 37.5775H27.0684V41.3054H30.7962V37.5775ZM27.0684 49.7779C29.1272 49.7779 30.7962 48.1089 30.7962 46.0504H27.0684V49.7779Z"
                                    fill="#685879"
                                  />
                                </g>
                                <path
                                  opacity="0.05"
                                  d="M60.4122 32.8833H57.2635C57.11 32.8833 56.9627 32.8223 56.8542 32.7138C56.7456 32.6052 56.6846 32.4579 56.6846 32.3044V29.1555C58.7435 29.1555 60.4122 30.8244 60.4122 32.8833ZM64.643 33.3917H60.9154V37.1196H64.643V33.3917ZM-23.71 32.8833H-20.5613C-20.4077 32.8833 -20.2605 32.8223 -20.1519 32.7138C-20.0434 32.6052 -19.9824 32.4579 -19.9824 32.3044V29.1555C-22.041 29.1555 -23.71 30.8244 -23.71 32.8833Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M-7.2861 32.8809H-10.4348C-10.5883 32.8809 -10.7356 32.8199 -10.8441 32.7114C-10.9527 32.6028 -11.0137 32.4556 -11.0137 32.302V29.1531C-8.9548 29.1531 -7.2861 30.8221 -7.2861 32.8809ZM85.6093 32.8809H82.4603C82.3068 32.8809 82.1595 32.8199 82.051 32.7114C81.9424 32.6028 81.8814 32.4556 81.8814 32.302V29.1531C83.9403 29.1531 85.6093 30.8221 85.6093 32.8809ZM-2.55216 32.8809V29.1531H1.17569C1.17569 31.2119 -0.493289 32.8809 -2.55216 32.8809ZM9.63748 29.1531H5.90991V32.8809H9.63748V29.1531ZM18.1493 8.06616H14.4217V11.794H18.1493V8.06616Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M9.63676 33.3917H5.90918V37.1196H9.63676V33.3917ZM13.2886 32.8833H10.1399C10.1399 30.8244 11.8089 29.1555 13.8675 29.1555V32.3044C13.8675 32.4579 13.8065 32.6052 13.698 32.7138C13.5894 32.8223 13.4421 32.8833 13.2886 32.8833Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M13.8682 37.1162C11.8093 37.1162 10.1406 35.4472 10.1406 33.3883H13.2893C13.609 33.3883 13.8682 33.6475 13.8682 33.9672V37.1162ZM300.099 37.1162C298.038 37.1162 296.372 35.4472 296.372 33.3883H299.519C299.84 33.3883 300.099 33.6475 300.099 33.9672V37.1162ZM14.3714 33.3883C16.4302 33.3883 18.0992 35.0573 18.0992 37.1162H14.9503C14.7967 37.1162 14.6495 37.0552 14.5409 36.9466C14.4324 36.8381 14.3714 36.6908 14.3714 36.5373V33.3883ZM26.5649 29.152H22.837V32.8799H26.5649V29.152ZM43.4882 29.152H39.7606V32.8799H43.4882V29.152ZM35.0264 33.3883H31.2988V37.1162H35.0264V33.3883Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M30.7962 33.3904H27.0684V37.1182H30.7962V33.3904Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M22.8369 37.1182C24.8958 37.1182 26.5648 35.4493 26.5648 33.3904H23.4161C23.2625 33.3904 23.1153 33.4514 23.0066 33.5599C22.898 33.6685 22.837 33.8157 22.8369 33.9693V37.1182Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M22.3104 32.8833H18.6055V29.1555H22.3333V32.8606C22.3332 32.8667 22.3308 32.8724 22.3265 32.8767C22.3222 32.8809 22.3164 32.8833 22.3104 32.8833ZM22.333 33.3917C20.2742 33.3917 18.6055 35.0607 18.6055 37.1196H21.7542C21.9077 37.1196 22.0549 37.0586 22.1635 36.95C22.2721 36.8415 22.333 36.6942 22.333 36.5407V33.3917Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M-19.4571 24.9209H-15.7522V28.502C-15.7522 28.5409 -15.7676 28.5782 -15.795 28.6057C-15.8225 28.6332 -15.8597 28.6487 -15.8986 28.6487H-19.4797V24.9435C-19.4797 24.9311 -19.4695 24.9209 -19.4571 24.9209ZM22.3338 24.9209H18.6062V28.6485H22.3338V24.9209ZM13.7283 16.3549H10.0004V20.0825H13.7283V16.3549Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M1.17561 24.9218H-2.55225V28.6494H1.17561V24.9218ZM1.17561 20.6855H-2.55225V24.4131H1.17561V20.6855Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M39.2574 24.9239H35.5298V28.6515C37.5887 28.6515 39.2574 26.9825 39.2574 24.9239Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M35.0255 24.9243H31.298V28.6519H35.0255V24.9243ZM30.8594 16.3583H27.1316V20.0859H30.8594V16.3583Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M18.0999 24.9243H14.3721V28.6519H18.0999V24.9243ZM26.7159 16.3583H22.9883V20.0859H26.7159V16.3583Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M-15.2446 20.6869H-11.5397C-11.527 20.6869 -11.5168 20.6971 -11.5168 20.7096V24.3918C-11.5168 24.3979 -11.5192 24.4037 -11.5235 24.408C-11.5278 24.4123 -11.5336 24.4148 -11.5397 24.4148H-15.2446V20.6869ZM5.4068 20.1782H1.67895V16.4506C3.73782 16.4506 5.4068 18.1196 5.4068 20.1782ZM98.3019 20.1782H94.5741V16.4506C96.6329 16.4506 98.3019 18.1196 98.3019 20.1782Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M5.40705 20.6855H1.6792V24.4131H5.40705V20.6855Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M5.40705 24.9239H1.6792V28.6515H5.40705V24.9239Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M9.63676 16.4506H5.90918V20.1782H9.63676V16.4506Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M5.90576 3.74573H9.63361V7.45092C9.63354 7.45695 9.63109 7.46272 9.6268 7.46696C9.62251 7.4712 9.61671 7.47358 9.61068 7.47358H5.90576V3.74573Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M13.8638 7.98189H10.7152C10.5616 7.98189 10.4144 8.04288 10.3058 8.15144C10.1973 8.26001 10.1363 8.40725 10.1363 8.56078V11.1306C10.1363 11.4503 10.3955 11.7097 10.7152 11.7097H13.8638V7.98189ZM10.136 3.74561V6.89429C10.136 7.21399 10.3952 7.47346 10.7149 7.47346H13.8636C13.8636 5.41459 12.1946 3.74561 10.136 3.74561Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M1.17219 3.74573H-2.55566V7.47358H1.17219V3.74573ZM1.17219 12.2186H-2.55566V15.9464H1.17219V12.2186ZM14.3676 3.74573V7.47358H18.0952C18.0952 5.41471 16.4262 3.74573 14.3676 3.74573ZM30.788 7.98201H27.0605V11.7099H30.788V7.98201ZM30.788 3.74573C28.7292 3.74573 27.0605 5.41471 27.0605 7.47358H30.788V3.74573ZM35.0188 3.74573H31.2912V7.47358H34.4399C34.5934 7.47351 34.7407 7.41245 34.8492 7.30385C34.9578 7.19524 35.0188 7.04797 35.0188 6.89441V3.74573Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M22.8284 7.47318H26.5562V3.74561H22.8284V7.47318Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M18.5976 7.47318H22.3255V3.74561H18.5976V7.47318ZM18.5976 11.7097H22.3255V7.98216H18.5976V11.7097ZM18.5664 15.9391H22.2943V12.2115H18.5664V15.9391Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M5.40164 15.948C3.34443 15.948 1.67407 14.2776 1.67407 12.2204H5.40164V15.948ZM1.67407 11.7117H5.40164V7.98413H1.67407V11.7117Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M-7.29122 12.2186H-11.0188V15.9465H-7.29122V12.2186ZM69.37 -26.5222H73.0978V-30.2501H69.37V-26.5222Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M18.6021 -26.5224C20.6609 -26.5224 22.3296 -28.1913 22.3296 -30.2499H19.1809C19.0274 -30.2499 18.8802 -30.1889 18.7716 -30.0804C18.663 -29.9718 18.6021 -29.8246 18.6021 -29.671V-26.5224ZM51.9502 3.23745H48.245C48.239 3.23745 48.2332 3.23506 48.229 3.23081C48.2247 3.22656 48.2223 3.22079 48.2223 3.21479V-0.490406H51.9499V3.23745H51.9502Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M-7.2861 3.23835H-10.4348C-10.5883 3.23835 -10.7356 3.17736 -10.8441 3.0688C-10.9527 2.96023 -11.0137 2.81299 -11.0137 2.65946V-0.489502C-8.9548 -0.489502 -7.2861 1.17976 -7.2861 3.23835ZM-2.55216 3.23835V-0.489502H1.17569C1.17569 1.56937 -0.49329 3.23835 -2.55216 3.23835Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M9.63676 -0.489502H5.90918V3.23835H9.63676V-0.489502Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M13.2893 3.23863H10.1406C10.1406 1.17976 11.8096 -0.489226 13.8682 -0.489226V2.65973C13.8682 2.81327 13.8072 2.96051 13.6986 3.06907C13.59 3.17763 13.4428 3.23863 13.2893 3.23863ZM14.3713 -0.489502H18.0989V3.23835H14.394C14.3879 3.23835 14.3821 3.23593 14.3778 3.23163C14.3735 3.22733 14.3711 3.2215 14.3711 3.21542L14.3713 -0.489502ZM10.0008 12.2127H13.7283V15.9403H10.0234C10.0173 15.9403 10.0115 15.9379 10.0072 15.9336C10.0029 15.9293 10.0005 15.9234 10.0005 15.9174V12.2124L10.0008 12.2127Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M26.5648 -0.489502H22.8369V3.23835H26.5648V-0.489502ZM39.7605 3.23863H43.4881V0.089944C43.4881 0.0138994 43.4732 -0.0614061 43.4441 -0.131673C43.415 -0.201939 43.3724 -0.265789 43.3186 -0.319573C43.2648 -0.373358 43.201 -0.416024 43.1308 -0.445134C43.0605 -0.474243 42.9852 -0.489226 42.9092 -0.489226H39.7605V3.23863Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M39.2569 3.23754V-0.490313H35.5294C35.5294 1.56856 37.1984 3.23754 39.2569 3.23754ZM39.2569 -9.58267V-13.3102H35.5294C35.5294 -11.2514 37.1984 -9.58267 39.2569 -9.58267ZM31.2983 3.23754H35.0259V-0.490313C32.967 -0.490313 31.2983 1.17895 31.2983 3.23754ZM47.1398 -4.83768H43.9909C43.9909 -2.7788 45.6601 -1.10982 47.7187 -1.10982V-4.25878C47.7187 -4.3348 47.7038 -4.41008 47.6747 -4.48032C47.6456 -4.55055 47.6029 -4.61437 47.5492 -4.66812C47.4954 -4.72188 47.4316 -4.76452 47.3614 -4.79361C47.2911 -4.8227 47.2159 -4.83768 47.1398 -4.83768Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M35.5212 7.98071H38.6699C38.9896 7.98071 39.2488 8.24018 39.2488 8.55961V11.1294C39.2488 11.283 39.1878 11.4302 39.0793 11.5388C38.9707 11.6474 38.8235 11.7085 38.6699 11.7086H35.5212V7.98071Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M43.4805 7.47386H40.3316C40.178 7.47378 40.0308 7.41273 39.9222 7.30412C39.8137 7.19552 39.7527 7.04824 39.7527 6.89468V3.74601C41.8116 3.74601 43.4805 5.41499 43.4805 7.47386ZM47.7116 7.98201H43.9837V11.7099H47.7116V7.98201ZM47.7116 3.74573H43.9837V7.47358H47.7116V3.74573ZM51.9423 7.98201H48.2147V11.7099H51.9423V7.98201Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M43.9822 15.9461V12.2183H47.7101C47.7101 14.2772 46.0411 15.9461 43.9822 15.9461ZM27.1316 15.939V12.2114H30.8594C30.8594 14.2703 29.1902 15.939 27.1316 15.939ZM56.1719 7.47358H52.444V3.74573C54.5029 3.74573 56.1719 5.41471 56.1719 7.47358Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.2"
                                  d="M39.2574 32.8799V29.152H35.5298C35.5298 31.2112 37.1988 32.8799 39.2574 32.8799Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.05"
                                  d="M1.17219 7.98071H-2.55566V11.7086H1.17219V7.98071Z"
                                  fill="#685879"
                                />
                                <path
                                  opacity="0.1"
                                  d="M13.8682 37.5805V40.7291C13.8682 40.8052 13.8532 40.8804 13.8241 40.9507C13.795 41.0209 13.7524 41.0847 13.6986 41.1385C13.6449 41.1922 13.5811 41.2349 13.5108 41.264C13.4406 41.2931 13.3653 41.308 13.2893 41.308H10.1406C10.1406 39.2492 11.8096 37.5805 13.8682 37.5805ZM18.1492 12.2122V15.3609C18.1492 15.5144 18.0883 15.6617 17.9797 15.7702C17.8711 15.8788 17.7239 15.9398 17.5704 15.9398H14.4217C14.4217 13.8809 16.0907 12.2122 18.1492 12.2122Z"
                                  fill="#685879"
                                />
                              </g>
                            </g>
                            <path
                              d="M8.08353 11.4371L8.16705 14.9019L11.2019 14.9864C13.1787 15.0427 14.3481 14.9582 14.5986 14.7329C14.8771 14.4793 14.9884 13.6061 14.9884 11.2117V8.00045H11.5081H8L8.08353 11.4371Z"
                              fill="#140820"
                            />
                            <path
                              d="M16.6589 11.1834C16.6589 13.2961 16.7703 14.4792 16.993 14.7046C17.4385 15.1553 22.5615 15.1553 23.007 14.7046C23.2297 14.4792 23.3411 13.2961 23.3411 11.1834V8.00032H20H16.6589V11.1834Z"
                              fill="#140820"
                            />
                            <path
                              d="M25.0115 11.2117C25.0115 13.6061 25.1228 14.4793 25.4013 14.7329C25.6518 14.9582 26.8212 15.0427 28.798 14.9864L31.8328 14.9019L31.9164 11.4371L31.9999 8.00045H28.4918H25.0115V11.2117Z"
                              fill="#140820"
                            />
                            <path
                              d="M8.08353 19.8871L8.16705 23.3519L11.0348 23.4364C15.072 23.5491 14.9884 23.6336 14.9884 19.6899V16.4504H11.5081H8L8.08353 19.8871Z"
                              fill="#140820"
                            />
                            <path
                              d="M16.993 16.7877C16.5476 17.2385 16.5476 22.7033 16.993 23.154C17.4385 23.6047 22.5615 23.6047 23.007 23.154C23.4525 22.7033 23.4525 17.2385 23.007 16.7877C22.5615 16.337 17.4385 16.337 16.993 16.7877Z"
                              fill="#140820"
                            />
                            <path
                              d="M25.0115 19.6611C25.0115 22.0555 25.1228 22.9288 25.4013 23.1823C25.6518 23.4076 26.8212 23.4921 28.798 23.4358L31.8328 23.3513L31.9164 19.8865L31.9999 16.4499H28.4918H25.0115V19.6611Z"
                              fill="#140820"
                            />
                            <path
                              d="M8.30615 25.7465C8.30615 28.3944 10.9512 31.2394 13.9581 31.8028L14.9883 32V28.7887C14.9883 26.676 14.8769 25.4648 14.6542 25.2394C14.4315 25.0141 13.2899 24.9014 11.3131 24.9014H8.30615V25.7465Z"
                              fill="#140820"
                            />
                            <path
                              d="M16.993 25.2414C16.7703 25.4667 16.6589 26.6498 16.6589 28.7625V31.9456H20H23.3411V28.7625C23.3411 26.6498 23.2297 25.4667 23.007 25.2414C22.5615 24.7907 17.4385 24.7907 16.993 25.2414Z"
                              fill="#140820"
                            />
                            <path
                              d="M25.3456 25.2394C25.1228 25.4648 25.0115 26.6197 25.0115 28.7887V32L26.0416 31.8028C29.0486 31.2394 31.3874 28.7605 31.7493 25.7465L31.8328 25.0422L28.7702 24.9577C26.6263 24.9014 25.5962 24.9859 25.3456 25.2394Z"
                              fill="#140820"
                            />
                          </g>
                          <rect
                            x="0.5"
                            y="0.5"
                            width="39"
                            height="39"
                            rx="10.5"
                            stroke="#D0D5DD"
                          />
                          <defs>
                            <clipPath id="clip0_117_3513">
                              <rect
                                width="40"
                                height="40"
                                rx="11"
                                fill="white"
                              />
                            </clipPath>
                            <clipPath id="clip1_117_3513">
                              <rect
                                width="40"
                                height="40"
                                rx="11"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>

                        <h3 className="text-2xl font-medium">DFNS</h3>
                      </div>
                      <div className="bg-teal-100 border border-teal-200 py-0.5 px-2  flex gap-1 items-center rounded-md text-sm text-teal-800 font-medium">
                        Active wallet
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

import Link from "next/link";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import PolityLogo from "@/public/polity.svg";
import ProfileLogo from "@/public/profile.svg";
import ProfileLogo2 from "@/public/profile2.svg";

import {
  ArrowRight,
  Wallet03,
  Users03,
  Link02,
  UserCheck01,
  ImageUserLeft,
  Key02,
} from "@untitled-ui/icons-react";

import * as React from "react";

const Onboarding = () => {
  return (
    <main className="w-full h-full flex bg-gray-50 flex-col items-center pt-6 ">
      <Image src={PolityLogo} alt="Polity Logo" />
      <div className="flex flex-col gap-10 items-center py-8">
        <h1 className="text-2xl ">Select your account</h1>
        <div className="flex  gap-6 w-[984px] bg-white  rounded-[40px] p-8">
          <div className="flex h-full w-full flex-col py-8 px-[42px] gap-3">
            <div
              className="w-16 h-16 border border-gray-200 flex items-center justify-center rounded-[10px]"
              style={{
                background: "linear-gradient(180deg, #FFF 0%, #F2F4F7 100%)",
              }}
            >
              <Image src={ProfileLogo2} alt="Profile Logo" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase bg-gradient-to-r from-[#1F756B] to-[#2ED3B7] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(81deg, #1F756B 7.01%, #2ED3B7 93%)",
                }}
              >
                Start Now
              </p>
              <h2 className="text-xl font-medium mt-1 mb-2 ">Basic Account</h2>
              <p className="text-md text-gray-700">
                Limited access to functionalities
              </p>
            </div>
            <p className="text-2xl ">FREE</p>
            <Link href="/">
              <Button variant="outline">
                Start Now <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <ul className="list-disc list-inside text-sm space-y-2.5  text-gray-700">
              <li className="flex items-center gap-3 py-0.5 text-gray-700 text-sm font-medium">
                <Wallet03 className="w-5 h-5" /> Wallet setup
              </li>
              <li className="flex items-center gap-3 py-0.5 line-through text-gray-700 text-sm font-medium">
                <Users03 className="w-5 h-5" /> Avatar Identity
              </li>{" "}
              <li className="flex items-center gap-3 py-0.5 line-through text-gray-700 text-sm font-medium">
                <Link02 className="w-5 h-5" /> Connect with NSP
              </li>{" "}
              <li className="flex items-center gap-3 py-0.5 line-through text-gray-700 text-sm font-medium">
                <UserCheck01 className="w-5 h-5" /> Identity Verification
              </li>{" "}
              <li className="flex items-center gap-3 py-0.5 line-through text-gray-700 text-sm font-medium">
                <ImageUserLeft className="w-5 h-5" /> Avatar Virtual Node
              </li>{" "}
            </ul>
          </div>
          <div
            className="flex h-full w-full flex-col gap-3 border border-solid py-8 px-[42px] rounded-[24px]"
            style={{
              background:
                "linear-gradient(to bottom, #F6FEFC, #F0FDF9) padding-box, linear-gradient(0deg, #1F756B, #1F756B) border-box",
              borderRadius: "24px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "transparent",
            }}
          >
            <div
              className="w-16 h-16 border border-gray-200 flex items-center justify-center rounded-[10px]"
              style={{
                background: "linear-gradient(180deg, #FFF 0%, #E8F5F4 100%)",
              }}
            >
              <Image src={ProfileLogo} alt="Profile Logo" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase  bg-gradient-to-r from-[#1F756B] to-[#2ED3B7] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(81deg, #1F756B 7.01%, #2ED3B7 93%)",
                }}
              >
                FULL ACCESS
              </p>
              <h2 className="text-xl font-medium mt-1 mb-2 ">
                Avatar Virtual Node
              </h2>
              <p className="text-md text-gray-700">
                Full access access to functionalities
              </p>
            </div>
            <p className="text-2xl ">19.99 USDT</p>
            <Link href="/onboarding/verification/">
              <Button>
                <Key02 className="w-5 h-5" />
                Get full access
              </Button>
            </Link>
            <ul className="list-disc list-inside text-sm space-y-2.5  text-primary-700">
              <li className="flex items-center gap-3 py-0.5 text-primary-700 text-sm font-medium">
                <Wallet03 className="w-5 h-5" /> Wallet setup
              </li>
              <li className="flex items-center gap-3 py-0.5 text-primary-700 text-sm font-medium">
                <Users03 className="w-5 h-5" /> Avatar Identity
              </li>{" "}
              <li className="flex items-center gap-3  text-primary-700 text-sm font-medium">
                <Link02 className="w-5 h-5" /> Connect with NSP
              </li>{" "}
              <li className="flex items-center gap-3 py-0.5 text-primary-700 text-sm font-medium">
                <UserCheck01 className="w-5 h-5" /> Identity Verification
              </li>{" "}
              <li className="flex items-center gap-3 py-0.5 text-primary-700 text-sm font-medium">
                <ImageUserLeft className="w-5 h-5" /> Avatar Virtual Node
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Onboarding;

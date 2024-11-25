"use client";

import Image from "next/image";
import type { Config } from "tailwindcss";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart } from "@tremor/react";

import { Progress } from "@/components/ui/progress";

import { useState } from "react";

import { Subscribe } from "@/components/subscribe";
import { SubscribeProvider } from "@/components/ui/subscribecontext";

import {
  RadioGroup,
  RadioGroupItem,
  RadioOption,
} from "@/components/ui/largeradio";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Lightning01,
  PackageSearch,
} from "@untitled-ui/icons-react";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { BuyReport } from "@/components/buyreport";
import { AgreementTable } from "@/components/agreementtable";
import { BidTable } from "@/components/bid/bidtable";
import { bids } from "@/components/bid/biddata";
import RebidModal from "@/components/bid/rebidmodal"; // Import RebidModal
import { Notification } from "@/components/ui/notification"; // Import Notification component

export default function Bids() {
  const [selectedOption, setSelectedOption] = useState<string>("1");
  const [notification, setNotification] = useState<{
    title: string;
    description: string;
    status: "success" | "error" | "warning" | "info"; // Updated to include all status types
  } | null>(null);

  const addNotification = (
    title: string,
    description: string,
    status: "success" | "error" | "warning" | "info"
  ) => {
    // Updated to include all status types
    setNotification({ title, description, status });
  };

  const handleCloseNotification = () => {
    setNotification(null); // Hide the notification
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Added state for modal visibility

  const handleConfirmBid = (newBid: number) => {
    // Update the bid table logic here
    // For example, you might want to update the bids state or call an API

    setNotification({
      title: "Bid Updated",
      description: `Your bid for ${newBid} Lukka Reports has been recorded. Track your auction status in My Bids.`,
      status: "success",
    });
    setIsModalOpen(false); // Close the modal
  };

  return (
    <main className="w-full h-full">
      <div className="mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll">
        {/* Render the Notification */}
        {notification && (
          <div className="fixed bottom-4 left-4 max-w-sm z-50 rounded-[20px]">
            <Notification
              title={notification.title}
              description="Your bid for 10 Lukka Reports has been recorded. Track your auction status in My Bids."
              status="success"
              className="shadow-2xl"
              onClose={handleCloseNotification} // Close notification
            />
          </div>
        )}

        <div className="w-full sticky top-0 backdrop-blur-md	z-10  border-b border-gray-100 bg-white/60">
          <div className=" max-w-screen-xl mx-auto p-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 text-xs text-gray-600">
                <li>
                  <a href="#" className="block transition hover:text-gray-700">
                    {" "}
                    Marketplace{" "}
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
                    My Bids{" "}
                  </a>
                </li>
              </ol>
            </nav>

            <div className="w-full  mt-4 flex items-center justify-between">
              {" "}
              <div className="flex items-center gap-2">
                {/* <Link href='/marketplace'>
                  <Button size='icon' variant='ghost' className='text-gray-500'>
                    <ArrowLeft className='w-4 h-4' />
                  </Button>
                </Link> */}
                <h1 className="text-3xl font-medium leading-tight">My Bids</h1>{" "}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
            <div className="relative w-full flex flex-col pb-40">
              <BidTable bids={bids} addNotification={addNotification} />
              <RebidModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                timeLeft="10:00"
                currentBid={100} // Example current bid
                highestBid={90} // Example highest bid
                onConfirm={handleConfirmBid} // Pass the confirm function
                addNotification={addNotification}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

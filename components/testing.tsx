"use client";

import * as React from "react";

import { useState } from "react";

import type { Config } from "tailwindcss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { useContext } from "react";
import { useTime } from "./ui/timecontext";

const TimeTest = () => {
  const { selectedTime, setSelectedTime } = useTime();

  return (
    <div className="flex bg-gray-50">
      Time: {selectedTime}
      <Button onClick={() => setSelectedTime(selectedTime + "a")}>
        Set Time
      </Button>
    </div>
  );
};

export { TimeTest };

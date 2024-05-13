"use client";

import { AreaChart, Card, Title } from "@tremor/react";

import React, { createContext, useState, ReactNode } from "react";

import { TimeProvider } from "@/components/ui/timecontext";

import { useTime } from "@/components/ui/timecontext";

const pastweek = [
  { date: "Monday", Value: 232281 },
  { date: "Tuesday", Value: 241341 },
  { date: "Wednesday", Value: 296421 },
  { date: "Thursday", Value: 103461 },
  { date: "Friday", Value: 316538 },
  { date: "Saturday", Value: 204565 },
  { date: "Sunday", Value: 379752 },
];

const pastday = [
  { date: "00:00", Value: 232281 },
  { date: "01:00", Value: 241341 },
  { date: "02:00", Value: 296421 },
  { date: "03:00", Value: 103461 },
  { date: "04:00", Value: 316538 },
  { date: "05:00", Value: 204565 },
  { date: "06:00", Value: 379752 },
  { date: "07:00", Value: 343641 },
  { date: "08:00", Value: 383247 },
  { date: "09:00", Value: 267820 },
  { date: "10:00", Value: 354372 },
  { date: "11:00", Value: 323254 },
  { date: "12:00", Value: 232281 },
  { date: "13:00", Value: 241341 },
  { date: "14:00", Value: 296421 },
  { date: "15:00", Value: 103461 },
  { date: "16:00", Value: 316538 },
  { date: "17:00", Value: 204565 },
  { date: "18:00", Value: 379752 },
  { date: "19:00", Value: 343641 },
  { date: "20:00", Value: 383247 },
  { date: "21:00", Value: 267820 },
  { date: "22:00", Value: 354372 },
  { date: "23:00", Value: 323254 },
];

interface TooltipProps {
  active?: boolean;
  payload?: any[]; // You can further detail this type based on the structure of your payload
}

export function AreaChartUsageExampleWithCustomTooltip() {
  const valueFormatter = function (number: number) {
    if (number >= 1000) {
      const thousands = number / 1000;
      const formattedThousands =
        thousands % 1 === 0 ? thousands.toString() : thousands.toFixed(1);
      return "$" + formattedThousands + "k";
    }
    return "$" + number.toString();
  };

  const { selectedTime, setSelectedTime } = useTime();

  React.useEffect(() => {
    console.log("Selected Time in ChartTooltip:", selectedTime);
  }, [selectedTime]);

  console.log("Selected time (helloooo):", selectedTime);

  const customTooltip = (props: TooltipProps) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-40 rounded-md bg-gray-900 p-3  shadow-tremor-dropdown">
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1">
            <div className=" mx-auto gap-1 items-center justify-center flex flex-col">
              <p className="font-medium text-md text-white">
                {category.value.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="text-gray-300 text-xs">June 10,2023, 16:50:32</p>
              {/* <p className="text-gray-300 text-xs">
                Selected Time: {selectedTime}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <AreaChart
        data={selectedTime === "pastday" ? pastday : pastweek}
        index="date"
        categories={["Value"]}
        colors={["teal", "blue"]}
        showLegend={false}
        showYAxis={true}
        showGradient={true}
        startEndOnly={true}
        className="mt-6 h-72"
        customTooltip={customTooltip}
        valueFormatter={valueFormatter}
      />
    </>
  );
}

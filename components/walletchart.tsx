"use client";

import { AreaChart, Card, Title } from "@tremor/react";

import React, { createContext, useState, ReactNode } from "react";

import { TimeProvider } from "@/components/ui/timecontext";

import { useTime } from "@/components/ui/timecontext";

import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from "@/components/data";

interface TooltipProps {
  active?: boolean;
  payload?: any[]; // You can further detail this type based on the structure of your payload
}

export function AreaChartWallet() {
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

  function generateHourlyData(
    endValue: number,
    startValue: number = 1550234.874
  ) {
    const pastday = [];

    const now = new Date();

    // Initialize the first hour with a fixed start value
    const firstHourDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    firstHourDate.setMinutes(0, 0, 0); // Round down to the nearest hour
    const firstFormattedHour = firstHourDate.toISOString().substring(11, 16);
    pastday.push({
      date: firstFormattedHour,
      Value: startValue,
    });

    // Start the loop from the 1st hour since 0th hour is already initialized
    for (let hour = 1; hour <= now.getHours(); hour++) {
      // Introduce more variety in the values
      const randomFactor = Math.random() > 0.5 ? 1 : -1;
      const value = (Math.random() * 20000 - 10000) * randomFactor + startValue; // Use startValue instead of wealth.netWorth
      const formattedHour = hour.toString().padStart(2, "0") + ":00";

      pastday.push({
        date: formattedHour,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });
    }

    // Set the last value to the specified end value
    if (pastday.length > 0) {
      pastday[pastday.length - 1].Value = endValue;
    }

    return pastday;
  }

  function generateWeeklyData(startValue: number, endValue: number) {
    const pastweek = [];

    const now = new Date();
    // Get the date 7 days ago
    const pastDate = new Date();
    pastDate.setDate(now.getDate() - 6);

    let previousValue = startValue;

    for (let i = 0; i < 7; i++) {
      // Introduce more variety in the values
      const randomFactor = Math.random() > 0.5 ? 1 : -1;
      const valueChange = (Math.random() * 80000 - 40000) * randomFactor;
      const value = previousValue + valueChange; // Adjust value based on previous value
      const formattedDate = pastDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
      });

      pastweek.push({
        date: formattedDate,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });

      previousValue = value; // Update previous value for the next iteration
      pastDate.setDate(pastDate.getDate() + 1); // Move to the next day
    }

    // Set the last value to the specified end value
    if (pastweek.length > 0) {
      pastweek[pastweek.length - 1].Value = endValue;
    }

    return pastweek;
  }

  function generateMonthlyData(startValue: number, endValue: number) {
    const pastmonth = [];
    const now = new Date();
    const pastDate = new Date();
    pastDate.setDate(now.getDate() - 29);

    let previousValue = startValue;

    for (let i = 0; i < 30; i++) {
      // Introduce more variety in the values to simulate a realistic stock chart
      const randomFactor = Math.random() > 0.5 ? 1 : -1;
      const volatility = Math.random() * 0.05; // 5% volatility
      const valueChange = previousValue * volatility * randomFactor;
      const value = previousValue + valueChange;

      const formattedDate = pastDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
      });

      pastmonth.push({
        date: formattedDate,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });

      previousValue = value; // Update previous value for the next iteration
      pastDate.setDate(pastDate.getDate() + 1); // Move to the next day
    }

    if (pastmonth.length > 0) {
      pastmonth[pastmonth.length - 1].Value = endValue;
    }

    return pastmonth;
  }

  function generate90DaysData(startValue: number, endValue: number) {
    const threemonths = [];
    const now = new Date();
    const pastDate = new Date();
    pastDate.setDate(now.getDate() - 89);

    let previousValue = startValue;

    for (let i = 0; i < 90; i++) {
      // Introduce more variety in the values to simulate realistic peaks and troughs
      const randomFactor = Math.random() > 0.5 ? 1 : -1;
      const volatility = Math.random() * 0.03; // 10% volatility for more pronounced peaks and troughs
      const valueChange = previousValue * volatility * randomFactor;
      const value = previousValue + valueChange;

      const formattedDate = pastDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
      });

      threemonths.push({
        date: formattedDate,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });

      previousValue = value; // Update previous value for the next iteration
      pastDate.setDate(pastDate.getDate() + 1); // Move to the next day
    }

    if (threemonths.length > 0) {
      threemonths[threemonths.length - 1].Value = endValue;
    }

    return threemonths;
  }

  function generateYearToDateData(startValue: number, endValue: number) {
    const yeartodate = [];
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    let previousValue = startValue;

    while (startOfYear <= now) {
      // Introduce more variety in the values to simulate realistic peaks and troughs
      const randomFactor = Math.random() > 0.5 ? 1 : -1;
      const volatility = Math.random() * 0.03; // 10% volatility for more pronounced peaks and troughs
      const valueChange = previousValue * volatility * randomFactor;
      const value = previousValue + valueChange;

      const formattedDate = startOfYear.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
      });

      yeartodate.push({
        date: formattedDate,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });

      previousValue = value; // Update previous value for the next iteration
      startOfYear.setDate(startOfYear.getDate() + 1); // Move to the next day
    }

    if (yeartodate.length > 0) {
      yeartodate[yeartodate.length - 1].Value = endValue;
    }

    return yeartodate;
  }

  function generatePastYearData(startValue: number, endValue: number) {
    const pastyear = [];
    const now = new Date();
    const pastDate = new Date();
    pastDate.setFullYear(now.getFullYear() - 1);

    let previousValue = startValue;

    while (pastDate <= now) {
      // Introduce more variety in the values to simulate realistic peaks and troughs
      const randomFactor = Math.random() > 0.5 ? 1 : -1;
      const volatility = Math.random() * 0.03; // 10% volatility for more pronounced peaks and troughs
      const valueChange = previousValue * volatility * randomFactor;
      const value = previousValue + valueChange;

      const formattedDate = pastDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
      });

      pastyear.push({
        date: formattedDate,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });

      previousValue = value; // Update previous value for the next iteration
      pastDate.setDate(pastDate.getDate() + 1); // Move to the next day
    }

    if (pastyear.length > 0) {
      pastyear[pastyear.length - 1].Value = endValue;
    }

    return pastyear;
  }

  function generateAllTimeData(startValue: number, endValue: number) {
    const alltime = [];
    const now = new Date();
    const startDate = new Date("2022-11-01");

    let previousValue = startValue;

    while (startDate <= now) {
      // Introduce more variety in the values to simulate realistic peaks and troughs
      const randomFactor = Math.random() > 0.5 ? 1 : -1;
      const volatility = Math.random() * 0.03; // 10% volatility for more pronounced peaks and troughs
      const valueChange = previousValue * volatility * randomFactor;
      let value = previousValue + valueChange;

      // Ensure value does not go below zero
      if (value < 0) {
        value = 0;
      }

      const formattedDate = startDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      alltime.push({
        date: formattedDate,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });

      previousValue = value; // Update previous value for the next iteration
      startDate.setDate(startDate.getDate() + 1); // Move to the next day
    }

    if (alltime.length > 0) {
      alltime[alltime.length - 1].Value = endValue;
    }

    return alltime;
  }

  const pastday = generateHourlyData(wealth.netWorth);
  const pastweek = generateWeeklyData(1452234.87 * 0.95, 1452234.87); // Assuming a 5% increase over the week
  const pastmonth = generateMonthlyData(1452234.87 * 0.9, 1452234.87); // Assuming a 10% increase over the month
  const threemonths = generate90DaysData(1452234.87 * 0.85, 1452234.87); // Assuming a 15% increase over three months
  const yeartodate = generateYearToDateData(1452234.87 * 0.8, 1452234.87); // Assuming a 20% increase year-to-date
  const pastyear = generatePastYearData(1452234.87 * 0.75, 1452234.87); // Assuming a 25% increase over the past year
  const alltime = generateAllTimeData(1452234.87 * 0.7, 1452234.87); // Assuming a 30% increase all time

  function calculateReturns(data: any[]) {
    if (data.length < 2) {
      return { percentageReturn: 0, dollarReturn: 0 };
    }

    const firstValue = data[0].Value;
    const lastValue = data[data.length - 1].Value;

    const dollarReturn = lastValue - firstValue;
    const percentageReturn = (dollarReturn / firstValue) * 100;

    return { percentageReturn, dollarReturn };
  }

  // Calculate returns
  const { percentageReturn, dollarReturn } = calculateReturns(pastday);

  const { setPercentageReturn } = useTime();

  // // Effect to log changes
  // React.useEffect(() => {
  //   setPercentageReturn(percentageReturn); // Ensure it's treated as a number
  //   console.log("Percentage Return:", percentageReturn);
  // }, [percentageReturn]);

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
              <p className="text-gray-300 text-xs">{category.payload.date}</p>
              {/* <p className="text-gray-300 text-xs">
                Selected Time: {selectedTime}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate fetching data
        await new Promise((resolve) => setTimeout(resolve, 10));
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load data:", error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className=" w-full h-72 flex flex-col gap-4  text-lg font-medium text-gray-700 justify-center items-center">
        <div className="w-12 h-12  relative flex justify-center items-center">
          <DotLottiePlayer
            src="https://lottie.host/d300e245-fabd-4d2d-8ddd-81e1266a372f/inxUh6Y5hU.lottie"
            autoplay
            loop
            className="w-full h-full"
          >
            {/* <Controls /> */}
          </DotLottiePlayer>
        </div>
        Loading data...
      </div>
    );
  }
  return (
    <>
      <AreaChart
        data={
          selectedTime === "pastday"
            ? pastday
            : selectedTime === "pastweek"
            ? pastweek
            : selectedTime === "pastmonth"
            ? pastmonth
            : selectedTime === "threemonths"
            ? threemonths
            : selectedTime === "yeartodate"
            ? yeartodate
            : selectedTime === "pastyear"
            ? pastyear
            : selectedTime === "alltime"
            ? alltime
            : pastday
        }
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

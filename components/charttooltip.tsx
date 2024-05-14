"use client";

import { AreaChart, Card, Title } from "@tremor/react";

import React, { createContext, useState, ReactNode } from "react";

import { TimeProvider } from "@/components/ui/timecontext";

import { useTime } from "@/components/ui/timecontext";

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

  function generateHourlyData(
    endValue: number,
    startValue: number = 183456.74
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
      const value = Math.random() * 10000 + 180000; // Values between 180,000 and 190,000
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

  function generateWeeklyData(endValue: number) {
    const pastweek = [];

    const now = new Date();
    // Get the date 7 days ago
    const pastDate = new Date();
    pastDate.setDate(now.getDate() - 6);

    for (let i = 0; i < 7; i++) {
      const value = Math.random() * 40000 + 180000; // Values between 180,000 and 190,000
      const formattedDate = pastDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
      });

      pastweek.push({
        date: formattedDate,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });

      pastDate.setDate(pastDate.getDate() + 1); // Move to the next day
    }

    // Set the last value to the specified end value
    if (pastweek.length > 0) {
      pastweek[pastweek.length - 1].Value = endValue;
    }

    return pastweek;
  }

  function generateMonthlyData(endValue: number) {
    const pastmonth = [];
    const now = new Date();
    const pastDate = new Date();
    pastDate.setDate(now.getDate() - 29);

    for (let i = 0; i < 30; i++) {
      const value = Math.random() * 70000 + 180000; // Values between 180,000 and 190,000
      const formattedDate = pastDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
      });

      pastmonth.push({
        date: formattedDate,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });

      pastDate.setDate(pastDate.getDate() + 1); // Move to the next day
    }

    if (pastmonth.length > 0) {
      pastmonth[pastmonth.length - 1].Value = endValue;
    }

    return pastmonth;
  }

  function generate90DaysData(endValue: number) {
    const threemonths = [];
    const now = new Date();
    const pastDate = new Date();
    pastDate.setDate(now.getDate() - 89);

    for (let i = 0; i < 90; i++) {
      const value = Math.random() * 70000 + 180000; // Values between 180,000 and 190,000
      const formattedDate = pastDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
      });

      threemonths.push({
        date: formattedDate,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });

      pastDate.setDate(pastDate.getDate() + 1); // Move to the next day
    }

    if (threemonths.length > 0) {
      threemonths[threemonths.length - 1].Value = endValue;
    }

    return threemonths;
  }

  function generateYearToDateData(endValue: number) {
    const yeartodate = [];
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    while (startOfYear <= now) {
      const value = Math.random() * 10000 + 180000; // Values between 180,000 and 190,000
      const formattedDate = startOfYear.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
      });

      yeartodate.push({
        date: formattedDate,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });

      startOfYear.setDate(startOfYear.getDate() + 1); // Move to the next day
    }

    if (yeartodate.length > 0) {
      yeartodate[yeartodate.length - 1].Value = endValue;
    }

    return yeartodate;
  }

  function generatePastYearData(endValue: number) {
    const pastyear = [];
    const now = new Date();
    const pastDate = new Date();
    pastDate.setFullYear(now.getFullYear() - 1);

    while (pastDate <= now) {
      const value = Math.random() * 10000 + 180000; // Values between 180,000 and 190,000
      const formattedDate = pastDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
      });

      pastyear.push({
        date: formattedDate,
        Value: Math.round((value + Number.EPSILON) * 100) / 100,
      });

      pastDate.setDate(pastDate.getDate() + 1); // Move to the next day
    }

    if (pastyear.length > 0) {
      pastyear[pastyear.length - 1].Value = endValue;
    }

    return pastyear;
  }

  function generateAllTimeDataWithTrend(endValue: number) {
    const alltime = [];
    const now = new Date();
    const startDate = new Date("2022-11-01");

    const totalDays = Math.floor(
      (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const increment = (endValue - 140000) / totalDays;

    for (let i = 0; startDate <= now; i++) {
      const baseValue = 100000 + increment * i;
      const randomFluctuation = Math.random() * 30000; // Fluctuate around the base value
      const value = baseValue + randomFluctuation;

      const formattedDate = startDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      alltime.push({
        date: formattedDate,
        Value: Math.round(value * 100) / 100,
      });

      startDate.setDate(startDate.getDate() + 1); // Move to the next day
    }

    if (alltime.length > 0) {
      alltime[alltime.length - 1].Value = endValue;
    }

    return alltime;
  }

  const pastday = generateHourlyData(186872.15);
  const pastweek = generateWeeklyData(186872.15);
  const pastmonth = generateMonthlyData(186872.15);
  const threemonths = generate90DaysData(186872.15);
  const yeartodate = generateYearToDateData(186872.15);
  const pastyear = generatePastYearData(186872.15);
  const alltime = generateAllTimeDataWithTrend(186872.15);

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

"use client";

import { AreaChart, Card, Title } from "@tremor/react";

const chartdata = [
  { date: "Jan 23", Value: 232281, Sponsored: 0 },
  { date: "Feb 23", Value: 241341, Sponsored: 0 },
  { date: "Mar 23", Value: 296421, Sponsored: 0 },
  { date: "Apr 23", Value: 103461, Sponsored: 0 },
  { date: "May 23", Value: 316538, Sponsored: 0 },
  { date: "Jun 23", Value: 204565, Sponsored: 0 },
  { date: "Jul 23", Value: 379752, Sponsored: 0 },
  { date: "Aug 23", Value: 343641, Sponsored: 0 },
  { date: "Sep 23", Value: 383247, Sponsored: 120 },
  { date: "Oct 23", Value: 267820, Sponsored: 0 },
  { date: "Nov 23", Value: 354372, Sponsored: 0 },
  { date: "Dec 23", Value: 323254, Sponsored: 0 },
  { date: "Jan 23", Value: 232281, Sponsored: 0 },
  { date: "Feb 23", Value: 241341, Sponsored: 0 },
  { date: "Mar 23", Value: 296421, Sponsored: 0 },
  { date: "Apr 23", Value: 103461, Sponsored: 0 },
  { date: "May 23", Value: 316538, Sponsored: 0 },
  { date: "Jun 23", Value: 204565, Sponsored: 0 },
  { date: "Jul 23", Value: 379752, Sponsored: 0 },
  { date: "Aug 23", Value: 343641, Sponsored: 0 },
  { date: "Sep 23", Value: 383247, Sponsored: 120 },
  { date: "Oct 23", Value: 267820, Sponsored: 0 },
  { date: "Nov 23", Value: 354372, Sponsored: 0 },
  { date: "Dec 23", Value: 323254, Sponsored: 0 },
];

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

  const customTooltip = (props) => {
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
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <AreaChart
        data={chartdata}
        index="date"
        categories={["Value"]}
        colors={["teal", "blue"]}
        showLegend={false}
        showYAxis={true}
        showGradient={true}
        startEndOnly={false}
        className="mt-6 h-72"
        customTooltip={customTooltip}
        valueFormatter={valueFormatter}
      />
    </>
  );
}

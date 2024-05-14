import React, { createContext, useContext, useState, ReactNode } from "react";

interface TimeContextType {
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  percentageReturn: number;
  setPercentageReturn: (percentageReturn: number) => void;
}

const TimeContext = createContext<TimeContextType | undefined>(undefined);

export const TimeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [percentageReturn, setPercentageReturn] = useState(0);

  const handleSetSelectedTime = (time: string) => {
    console.log("Updating time from", selectedTime, "to", time);
    setSelectedTime(time);
  };

  return (
    <TimeContext.Provider
      value={{
        selectedTime,
        setSelectedTime: handleSetSelectedTime,
        percentageReturn,
        setPercentageReturn,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export const useTime = () => {
  const context = useContext(TimeContext);
  if (context === undefined) {
    throw new Error("useTime must be used within a TimeProvider");
  }
  console.log("Time context is now available for use with data:", context);
  return context;
};

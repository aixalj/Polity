import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none flex h-11 w-full rounded-xl border border-[#D0D5DD] shadow-sm bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 " +
          "focus:border-[#1F756B] focus-visible:ring-0 focus-visible:ring-offset-0 " +
          "focus-visible:shadow-[0px_0px_0px_1px_#1F756B,0px_2px_8px_0px_rgba(21,183,158,0.24),0px_4px_12px_0px_rgba(0,0,0,0.12),0px_0px_0px_3px_#DCF0EE] ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

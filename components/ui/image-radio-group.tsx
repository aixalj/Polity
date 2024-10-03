"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const ImageRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
ImageRadioGroup.displayName = "ImageRadioGroup";

const ImageRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    icon: React.ReactNode;
    borderColorClass?: string;
  }
>(({ className, icon, style, borderColorClass, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "relative w-20 h-20 rounded-[20px] focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={style}
      {...props}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div
          className={cn(
            "flex items-center w-16 h-16 justify-center rounded-[15px] border bg-white/60",
            borderColorClass || "border-gray-300"
          )}
        >
          {icon}
        </div>
      </div>
      <div className="absolute -top-[5px] -right-[5px] w-5 h-5 rounded-full border border-white bg-white flex items-center justify-center">
        <div className="w-4 h-4 rounded-full border border-gray-300 bg-white flex items-center justify-center">
          <RadioGroupPrimitive.Indicator>
            <Circle className="h-2.5 w-2.5 fill-primary-500 text-primary-500" />
          </RadioGroupPrimitive.Indicator>
        </div>
      </div>
    </RadioGroupPrimitive.Item>
  );
});
ImageRadioGroupItem.displayName = "ImageRadioGroupItem";

export { ImageRadioGroup, ImageRadioGroupItem };

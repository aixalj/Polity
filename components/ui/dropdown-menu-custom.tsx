"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenuCustom = DropdownMenuPrimitive.Root;

const DropdownMenuCustomTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuCustomGroup = DropdownMenuPrimitive.Group;

const DropdownMenuCustomPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuCustomSub = DropdownMenuPrimitive.Sub;

const DropdownMenuCustomRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuCustomContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuCustomContent.displayName =
  DropdownMenuPrimitive.Content.displayName;

const DropdownMenuCustomLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuCustomLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuCustomCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    onSelect={(event) => {
      event.preventDefault();
    }}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCustomCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuCustomSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-gray-100", className)}
    {...props}
  />
));
DropdownMenuCustomSeparator.displayName =
  DropdownMenuPrimitive.Separator.displayName;

export {
  DropdownMenuCustom,
  DropdownMenuCustomTrigger,
  DropdownMenuCustomContent,
  DropdownMenuCustomCheckboxItem,
  DropdownMenuCustomLabel,
  DropdownMenuCustomSeparator,
  DropdownMenuCustomGroup,
  DropdownMenuCustomPortal,
  DropdownMenuCustomSub,
  DropdownMenuCustomRadioGroup,
};

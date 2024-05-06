"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const FSDialog = DialogPrimitive.Root;

const FSDialogTrigger = DialogPrimitive.Trigger;

const FSDialogPortal = DialogPrimitive.Portal;

// type ExtendedDialogPortalProps = React.ComponentPropsWithoutRef<
//   typeof DialogPrimitive.Portal
// > & {
//   className?: string;
// };

// const FSDialogPortal = React.forwardRef<
//   React.ElementRef<typeof DialogPrimitive.Portal>,
//   ExtendedDialogPortalProps
// >(({ className, ...props }, ref) => (
//   <div className={cn("relative bg-yellow-100", className)}>
//     <DialogPrimitive.Portal {...props} />
//   </div>
// ));

const FSDialogClose = DialogPrimitive.Close;

const FSDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-white backdrop-blur w-screen  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
FSDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const FSDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <FSDialogPortal>
    <FSDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed  left-[50%] top-[50%] z-50 grid  shadow-sm  w-screen h-screen translate-x-[-50%]  translate-y-[-50%] gap-4  bg-gray-25 p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]  ",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500 ">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </FSDialogPortal>
));
FSDialogContent.displayName = DialogPrimitive.Content.displayName;

const FSDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
FSDialogHeader.displayName = "DialogHeader";

const FSDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
FSDialogFooter.displayName = "DialogFooter";

const FSDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-medium leading-none ", className)}
    {...props}
  />
));
FSDialogTitle.displayName = DialogPrimitive.Title.displayName;

const FSDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-600 ", className)}
    {...props}
  />
));
FSDialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  FSDialog,
  FSDialogPortal,
  FSDialogOverlay,
  FSDialogClose,
  FSDialogTrigger,
  FSDialogContent,
  FSDialogHeader,
  FSDialogFooter,
  FSDialogTitle,
  FSDialogDescription,
};

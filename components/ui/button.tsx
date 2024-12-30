import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap gap-2 font-semibold font-inter transition-all duration-300 focus:outline-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden flex-shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-[12px] border border-white/0 bg-primary-500 text-sm font-semibold focus:ring-0 focus:ring-offset-0 focus:ring-transparent text-white shadow-button-primary-default hover:shadow-button-primary-hover hover:bg-primary-600 focus:shadow-button-primary-focus focus:bg-primary-500 focus-visible:shadow-button-primary-focus focus-visible:bg-primary-500 disabled:bg-primary-200 disabled:shadow-none [text-shadow:0px_1px_1px_rgba(0,0,0,0.12),0px_1px_2px_rgba(0,0,0,0.06)] !text-white disabled:!text-white",
        destructive: 
          "rounded-[12px] border border-rose-600 bg-rose-600 text-sm font-semibold shadow-button-destructive hover:border-rose-700 hover:bg-rose-700 focus:border-rose-600 focus:bg-rose-600 focus:shadow-button-destructive-focus disabled:border-rose-200 disabled:bg-rose-200 disabled:shadow-button-destructive [text-shadow:0px_1px_1px_rgba(0,0,0,0.12),0px_1px_2px_rgba(0,0,0,0.06)] !text-white disabled:!text-white",
        "secondary-destructive":
          "rounded-[12px] border border-rose-50 text-sm font-semibold bg-rose-50 !text-rose-700 hover:bg-rose-100 hover:border-rose-100 [text-shadow:0px_1px_1px_rgba(0,0,0,0.12),0px_1px_2px_rgba(0,0,0,0.06)] disabled:!text-rose-700",
        outline:
          "rounded-[12px] border border-white/0 text-sm font-semibold bg-white shadow-button-secondary-default hover:shadow-button-secondary-hover hover:bg-[#F9FAFB] focus:shadow-button-secondary-focus focus:bg-white text-gray-700 hover:text-gray-800",
        secondary: "rounded-[12px] bg-gray-100 text-gray-900 shadow-button-secondary-default text-sm font-semibold hover:bg-gray-100/80",
        ghost: "rounded-[12px] hover:bg-gray-100 text-sm font-semibold hover:text-gray-900",
        link: "text-gray-900 underline-offset-4 hover:underline",
        walletconnect: 
          "rounded-[12px] bg-[#3396FF] !text-white shadow-button-walletconnect text-sm font-semibold hover:shadow-button-walletconnect-hover hover:bg-[#3396FF] hover:bg-gradient-to-b hover:from-black/10 hover:to-black/10 focus:shadow-button-walletconnect-hover focus:bg-[#3396FF] disabled:shadow-button-walletconnect-disabled disabled:bg-[#3396FF] disabled:bg-gradient-to-b disabled:from-white/30 disabled:to-white/30 disabled:opacity-100 transition-all duration-300 [text-shadow:0px_1px_1px_rgba(0,0,0,0.12),0px_1px_2px_rgba(0,0,0,0.06)] disabled:!text-white",
      },
      size: {
        sm: "h-[30px] px-[10px] gap-2 rounded-[9px] text-button-sm",
        default: "h-[36px] px-[12px] gap-2 rounded-[10px] text-button-md",
        lg: "h-[40px] px-[14px] gap-2 rounded-[11px] text-button-lg",
        xl: "h-[44px] px-[16px] gap-2 rounded-[12px] text-button-xl",
        "2xl": "h-[48px] px-[16px] gap-[10px] rounded-[13px] text-button-2xl",
        icon: "h-10 w-10 rounded-[12px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 ",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gray-900 text-gray-50 hover:bg-gray-900/80",
        secondary:
          "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-100/80 ",
        destructive:
          "border-transparent bg-rose-100 border-rose-200 text-rose-800 text-xs font-medium py-0.5 px-2 rounded-md font-normal",
        outline: "text-gray-950 dark:text-gray-50",
        success:
          "border-transparent bg-green-100 border-green-200 text-green-900 text-xs py-0.5 px-2 rounded-md font-normal",
        warning:
          "border-transparent bg-amber-100 border-amber-200 text-amber-900 text-xs py-0.5 px-2 rounded-md font-normal",
        transaction:
          "border border-gray-200 bg-gray-100  text-gray-900 text-xs py-[3px] px-1.5 rounded-[4px] flex gap-1 font-medium",
        pending:
          "border-transparent bg-yellow-100 border-yellow-200 text-yellow-800 text-xs py-0.5 px-2 rounded-md font-normal",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

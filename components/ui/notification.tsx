import * as React from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  InfoCircle,
  AlertCircle,
  X,
} from "@untitled-ui/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NotificationProps {
  title: string;
  description: string;
  status: "success" | "error" | "warning" | "info";
  link?: string;
  linkText?: string;
  className?: string;
  onClose?: () => void;
}

const Notification = ({
  title,
  description,
  status,
  link,
  linkText,
  className,
  onClose,
}: NotificationProps) => {
  return (
    <div
      className={cn(
        `w-full p-4 flex gap-3 rounded-xl text-sm relative ${
          status === "success"
            ? "bg-green-50 text-green-700"
            : status === "warning"
            ? "bg-amber-50 text-amber-700"
            : status === "info"
            ? "bg-white text-gray-700"
            : status === "error"
            ? "bg-rose-50 text-rose-700"
            : "bg-amber-50 text-amber-700" // Default to warning style if status is not recognized
        }`,
        className
      )}
    >
      {status === "error" ? (
        <AlertCircle className="min-w-5 min-h-5 max-w-5 max-h-5" />
      ) : status === "success" ? (
        <CheckCircle className="min-w-5 min-h-5 max-w-5 max-h-5" />
      ) : status === "info" ? (
        <InfoCircle className="min-w-5 min-h-5 max-w-5 max-h-5" />
      ) : (
        <AlertTriangle className="min-w-5 min-h-5 max-w-5 max-h-5" />
      )}

      <div className="flex flex-col flex-grow">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-pretty">{description}</p>
        {link && (
          <Link href={link} className="flex items-center mt-3 gap-2">
            <p className="font-medium">{linkText}</p>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-opacity-10 hover:bg-current"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export { Notification };
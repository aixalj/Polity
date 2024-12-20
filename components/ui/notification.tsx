import * as React from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  InfoCircle,
  AlertCircle,
  X,
  CheckVerified01
} from "@untitled-ui/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NotificationProps {
  title: string;
  description: React.ReactNode;
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
            ? "bg-white text-gray-700"
            : status === "warning"
            ? "bg-amber-50 text-amber-700"
            : status === "info"
            ? "bg-white text-gray-700"
            : status === "error"
            ? "bg-rose-50 text-rose-700"
            : "bg-amber-50 text-amber-700" 
        }`,
        className
      )}
    >
       {status === "error" ? (
        <AlertCircle className="min-w-5 min-h-5 max-w-5 max-h-5" />
      ) : status === "success" ? (
       <CheckVerified01 className="min-w-11 min-h-11 max-w-11 max-h-11 bg-green-100 rounded-full text-green-600 p-2.5" />
      ) : status === "info" ? (
        <InfoCircle className="min-w-5 min-h-5 max-w-5 max-h-5" />
      ) : (
        <AlertTriangle className="min-w-5 min-h-5 max-w-5 max-h-5" />
      )}

      <div className="flex flex-col flex-grow">
        <h3 className="font-semibold mb-1 text-gray-900">{title}</h3>
        <p className="text-pretty">{description}</p>
        {link && (
          <Link href={link} className="flex items-center mt-3 gap-2">
            <p className="font-medium">{linkText}</p>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
        {onClose && (
          <button
            onClick={onClose} 
            className="mt-2 text-gray-600 text-sm font-semibold mr-auto"
          >
            Dismiss
          </button>
        )}
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export { Notification };
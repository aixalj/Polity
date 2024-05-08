"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { createContext, useState, ReactNode } from "react";

import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button, buttonVariants } from "@/components/ui/button";

import { useWallet } from "@/components/ui/formcontext"; // Adjust the import path as necessary

export function PaymentForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      payment: undefined,
    },
  });

  const { setSelectedPayment } = useWallet();

  // Watch for changes in the recipient field
  const selectedPayment = form.watch("payment");

  // Effect to log changes
  React.useEffect(() => {
    setSelectedPayment(selectedPayment); // Ensure it's treated as a number

    console.log("Selected payment:", selectedPayment);
  }, [selectedPayment]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-1  relative w-full"
      >
        <FormLabel className="">Amount</FormLabel>
        <div className="relative h-11 flex-col w-full">
          <FormField
            control={form.control}
            name="payment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex relative items-center gap-3 ">
                    <div className="absolute left-0 ml-3">
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.375"
                          y="0.375"
                          width="23.25"
                          height="23.25"
                          rx="6.625"
                          fill="#F9FAFB"
                        />
                        <rect
                          x="0.375"
                          y="0.375"
                          width="23.25"
                          height="23.25"
                          rx="6.625"
                          stroke="#D0D5DD"
                          stroke-width="0.75"
                        />
                        <path
                          d="M8 14.6668C8 16.1396 9.19391 17.3335 10.6667 17.3335H13.3333C14.8061 17.3335 16 16.1396 16 14.6668C16 13.1941 14.8061 12.0002 13.3333 12.0002H10.6667C9.19391 12.0002 8 10.8063 8 9.3335C8 7.86074 9.19391 6.66683 10.6667 6.66683H13.3333C14.8061 6.66683 16 7.86074 16 9.3335M12 5.3335V18.6668"
                          stroke="#475467"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <Input
                      style={{
                        appearance: "none",
                        MozAppearance: "textfield",
                        WebkitAppearance: "none",

                        margin: 0,
                      }}
                      className="pl-11 "
                      type="number" // Ensure the input type is number
                      min={0} // Ensure the input value doesn't go below 0
                      value={Number(field.value)}
                      onChange={(e) => field.onChange(e.target.value)} // Handle change as number
                      placeholder="0.00"
                    ></Input>
                  </div>
                </FormControl>
                {/* <FormDescription></FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="absolute right-0 inset-y-0 flex items-center mt-0.5">
            <FormField
              control={form.control}
              name="payment"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select>
                      <SelectTrigger
                        className="border-none shadow-none text-xs gap-2 bg-white/0"
                        disabled={true}
                      >
                        <SelectValue placeholder="USDC" defaultValue="USDC">
                          <SelectItem value="USDC">
                            <p className="text-gray-900 font-medium">USDC</p>
                          </SelectItem>
                        </SelectValue>
                      </SelectTrigger>
                    </Select>
                  </FormControl>
                  {/* <FormDescription></FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
}

const formSchema = z.object({
  payment: z.number({
    message: "Payment must be at least 0.",
  }),
});

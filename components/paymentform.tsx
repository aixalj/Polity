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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
        <FormField
          control={form.control}
          name="payment"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Amount</FormLabel>
              <FormControl>
                <Input
                  type="number" // Ensure the input type is number
                  value={Number(field.value)}
                  onChange={(e) => field.onChange(e.target.value)} // Handle change as number
                  placeholder="0.00"
                ></Input>
              </FormControl>
              {/* <FormDescription></FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

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
  payment: z.number().min(0, {
    message: "Payment must be at least 0.",
  }),
});

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

import { useSubscribe } from "@/components/ui/subscribecontext";

export function BidAmountForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bitcoin: 31,
      ethereum: 0,
      polygon: 0,
    },
  });

  const { setBitcoinCount, setEthCount, setPolygonCount } = useSubscribe();

  // Watch for changes in the recipient field
  const bitcoinCount = form.watch("bitcoin");
  const ethereumCount = form.watch("ethereum");
  const polygonCount = form.watch("polygon");

  // Effect to log changes
  React.useEffect(() => {
    setBitcoinCount(bitcoinCount);
    setEthCount(ethereumCount);
    setPolygonCount(polygonCount);
  }, [bitcoinCount, ethereumCount, polygonCount]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-1 w-full"
      >
        <FormField
          control={form.control}
          name="bitcoin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-end gap-2 ml-auto">
                  <Button
                    variant="outline"
                    className="h-11 w-full p-0  items-center flex justify-center"
                    onClick={() => field.onChange(Number(field.value) - 1)}
                    disabled={Number(field.value) === 31}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.16675 10H15.8334"
                        stroke="currentColor"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Button>
                  <Input
                    type="number"
                    className="min-w-72 h-11 text-center"
                    value={Number(field.value)}
                    onChange={(e) => field.onChange(Number(e.target.value))} // Handle change as number
                    placeholder="0"
                  />
                  <Button
                    variant="outline"
                    className="h-11 w-full p-0 items-center flex justify-center"
                    onClick={() => field.onChange(Number(field.value) + 1)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0001 4.16667V15.8333M4.16675 10H15.8334"
                        stroke="currentColor"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
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
  bitcoin: z.number().min(0, {
    message: "Name must be at least 2 characters.",
  }),
  ethereum: z.number().min(0, {
    message: "Name must be at least 2 characters.",
  }),
  polygon: z.number().min(0, {
    message: "Name must be at least 2 characters.",
  }),
});

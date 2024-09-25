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

import { useTime } from "@/components/ui/timecontext"; // Adjust the import path as necessary
import { TimeProvider } from "@/components/ui/timecontext"; // Adjust the import path as necessary

interface TimeFormProps {
  defaultValue?: string;
}

export function TimeForm({ defaultValue = "pastday" }: TimeFormProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      time: defaultValue,
    },
  });

  const { setSelectedTime } = useTime();

  // Watch for changes in the recipient field
  const selectedTime = form.watch("time");

  // Effect to log changes
  React.useEffect(() => {
    setSelectedTime(selectedTime); // Ensure it's treated as a number

    console.log("Selected time:", selectedTime);
  }, [selectedTime]);

  return (
    <Form {...form}>
      {/* <TimeProvider> */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="">
          <div className="">
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      defaultValue={defaultValue}
                    >
                      <SelectTrigger className="w-48 gap-2 font-medium ">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 8.33342H2.5M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4388 17.2275 16.9684C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33342C17.5 5.93328 17.5 5.23322 17.2275 4.69844C16.9878 4.22803 16.6054 3.84558 16.135 3.6059C15.6002 3.33341 14.9001 3.33341 13.5 3.33341H6.5C5.09987 3.33341 4.3998 3.33341 3.86502 3.6059C3.39462 3.84558 3.01217 4.22803 2.77248 4.69844C2.5 5.23322 2.5 5.93328 2.5 7.33341V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9684C3.01217 17.4388 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z"
                            stroke="#344054"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <SelectValue
                          className="text-gray-500 font-regular"
                          defaultValue="Past Day"
                          placeholder="Past Day"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pastday">Past Day</SelectItem>
                        <SelectItem value="pastweek">Past Week</SelectItem>
                        <SelectItem value="pastmonth">Past Month</SelectItem>
                        <SelectItem value="threemonths">
                          Three Months
                        </SelectItem>
                        <SelectItem value="yeartodate">Year to Date</SelectItem>
                        <SelectItem value="pastyear">Past Year</SelectItem>
                        <SelectItem value="alltime">All Time</SelectItem>
                      </SelectContent>
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
      {/* </TimeProvider> */}
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
  time: z.string({
    message: "Time must be at least 0.",
  }),
});

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

export function RecipientForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipient: "",
    },
  });

  // Watch for changes in the recipient field
  const selectedRecipient = form.watch("recipient");

  // Effect to log changes
  React.useEffect(() => {
    console.log("Selected recipient:", selectedRecipient);
  }, [selectedRecipient]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
        <FormField
          control={form.control}
          name="recipient"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Recipient</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={field.onChange} // Use onValueChange for Radix UI Select
                >
                  <SelectTrigger className="w-full text-gray-500 font-regular gap-2 ">
                    <SelectValue
                      className="text-gray-500 font-regular"
                      placeholder="Select a Recipient..."
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name1">
                      <div className="flex items-center gap-2">
                        <p className="text-gray-900 font-medium">
                          Recipient Name
                        </p>
                      </div>
                    </SelectItem>
                    <SelectItem value="name2">
                      <div className="flex items-center gap-2">
                        <p className="text-gray-900 font-medium">
                          Recipient Name 2
                        </p>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
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
  recipient: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});

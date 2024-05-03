"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

export function ReceiveForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Wallet</FormLabel>
              <FormControl>
                {/* <Select /> */}
                <Select>
                  <SelectTrigger className="w-full text-gray-500 font-regular gap-2 ">
                    <SelectValue
                      className="text-gray-500 font-regular"
                      placeholder="Select a Wallet..."
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Wallet Name</SelectItem>
                    <SelectItem value="dark">Wallet Name</SelectItem>
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
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Network Account</FormLabel>
              <FormControl>
                {/* <Select /> */}
                <Select>
                  <SelectTrigger className="w-full gap-2 text-gray-500 font-regular ">
                    <SelectValue
                      className=""
                      placeholder="Select a Network Account..."
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Network Account Name</SelectItem>
                    <SelectItem value="dark">Network Account Name</SelectItem>
                    <SelectItem value="pastmonth">
                      Network Account Name
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
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Asset</FormLabel>
              <FormControl>
                {/* <Select /> */}
                <Select>
                  <SelectTrigger className="w-full text-gray-500 font-regular gap-2 ">
                    <SelectValue
                      className="text-gray-500 font-regular"
                      placeholder="Select an Asset..."
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Ethereum</SelectItem>
                    <SelectItem value="dark">Tether</SelectItem>
                    <SelectItem value="pastmonth">USD Coin</SelectItem>
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
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

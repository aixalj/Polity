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
                    <SelectItem
                      className="text-gray-900 flex flex-row gap-1 items-center"
                      value="ETH"
                    >
                      <div className="flex flex-row gap-2 items-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_123_82607)">
                            <circle cx="12" cy="12" r="12" fill="#ECEFF0" />
                            <path
                              opacity="0.6"
                              d="M11.8674 10.2615L7.5 12.2469L11.8674 14.8287L16.2355 12.2469L11.8674 10.2615Z"
                              fill="black"
                            />
                            <path
                              opacity="0.45"
                              d="M7.50195 12.2469L11.8693 14.8286V10.2614V5L7.50195 12.2469Z"
                              fill="black"
                            />
                            <path
                              opacity="0.8"
                              d="M11.8691 5V10.2614V14.8286L16.2365 12.2469L11.8691 5Z"
                              fill="black"
                            />
                            <path
                              opacity="0.45"
                              d="M7.5 13.0754L11.8674 19.23V15.6556L7.5 13.0754Z"
                              fill="black"
                            />
                            <path
                              opacity="0.8"
                              d="M11.8672 15.6556V19.23L16.2378 13.0754L11.8672 15.6556Z"
                              fill="black"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_123_82607">
                              <rect
                                width="24"
                                height="24"
                                rx="12"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <p className="text-gray-900">Ethereum</p>
                        <p className="text-gray-500 font-regular text-sm">
                          ETH
                        </p>
                      </div>
                    </SelectItem>
                    <SelectItem
                      className="text-gray-900 flex flex-row gap-1 items-center"
                      value="USDT"
                    >
                      <div className="flex flex-row gap-2 items-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.6383 14.9029C22.0356 21.3315 15.5244 25.2438 9.09503 23.6407C2.66833 22.0381 -1.24401 15.5265 0.359382 9.09837C1.96137 2.66903 8.47253 -1.24361 14.8999 0.359081C21.3289 1.96177 25.241 8.47405 23.6381 14.903L23.6382 14.9029H23.6383Z"
                            fill="#50AF95"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5189 13.3604V13.3604C13.4341 13.3667 12.9957 13.3929 12.0178 13.3929C11.24 13.3929 10.6877 13.3695 10.494 13.3604V13.3604C7.48813 13.2281 5.24454 12.7049 5.24454 12.0784C5.24454 11.4519 7.48813 10.9294 10.494 10.795V12.8392C10.6905 12.8534 11.2534 12.8866 12.0312 12.8866C12.9646 12.8866 13.4319 12.8477 13.5161 12.8399V10.7964C16.5156 10.9301 18.7542 11.4533 18.7542 12.0784C18.7542 12.7035 16.5163 13.2267 13.5161 13.3596V13.3596L13.5189 13.3604ZM13.5189 10.585V8.75578H17.7049V5.96631H6.308V8.75578H10.4933V10.5843C7.09146 10.7406 4.5332 11.4144 4.5332 12.2219C4.5332 13.0294 7.09146 13.7026 10.4933 13.8596V19.7213H13.5182V13.8574C16.9122 13.7012 19.4663 13.028 19.4663 12.2212C19.4663 11.4144 16.9144 10.7413 13.5182 10.5843V10.5843L13.5189 10.585Z"
                            fill="white"
                          />
                        </svg>

                        <p className="text-gray-900">Tether</p>
                        <p className="text-gray-500 font-regular text-sm">
                          USDT
                        </p>
                      </div>
                    </SelectItem>
                    <SelectItem
                      className="text-gray-900 flex flex-row gap-1 items-center"
                      value="USDC"
                    >
                      <div className="flex flex-row gap-2 items-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 24C18.65 24 24 18.65 24 12C24 5.34996 18.65 0 12 0C5.34996 0 0 5.34996 0 12C0 18.65 5.34996 24 12 24Z"
                            fill="#2775CA"
                          />
                          <path
                            d="M15.2996 13.8999C15.2996 12.1499 14.2496 11.5499 12.1496 11.2999C10.6496 11.0999 10.3496 10.6999 10.3496 9.99985C10.3496 9.29977 10.8496 8.84989 11.8496 8.84989C12.7496 8.84989 13.2496 9.14989 13.4996 9.89989C13.5496 10.0499 13.6996 10.1499 13.8496 10.1499H14.6495C14.8496 10.1499 14.9996 9.99985 14.9996 9.79993V9.74989C14.7995 8.64985 13.8995 7.79989 12.7496 7.69993V6.49993C12.7496 6.29989 12.5996 6.14989 12.3496 6.09985H11.5996C11.3996 6.09985 11.2496 6.24985 11.1995 6.49993V7.64989C9.69953 7.84993 8.74961 8.84989 8.74961 10.0999C8.74961 11.7499 9.74957 12.3999 11.8496 12.6499C13.2496 12.8999 13.6996 13.1999 13.6996 13.9999C13.6996 14.8 12.9995 15.3499 12.0496 15.3499C10.7495 15.3499 10.2995 14.7999 10.1495 14.0499C10.0996 13.8499 9.94961 13.7499 9.79961 13.7499H8.94953C8.74961 13.7499 8.59961 13.8999 8.59961 14.0999V14.1499C8.79953 15.3999 9.59957 16.2999 11.2496 16.5499V17.7499C11.2496 17.9499 11.3996 18.0999 11.6495 18.1499H12.3995C12.5996 18.1499 12.7496 17.9999 12.7996 17.7499V16.5499C14.2996 16.2999 15.2996 15.2499 15.2996 13.8999V13.8999Z"
                            fill="white"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.00004 9.54992C3.54996 13.4 5.55 17.75 9.45 19.1499C9.6 19.25 9.75 19.4499 9.75 19.5999V20.3C9.75 20.4 9.75 20.45 9.69996 20.4999C9.65004 20.7 9.45 20.7999 9.24996 20.7C6.45 19.8 4.29996 17.6499 3.39996 14.85C1.89996 10.1 4.5 5.04992 9.24996 3.54992C9.3 3.5 9.39996 3.5 9.45 3.5C9.65004 3.54992 9.75 3.69992 9.75 3.89996V4.59992C9.75 4.85 9.65004 5 9.45 5.09996C7.40004 5.84996 5.75004 7.44992 5.00004 9.54992ZM14.3 3.74996C14.35 3.54992 14.55 3.44996 14.75 3.54992C17.5 4.44992 19.7 6.59996 20.6 9.44996C22.1 14.1999 19.5 19.25 14.75 20.75C14.7 20.7999 14.6 20.7999 14.55 20.7999C14.35 20.75 14.25 20.6 14.25 20.4V19.7C14.25 19.4499 14.35 19.2999 14.55 19.2C16.6 18.45 18.25 16.85 19 14.75C20.45 10.8999 18.45 6.54992 14.55 5.15C14.4 5.04992 14.25 4.85 14.25 4.64996V3.95C14.25 3.84992 14.25 3.8 14.3 3.74996Z"
                            fill="white"
                          />
                        </svg>

                        <p className="text-gray-900">USD Coin</p>
                        <p className="text-gray-500 font-regular text-sm">
                          USDC
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
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

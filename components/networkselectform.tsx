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

export function NetworkSelectForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bitcoin: 0,
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
    console.log("BTC amount:", bitcoinCount);
    console.log("ETH amount:", ethereumCount);
    console.log("POLYGON amount:", polygonCount);
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
                <div className="flex w-full justify-between py-1 items-center">
                  <div className="w-full gap-2 flex items-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_150_11068)">
                        <rect width="32" height="32" rx="9" fill="#F7931A" />
                        <g clip-path="url(#clip1_150_11068)">
                          <rect width="32" height="32" rx="6" fill="#F7931A" />
                          <path
                            d="M31.5214 19.8705C29.3845 28.442 20.7029 33.6584 12.1304 31.521C3.56144 29.3841 -1.65502 20.702 0.482839 12.1312C2.61882 3.5587 11.3004 -1.65814 19.8702 0.478775C28.4421 2.61569 33.6583 11.2987 31.5211 19.8706L31.5213 19.8705H31.5214Z"
                            fill="#F7931A"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M23.0572 13.7204C23.3757 11.5911 21.7546 10.4466 19.5379 9.68305L20.257 6.79879L18.5013 6.36131L17.8013 9.16963C17.3397 9.05451 16.8657 8.94603 16.3946 8.8385L17.0997 6.01165L15.345 5.57416L14.6255 8.45748C14.2436 8.37051 13.8684 8.28456 13.5044 8.194L13.5065 8.18493L11.0853 7.58031L10.6182 9.45555C10.6182 9.45555 11.9208 9.75414 11.8934 9.77252C12.6044 9.94997 12.7329 10.4206 12.7116 10.7937L11.8924 14.0795C11.9414 14.0919 12.0049 14.1099 12.075 14.1381L12.024 14.1254C11.9807 14.1145 11.9356 14.1033 11.8894 14.0922L10.7412 18.6952C10.6544 18.9112 10.4338 19.2354 9.93673 19.1123C9.95432 19.1378 8.66063 18.7938 8.66063 18.7938L7.78894 20.8036L10.0737 21.3731C10.3239 21.4359 10.5712 21.5003 10.8159 21.5641C10.987 21.6087 11.1568 21.653 11.3255 21.6961L10.599 24.6135L12.3527 25.051L13.0722 22.1646C13.5513 22.2946 14.0162 22.4146 14.4714 22.5277L13.7543 25.4005L15.5101 25.8379L16.2366 22.9261C19.2305 23.4927 21.4817 23.2642 22.4292 20.5563C23.1927 18.376 22.3912 17.1185 20.8161 16.2984C21.9633 16.0338 22.8274 15.2793 23.0578 13.7206L23.0573 13.7202L23.0572 13.7204ZM19.0458 19.3455C18.5479 21.3458 15.4169 20.5188 13.9844 20.1404C13.8555 20.1064 13.7404 20.076 13.6422 20.0516L14.6063 16.1866C14.726 16.2165 14.8723 16.2493 15.038 16.2865L15.038 16.2865C16.5198 16.6191 19.5558 17.3004 19.0458 19.3455H19.0458ZM15.3352 14.4927C16.5296 14.8115 19.135 15.5068 19.5887 13.6888H19.5889C20.0522 11.8294 17.5202 11.2688 16.2836 10.995C16.1444 10.9642 16.0217 10.937 15.9215 10.9121L15.0474 14.4174C15.1299 14.4379 15.2267 14.4638 15.3352 14.4927Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <rect
                        x="0.5"
                        y="0.5"
                        width="31"
                        height="31"
                        rx="8.5"
                        stroke="#D0D5DD"
                      />
                      <defs>
                        <clipPath id="clip0_150_11068">
                          <rect width="32" height="32" rx="9" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_150_11068">
                          <rect width="32" height="32" rx="6" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="font-medium text-md text-gray-700">Bitcoin</p>
                  </div>
                  <div className="flex items-end gap-2 ml-auto">
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0 items-center flex justify-center"
                      onClick={() => field.onChange(Number(field.value) - 1)}
                      disabled={Number(field.value) === 0}
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
                      className="w-12 h-8 text-center"
                      value={Number(field.value)}
                      onChange={(e) => field.onChange(Number(e.target.value))} // Handle change as number
                      placeholder="0"
                    />
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0 items-center flex justify-center"
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
                </div>
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
          name="ethereum"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex w-full justify-between py-1 items-center">
                  <div className="w-full gap-2 flex items-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_150_11092)">
                        <rect width="32" height="32" rx="9" fill="#ECEFF0" />
                        <g clip-path="url(#clip1_150_11092)">
                          <rect width="32" height="32" rx="6" fill="#ECEFF0" />
                          <circle cx="16" cy="16" r="16" fill="#ECEFF0" />
                          <path
                            opacity="0.6"
                            d="M15.8232 13.6819L10 16.3292L15.8232 19.7715L21.6474 16.3292L15.8232 13.6819Z"
                            fill="black"
                          />
                          <path
                            opacity="0.45"
                            d="M10.0021 16.3291L15.8252 19.7715V13.6819V6.66667L10.0021 16.3291Z"
                            fill="black"
                          />
                          <path
                            opacity="0.8"
                            d="M15.8253 6.66667V13.6819V19.7715L21.6485 16.3291L15.8253 6.66667Z"
                            fill="black"
                          />
                          <path
                            opacity="0.45"
                            d="M10 17.4339L15.8232 25.64V20.874L10 17.4339Z"
                            fill="black"
                          />
                          <path
                            opacity="0.8"
                            d="M15.8232 20.874V25.64L21.6507 17.4339L15.8232 20.874Z"
                            fill="black"
                          />
                        </g>
                      </g>
                      <rect
                        x="0.5"
                        y="0.5"
                        width="31"
                        height="31"
                        rx="8.5"
                        stroke="#D0D5DD"
                      />
                      <defs>
                        <clipPath id="clip0_150_11092">
                          <rect width="32" height="32" rx="9" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_150_11092">
                          <rect width="32" height="32" rx="6" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="font-medium text-md text-gray-700">
                      Ethereum
                    </p>
                  </div>
                  <div className="flex items-end gap-2 ml-auto">
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0 items-center flex justify-center"
                      onClick={() => field.onChange(Number(field.value) - 1)}
                      disabled={Number(field.value) === 0}
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
                      className="w-12 h-8 text-center"
                      value={Number(field.value)}
                      onChange={(e) => field.onChange(Number(e.target.value))} // Handle change as number
                      placeholder="0"
                    />
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0 items-center flex justify-center"
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
                </div>
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
          name="polygon"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex w-full justify-between py-1 items-center">
                  <div className="w-full gap-2 flex items-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_150_11118)">
                        <rect
                          width="32"
                          height="32"
                          rx="9"
                          fill="url(#paint0_linear_150_11118)"
                        />
                        <g clip-path="url(#clip1_150_11118)">
                          <rect
                            width="32"
                            height="32"
                            rx="6"
                            fill="url(#paint1_linear_150_11118)"
                          />
                          <mask
                            id="mask0_150_11118"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="32"
                            height="32"
                          >
                            <path
                              d="M16 31.6742C24.6567 31.6742 31.6743 24.6566 31.6743 15.9999C31.6743 7.34328 24.6567 0.325684 16 0.325684C7.3434 0.325684 0.325806 7.34328 0.325806 15.9999C0.325806 24.6566 7.3434 31.6742 16 31.6742Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask0_150_11118)">
                            <path
                              d="M33.1585 -1.15848H-1.15833V33.1583H33.1585V-1.15848Z"
                              fill="url(#paint2_linear_150_11118)"
                            />
                          </g>
                          <path
                            d="M20.5329 19.3824L24.9675 16.8217C25.2024 16.6861 25.3477 16.4339 25.3477 16.1625V11.0419C25.3477 10.7712 25.2017 10.5184 24.9675 10.3827L20.5329 7.82206C20.2981 7.68638 20.0069 7.68702 19.772 7.82206L15.3374 10.3827C15.1025 10.5184 14.9573 10.7712 14.9573 11.0419V20.1933L11.8475 21.9885L8.73774 20.1933V16.6022L11.8475 14.807L13.8987 15.991V13.5821L12.2277 12.6176C12.1125 12.551 11.9806 12.5158 11.8469 12.5158C11.7131 12.5158 11.5813 12.551 11.4667 12.6176L7.03214 15.1782C6.79726 15.3139 6.65198 15.5661 6.65198 15.8374V20.9581C6.65198 21.2288 6.7979 21.4816 7.03214 21.6173L11.4667 24.1779C11.7009 24.3129 11.9928 24.3129 12.2277 24.1779L16.6622 21.6179C16.8971 21.4822 17.0424 21.2294 17.0424 20.9587V11.8073L17.0987 11.7753L20.1521 10.0121L23.2619 11.8073V15.3984L20.1521 17.1936L18.1041 16.0109V18.4198L19.772 19.383C20.0069 19.5181 20.2981 19.5181 20.5329 19.383V19.3824Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <rect
                        x="0.5"
                        y="0.5"
                        width="31"
                        height="31"
                        rx="8.5"
                        stroke="#D0D5DD"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_150_11118"
                          x1="-5.84797"
                          y1="2.63006"
                          x2="27.1869"
                          y2="22.8458"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#A229C5" />
                          <stop offset="1" stop-color="#7B3FE4" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_150_11118"
                          x1="-5.84797"
                          y1="2.63006"
                          x2="27.1869"
                          y2="22.8458"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#A229C5" />
                          <stop offset="1" stop-color="#7B3FE4" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_150_11118"
                          x1="-7.42969"
                          y1="1.662"
                          x2="27.9969"
                          y2="23.3414"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#A229C5" />
                          <stop offset="1" stop-color="#7B3FE4" />
                        </linearGradient>
                        <clipPath id="clip0_150_11118">
                          <rect width="32" height="32" rx="9" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_150_11118">
                          <rect width="32" height="32" rx="6" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="font-medium text-md text-gray-700">Polygon</p>
                  </div>
                  <div className="flex items-end gap-2 ml-auto">
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0 items-center flex justify-center"
                      onClick={() => field.onChange(Number(field.value) - 1)}
                      disabled={Number(field.value) === 0}
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
                      className="w-12 h-8 text-center"
                      value={Number(field.value)}
                      onChange={(e) => field.onChange(Number(e.target.value))} // Handle change as number
                      placeholder="0"
                    />
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0 items-center flex justify-center"
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

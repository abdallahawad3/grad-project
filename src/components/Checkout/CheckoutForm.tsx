import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CheckoutFormData } from "@/data";
import Divider from "../ui/Divider";
import { CHECKOUT_VALIDATION } from "@/validation";
import type { ReactNode } from "react";

interface CheckoutFormProps {
  onSubmit: (data: z.infer<typeof CHECKOUT_VALIDATION>) => void;
  children: ReactNode;
}

const CheckoutForm = ({ onSubmit, children }: CheckoutFormProps) => {
  const form = useForm<z.infer<typeof CHECKOUT_VALIDATION>>({
    resolver: zodResolver(CHECKOUT_VALIDATION),
    defaultValues: {
      firstname: "",
      lastname: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      zip: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 border p-5 rounded shadow"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CheckoutFormData.slice(0, 3).map((item) => (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-body-sm-400 text-gray-600 text-[14px]">
                    {" "}
                    {item.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-[100%] py-5 outline-none border-[1px] focus:border-[#0A947C] focus-visible:ring-0"
                      placeholder={item.placeholder}
                      type={item.type}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <Divider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CheckoutFormData.slice(3, 5).map((item) => (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-body-sm-400 text-gray-600 text-[14px]">
                    {item.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-[100%] py-5 focus:border-[#0A947C] focus-visible:ring-0"
                      placeholder={item.placeholder}
                      type={item.type}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <Divider />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CheckoutFormData.slice(5, 8).map((item) => (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-body-sm-400 text-gray-600 text-[14px]">
                    {" "}
                    {item.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-[100%] py-5 focus:border-[#0A947C] focus-visible:ring-0"
                      placeholder={item.placeholder}
                      type={item.type}
                      {...field}
                      min={item.type === "number" ? 0 : undefined}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <Divider />
        {children}
      </form>
    </Form>
  );
};

export default CheckoutForm;

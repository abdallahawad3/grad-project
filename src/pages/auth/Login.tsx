import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { loginUser } from "@/app/features/AuthSlice";
import type { RootState } from "@/app/store";
import Loading from "@/miscellaneous/Loading";

const LoginPage = () => {
  const { loading } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const FormSchema = z.object({
    email: z.string().min(1, {
      message: "Email is required.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    dispatch(loginUser(data));
  }

  return (
    <Form {...form}>
      <div className="h-screen md:-mt-14 flex items-center justify-center bg-slate-950 p-4">
        <div
          className="
          
          w-[250px]
          sm:w-[400px] 
          space-y-4 
          rounded-md 
          border 
          bg-white 
          p-8 
          shadow-lg 
          shadow-[hsla(124, 100%, 8%, 0.08)]
          "
        >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-center font-[600] text-heading5 text-gray-900">
              Sign In
            </h2>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex rounded-md pr-2 items-center border-2 focus-visible:ring-1 focus-visible:outline-1  border-gray-50 placeholder-gray-400">
                      <Input
                        type="email"
                        className="border-none focus:border-none focus-visible:ring-0 focus-visible:outline-none"
                        placeholder="Email"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex rounded-md pr-2 items-center border-2 focus-visible:ring-1 focus-visible:outline-1  border-gray-50 placeholder-gray-400">
                      <Input
                        className="border-none focus:border-none focus-visible:ring-0 focus-visible:outline-none"
                        placeholder="Password"
                        {...field}
                      />
                      <Eye className="cursor-pointer" size={16} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={loading}
              className={`
                w-full 
                rounded-[43px]
                 bg-[#0A947C]
                  hover:bg-[#087866]
                  ${loading ? "cursor-not-allowed" : ""}
                  `}
              type="submit"
            >
              {loading ? <Loading /> : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </Form>
  );
};

export default LoginPage;

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
import { Eye, EyeOff } from "lucide-react";
import Divider from "@/components/ui/Divider";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { registerUser } from "@/app/features/AuthSlice";
import { REGISTER_SCHEMA } from "@/validation";
import type { RootState } from "@/app/store";
import { toast } from "@/hooks/use-toast";
import Loading from "@/miscellaneous/Loading";

const RegisterPage = () => {
  // Show Password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const { loading, error } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  // Form
  const form = useForm<z.infer<typeof REGISTER_SCHEMA>>({
    resolver: zodResolver(REGISTER_SCHEMA),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
    },
  });

  // Handlers
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }
  function handleShowConfirmPassword() {
    setConfirmShowPassword((prev) => !prev);
  }

  function onSubmit(data: z.infer<typeof REGISTER_SCHEMA>) {
    dispatch(registerUser(data));
    if (!error) {
      toast({
        description: "Registration successful and will redirect you to login",
        duration: 2000,
        variant: "default",
        style: {
          backgroundColor: "#0A947C",
          color: "#fff",
          position: "fixed",
          zIndex: 9999,
          top: "10px",
          right: "10px",
          width: "300px",
        },
      });

      form.reset();
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);
    } else {
      toast({
        description: error,
        duration: 2000,
        variant: "destructive",
      });
      form.reset();
    }
  }

  // useEffect(() => {
  //   if (error) {
  //     // Handle error here, e.g., show a toast notification
  //     console.error("Error:", error);
  //     // You can also reset the form or show an error message to the user
  //     form.reset();
  //   }
  // }, [error, form]);

  return (
    <Form {...form}>
      <div className="register h-screen md:-mt-14 flex items-center justify-center bg-slate-950 p-4 ">
        <div
          className="
          
          w-[250px]
          sm:w-[600px] 
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
              Register New Account
              <Divider />
            </h2>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex rounded-md pr-2 items-center border-2 focus-visible:ring-1 focus-visible:outline-1  border-gray-50 placeholder-gray-400">
                      <Input
                        type="string"
                        className="border-none focus:border-none focus-visible:ring-0 focus-visible:outline-none"
                        placeholder="Name"
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
                        type={`${showPassword ? "text" : "password"}`}
                        {...field}
                      />
                      {showPassword ? (
                        <Eye
                          className="cursor-pointer"
                          size={16}
                          onClick={handleShowPassword}
                        />
                      ) : (
                        <EyeOff
                          className="cursor-pointer"
                          size={16}
                          onClick={handleShowPassword}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex rounded-md pr-2 items-center border-2 focus-visible:ring-1 focus-visible:outline-1  border-gray-50 placeholder-gray-400">
                      <Input
                        className="border-none focus:border-none focus-visible:ring-0 focus-visible:outline-none"
                        placeholder="Confirm Password"
                        type={`${showConfirmPassword ? "text" : "password"}`}
                        {...field}
                      />
                      {showConfirmPassword ? (
                        <Eye
                          className="cursor-pointer"
                          size={16}
                          onClick={handleShowConfirmPassword}
                        />
                      ) : (
                        <EyeOff
                          className="cursor-pointer"
                          size={16}
                          onClick={handleShowConfirmPassword}
                        />
                      )}
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
              {loading ? <Loading /> : "Register"}
            </Button>
          </form>
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <span className="cursor-pointer text-[#0A947C] hover:text-[#087866]">
                <Link to={"/login"}> Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default RegisterPage;

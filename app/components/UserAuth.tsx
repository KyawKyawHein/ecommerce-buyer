"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User, Mail } from "lucide-react";
import { useLoginForm, useRegisterForm } from "@/lib/hook/auth";
import { useLogin } from "@/queries/auth.api";
import { z } from "zod";
import { loginSchema } from "@/lib/schema";
import { ILoginRes } from "@/types/auth.types";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useGetUser } from "@/queries/user.api";

const UserAuth = () => {
  const loginForm = useLoginForm();
  const registerForm = useRegisterForm();
  const {
    mutate: login,
    isLoading: loginLoading,
    isSuccess: loginSuccess,
    isError : loginError
  } = useLogin();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  //   const {data:user} = useGetUser()
  //   console.log(user);

  useEffect(() => {
    const storedToken = localStorage.getItem("styleX_token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const onLoginSubmit = (values: z.infer<typeof loginSchema>,event:React.FormEvent) => {
    event?.preventDefault();
    login(values, {
      onSuccess: (data: ILoginRes) => {
        localStorage.setItem("styleX_token", data.token);
        setToken(data.token);
        toast("Login Successfully.", { position: "top-right" });
        setIsDialogOpen(false);
      },
      onError: (err,e) => {
        // if (err instanceof AxiosError) {
          // if (err && err.response && err.response.data.errorMsgCode == 1) {
          //   setError("phone", {
          //     type: "manual",
          //     message: err.response.data.message,
          //   });
          // }
          // if (err && err.response && err.response.data.errorMsgCode == 2) {
          //   setError("password", {
          //     type: "manual",
          //     message: err.response.data.message,
          //   });
          // }
        // }
        console.log('a')
      },
    });
  };

  const onRegisterSubmit = () => {};
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <div className="w-10 h-10 cursor-pointer transition-all hover:bg-gray-700 rounded-full flex justify-center items-center">
          <User onClick={() => setIsDialogOpen(true)} className="" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="p-3">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="p-2 py-3 rounded-full">
              <TabsTrigger className="rounded-full px-4" value="login">
                Login
              </TabsTrigger>
              <TabsTrigger className="rounded-full px-4" value="register">
                Register
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <p className="my-5 font-bold">Insert your account information:</p>
              <Form {...loginForm}>
                <form
                  onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                  className="space-y-8"
                  autoComplete="off"
                >
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            required
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {loginError && 'aaerror'}
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            required
                            placeholder="Enter password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2 items-center text-sm">
                    <Mail size={15} />
                    Forgot your <span className="font-bold">Password ?</span>
                  </div>
                  <Button
                    type="submit"
                    className={cn("w-full")}
                    disabled={loginLoading}
                  >
                    {loginLoading ? "Loading" : "Login"}
                  </Button>
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="register">
              <p className="my-5 font-bold">Create your account:</p>
              <Form {...registerForm}>
                <form
                  onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={registerForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            required
                            placeholder="Enter your name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            required
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            required
                            type="password"
                            placeholder="Enter password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserAuth;

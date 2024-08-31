"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "../schema";
import { useLogin } from "@/queries/auth.api";

export const useLoginForm = ()=>{
    return useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      });
}

export const useRegisterForm = ()=>{
  return useForm<z.infer<typeof registerSchema>>({
      resolver: zodResolver(registerSchema),
      defaultValues: {
        name : "",
        email: "",
        password: "",
      },
    });
}
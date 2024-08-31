import {z} from "zod";

export const loginSchema = z.object({
    email: z
      .string()
      .min(2, {
        message: "Email must be at least 2 characters.",
      })
      .email({
        message: "Email must be a valid email.",
      }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  export const registerSchema = z.object({
    name:z.string().min(2,{
        message : "Name must be at least 2 characters",
    }),                                                   
    email: z
      .string()
      .min(2, {
        message: "Email must be at least 2 characters.",
      })
      .email({
        message: "Email must be a valid email.",
      }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

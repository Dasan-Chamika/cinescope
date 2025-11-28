"use server";

import { signUp } from "@/lib/auth-client";

export const registerUser = async (_: unknown, formData: FormData) => {
  if (formData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { data, error } = await signUp.email(
        {
          email,
          password,
          name,
          image: "string | undefined",
          callbackURL: "/dashboard",
        },
        {
          onSuccess: (ctx) => {
            console.log("Registration successful", ctx);
          },
          onError: (ctx) => {
            console.log("Registration error", ctx.error);
          },
        }
      );

      return { data, error };
    } catch (error) {
      console.error("Error registering user : ", error);
    }
  }
};

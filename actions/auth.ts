"use server";

import { signUp, signIn, signOut } from "@/lib/auth-client";

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

// Server action to log in a user
export const loginUser = async (_: unknown, formData: FormData) => {
  if (formData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const { error } = await signIn.email(
        {
          email,
          password,
          rememberMe: true,
          callbackURL: "/dashboard",
        },
        {
          onSuccess: () => {
            console.log("User Logged in Successfully");
          },
          onError: (ctx) => {
            console.error("Login error:", ctx.error);
          },
        }
      );

      return {
        success: !error,
        message: error ? error.message : "Login successful",
      };
    } catch (error) {
      console.error("Error logging in user:", error);

      return {
        success: false,
        message: "Login failed",
      };
    }
  }
};

export const logoutUser = async () => {
  try {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          console.log("User logged out successfully");
        },
      },
    });
  } catch (error) {
    console.error("Error logging out user:", error);
    return {
      success: false,
      message: "Logout failed",
    };
  }
};

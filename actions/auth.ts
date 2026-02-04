"use server";

import { auth } from "@/lib/auth";

export const registerUser = async (_: unknown, formData: FormData) => {
  if (formData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name) {
      return {
        success: false,
        message: "Name is required",
        field: "name",
      };
    }

    if (!email) {
      return {
        success: false,
        message: "Email is required",
        field: "email",
      };
    }

    if (!password) {
      return {
        success: false,
        message: "Password is required",
        field: "password",
      };
    }

    try {
      const response = await auth.api.signUpEmail({
        body: { email, password, name, image: undefined },
      });

      console.log("Registration response:", response);

      return {
        success: true,
        message: "User registered successfully.",
        field: "general",
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error("Error registering user:", errorMessage);

      return {
        success: false,
        message: errorMessage || "User registration failed.",
        field: "general",
      };
    }
  }
};

// Server action to log in a user
export const loginUser = async (_: unknown, formData: FormData) => {
  if (formData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email) {
      return {
        success: false,
        message: "Email is required",
        field: "email",
      };
    }
    if (!password) {
      return {
        success: false,
        message: "Password is required",
        field: "password",
      };
    }

    try {
      const response = await auth.api.signInEmail({
        body: { email, password, rememberMe: true },
      });

      console.log("Login response:", response);

      return {
        success: true,
        message: "User logged in successfully.",
        field: "general",
      };
    } catch (error) {
      let errorMessage = "Login failed.";
      if (error instanceof Error) {
        errorMessage = error.message || errorMessage;
      }
      console.error("Error logging in user:", errorMessage);

      return {
        success: false,
        message: errorMessage,
        field: "general",
      };
    }
  }
};

export const logoutUser = async () => {
  try {
    const response = await auth.api.signOut();

    console.log("Logout response:", response);

    return { success: true, message: "User logged out successfully." };
  } catch (error) {
    console.error("Error logging out user:", error);
    return {
      success: false,
      message: "Logout failed",
    };
  }
};

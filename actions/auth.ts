"use server";

import { auth } from "@/lib/auth";

export const registerUser = async (_, formData) => {
  if (formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name) {
      return { success: false, message: "Name is required.", field: "name" };
    }

    if (!email) {
      return { success: false, message: "Email is required.", field: "email" };
    }

    if (!password) {
      return {
        success: false,
        message: "Password is required.",
        field: "password",
      };
    }

    try {
      const response = await auth.api.signUpEmail({
        body: { email, password, name, image: null },
      });

      console.log("Registration response:", response);

      return {
        success: true,
        message: "User registered successfully.",
        field: "general",
      };
    } catch (error) {
      console.error("Error registering user:", error.message);

      return {
        success: false,
        message: "User registration failed.",
        field: "general",
      };
    }
  }
};

// Server action to log in a user
export const loginUser = async (_, formData) => {
  if (formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email) {
      return { success: false, message: "Email is required.", field: "email" };
    }

    if (!password) {
      return {
        success: false,
        message: "Password is required.",
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
      console.error("Error logging in user:", error.message);

      return {
        success: false,
        message: error.message || "Login failed.",
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

    return { success: false, message: "Logout failed." };
  }
};

"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/actions/auth";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(registerUser, {
    success: null,
    message: null,
    field: null,
  });
  console.log("Registration state", state, "isPending", isPending);

  useEffect(() => {
    if (state?.success) {
      // Redirect to dashboard on successful login
      router.push("/dashboard");
    }
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className=" text-lg capitalize">
            Create your account
          </CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <FieldGroup className=" gap-4">
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                />
                <FieldError className=" text-xs">
                  {state?.field === "name" ? state.message : null}
                </FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@email.com"
                />
                <FieldError className=" text-xs">
                  {state?.field === "email" ? state.message : null}
                </FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" name="password" type="password" />
                <FieldError className=" text-xs">
                  {state?.field === "password" ? state.message : null}
                </FieldError>
              </Field>
              <Field>
                <FieldError className=" text-xs text-center">
                  {state?.field === "general" ? state.message : null}
                </FieldError>
                <Button
                  type="submit"
                  className=" cursor-pointer"
                  disabled={isPending}
                >
                  {isPending ? "Registering" : "Register"}
                </Button>
                <Button variant="outline" type="button" disabled>
                  Continue with Google
                </Button>
                <FieldDescription className="text-center cursor-pointer">
                  Already have an account? <Link href="/login">Login</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

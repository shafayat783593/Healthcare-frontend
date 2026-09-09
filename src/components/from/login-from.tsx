"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/app/validation";

type LoginFormData = {
  email: string;
  password: string;
};

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as LoginFormData,

    validators: {
      onSubmit: loginSchema,
    },

    onSubmit: async ({ value }) => {
      console.log(value);

      // API call
      // await loginUser(value);
    },
  });

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();

        form.handleSubmit();
      }}
      {...props}
    >
      <FieldGroup>
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Login to your account
          </h1>

          <p className="text-sm text-muted-foreground">
            Enter your email and password to continue
          </p>
        </div>

        {/* Email */}
        <form.Field
          name="email"
          children={(field) => {
            const hasError = field.state.meta.errors.length > 0;

            return (
              <Field className="gap-2">
                <FieldLabel htmlFor={field.name}>
                  Email
                </FieldLabel>

                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  placeholder="m@example.com"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) =>
                    field.handleChange(e.target.value)
                  }
                  className={cn(
                    "h-11 transition-colors",
                    hasError &&
                      "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                  )}
                />

                {hasError && (
                  <div className="flex flex-col gap-1.5">
                    {field.state.meta.errors.map(
                      (error, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-1.5 text-xs font-medium text-red-500"
                        >
                          <AlertCircle className="mt-0.5 size-3.5 shrink-0" />

                          <span>
                            {error?.message ??
                              "Invalid email"}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}
              </Field>
            );
          }}
        />

        {/* Password */}
        <form.Field
          name="password"
          children={(field) => {
            const hasError = field.state.meta.errors.length > 0;

            return (
              <Field className="gap-2">
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor={field.name}>
                    Password
                  </FieldLabel>

                  <button
                    type="button"
                    className="text-xs font-medium text-muted-foreground hover:text-foreground hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Password input */}
                <div className="relative">
                  <Input
                    id={field.name}
                    name={field.name}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                    className={cn(
                      "h-11 pr-11 transition-colors",
                      hasError &&
                        "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
                    )}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </div>

                {/* Password errors */}
                {hasError && (
                  <div className="flex flex-col gap-1.5">
                    {field.state.meta.errors.map(
                      (error, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-1.5 text-xs font-medium text-red-500"
                        >
                          <AlertCircle className="mt-0.5 size-3.5 shrink-0" />

                          <span>
                            {error?.message ??
                              "Invalid password"}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}

                <FieldDescription>
                  Password must be at least 8 characters
                  long.
                </FieldDescription>
              </Field>
            );
          }}
        />

        {/* Submit */}
        <Field>
          <Button
            type="submit"
            className="h-11 w-full"
            disabled={form.state.isSubmitting}
          >
            {form.state.isSubmitting
              ? "Logging in..."
              : "Login"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
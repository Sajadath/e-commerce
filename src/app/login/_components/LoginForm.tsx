"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { z } from "zod";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";

const loginSchema = z.object({
  email: z.string().min(1, "ایمیل را وارد کنید").email("فرمت ایمیل معتبر نیست"),
  password: z
    .string()
    .min(1, "رمز عبور را وارد کنید")
    .min(6, "رمز عبور حداقل ۶ کاراکتر باشد"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

type FieldErrors = Partial<Record<keyof LoginFormValues, string>>;

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [remember, setRemember] = useState(false);

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: LoginFormValues = {
      email: (
        form.elements.namedItem("email") as HTMLInputElement
      ).value.trim(),
      password: (form.elements.namedItem("password") as HTMLInputElement).value,
    };
    const result = loginSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof LoginFormValues;
        if (path && !fieldErrors[path]) fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      toast.error("درحال حاظر امکان ورود وجود ندارد.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch {
      toast.error("ورود ناموفق. دوباره تلاش کنید.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="flex w-full flex-col gap-5"
      noValidate
    >
      <LoginInput
        name="email"
        label="ایمیل"
        type="email"
        autoComplete="email"
        error={errors.email}
      />
      <LoginInput
        name="password"
        label="رمز عبور"
        type="password"
        autoComplete="current-password"
        error={errors.password}
      />
      <div className="flex items-center justify-between text-sm">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="text-lightred focus:ring-lightred h-4 w-4 rounded border-gray-300"
          />
          <span className="text-gray-600">مرا به خاطر بسپار</span>
        </label>
        <Link
          href="/login/forgot-password"
          className="text-lightred hover:text-lightred-hover transition-colors hover:underline"
        >
          فراموشی رمز عبور
        </Link>
      </div>
      <LoginButton loading={loading}>ورود</LoginButton>
      <p className="text-center text-sm text-gray-600">
        حساب کاربری ندارید؟{" "}
        <Link
          href="/register"
          className="text-lightred hover:text-lightred-hover font-medium transition-colors hover:underline"
        >
          ثبت‌نام
        </Link>
      </p>
    </motion.form>
  );
}

export default LoginForm;

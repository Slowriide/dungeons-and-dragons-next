"use server";
import { signIn } from "@/auth.config";
import { sleep } from "@/utils/sleep";
import { AuthError } from "next-auth";

export async function authenticate(formData: FormData) {
  try {
    await sleep(2);
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });
    return "Succes";
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    return "Unknow Error";
  }
}

export const login = async (email: string, password: string) => {
  try {
    await signIn("credentials", { email, password, redirect: false });
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      message: "No se pudo iniciar sesión",
    };
  }
};

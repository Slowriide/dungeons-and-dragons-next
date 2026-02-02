import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }
  return (
    <main className="flex justify-center">
      <div className="w-full md:w-[550px] px-10">{children}</div>
    </main>
  );
}

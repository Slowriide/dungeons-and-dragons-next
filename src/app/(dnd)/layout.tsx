import { auth } from "@/auth.config";
import { MobileMenu } from "@/components/top-menu/MobileMenu";
import { TopMenu } from "@/components/top-menu/TopMenu";
import { useSession } from "next-auth/react";

export default async function DndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <main className="min-h-screen mb-10">
      <div className="hidden lg:flex items-center gap-2">
        <TopMenu />
      </div>
      <div className="flex lg:hidden">
        <MobileMenu session={session} />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="px-0">{children}</div>
      </div>
    </main>
  );
}

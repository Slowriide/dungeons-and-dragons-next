import { auth } from "@/auth.config";
import { MobileMenu } from "@/components/top-menu/MobileMenu";
import { TopMenu } from "@/components/top-menu/TopMenu";

export const dynamic = "force-dynamic";

/**
 * Main application layout for the D&D section.
 *
 * This layout is rendered as a Server Component to allow
 * secure access to the authenticated session before rendering.
 */

export default async function DndLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /**
   * Retrieve the current session on the server.
   * This avoids client-side loading states and keeps auth secure.
   */
  const session = await auth();
  return (
    <main className="min-h-screen mb-10">
      {/* 
        Desktop navigation.
        Rendered only on large screens to avoid duplicate menus.
      */}
      <nav className="hidden lg:flex items-center gap-2">
        <TopMenu />
      </nav>

      {/* 
        Mobile navigation.
        Session is passed explicitly to avoid client-side fetching.
      */}
      <nav className="flex lg:hidden">
        <MobileMenu session={session} />
      </nav>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        <div className="px-0">{children}</div>
      </div>
    </main>
  );
}

import { auth } from "@/auth.config";
import { CreateCharacterSteps } from "../ui/steps/CreateCharacterSteps";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function CreateCharacterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch the current user session
  const session = await auth();

  /**
   * Guard route:
   * If the user is not authenticated, redirect them to the
   * start-adventure page and preserve the intended destination.
   */
  if (!session?.user?.id) {
    redirect("/start-adventure?next=/characters");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Step indicator / progress navigation for character creation */}
        <CreateCharacterSteps />

        {/* Render the current step page */}
        {children}
      </div>
    </div>
  );
}

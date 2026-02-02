import { auth } from "@/auth.config";
import { CreateCharacterSteps } from "../ui/CreateCharacterSteps";
import { redirect } from "next/navigation";

export default async function CreateCharacterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/start-adventure?next=/characters");
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10">
        <CreateCharacterSteps />
        {children}
      </div>
    </div>
  );
}

import { CreateCharacterSteps } from "../ui/CreateCharacterSteps";

export default function CreateCharacterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-10">
        <CreateCharacterSteps />
        {children}
      </div>
    </div>
  );
}

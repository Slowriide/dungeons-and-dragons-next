import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusIcon, SparklesIcon } from "lucide-react";

export const EmptyCharactersState = () => {
  return (
    <Card className="flex flex-col items-center justify-center p-10 text-center space-y-4 border-dashed">
      <SparklesIcon className="w-10 h-10 text-muted-foreground" />

      <h2 className="text-xl font-semibold">
        Your adventure hasn’t started yet
      </h2>

      <p className="text-sm text-muted-foreground max-w-sm">
        You don’t have any characters yet. Create your first hero and begin your
        journey.
      </p>

      <Button asChild className="bg-red-600 hover:bg-red-700">
        <Link href="/characters/create-character/basic">
          <PlusIcon className="mr-2 h-4 w-4" />
          Create character
        </Link>
      </Button>
    </Card>
  );
};

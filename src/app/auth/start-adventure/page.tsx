import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  searchParams: {
    next: string;
  };
}

export default async function StartAdventurePage({ searchParams }: Props) {
  const { next: nextString } = await searchParams;

  const next = nextString ?? "/";

  return (
    <div className="flex h-screen items-center justify-center -m-14">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-3xl font-bold">Start your adventure</h1>
        <p className="text-muted-foreground">
          Log in or create an account to start creating your character.
        </p>

        <div className="flex gap-4 justify-center">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href={`/auth/login?next=${next}`}>Log in</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href={`/auth/register?next=${next}`}>Sign up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { signOut } from "next-auth/react";
import { Button } from "./button";
import { Loader2, LogOutIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import useDNDCharacterStore from "@/store/characte.store";

interface Props {
  isActive: boolean;
  className?: string;
}

/**
 * Logout button used in the top navigation.
 *
 * Handles:
 * - User sign out with next-auth
 * - Client-side store cleanup
 * - UI loading state to prevent double clicks
 * - Manual redirect after logout
 */
export const LogoutButton = ({ isActive, className }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Reset character-related client state on logout
  const { resetCharacter } = useDNDCharacterStore();

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      // Clear client-side character data before logging out
      resetCharacter();

      // Sign out without automatic redirect
      await signOut({
        redirect: false,
      });

      // Manually redirect to home and refresh the app state
      startTransition(() => {
        router.push("/");
        router.refresh();
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={`w-[110px] cursor-pointer ${className ?? ""}`}
      onClick={handleLogout}
      disabled={isLoading}
      aria-label="Log out"
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <LogOutIcon className="mr-2 h-4 w-4 " />
      )}
      Logout
    </Button>
  );
};

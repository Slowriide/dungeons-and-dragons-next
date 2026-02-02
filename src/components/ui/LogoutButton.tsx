"use client";

import { signOut } from "next-auth/react";
import { Button } from "./button";
import { Loader2, LogOutIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useDNDCharacterStore from "@/store/characte.store";

interface Props {
  isActive: boolean;
  className?: string;
}

export const LogoutButton = ({ isActive, className }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { resetCharacter } = useDNDCharacterStore(); // Si quieres limpiar el store

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      resetCharacter();

      await signOut({
        redirect: false,
      });

      router.push("/");
      router.refresh();
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

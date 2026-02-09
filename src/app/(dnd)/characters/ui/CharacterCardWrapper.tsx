"use client";

import { useState, useTransition } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../../../components/ui/context-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../../components/ui/alert-dialog";
import { Trash2Icon } from "lucide-react";
import { CharactersCard } from "./CharactersCard";
import { CharacterListItem } from "./CharactersGrid";
import { deleteCharacter } from "@/actions/characters";
import { toast } from "sonner";

interface Props {
  character: CharacterListItem;
}

/**
 * CharacterCardWrapper
 *
 * Responsibilities:
 * - Wraps the character card with a context menu
 * - Handles destructive actions (delete) with confirmation
 * - Keeps UI concerns separate from card presentation
 */

export const CharacterCardWrapper = ({ character }: Props) => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  /**
   * Handles character deletion with optimistic UI updates.
   */
  const handleDelete = () => {
    startTransition(async () => {
      try {
        const result = await deleteCharacter(character.id);

        if (!result.ok) {
          toast.error(result.message || "Failed to delete character");
          return;
        }

        toast.success("Character deleted successfully");
        setOpen(false);
      } catch (error) {
        console.error("Delete error:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    });
  };

  return (
    <>
      {/* Context Menu Wrapper */}
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div
            className="select-none"
            aria-label={`Character card for ${character.name}`}
          >
            <CharactersCard character={character} />
          </div>
        </ContextMenuTrigger>

        {/* Context Menu Content */}
        <ContextMenuContent className="w-48">
          <ContextMenuItem
            className="text-destructive focus:text-destructive"
            onSelect={() => setOpen(true)}
          >
            <Trash2Icon className="mr-2 h-4 w-4" />
            Delete character
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {character.name}?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This character will be permanently
              deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground"
              onClick={handleDelete}
              disabled={isPending}
            >
              {isPending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

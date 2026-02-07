"use client";

import { useState } from "react";
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

interface Props {
  character: CharacterListItem;
}

export const CharacterCardWrapper = ({ character }: Props) => {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    await deleteCharacter(character.id);
  };

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="select-none">
            <CharactersCard character={character} />
          </div>
        </ContextMenuTrigger>

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
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground"
              onClick={handleDelete}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

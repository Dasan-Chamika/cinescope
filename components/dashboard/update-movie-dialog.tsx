"use client";

import type { WithId, Document } from "mongodb";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import UpdateMovieForm from "./update-movie-form";

type UpdateMovieDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  movie?: WithId<Document>;
};

export default function UpdateMovieDialog({
  open,
  onOpenChange,
  movie,
}: UpdateMovieDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[37.5rem]">
        <DialogHeader>
          <DialogTitle>Update Movie</DialogTitle>
          <DialogDescription>
            Fill in the details to update the movie.
          </DialogDescription>
        </DialogHeader>
        <UpdateMovieForm showDialog={onOpenChange} movie={movie} />
      </DialogContent>
    </Dialog>
  );
}

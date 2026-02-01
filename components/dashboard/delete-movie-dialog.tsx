import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { WithId, Document } from "mongodb";

type DeleteMovieDialogProps = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  onConfirmDelete?: (id: string) => Promise<void>;
  isLoading?: boolean;
  movie: WithId<Document>;
};

export function DeleteMovieDialog({
  open,
  onOpenChange,
  onConfirmDelete,
  isLoading,
  movie,
}: DeleteMovieDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Delete Movie</DialogTitle>
          <DialogDescription className=" text-sm text-gray-500 my-5 text-center text-balance">
            Are you sure you want to delete this movie?{" "}
            <strong>
              {movie?.title ?? "N/A"} ({movie?.year ?? "N/A"})
            </strong>
            <br />
            <span className=" text-xs text-orange-600">
              This action cannot be undone.
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" disabled={isLoading}>
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={() => onConfirmDelete?.(movie.id)}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

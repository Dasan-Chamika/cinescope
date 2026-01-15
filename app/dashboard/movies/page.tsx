import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import MovieSelectors from "./movie-selectors";
import MovieData from "./movie-data";

export default function MoviesDashboardPage() {
  return (
    <div className="space-y-4">
      <div className=" flex justify-between items-center">
        <div>
          <h2 className=" text-3xl font-bold tracking-tight">Movies</h2>
          <p className=" text-muted-foreground">Manage your movie catalog</p>
        </div>

        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Movie
        </Button>
      </div>

      {/* Movie Selectors */}
      <MovieSelectors />

      {/* Movie data Table */}
      <MovieData />
    </div>
  );
}

import { Fragment } from "react";
import { getMovies } from "@/actions/movies";
import MovieCard, { MovieCardSkeleton } from "./movie-card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function MoviesList() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const movies = await getMovies();
  console.log("Fetched movies:", movies);

  if (!movies || movies.length === 0) {
    return (
      <div className="text-red-600 text-center py-12">No movies found!</div>
    );
  }

  return (
    <Fragment>
      <div className="text-muted-foreground text-sm">
        Showing {movies.length} of 100 movies
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </Fragment>
  );
}

export function MoviesListSkeleton() {
  return (
    <>
      <Skeleton className="h-4 w-56" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
      </div>
    </>
  );
}

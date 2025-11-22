import { getMovies } from "@/actions/movies";
import MovieCard from "./movie-card";

export default async function MoviesList() {
  const movies = await getMovies();
  console.log("Fetched Movies", movies, typeof movies);

  if (!movies || movies.length === 0) {
    return (
      <div className=" text-red-600 text-center py-12">
        No movies available.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Movie Search Filter */}
      <div className=" w-full h-[122px] bg-purple-400 rounded-lg mb-6"></div>

      <div className="text-muted-foreground text-sm">
        Showing {movies.length} of 100 movies
      </div>

      <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))} */}
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

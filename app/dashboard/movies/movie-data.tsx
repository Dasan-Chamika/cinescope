import { getMovies } from "@/actions/movies";
import { MoviesTable } from "./movies-table";
import { Movie } from "./type";

export default async function MovieData() {
  try {
    // fetch movies data from the server
    const movies: Array<Movie> = await getMovies();

    if (!movies.length) {
      throw new Error("No movies found in the database.");
    }

    return <MoviesTable movies={movies} />;
  } catch (error) {
    return <div>No Movies Available!</div>;
  }
}

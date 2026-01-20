import { searchMovies } from "@/actions/movies";
import { MoviesTable } from "./movies-table";
// import { Movie } from "./type";

export default async function MovieData() {
  try {
    // fetch movies data from the server
    const { success, data } = await searchMovies("");

    if (!success) throw new Error("No movies found in the database.");

    return <MoviesTable movies={data} />;
  } catch (error) {
    return <div>No Movies Available!</div>;
  }
}

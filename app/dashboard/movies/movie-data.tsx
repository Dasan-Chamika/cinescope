import { searchMovies } from "@/actions/movies";
import { MoviesTable } from "./movies-table";

type MovieDataProps = {
  query?: string;
};

export default async function MovieData({ query = "" }: MovieDataProps) {
  try {
    // fetch movies data from the server
    const { success, data } = await searchMovies(query);

    if (!success) throw new Error("No movies found in the database.");

    const refinedData = data.map((movie) => ({
      id: movie._id.toString(),
      title: movie.title,
      year: movie.year,
      plot: movie.plot,
      rated: movie.rated,
      genres: movie.genres,
      poster: movie.poster,
      backdrop: movie.backdrop,
      imdb: movie.imdb,
      runtime: movie.runtime,
      status: movie.status ?? "published",
      directors: movie.directors,
    }));

    return <MoviesTable movies={refinedData} />;
  } catch {
    return <div>No Movies Available!</div>;
  }
}

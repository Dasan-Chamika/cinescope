import { searchMovies } from "@/actions/movies";
import { MovieTable } from "./movie-table";

type MovieDataProps = {
  query?: string;
};

export default async function MovieData({ query = "" }: MovieDataProps) {
  try {
    // Fetch movies data from the server
    const { data, success } = await searchMovies(query);

    if (!success) throw new Error("No movies found in the database.");

    // console.log("Movies fetched:", data);

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

    return <MovieTable movies={refinedData} />;
  } catch {
    return <div>No Movies Available!</div>;
  }
}

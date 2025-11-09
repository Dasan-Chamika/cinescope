import MovieCard from "./movie-card";

const MOVIES = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    rating: 8.8,
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    rating: 9.0,
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    releaseYear: 2014,
    rating: 8.6,
  },
  {
    id: 4,
    title: "Mortal Combat",
    genre: "Action",
    releaseYear: 2024,
    rating: 8.9,
  },
];

export default function MoviesList() {
  return (
    <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {MOVIES.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

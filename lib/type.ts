export type Movie = {
  id: string;
  title: string;
  year: number;
  plot: string;
  rated: string;
  runtime: number;
  genres: string[];
  status: string;
  poster: string;
  backdrop: string;
  directors: string;
  imdb: {
    id: string;
    rating: number;
    votes: number;
  };
};

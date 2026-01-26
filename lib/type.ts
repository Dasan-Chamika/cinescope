export type Movie = {
  id: number;
  title: string;
  year: number;
  genres: string[];
  imdb: {
    rating: number;
  };
  status: string;
  poster?: string;
};

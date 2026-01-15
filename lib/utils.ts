import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAllYears(): string[] {
  return Array.from({ length: 100 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );
}

export function getAllGenres(): string[] {
  return [
    "Action",
    "Adventure",
    "Sci-Fi",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western",
  ];
}

export function getAllStatuses(): string[] {
  return ["published", "draft", "archived"];
}

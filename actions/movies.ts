"use server";

import { db } from "@/db";

// get a  list of movies from db
export async function getMovies() {
  try {
    const moviesResponse = await fetch(
      `${process.env.API_BASE_URL}/v1/movies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!moviesResponse.ok) {
      throw new Error(`HTTP error! status: ${moviesResponse.status}`);
    }

    if (moviesResponse.status === 200) {
      return await moviesResponse.json();
    } else {
      console.error("No movies found or error occurred.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export async function searchMovies(query: string) {
  try {
    const movies = await db
      .collection("movies")
      .find({ title: { $regex: query, $options: "i" } }) // case-insensitive search
      .limit(50)
      .toArray();

    if (movies && movies.length > 0) {
      return {
        success: true,
        message: `${movies.length} movies found.`,
        data: movies,
      };
    } else {
      return {
        success: false,
        message: `No movies found matching "${query}".`,
        data: [],
      };
    }
  } catch (error) {
    console.log("MongoDB query error:", error);
    return {
      success: false,
      message: "An error occurred while searching for movies.",
      data: [],
    };
  }
}

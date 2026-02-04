"use server";

import { ObjectId } from "mongodb";
import { db } from "@/db";
import { MovieCreate } from "@/lib/type";

// Get a list of movies from the database
export async function getMovies() {
  try {
    const moviesResponse = await fetch(
      `${process.env.API_BASE_URL}/v1/movies`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${process.env.API_KEY}`,
        },
        cache: "no-store",
      },
    );

    if (!moviesResponse.ok) {
      throw new Error(`HTTP error! status: ${moviesResponse.status}`);
    }

    if (moviesResponse.status === 200) {
      return await moviesResponse.json();
    } else {
      console.log("No movies found or error occurred.");
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
      .collection("movies_new")
      .find({ title: { $regex: query, $options: "i" } }) // Case-insensitive search
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
        message: "No movies found matching your query.",
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

export async function createMovie(movie: MovieCreate) {
  try {
    const result = await db.collection("movies_new").insertOne(movie);

    if (result.acknowledged) {
      return {
        success: true,
        message: "Movie created successfully.",
      };
    } else {
      return {
        success: false,
        message: "Failed to create movie.",
      };
    }
  } catch (error) {
    console.log("MongoDB insert error:", error);
    return {
      success: false,
      message: "An error occurred while creating the movie.",
    };
  }
}

export async function updateMovie(id: string, movie: MovieCreate) {
  try {
    const result = await db
      .collection("movies_new")
      .updateOne(
        { _id: ObjectId.createFromHexString(id) },
        { $set: movie },
        { upsert: false },
      );

    if (result.acknowledged) {
      return {
        success: true,
        message: "Movie updated successfully.",
      };
    } else {
      return {
        success: false,
        message: "Failed to update movie.",
      };
    }
  } catch (error) {
    console.log("MongoDB insert error:", error);
    return {
      success: false,
      message: "An error occurred while updating the movie.",
    };
  }
}

export const deleteMovie = async (id: string) => {
  try {
    const result = await db
      .collection("movies_new")
      .deleteOne({ _id: ObjectId.createFromHexString(id) });

    if (result.acknowledged) {
      return {
        success: true,
        message: "Movie deleted successfully!",
      };
    } else {
      return {
        success: false,
        message: "Failed to delete movie.",
      };
    }
  } catch (error) {
    console.log("MongoDB delete error:", error);
    return {
      success: false,
      message: "An error occurred while deleting the movie.",
    };
  }
};

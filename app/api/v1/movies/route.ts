import { NextResponse } from "next/server";
import { db } from "@/db";

// GET /api/v1/movies
export const GET = async () => {
  try {
    const movies = await db
      .collection("movies")
      .find()
      //   .sort({ metacritic: -1 })
      .limit(50)
      .toArray()
      .catch((err) => {
        console.error("Database query error:", err);
        return [];
      });
    return NextResponse.json(movies);
  } catch (error) {
    console.error("Error fetching movies from db:", error);
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );
  }
};

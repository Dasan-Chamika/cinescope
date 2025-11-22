"use server";

// get a  list of movies from db
export const getMovies = async () => {
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
};

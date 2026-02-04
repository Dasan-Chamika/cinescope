"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { WithId, Document } from "mongodb";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DialogFooter } from "@/components/ui/dialog";
import { getAllGenres, getAllStatuses, getAllYears } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { updateMovie } from "@/actions/movies";

type AddMovieFormProps = {
  showDialog: (value: boolean) => void;
  movie?: WithId<Document>;
};

export default function UpdateMovieForm({
  showDialog,
  movie,
}: AddMovieFormProps) {
  // console.log("Movie in UpdateMovieForm:", movie);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    title: movie?.title || "",
    year: movie?.year || "",
    director: movie?.directors?.at(0) || "",
    genre: movie?.genres?.at(0) || "",
    rating: movie?.imdb?.rating || "",
    runtime: movie?.runtime || "",
    overview: movie?.plot || "",
    poster: movie?.poster || "",
    backdrop: movie?.backdrop || "",
    status: movie?.status || "",
  });
  const years = getAllYears();
  const genres = getAllGenres();
  const statuses = getAllStatuses();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const movieDoc = {
      title: formData.get("title"),
      year: formData.get("year"),
      directors: [formData.get("director")],
      genres: [formData.get("genre")],
      imdb: { rating: Number(formData.get("rating")) },
      runtime: formData.get("runtime"),
      plot: formData.get("overview"),
      poster: formData.get("poster"),
      backdrop: formData.get("backdrop"),
      status: formData.get("status"),
      lastUpdated: new Date().toISOString(),
    };

    setIsSubmitting(true);

    try {
      const response = await updateMovie(movie.id, movieDoc);

      if (response.success) {
        router.refresh();
        showDialog(false);
      }
    } catch {
      console.log("Error creating movie");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">
            Title<span className="text-red-500">*</span>
          </Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Movie title"
            value={formState.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">
            Year<span className="text-red-500">*</span>
          </Label>
          <Select
            name="year"
            required
            onValueChange={(value) =>
              setFormState((prev) => ({ ...prev, year: value }))
            }
            value={formState.year}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year, index) => (
                <SelectItem key={`${year}-${index}`} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="director">Director</Label>
          <Input
            id="director"
            name="director"
            type="text"
            placeholder="Director name"
            value={formState.director}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="genre">
            Genre<span className="text-red-500">*</span>
          </Label>
          <Select
            name="genre"
            required
            value={formState.genre}
            onValueChange={(value) =>
              setFormState((prev) => ({ ...prev, genre: value }))
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {genres.map((genre, index) => (
                  <SelectItem key={`${genre}-${index}`} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="rating">
            IMDb Rating<span className="text-red-500">*</span>
          </Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            placeholder="IMDb Rating (0-10)"
            min="0"
            max="10"
            step="0.1"
            value={formState.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="runtime">
            Runtime<span className="text-red-500">*</span>
          </Label>
          <Input
            id="runtime"
            name="runtime"
            placeholder="Runtime in minutes"
            type="number"
            max="1000"
            min="0"
            step="1"
            value={formState.runtime}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="overview">Overview</Label>
        <Textarea
          id="overview"
          name="overview"
          placeholder="Movie description"
          className="h-[6.25rem]"
          value={formState.overview}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="poster">
            Poster URL<span className="text-red-500">*</span>
          </Label>
          <Input
            id="poster"
            name="poster"
            type="url"
            placeholder="URL to movie poster image"
            value={formState.poster}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="backdrop">
            <span className="text-red-500">*</span>Backdrop URL
          </Label>
          <Input
            id="backdrop"
            name="backdrop"
            type="url"
            placeholder="URL to movie backdrop image"
            value={formState.backdrop}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">
            Status<span className="text-red-500">*</span>
          </Label>
          <Select
            name="status"
            required
            value={formState.status}
            onValueChange={(value) =>
              setFormState((prev) => ({ ...prev, status: value }))
            }
          >
            <SelectTrigger className="w-full capitalize">
              <SelectValue placeholder="Please select status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status, index) => (
                <SelectItem
                  key={`${status}-${index}`}
                  value={status}
                  className="capitalize"
                >
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <DialogFooter>
        <Button
          type="reset"
          variant="outline"
          className="min-w-[6.375rem]"
          disabled={isSubmitting}
          onClick={() => showDialog(false)}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="min-w-[6.375rem]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating..." : "Update Movie"}
        </Button>
      </DialogFooter>
    </form>
  );
}

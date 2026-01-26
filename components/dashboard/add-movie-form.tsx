"use client";

import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  // SelectGroup,
  SelectItem,
  //   SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllGenres, getAllStatuses, getAllYears } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { createMovie } from "@/actions/movies";
import { WithoutId, Document } from "mongodb";

export default function AddMovieForm() {
  const years = getAllYears();
  const genres = getAllGenres();
  const statuses = getAllStatuses();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const movie: WithoutId<Document> = {
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

    try {
      const response = await createMovie(movie);

      if (response.success) {
        //
      }
    } catch (error) {
      //
    }
  };

  return (
    <form className=" space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className=" space-y-2">
          <Label htmlFor="title">
            Title <span className="text-red-500">*</span>
          </Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Movie title"
            required
          />
        </div>
        <div className=" space-y-2">
          <Label htmlFor="year">
            Year <span className="text-red-500">*</span>
          </Label>
          <Select name="year" required>
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
        <div className=" space-y-2">
          <Label htmlFor="director">Director</Label>
          <Input
            id="director"
            name="director"
            type="text"
            placeholder="Movie director"
          />
        </div>
        <div className=" space-y-2">
          <Label htmlFor="genre">
            Genre <span className="text-red-500">*</span>
          </Label>
          <Select name="genre" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select genre" />
            </SelectTrigger>
            <SelectContent>
              {genres.map((genre, index) => (
                <SelectItem key={`${genre}-${index}`} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className=" space-y-2">
          <Label htmlFor="rating">
            IMDb Rating <span className="text-red-500">*</span>
          </Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            step="0.1"
            min="0"
            max="10"
            placeholder="IMDB Rating (0-10)"
            required
          />
        </div>
        <div className=" space-y-2">
          <Label htmlFor="runtime">
            Runtime <span className="text-red-500">*</span>
          </Label>
          <Input
            id="runtime"
            name="runtime"
            type="number"
            step="1"
            min="0"
            max="1000"
            placeholder="Runtime in minutes"
            required
          />
        </div>
      </div>

      <div className=" space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Movie description"
          className=" h-[6.25rem]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className=" space-y-2">
          <Label htmlFor="poster">
            Poster URL <span className="text-red-500">*</span>
          </Label>
          <Input
            id="poster"
            name="poster"
            type="url"
            placeholder="URL to movie poster image"
          />
        </div>
        <div className=" space-y-2">
          <Label htmlFor="backdrop">
            Backdrop URL <span className="text-red-500">*</span>
          </Label>
          <Input
            id="backdrop"
            name="backdrop"
            type="url"
            placeholder="URL to movie backdrop image"
            required
          />
        </div>
        <div className=" space-y-2">
          <Label htmlFor="status">
            Status <span className="text-red-500">*</span>
          </Label>
          <Select name="status" required>
            <SelectTrigger className="w-full capitalize">
              <SelectValue placeholder="Please select status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status, index) => (
                <SelectItem
                  key={`${status}-${index}`}
                  value={status}
                  className=" capitalize"
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
          onClick={() => {}}
        >
          Cancel
        </Button>
        <Button type="submit" className="min-w-[6.375rem]">
          Add Movie
        </Button>
      </DialogFooter>
    </form>
  );
}

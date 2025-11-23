"use client";
import {
  Card,
  //   CardAction,
  CardContent,
  //   CardDescription,
  CardFooter,
  //   CardHeader,
  //   CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type MovieCardProps = {
  movie: {
    _id: string;
    title: string;
    genres: string[];
    year: number;
    imdb: {
      rating: number;
    };
    poster?: string;
    runtime: number;
  };
};

export default function MovieCard({ movie }: MovieCardProps) {
  const [postUrl, setPostUrl] = useState(movie.poster);
  return (
    <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 gap-2 transition-colors">
      <div className=" aspect-2/3 w-full overflow-hidden">
        <Image
          src={postUrl || "/placeholder.svg"}
          alt={movie.title}
          width={300}
          height={450}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          priority
          onError={() => setPostUrl("/placeholder.svg")}
        />
      </div>

      <CardContent className="p-4">
        <h3 className="line-clamp-1 font-semibold">{movie.title}</h3>
        {/* If the title length is more than one line, the line-clamp-1 class will force it to stay in a single row. */}
        <p className="text-muted-foreground text-sm">
          {/* {movie.year} &#8226; {movie.genres.join(", ")} &#8226; ⭐{" "}
          {movie.imdb.rating} */}
          {movie.year} • {movie.runtime} min
        </p>
        <div className=" mt-2 flex flex-wrap gap-1">
          {movie.genres.slice(0, 2).map((genre, index) => (
            <Badge
              key={`genre-${index}`}
              variant="outline"
              className="border-primary/30 bg-primary/5 text-xs rounded-sm"
            >
              {genre}
            </Badge>
          ))}

          {movie.genres.length > 2 && (
            <Badge
              className="border-primary/30 bg-primary/5 text-xs rounded-sm"
              variant="outline"
            >
              +{movie.genres.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className=" flex justify-between p-4 pt-0">
        <div className=" flex items-center">
          <span className="text-primary text-sm font-medium">
            ⭐ {movie.imdb.rating}/10
          </span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="hover:text-primary border border-primary/20"
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}

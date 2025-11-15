import {
  Card,
  //   CardAction,
  CardContent,
  //   CardDescription,
  //   CardFooter,
  //   CardHeader,
  //   CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type MovieCardProps = {
  movie: {
    id: number;
    title: string;
    genre: string;
    releaseYear: number;
    rating: number;
    posterUrl?: string;
  };
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 gap-0 transition-colors">
      <div className=" aspect-2/3 w-full overflow-hidden">
        <Image
          src={movie?.posterUrl || "/placeholder.svg"}
          alt={movie.title}
          width={300}
          height={450}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>

      <CardContent className="p-4">
        <h3 className="line-clamp-1 font-semibold">{movie.title}</h3>{" "}
        {/* If the title length is more than one line, the line-clamp-1 class will force it to stay in a single row. */}
        <p className="text-muted-foreground text-sm">
          {movie.releaseYear} &#8226; {movie.genre} &#8226; ⭐ {movie.rating}
        </p>
      </CardContent>
    </Card>
  );
}

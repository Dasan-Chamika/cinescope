import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { ModeToggle } from "./mode-toggle";

export function MainNav() {
  return (
    <header className="border-b border-primary/20 bg-background sticky top-0 z-50 w-full">
      <div className="container mx-auto max-w-[87.5rem] px-8 flex h-16 items-center ">
        <Link href="/" className=" flex items-center gap-2">
          <Logo />
          <span className="text-primary text-xl font-bold">CineScope</span>
        </Link>

        <nav className="ml-auto flex items-center gap-4 font-medium">
          <Link href="/movies">Movies</Link>
          <Link href="/genres">Genres</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Admin</Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

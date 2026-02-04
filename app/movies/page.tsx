import Link from "next/link";
import { MainNav } from "@/components/main-nav";

export default function MoviesPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <MainNav />
      <main className="flex flex-col justify-center items-center gap-4 flex-12 bg-purple-400 text-4xl py-16">
        This is Movies Page
        <Link href="/" className="text-white text-sm bg-black p-4 rounded-full">
          Go to Home Page
        </Link>
      </main>
    </div>
  );
}

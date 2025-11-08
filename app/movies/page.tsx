// RSC - React Server Component
import { MainNav } from "@/components/main-nav";
import Link from "next/link";

// SSR - Enabled by default
export default function MoviesPage() {
  return (
    <div className=" min-h-screen flex flex-col">
      <MainNav />
      <main className=" flex-12 bg-purple-400 text-4xl py-16 flex flex-col justify-center items-center gap-4">
        This is Movies Page
        <Link href="/" className="text-white bg-black p-4 rounded-full text-sm">
          Go to Home Page
        </Link>
      </main>
    </div>
  );
}

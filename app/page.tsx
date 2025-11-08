// RSC - React Server Component
// SSR - Enabled by default import MainNav from "@/components/main-nav";

import MainNav from "@/components/main-nav";
import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className=" min-h-screen flex flex-col">
      <MainNav />
      <main className=" flex-12 text-4xl py-16 flex flex-col justify-center items-center gap-4">
        This is Home Page
        <Link
          href="/movies"
          className="text-white bg-black p-4 rounded-full text-sm"
        >
          Go to Movies Page
        </Link>
        <div>
          <Image
            src="/assets/naming-conventions.png"
            alt="Naming Conventions"
            width={800}
            height={500}
          />
        </div>
      </main>
    </div>
  );
}

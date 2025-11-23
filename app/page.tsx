// RSC - React Server Component
// SSR - Enabled by default import MainNav from "@/components/main-nav";

import FeaturedMovies from "@/components/landing/featured-movies";
import HeroBanner from "@/components/landing/hero-banner";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/shared/footer";
export default function HomePage() {
  return (
    <div className=" min-h-screen flex flex-col relative">
      <MainNav />
      <main className="">
        <HeroBanner />
        <FeaturedMovies />
      </main>
      <Footer />
    </div>
  );
}

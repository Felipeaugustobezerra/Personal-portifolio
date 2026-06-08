import { Navbar } from "@/components/layout/navbar";

import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
}
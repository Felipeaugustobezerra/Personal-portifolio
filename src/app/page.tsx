import { Navbar } from "@/components/layout/navbar";

import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from '@/components/sections/experience';
import { Roadmap } from '@/components/sections/roadmap';

import { Footer } from '@/components/layout/footer';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Roadmap />
        <Contact />
      </main>
      <Footer/>
    </>
  );
}
import Image from "next/image";

import { projects } from "@/content/projects";
import { Container } from "../layout/container";
import { Reveal } from '../ui/reveal';

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32"
    >
      <Container>
        <div className="mb-20">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-red-500
            "
          >
            Projetos
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-black
              text-white
              md:text-5xl
            "
          >
            Trabalhos Recentes
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-zinc-400
            "
          >
            Alguns dos projetos que desenvolvi
            utilizando React, Next.js, TypeScript e
            outras tecnologias modernas.
          </p>
        </div>

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <Reveal key={project.title}>
            <article
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-4xl
                border
                border-white/10
                bg-[#101010]
                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-red-500/40
                hover:shadow-[0_0_40px_rgba(239,68,68,.15)]
              "
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    left-4
                    top-4

                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/10

                    bg-black/70

                    text-sm
                    font-bold
                    text-white

                    backdrop-blur-md
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    line-clamp-3
                    text-sm
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {project.description}
                </p>

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="
                        rounded-full

                        border
                        border-red-500/20

                        bg-red-500/10

                        px-3
                        py-1

                        text-xs
                        font-medium

                        text-red-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-5
                  "
                >
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        text-sm
                        font-semibold
                        text-red-400

                        transition-colors

                        hover:text-red-300
                      "
                    >
                      Demo →
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        text-sm
                        font-semibold
                        text-zinc-300

                        transition-colors

                        hover:text-white
                      "
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
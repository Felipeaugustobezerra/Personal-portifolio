import Image from "next/image";

import { projects } from "@/content/projects";
import { Container } from "../layout/container";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-zinc-200 py-24"
    >
      <Container>
        <div className="mb-16">
          <span className="text-sm font-medium text-zinc-500">
            PROJETOS
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Projetos em destaque
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-600">
            Alguns projetos desenvolvidos utilizando
            React, Next.js, TypeScript e outras
            tecnologias modernas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-zinc-200"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-zinc-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-zinc-900 px-5 py-2 text-white"
                    >
                      Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border px-5 py-2"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
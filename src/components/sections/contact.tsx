import { socials } from "@/content/socials";
import { Container } from "../layout/container";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-200 py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-medium text-zinc-500">
            CONTATO
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Vamos trabalhar juntos
          </h2>

          <p className="mt-6 text-zinc-600">
            Estou disponível para oportunidades
            como Desenvolvedor Front-End e projetos
            freelancer.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-6 py-3"
            >
              GitHub
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-6 py-3"
            >
              LinkedIn
            </a>

            <a
              href={socials.email}
              className="rounded-full border px-6 py-3"
            >
              E-mail
            </a>

            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-zinc-900 px-6 py-3 text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
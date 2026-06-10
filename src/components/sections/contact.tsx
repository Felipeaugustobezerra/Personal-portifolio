import { ArrowUpRight } from "lucide-react";


import { Container } from "../layout/container";
import { socials } from "@/app/types/socials";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32"
    >
      <Container>
        <div
          className="
            relative
            overflow-hidden

            rounded-[40px]

            border
            border-white/10

            bg-[#101010]

            px-8
            py-20

            md:px-16
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              right-0
              top-0

              h-[400px]
              w-[400px]

              rounded-full

              bg-red-500/10

              blur-[150px]
            "
          />

          <div className="relative z-10">
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]

                text-red-500
              "
            >
              Contact
            </span>

            <h2
              className="
                mt-6

                max-w-4xl

                text-5xl
                font-black

                leading-tight

                text-white

                md:text-7xl
              "
            >
              Tem um projeto
              <br />
              em mente?
            </h2>

            <p
              className="
                mt-8

                max-w-2xl

                text-lg

                leading-relaxed

                text-zinc-400
              "
            >
              Estou disponível para oportunidades
              como Front-End Developer e também para
              projetos freelancer utilizando React,
              Next.js e TypeScript.
            </p>

            <div
              className="
                mt-12

                flex
                flex-wrap

                gap-4
              "
            >
              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-red-500

                  px-8
                  py-4

                  font-semibold

                  text-white

                  transition-all

                  hover:bg-red-600
                "
              >
                WhatsApp

                <ArrowUpRight size={18} />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-white/10

                  px-8
                  py-4

                  font-semibold

                  text-white

                  transition-all

                  hover:border-red-500
                "
              >
                LinkedIn

                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
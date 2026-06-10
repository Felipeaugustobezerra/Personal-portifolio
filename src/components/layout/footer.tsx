
import {FaGithubSquare ,FaLinkedin} from "react-icons/fa";
import { socials } from "@/app/types/socials";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div
          className="
            flex
            flex-col

            gap-6

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <h3
              className="
                text-xl
                font-bold

                text-white
              "
            >
              Felipe Augusto
            </h3>

            <p className="mt-2 text-zinc-500">
              React & Next.js Developer
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="
                text-zinc-500

                transition-colors

                hover:text-red-500
              "
            >
              <FaGithubSquare size={22} />
            </a>

            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="
                text-zinc-500

                transition-colors

                hover:text-red-500
              "
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <div
          className="
            mt-8

            border-t
            border-white/10

            pt-8

            text-sm

            text-zinc-500
          "
        >
          © {new Date().getFullYear()} Felipe Augusto.
          Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
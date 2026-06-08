import { roadmap } from "@/content/roadmap";
import { Container } from "../layout/container";

export function Roadmap() {
  return (
    <section
      id="roadmap"
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
            Roadmap
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
            O que estou estudando atualmente
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-zinc-400
            "
          >
            Tecnologias e conceitos que fazem parte
            do meu plano de evolução como desenvolvedor.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {roadmap.map((item) => (
            <article
              key={item.title}
              className="
                group

                rounded-[32px]

                border
                border-white/10

                bg-[#101010]

                p-8

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-red-500/40
                hover:shadow-[0_0_40px_rgba(239,68,68,.15)]
              "
            >
              <div
                className="
                  mb-6

                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-2xl

                  bg-red-500/10

                  text-xl
                  font-bold

                  text-red-500
                "
              >
                ✓
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  leading-relaxed
                  text-zinc-400
                "
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
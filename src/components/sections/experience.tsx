import { experience } from "@/content/experience";
import { Container } from "../layout/container";

export function Experience() {
  return (
    <section
      id="experience"
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
            Experience
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
            Minha Experiência
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-zinc-400
            "
          >
            Minha trajetória profissional e acadêmica
            dentro da área de tecnologia.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-px
              bg-red-500/30
            "
          />

          <div className="space-y-12">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.year}`}
                className="relative pl-16"
              >
                <div
                  className="
                    absolute
                    left-0
                    top-1

                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-red-500/30

                    bg-red-500/10
                  "
                >
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                </div>

                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-widest
                    text-red-500
                  "
                >
                  {item.year}
                </span>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    font-medium
                    text-zinc-300
                  "
                >
                  {item.company}
                </p>

                <p
                  className="
                    mt-3
                    max-w-2xl
                    leading-relaxed
                    text-zinc-400
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
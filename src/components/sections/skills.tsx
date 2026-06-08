import { skills } from "@/content/skills";
import { Container } from "../layout/container";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32"
    >
      <Container>
        <div className="mb-20">
          <span
            className="
              text-red-500
              uppercase
              tracking-widest
              text-sm
              font-semibold
            "
          >
            Tecnologias
          </span>

          <h2
            className="
              mt-4
              text-5xl
              font-black
              text-white
            "
          >
            Skills & Tools
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-zinc-400
            "
          >
            Tecnologias utilizadas para construir
            aplicações modernas, performáticas
            e escaláveis.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
                group
                rounded-[32px]
                border
                border-white/10
                bg-[#101010]
                p-8
                transition-all
                duration-300
                hover:border-red-500/50
                hover:shadow-[0_0_40px_rgba(239,68,68,.15)]
              "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {skill.title}
              </h3>

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-3
                "
              >
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-red-500/20
                      bg-red-500/10
                      px-4
                      py-2
                      text-sm
                      text-red-400
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import { experience } from "@/content/experience";
import { Container } from "../layout/container";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-zinc-200 py-24"
    >
      <Container>
        <div className="mb-16">
          <span className="text-sm font-medium text-zinc-500">
            EXPERIÊNCIA
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Minha trajetória
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={`${item.company}-${item.period}`}
              className="rounded-3xl border border-zinc-200 p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {item.role}
                  </h3>

                  <p className="text-zinc-600">
                    {item.company}
                  </p>
                </div>

                <span className="text-sm text-zinc-500">
                  {item.period}
                </span>
              </div>

              <p className="mt-4 text-zinc-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
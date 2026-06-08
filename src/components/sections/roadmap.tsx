import { roadmap } from "@/content/roadmap";
import { Container } from "../layout/container";

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="border-t border-zinc-200 py-24"
    >
      <Container>
        <div className="mb-16">
          <span className="text-sm font-medium text-zinc-500">
            ROADMAP
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Atualmente estudando
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-zinc-200 p-6"
            >
              <span className="font-medium">
                ✓ {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
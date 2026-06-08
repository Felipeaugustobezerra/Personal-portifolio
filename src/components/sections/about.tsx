import { profile } from "@/content/profile";
import { Container } from "../layout/container";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-200 py-24"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-4 block text-sm font-medium text-zinc-500">
              SOBRE MIM
            </span>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900">
              Construindo experiências digitais modernas.
            </h2>

            <p className="leading-8 text-zinc-600">
              {profile.about}
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-zinc-200 p-6">
              <span className="text-sm text-zinc-500">
                Localização
              </span>

              <h3 className="mt-2 text-lg font-semibold">
                Porto, Portugal 🇵🇹
              </h3>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-6">
              <span className="text-sm text-zinc-500">
                Formação
              </span>

              <h3 className="mt-2 text-lg font-semibold">
                Análise e Desenvolvimento de Sistemas
              </h3>

              <p className="mt-2 text-zinc-600">
                UNINASSAU
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-6">
              <span className="text-sm text-zinc-500">
                Atualmente estudando
              </span>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border px-3 py-1 text-sm">
                  Next.js 16
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  SEO
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  SOLID
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  DDD
                </span>

                <span className="rounded-full border px-3 py-1 text-sm">
                  Clean Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
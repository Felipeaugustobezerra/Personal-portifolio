import Image from "next/image";

import { profile } from "@/content/profile";
import { Container } from "../layout/container";

export function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
    >
      {/* Glow vermelho */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-red-500/10
          blur-[180px]
        "
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Conteúdo */}
          <div className="relative z-10">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-red-500/30
                bg-red-500/10
                px-4
                py-2
              "
            >
              <div className="h-2 w-2 rounded-full bg-red-500" />

              <span className="text-sm text-zinc-300">
                React & Next.js Developer
              </span>
            </div>

            <h1
              className="
                mt-8
                text-6xl
                font-black
                leading-none
                sm:text-7xl
                lg:text-8xl
                xl:text-9xl
              "
            >
              <span className="block text-white">
                Felipe
              </span>

              <span className="block text-red-500">
                Augusto
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-relaxed
                text-zinc-400
                lg:text-xl
              "
            >
              {profile.headline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="
                  rounded-full
                  bg-red-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-red-600
                "
              >
                Ver Projetos
              </a>

              <a
                href="#contact"
                className="
                  rounded-full
                  border
                  border-red-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-red-500/10
                "
              >
                Entrar em Contato
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 flex flex-wrap gap-8">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#101010]
                    px-6
                    py-4
                  "
                >
                  <h3 className="text-3xl font-bold text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Foto */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-[#0b0b0b]
              "
            >
              <Image
                src="/profile/felipe.webp"
                alt="Felipe Augusto"
                width={550}
                height={700}
                priority
                className="object-cover"
              />

              <div
                className="
                  absolute
                  bottom-6
                  right-6
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-black/80
                  px-5
                  py-3
                  backdrop-blur-xl
                "
              >
                <div className="h-2 w-2 rounded-full bg-red-500" />

                <span className="text-sm text-white">
                  Disponível para projetos
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
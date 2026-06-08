"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";

import { navigation } from "@/content/navigation";
import { Container } from "./container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Code2
              size={28}
              className="text-red-500"
            />

            <span className="text-xl font-bold text-white">
              Felipe Augusto
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  text-sm
                  text-zinc-400
                  transition-all
                  duration-300
                  hover:text-red-500
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              border
              border-red-500
              px-5
              py-2
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-red-500
            "
          >
            Currículo
          </a>
        </div>
      </Container>
    </header>
  );
}
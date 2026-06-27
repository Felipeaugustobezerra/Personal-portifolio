"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Menu,
  X,
  Code2,
} from "lucide-react";

import { motion } from "framer-motion";

import { navigation } from "@/app/types/navigation";
import { useActiveSection } from "@/hooks/use-active-section";

import { Container } from "./container";
import { clsx } from 'clsx';
// import { trackEvent } from '@/app/lib/gtm';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeSection = useActiveSection();

  return (
    <header
      className={clsx("sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl")}>
      <Container>
        <div className={clsx("flex h-20 items-center justify-between")}>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Code2
              size={28}
              className="text-red-500"
            />

            <span
              className={clsx("text-xl font-bold text-white")}
            >
              Felipe Augusto
            </span>
          </Link>

          {/* Desktop */}
          <nav
            className={clsx("hidden items-center gap-8 md:flex")}
          >
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="
                  relative

                  py-2

                  text-sm
                  font-medium

                  transition-colors
                "
              >
                <span
                  className={
                    activeSection === item.id
                      ? "text-white"
                      : "text-zinc-400"
                  }
                >
                  {item.label}
                </span>

                {activeSection === item.id && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="
                      absolute
                      bottom-0
                      left-0

                      h-[2px]
                      w-full

                      rounded-full

                      bg-red-500
                    "
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Currículo */}
           {/* <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_download_resume")}
            className="
              hidden

              rounded-full

              border
              border-red-500

              px-5
              py-2

              text-sm
              font-medium

              text-white

              transition-all

              hover:bg-red-500

              md:block
            "
          >
            Currículo
          </a>  */}

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={clsx("text-white md:hidden")}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            border-t
            border-white/10

            bg-black
          "
        >
          <Container>
            <nav
              className="
                flex
                flex-col

                gap-6

                py-8
              "
            >
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="
                    text-lg

                    text-zinc-300

                    transition-colors

                    hover:text-red-500
                  "
                >
                  {item.label}
                </a>
              ))}

              {/* <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4

                  rounded-full

                  bg-red-500

                  px-6
                  py-3

                  text-center
                  font-semibold

                  text-white
                "
              >
                Baixar Currículo
              </a> */}
            </nav>
          </Container>
        </motion.div>
      )}
    </header>
  );
}
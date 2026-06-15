"use client";

import { useEffect, useState } from "react";

import { ArrowUp } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            duration: 0.2,
          }}
          onClick={scrollToTop}
          aria-label='Voltar ao topo'
          className="
            fixed
            bottom-8
            right-8
            z-50

            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-full

            border
            border-red-500/30

            bg-[#101010]

            text-red-500

            shadow-[0_0_25px_rgba(239,68,68,.15)]

            transition-all

            hover:border-red-500
            hover:bg-red-500
            hover:text-white
          "
        >
          <ArrowUp   size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
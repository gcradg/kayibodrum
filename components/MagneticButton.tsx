"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function MagneticButton(props: MagneticButtonProps) {
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 16, mass: 0.5 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 16, mass: 0.5 });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.28);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const className = `group relative inline-flex overflow-hidden border border-bronze/45 px-7 py-4 text-[0.68rem] uppercase tracking-label text-ivory transition-colors duration-500 hover:text-black ${props.className ?? ""} ${
    props.disabled ? "pointer-events-none opacity-45" : ""
  }`;
  const content = (
    <>
      <span className="absolute inset-y-0 left-0 w-0 bg-bronze transition-all duration-500 ease-luxury group-hover:w-full" />
      <span className="relative z-10">{props.children}</span>
    </>
  );

  if (props.href) {
    return (
      <motion.a
        href={props.href}
        className={className}
        style={{ x, y }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      disabled={props.disabled}
    >
      {content}
    </motion.button>
  );
}

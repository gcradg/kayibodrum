"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { KayiMonogram } from "./KayiLogo";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-ivory"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 1.05, ease: [0.83, 0, 0.17, 1] } }}
        >
          <motion.div
            className="grid h-32 w-32 place-items-center border border-bronze/20 sm:h-40 sm:w-40"
            initial={{ opacity: 0, y: 18, clipPath: "inset(50% 50% 50% 50%)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <KayiMonogram className="h-20 w-20 sm:h-24 sm:w-24" tone="bronze" />
          </motion.div>
          <div className="mt-8 h-px w-56 overflow-hidden bg-ivory/10">
            <motion.div
              className="h-full bg-bronze"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.45, delay: 0.55, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

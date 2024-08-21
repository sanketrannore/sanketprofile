import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/app/data";
import { motion } from "framer-motion";
const TechStack = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.02,
          ease: "easeOut",
          once: true,
        },
      }}
      // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
      className="h-[10dvh] md:h-[15rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
    >
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </motion.div>
  );
};

export default TechStack;

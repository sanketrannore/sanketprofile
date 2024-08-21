"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0.2,
  timeout = 0,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
  timeout?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    if (timeout > 0.5) {
      const clearTime = setTimeout(
        () =>
          animate(
            "span",
            {
              opacity: 1,
              filter: filter ? "blur(0px)" : "none",
            },
            {
              duration: duration ? duration : 1,
              delay: stagger(delay),
            }
          ),
        timeout * 1000
      );
      return () => clearTimeout(clearTime);
    }
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(delay),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(className)}>
      <div>
        <div className=" dark:text-white text-black tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};

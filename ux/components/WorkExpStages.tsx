"use client";

import { workExp } from "@/app/data";
import { motion } from "framer-motion";
import { CardSpotlightWithContent } from "./ui/CardSpotlightWithContent";

const RecentProjects = () => {
  return (
    <div className="py-10" id="work-experience">
      <h1 className="text-3xl text-start font-bold">Work Experience</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-4 gap-5 mt-5">
        {workExp.map((item) => (
          <motion.div
            initial={{
              y: 100,
              x: 10,
            }}
            whileInView={{
              y: 0,
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              },
            }}
            viewport={{ once: true, amount: 0.8 }}
            className="flex items-center justify-start w-full"
            key={item.id}
          >
            <CardSpotlightWithContent
              iconList={item.iconLists}
              date={item?.date}
              title={item.title}
              description={item?.des}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

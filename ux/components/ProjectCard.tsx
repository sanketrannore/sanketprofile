import { motion } from "framer-motion";
import { ProjectImageList } from "./ProjectImageList";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const ProjectCard = ({
  title,
  des,
  imageList,
  link,
}: {
  title: string;
  des: string;
  imageList: string[];
  link: string;
}) => {
  function handleLinkClicked(val: string) {
    const url = val;
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    }
  }
  return (
    <div className="w-full grid lg:grid-cols-[1fr_400px]  md:grid-cols-[1fr_300px] sm:grid-cols-1 py-4 gap-5 mt-5">
      <div>
        {/* <TextGenerateEffect
          duration={0.3}
          delay={0.01}
          filter={false}
          className="text-xl font-semibold pb-4 cursor-pointer hover:text-purple"
          words={title}
        /> */}
        <h5
          className="text-xl font-semibold pb-4 cursor-pointer tracking-wide hover:text-purple"
          onClick={() => handleLinkClicked(link)}
        >
          {title}
        </h5>
        <TextGenerateEffect
          duration={0.3}
          delay={0.01}
          filter={false}
          className="text-md font-normal leading-[25px]"
          words={des}
        />
      </div>
      <motion.div
        initial={{
          x: 30,
        }}
        whileInView={{
          x: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
          },
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <ProjectImageList imageList={imageList} />
      </motion.div>
    </div>
  );
};

export default ProjectCard;

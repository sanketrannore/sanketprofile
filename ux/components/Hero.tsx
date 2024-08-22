import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import SpotlightSection from "./SpotlightSection";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion } from "framer-motion";
const Hero = () => {
  function handleLinkClicked(val: string) {
    const url = val;
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    }
  }
  return (
    <div className="max-h-full pb-20 pt-36" id="about">
      <SpotlightSection />
      <div className="relative grid grid-cols-1 sm:grid-cols-2 ">
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          whileInView={{
            y: 20,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0.2,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="w-full h-full flex flex-col items-start justify-start"
        >
          {/* <TextGenerateEffect className="font-extrabold text-4xl" words="SANKET RANNORE" /> */}
          <h2 className="font-extrabold text-2xl tracking-wide sm:text-4xl">SANKET RANNORE</h2>
          <div className="flex flex-row align-middle gap-2 pt-5">
            {/* <TextGenerateEffect className="text-md font-normal" words="sanketranore@gmail.com" /> */}
            <h3 className="text-md font-normal">sanketranore@gmail.com</h3>
            <div>.</div>
            <h5
              onClick={() =>
                handleLinkClicked("https://drive.google.com/file/d/12qKfpBIimu8HLpIswfD90fP69DYvwzX9/view")
              }
              className="text-md font-normal cursor-pointer hover:text-purple"
            >
              Resume <FaArrowTrendUp className="inline-block cursor-pointer hover:text-purple" size={"15px"} />
            </h5>
          </div>
          <div className="flex flex-row align-middle gap-5 pt-10">
            <FaLinkedin
              className="inline-block cursor-pointer hover:text-purple"
              size={"30px"}
              onClick={() => handleLinkClicked("https://www.linkedin.com/in/sanket-rannore-05a78b146/")}
            />
            <FaGithub
              className="inline-block cursor-pointer hover:text-purple"
              size={"30px"}
              onClick={() => handleLinkClicked("https://github.com/sanketrannore")}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0.2,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="w-full h-full flex flex-col items-center justify-center sm:pt-0 pt-10 "
        >
          <p className="text-sm font-normal text-white leading-5 tracking-wide">
            I&apos;m a dedicated React developer with 3+ years of experience in front-end development. I thrive on
            transforming complex ideas into intuitive, responsive web applications. With a strong foundation in
            JavaScript and a keen eye for design, I specialize in creating pixel-perfect interfaces and efficient,
            reusable components.I enjoy working closely with designers and back-end developers to bring concepts to
            life, using the latest tools and technologies in the React ecosystem. Whether it&apos;s developing from
            scratch or optimizing existing projects, I&apos;m always up for a challenge. My expertise extends to working
            with tools like Next.js, Redux, and various CSS frameworks, enabling me to deliver high-quality, performant
            applications.
          </p>
          <p className="mt-5 text-sm font-normal text-white leading-5 tracking-wide">
            {`When I&apos;m not immersed in development, I enjoy playing football, traveling to explore new cultures, and
            staying fit at the gym. These activities keep me balanced and energized, allowing me to bring fresh
            perspectives and ideas to my work.`}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

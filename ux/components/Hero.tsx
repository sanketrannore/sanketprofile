import React from "react";
import SpotlightSection from "./SpotlightSection";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="max-h-full  pb-20 pt-36">
      <SpotlightSection />
      <div className="relative grid grid-cols-2">
        <div className="w-full h-full flex flex-col items-start justify-start ">
          <TextGenerateEffect className="font-extrabold text-4xl" words="SANKET RANNORE" />
          <TextGenerateEffect className="text-md font-normal" words="sanketranore@gmail.com" />
          {/* <TextGenerateEffect className="text-md font-light" words="hello" /> */}
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <TextGenerateEffect
            duration={0.3}
            delay={0.01}
            filter={false}
            className="text-sm"
            words={`I'm a dedicated React developer with 3+ years of experience in front-end development. I thrive on transforming complex ideas into intuitive, responsive web applications. With a strong foundation in JavaScript and a keen eye for design, I specialize in creating pixel-perfect interfaces and efficient, reusable components.I enjoy working closely with designers and back-end developers to bring concepts to life, using the latest tools and technologies in the React ecosystem. Whether it’s developing from scratch or optimizing existing projects, I’m always up for a challenge. My expertise extends to working with tools like Next.js, Redux, and various CSS frameworks, enabling me to deliver high-quality, performant applications.`}
          />
          <TextGenerateEffect
            duration={0.4}
            delay={0.01}
            timeout={1.2}
            filter={false}
            className="mt-5 text-sm"
            words={`When I’m not immersed in development, I enjoy playing football, traveling to explore new cultures, and staying fit at the gym. These activities keep me balanced and energized, allowing me to bring fresh perspectives and ideas to my work.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

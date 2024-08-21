"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/ImageSlider";

export function ProjectImageList({ imageList }: { imageList: string[] }) {
  const images = imageList;
  return (
    <ImagesSlider className="lg:h-[250px] md:h-[140px] md:w-[140px] lg:w-[350px]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      ></motion.div>
    </ImagesSlider>
  );
}

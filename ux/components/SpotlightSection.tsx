import React, { Fragment } from "react";
import { Spotlight } from "./ui/Spotlight";

const SpotlightSection = () => {
  return (
    <Fragment>
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80dvh] w-[50dvh]" fill="purple" />
      <Spotlight className="top-20 left-60  h-[80dvh] w-[50dvh]" fill="blue" />
      <div className="h-100 w-full dark:bg-black-100 bg-white absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </Fragment>
  );
};

export default SpotlightSection;

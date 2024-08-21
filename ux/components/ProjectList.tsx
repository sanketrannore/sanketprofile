"use client";

import { projects, workExp } from "@/app/data";

import { CardSpotlightWithContent } from "./ui/CardSpotlightWithContent";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className="py-10" id="projects">
      <h1 className="text-3xl text-start font-bold">Recent Projects</h1>
      <div className="flex items-center flex-col justify-start w-full">
        {projects.map((item) => (
          <div className="w-full grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 py-0 gap-5 mt-0" key={item.id}>
            <ProjectCard link={item.link} title={item.title} key={item.id} des={item.des} imageList={item.iconLists} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

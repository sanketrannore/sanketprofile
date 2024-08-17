"use client";

import { workExp } from "@/app/data";

import { CardSpotlightWithContent } from "./ui/CardSpotlightWithContent";

const RecentProjects = () => {
  return (
    <div className="py-10" id="projects">
      <h1 className="text-3xl text-start font-bold">Work Experience</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-4 gap-5 mt-5">
        {workExp.map((item) => (
          <div className="flex items-center justify-start w-full" key={item.id}>
            <CardSpotlightWithContent
              iconList={item.iconLists}
              date={item?.date}
              title={item.title}
              description={item?.des}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

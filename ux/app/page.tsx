"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Meteors } from "@/components/ui/Meteors";
import RecentProjects from "@/components/WorkExpStages";
import { navItems } from "./data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-x-hidden items-center flex-col mx-auto sm:px-10 px-5">
      <div className="h-full max-w-7xl w-full">
        <Hero />
        <FloatingNav navItems={navItems} />
        <RecentProjects />
        <Meteors number={20} />
      </div>
    </main>
  );
}

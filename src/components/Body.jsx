import ProjectCard from "./sections/ProjectCard";
import Skills from "./sections/Skills";
import LetsConnect from "./sections/LetsConnect";
import CraftDedication from "./sections/CraftDedication";
import ZenMoment from "./buttons/ZenMomentButton";
import Footer from "./sections/Footer";

export default function Body() {
  return (
    <div className="off-white bg-cream charcoal-text h-auto w-[640px] pb-5 font-cg font-medium shadow">
      <div className="mx-auto flex max-w-[510px] flex-col py-10">
        <h1 className="mb-4">My Projects</h1>
        <div className="ml-10 flex flex-col gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <h1 className="mb-4 mt-20">Skills</h1>
        <Skills />
        {/* create props for section headers for mapping */}
        <h1 className="mb-4 mt-20">Let's Connect</h1>
        <LetsConnect />
        <CraftDedication />
      </div>
      <ZenMoment />
      <Footer />
    </div>
  );
}

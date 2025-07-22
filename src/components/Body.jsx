import ProjectCard from "./ProjectCard";

export default function Body() {
  return (
    <div className="off-white bg-cream charcoal-text h-auto w-[640px] pb-20 font-cg font-medium shadow">
      <div className="flex flex-col py-10 pl-16">
        <h1 className="mb-4">My Projects</h1>
        <div className="ml-10 flex flex-col gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <h1 className="mb-4 mt-20">Skills</h1>
        {/* create props for section headers for mapping */}
        <h1 className="mb-4 mt-20">Let's Connect</h1>
        <h1 className="mb-4 mt-20">Craft & Dedication</h1>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="bg-accent w-72 rounded-md py-2.5 font-cg text-[#faf9f6]">
          Click for a Zen Moment
        </button>
      </div>
    </div>
  );
}

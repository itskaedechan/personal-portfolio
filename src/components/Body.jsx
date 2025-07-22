import ProjectCard from "./ProjectCard";

export default function Body() {
  return (
    <div className="off-white bg-cream charcoal-text flex h-[1552px] w-[640px] flex-col py-10 pl-16 font-cg font-medium shadow">
      <h1 className="mb-4">Projects</h1>
      <div className="flex flex-col gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <h1 className="mb-4 mt-20">Skills</h1>
      {/* create props for section headers for mapping */}
      <h1 className="mb-4 mt-20">Let's Connect</h1>
      <h1 className="mb-4 mt-20">Craft & Dedication</h1>
      <button>Click for a Zen Moment</button>
    </div>
  );
}

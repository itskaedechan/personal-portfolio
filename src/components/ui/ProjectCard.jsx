import LiveDemoButton from "../buttons/LiveDemoButton";
import ViewCodeButton from "../buttons/ViewCodeButton";
import projects from "../data/projects.json";

export default function ProjectCard() {
  return (
    <div>
      {projects.map((project) => (
        <div
          key={project.id}
          id={project.id}
          className="bg-cream mb-9 h-auto w-[434px] rounded-md pb-5 shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.2)] outline outline-[0.5px] outline-[#93a87e] last:mb-0"
        >
          <img
            src={project.image}
            alt={project.alt}
            className="rounded-md object-cover"
          />
          <h2 className="mx-5 mb-1 mt-4 text-2xl font-semibold">
            {project.title}
          </h2>
          <p className="mx-8">{project.description}</p>
          <div className="mr-5 mt-5 flex justify-end gap-3">
            <LiveDemoButton liveDemoUrl={project.demolink} />
            {console.log(project.demolink)}
            <ViewCodeButton viewCodeUrl={project.codelink} />
            {console.log(project.codelink)}
          </div>
        </div>
      ))}
    </div>
  );
}

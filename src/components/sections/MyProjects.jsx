import ProjectCard from "../ui/ProjectCard";
import projects from "../data/projects.json";

export default function MyProjects() {
  const mainProjects = projects.filter(
    (project) => project.category === "main",
  );

  return (
    <div id="projects" className="ml-10 flex flex-col">
      {mainProjects.map(
        (
          { id, title, description, image, alt, demolink, codelink, category },
          index,
        ) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            alt={alt}
            demolink={demolink}
            codelink={codelink}
            category={category}
            index={index}
            isMainSection={true}
          />
        ),
      )}
    </div>
  );
}

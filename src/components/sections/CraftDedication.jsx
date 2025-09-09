import ProjectCard from "../ui/ProjectCard";
import projects from "../data/projects.json";

export default function CraftDedication() {
  const craftProjects = projects.filter(
    (project) => project.category === "craft",
  );

  return (
    <div id="craft" className="ml-10 flex flex-col">
      {craftProjects.map(
        ({ id, title, description, image, alt, category }, index) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            alt={alt}
            category={category}
            index={index}
          />
        ),
      )}
    </div>
  );
}

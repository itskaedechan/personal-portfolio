import projects from "../data/projects.json";
import Button from "../buttons/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: customDelay,
      },
    }),
  };

  return (
    <>
      {projects.map((project, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { margin: "-30% 0px", once: true });

        return (
          <motion.div
            key={project.id}
            ref={ref}
            id={project.id}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={index === 0 ? 3.5 : 0} // first card delay 3.5s, others no delay
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
              <Button variant="primary" href={project.demolink}>
                Live Demo
              </Button>
              <Button variant="secondary" href={project.codelink}>
                View Code
              </Button>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

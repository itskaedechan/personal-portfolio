import Button from "../buttons/Button";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

export default function ProjectCard({
  id,
  title,
  description,
  image,
  alt,
  demolink,
  codelink,
  category,
  index,
  isMainSection,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px", once: true });
  const [viewCraft, setViewCraft] = useState(false);
  const [zoom, setZoom] = useState(false);

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
    <motion.div
      key={id}
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      custom={isMainSection && index === 0 ? 3.5 : 0}
      className="bg-cream mb-9 h-auto w-[434px] rounded-md pb-5 shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.2)] outline outline-[0.5px] outline-[#93a87e] last:mb-0"
    >
      <div className="h-56 transition-all duration-500 ease-out hover:shadow-lg hover:shadow-black/20">
        <img
          src={image}
          alt={alt}
          className="h-full w-full rounded-t-md object-cover"
        />
      </div>

      <h2 className="mx-5 mb-1 mt-4 text-2xl font-semibold">{title}</h2>
      <p className="mx-8">{description}</p>
      {category === "main" ? (
        <div className="mr-5 mt-5 flex justify-end gap-3">
          <Button variant="primary" href={demolink}>
            Live Demo
          </Button>
          <Button variant="secondary" href={codelink}>
            View Code
          </Button>{" "}
        </div>
      ) : (
        <div className="mr-5 mt-5 flex justify-end gap-3">
          <Button variant="primary" onClick={() => setViewCraft(true)}>
            View Craft
          </Button>
          {viewCraft && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/50 p-8"
              onClick={() => {
                setViewCraft(false);
                setZoom(false);
              }}
            >
              <div
                className={`transition-transform duration-300 ${
                  zoom
                    ? "origin-top scale-150 cursor-zoom-out"
                    : "scale-100 cursor-zoom-in"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom(!zoom);
                }}
              >
                <img
                  src={image}
                  alt={alt}
                  className="max-h-[95vh] max-w-[95vw] rounded-lg object-contain shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

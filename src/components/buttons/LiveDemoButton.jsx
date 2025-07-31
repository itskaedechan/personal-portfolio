export default function LiveDemoButton({ liveDemoUrl }) {
  return (
    <a
      className="bg-accent rounded-md px-4 py-1.5 font-cg text-base font-medium text-[#FFFFFF]"
      href={liveDemoUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo
    </a>
  );
}

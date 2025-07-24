export default function LiveDemoButton({ liveDemoUrl }) {
  return (
    <button className="bg-accent rounded-md px-4 py-1.5 font-cg text-base font-medium text-[#FFFFFF]">
      <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    </button>
  );
}

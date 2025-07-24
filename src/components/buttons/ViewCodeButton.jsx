export default function ViewCodeButton({ viewCodeUrl }) {
  return (
    <button className="charcoal-text rounded-md bg-transparent px-4 py-1.5 font-cg text-base font-medium ring-2 ring-inset ring-[#3333334D]">
      <a href={viewCodeUrl} target="_blank" rel="noopener noreferrer">
        View Code
      </a>
    </button>
  );
}

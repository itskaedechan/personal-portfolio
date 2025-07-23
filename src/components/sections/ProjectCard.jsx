import LiveDemoButton from "../buttons/LiveDemoButton";
import ViewCodeButton from "../buttons/ViewCodeButton";

export default function ProjectCard() {
  return (
    <div className="bg-cream h-auto w-[434px] rounded-md pb-6 shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.2)] outline outline-[0.5px] outline-[#93a87e]">
      <img
        src="/images/portfolio.jpg"
        alt="Portfolio"
        className="rounded-md object-cover"
      />
      <h2 className="mx-5 mb-1 mt-4 text-2xl font-medium">Portfolio</h2>
      <p className="mx-8">
        {" "}
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </p>
      <div className="mr-5 mt-5 flex justify-end gap-3">
        <LiveDemoButton />
        <ViewCodeButton />
      </div>
      {/* create mapping here of details */}
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-cream mx-auto mt-5 flex h-[249px] w-[650px] flex-col justify-center px-13 pb-10 pt-16 font-jacques shadow">
        <h1 className="charcoal-text text-[40px]">Hi, I’m Anne.</h1>
        <h2 className="charcoal-text mt-1 text-xl">
          Creating clean, user-friendly websites with modern tech.
        </h2>
        <button className="bg-accent border-radius mt-6 self-end rounded-md px-9 py-2.5">
          Explore
        </button>
      </div>
    </div>
  );
}

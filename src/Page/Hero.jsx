export default function Hero() {
  return (
    <div class="flex h-screen items-center justify-center">
      <div className="bg-cream font-jacques mx-auto mt-5 flex h-[249px] w-[650px] flex-col justify-center px-[52px] pb-[40px] pt-[63px] shadow">
        <h1 className="charcoal-text text-[40px]">Hi, I’m Anne.</h1>
        <h2 className="charcoal-text text-[20px]">
          Creating clean, responsive websites with modern tech.
        </h2>
        <button className="bg-accent border-radius mt-6 self-end rounded-md px-[35px] py-[10px]">
          Explore
        </button>
      </div>
    </div>
  );
}

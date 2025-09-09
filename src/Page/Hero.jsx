import Button from "../components/buttons/Button";
import Typewriter from "../components/ui/Typewriter";

export default function Hero({ onExploreClick, isFadingOut }) {
  return (
    <div className="bg flex h-screen items-center justify-center">
      <div
        className={`bg-cream mx-auto mt-5 flex h-auto min-h-[249px] w-5/6 flex-col justify-center text-pretty px-10 pb-10 pt-16 font-jacques shadow md:max-h-[249px] md:max-w-[650px] md:px-13 ${isFadingOut ? "animate-fadeOut" : "animate-slideInSlow"}`}
      >
        <Typewriter
          intro={[
            {
              text: "Hi, I’m Anne.",
              as: "h1",
              className:
                "charcoal-text w-0 text-4xl text-nowrap md:text-[40px]",
            },
            {
              text: "Creating clean, user-friendly websites with modern tech.",
              as: "h2",
              className:
                "charcoal-text mt-1 w-0 animate-typing overflow-hidden [animation-delay:3s] md:text-nowrap md:text-xl",
            },
          ]}
          speed={70}
          delay={500}
          startDelay={2800}
        />

        <Button
          variant="zen"
          className="mt-6 animate-fadeIn self-end px-4 font-jacques text-sm opacity-0 transition transition-transform delay-100 duration-200 duration-300 ease-in-out [animation-delay:8s] [animation-duration:2s] [animation-timing-function:ease-in-out] hover:-translate-y-1 hover:scale-105 hover:bg-[#3e4b3d] md:px-9 md:text-base"
          onClick={onExploreClick}
        >
          Explore
        </Button>
      </div>
    </div>
  );
}

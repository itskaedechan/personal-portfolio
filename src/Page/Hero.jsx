import React, { useState } from "react";
import Button from "../components/buttons/Button";

export default function Hero({ onExploreClick }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-cream animate-slideInSlow mx-auto mt-5 flex h-[249px] w-[650px] flex-col justify-center px-13 pb-10 pt-16 font-jacques shadow">
        <h1 className="charcoal-text animate-typing w-0 overflow-hidden whitespace-nowrap text-[40px] [animation-delay:2s]">
          Hi, I’m Anne.<span className="animate-blink">|</span>
        </h1>

        <h2 className="charcoal-text animate-typing mt-1 w-0 overflow-hidden whitespace-nowrap text-xl [animation-delay:3s]">
          Creating clean, user-friendly websites with modern tech.
          <span className="animate-blink">|</span>
        </h2>

        <Button
          variant="zen"
          className="animate-fadeIn mt-6 self-end px-9 font-jacques text-base opacity-0 transition transition-transform delay-100 duration-200 duration-300 ease-in-out [animation-delay:6s] [animation-duration:2s] [animation-timing-function:ease-in-out] hover:-translate-y-1 hover:scale-105 hover:bg-[#3e4b3d]"
          onClick={onExploreClick}
        >
          Explore
        </Button>
      </div>
    </div>
  );
}

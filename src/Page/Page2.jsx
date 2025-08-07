import React, { useState } from "react";
import Header from "../components/Header";
import AboutMe from "../components/sections/AboutMe";
import Body from "../components/Body";
import Hero from "./Hero";

export default function Page2() {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [show, setShow] = useState(false);

  const ClickExplore = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setShow(true);
    }, 600);
  };
  return (
    <div>
      {!show && (
        <Hero
          className="mx-auto"
          onExploreClick={ClickExplore}
          isFadingOut={isFadingOut}
        />
      )}
      {show && (
        <div className="auto-rows-2 mx-auto grid justify-items-center">
          <Header />
          <div className="flex justify-center gap-13">
            <AboutMe />
            <Body />
          </div>
        </div>
      )}
    </div>
  );
}

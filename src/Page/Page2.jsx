import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/sections/AboutMe";
import Body from "../components/Body";
import Hero from "./Hero";

export default function Page2() {
  return (
    <div className="auto-rows-2 mx-auto grid justify-items-center">
      <Header />
      <div className="flex justify-center gap-13">
        <AboutMe />
        <Body />
      </div>
      <Hero className="mx-auto" />
    </div>
  );
}

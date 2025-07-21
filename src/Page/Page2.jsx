import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Body from "../components/Body";

export default function Page2() {
  return (
    <div className="grid auto-rows-2">
      <Header />
      <div className="flex gap-5 justify-center">
        <AboutMe />
        <Body />
      </div>
    </div>
  );
}

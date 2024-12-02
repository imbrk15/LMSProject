import React from "react";
import Navbar from "./navbar";
import Intro from "./intro";
import Contact from "./contact";
import Course from "./course";
export default function Homepage() {
  return (
    <>
      <Navbar />
      <Intro />
      <Course />
      <Contact />
    </>
  );
}

import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Skills from "@/components/Skills";
import GitHubActivity from "@/components/GitHubActivity";
import Education from "@/components/Education";
import GradientSeparator from "@/components/GradientSeparator";

function App() {
  return (
    <>
      <Hero />
      <GradientSeparator />
      <Projects />
      <GradientSeparator />
      <Blog />
      <GradientSeparator />
      <Skills />
      <GradientSeparator />
      <GitHubActivity />
      <GradientSeparator />
      <Education />
    </>
  );
}

export default App;

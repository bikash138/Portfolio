import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Skills from "@/components/Skills";
import GitHubActivity from "@/components/GitHubActivity";
import Education from "@/components/Education";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <>
      <Hero />
      <Separator />
      <Projects />
      <Separator />
      <Blog />
      <Separator />
      <Skills />
      <Separator />
      <GitHubActivity />
      <Separator />
      <Education />
    </>
  );
}

export default App;

import React from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import GitHubActivity from '@/components/GitHubActivity';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <GitHubActivity/>
      <Education/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
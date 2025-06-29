import React from 'react';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
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
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
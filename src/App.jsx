import React from 'react';
import './index.css';

import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Experiences from './Components/Experiences';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import portfolioData from './data/data';

function App() {
  const { hero, about, skills, experiences, projects, contact } = portfolioData;

  return (
    <>
      <Header />
      <Hero {...hero} />
      <About {...about} />
      <Skills skills={skills} />
      <Experiences experiences={experiences} />
      <Projects projects={projects} />
      <Contact {...contact} />
      <Footer />
    </>
  );
}

export default App;

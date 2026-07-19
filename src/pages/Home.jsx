import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import GitHubSection from '../components/sections/GitHubSection';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <Box component="main" sx={{ pt: 0 }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <GitHubSection />
      <Contact />
    </Box>
  );
};

export default Home;

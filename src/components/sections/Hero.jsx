import React, { useEffect, useRef } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import portfolioData from '../../data/portfolio.json';
import { FiDownload, FiCode, FiMail } from 'react-icons/fi';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: portfolioData.personal.title,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h6" color="primary" sx={{ mb: 2, fontWeight: 600, letterSpacing: 2 }}>
            HELLO, I'M
          </Typography>
          
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 2, 
              fontSize: { xs: '3.5rem', md: '5.5rem', lg: '7rem' },
              lineHeight: 1.1,
              background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.5))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {portfolioData.personal.name}.
          </Typography>

          <Box sx={{ height: { xs: '40px', md: '60px' }, mb: 4 }}>
            <Typography variant="h4" sx={{ color: 'text.secondary', fontWeight: 300 }}>
              <span ref={el}></span>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<FiDownload />}
              href={portfolioData.personal.resumeLink}
              target="_blank"
              className="hover-target"
              sx={{ 
                background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                '&:hover': {
                  background: 'linear-gradient(45deg, var(--secondary-color), var(--primary-color))',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Resume
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<FiCode />}
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover-target"
              sx={{
                borderColor: 'rgba(255,255,255,0.2)',
                color: '#fff',
                '&:hover': {
                  borderColor: '#fff',
                  background: 'rgba(255,255,255,0.05)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Projects
            </Button>
            <Button
              variant="text"
              size="large"
              startIcon={<FiMail />}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover-target"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: '#fff',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Hire Me
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;

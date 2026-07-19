import React from 'react';
import { Box, Container, Typography, IconButton, Grid, Divider } from '@mui/material';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(0,0,0,0.8)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        pt: 8,
        pb: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className="text-gradient" sx={{ fontWeight: 800, mb: 2 }}>
              {portfolioData.personal.name}.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300, mb: 3 }}>
              {portfolioData.personal.bio}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton component="a" href={portfolioData.personal.social.github} target="_blank" className="hover-target" color="inherit">
                <FiGithub />
              </IconButton>
              <IconButton component="a" href={portfolioData.personal.social.linkedin} target="_blank" className="hover-target" color="inherit">
                <FiLinkedin />
              </IconButton>
              <IconButton component="a" href={portfolioData.personal.social.instagram} target="_blank" className="hover-target" color="inherit">
                <FiInstagram />
              </IconButton>
              <IconButton component="a" href={`mailto:${portfolioData.personal.social.email}`} className="hover-target" color="inherit">
                <FiMail />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  color="text.secondary"
                  className="hover-target"
                  sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                  onClick={() => {
                    const el = document.getElementById(item.toLowerCase());
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' } }}>
             <IconButton onClick={scrollToTop} className="hover-target" sx={{ background: 'rgba(255,255,255,0.05)', mb: 3 }}>
               <FiArrowUp />
             </IconButton>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.05)' }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import portfolioData from '../../data/portfolio.json';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ height: '100%' }}
    >
      <Card 
        className="hover-target"
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            borderColor: 'rgba(123, 31, 162, 0.3)',
          }
        }}
      >
        <Box sx={{ overflow: 'hidden', height: 200 }}>
          <CardMedia
            component="img"
            height="200"
            image={project.image}
            alt={project.title}
            sx={{
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
            {project.description}
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {project.techStack.map(tech => (
              <Chip key={tech} label={tech} size="small" sx={{ background: 'rgba(123, 31, 162, 0.2)', color: '#fff', border: '1px solid rgba(123, 31, 162, 0.3)' }} />
            ))}
          </Box>
          
          <Box sx={{ mt: 'auto', display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              size="small"
              startIcon={<FiGithub />}
              href={project.github}
              target="_blank"
              sx={{ background: 'rgba(255,255,255,0.1)', '&:hover': { background: 'rgba(255,255,255,0.2)' } }}
            >
              Code
            </Button>
            <Button
              variant="contained"
              size="small"
              startIcon={<FiExternalLink />}
              href={project.liveDemo}
              target="_blank"
              color="primary"
            >
              Live Demo
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 15, position: 'relative', zIndex: 1, background: 'linear-gradient(180deg, transparent 0%, rgba(123, 31, 162, 0.05) 100%)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Featured <span className="text-gradient">Projects.</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 600, mx: 'auto' }}>
            A selection of my recent work focusing on AI, Machine Learning, and Cyber Security.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {portfolioData.projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.id}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';

const ExperienceItem = ({ exp, index, isLast }) => {
  return (
    <Box sx={{ display: 'flex', position: 'relative', mb: isLast ? 0 : 6 }}>
      {/* Timeline Line */}
      {!isLast && (
        <Box 
          sx={{ 
            position: 'absolute', 
            left: '23px', 
            top: '40px', 
            bottom: '-40px', 
            width: '2px', 
            background: 'rgba(255,255,255,0.1)' 
          }} 
        />
      )}
      
      {/* Timeline Dot */}
      <Box 
        sx={{ 
          width: '48px', 
          height: '48px', 
          borderRadius: '50%', 
          background: 'rgba(123, 31, 162, 0.2)', 
          border: '2px solid var(--primary-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          mr: 4,
          zIndex: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: 'primary.light', fontWeight: 800 }}>
          {index + 1}
        </Typography>
      </Box>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ flexGrow: 1 }}
      >
        <Box sx={{ 
          background: 'rgba(255,255,255,0.02)', 
          p: 4, 
          borderRadius: 4, 
          border: '1px solid rgba(255,255,255,0.05)',
          transition: 'all 0.3s ease',
          '&:hover': { background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(123, 31, 162, 0.3)' }
        }} className="hover-target">
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>{exp.title}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mb: 2 }}>
            <Typography variant="h6" color="primary.light">{exp.company}</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.1)', px: 2, py: 0.5, borderRadius: 2 }}>
              {exp.date}
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            {exp.description}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 15, position: 'relative', zIndex: 1 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            My <span className="text-gradient">Journey.</span>
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {portfolioData.experience.map((exp, index) => (
            <ExperienceItem 
              key={exp.id} 
              exp={exp} 
              index={index} 
              isLast={index === portfolioData.experience.length - 1} 
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;

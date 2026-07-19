import React from 'react';
import { Container, Typography, Box, Grid, LinearProgress } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolioData from '../../data/portfolio.json';

const SkillBar = ({ skill, index }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>{skill.name}</Typography>
        <Typography variant="body2" color="text.secondary">{skill.level}%</Typography>
      </Box>
      <Box sx={{ position: 'relative', height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.1)' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            borderRadius: 4,
            background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
          }}
        />
      </Box>
    </Box>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <Box sx={{ p: 4, borderRadius: 4, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', height: '100%' }} className="hover-target">
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 700, color: 'primary.light' }}>
        {title}
      </Typography>
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} index={index} />
      ))}
    </Box>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Box id="skills" sx={{ py: 15, position: 'relative', zIndex: 1 }}>
      <Container maxWidth="lg" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <motion.div variants={itemVariants}>
              <Typography variant="h2" sx={{ fontWeight: 800 }}>
                Technical <span className="text-gradient">Arsenal.</span>
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={3}>
              <motion.div variants={itemVariants} style={{ height: '100%' }}>
                <SkillCategory title="Programming" skills={portfolioData.skills.programming} />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <motion.div variants={itemVariants} style={{ height: '100%' }}>
                <SkillCategory title="Web Dev" skills={portfolioData.skills.web} />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <motion.div variants={itemVariants} style={{ height: '100%' }}>
                <SkillCategory title="AI / ML" skills={portfolioData.skills.ai_ml} />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <motion.div variants={itemVariants} style={{ height: '100%' }}>
                <SkillCategory title="Tools & Security" skills={portfolioData.skills.tools} />
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;

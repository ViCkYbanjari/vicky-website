import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import portfolioData from '../../data/portfolio.json';

const StatCard = ({ title, value, suffix = "+" }) => {
  return (
    <Card elevation={0} sx={{ height: '100%', textAlign: 'center', p: 2 }} className="hover-target">
      <CardContent>
        <Typography variant="h3" className="text-gradient" sx={{ fontWeight: 800, mb: 1 }}>
          {value}{suffix}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box id="about" sx={{ py: 15, position: 'relative', zIndex: 1 }}>
      <Container maxWidth="lg" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography variant="h2" sx={{ mb: 3, fontWeight: 800 }}>
                  About <span className="text-gradient">Me.</span>
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                  {portfolioData.personal.bio}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  My journey involves developing AI-driven solutions like sports analytics platforms, intelligent cyber security systems, and contributing to cutting-edge research. I thrive at the intersection of machine learning and full-stack development, delivering scalable and impactful products.
                </Typography>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                    <StatCard title="Projects" value={portfolioData.stats.projects} />
                  </motion.div>
                </Grid>
                <Grid item xs={6}>
                  <motion.div variants={itemVariants} whileHover={{ y: -5 }} style={{ marginTop: '40px' }}>
                    <StatCard title="Certifications" value={portfolioData.stats.certifications} />
                  </motion.div>
                </Grid>
                <Grid item xs={6}>
                  <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                    <StatCard title="Hackathons" value={portfolioData.stats.hackathons} />
                  </motion.div>
                </Grid>
                <Grid item xs={6}>
                  <motion.div variants={itemVariants} whileHover={{ y: -5 }} style={{ marginTop: '40px' }}>
                    <StatCard title="GitHub Repos" value="30" />
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;

import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import portfolioData from '../../data/portfolio.json';

const Certifications = () => {
  return (
    <Box id="certifications" sx={{ py: 15, position: 'relative', zIndex: 1, background: 'linear-gradient(0deg, transparent 0%, rgba(25, 118, 210, 0.05) 100%)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            <span className="text-gradient">Certifications</span> & Awards.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {portfolioData.certifications.map((cert, index) => (
            <Grid item xs={12} md={6} key={cert.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card 
                  className="hover-target"
                  sx={{ 
                    height: '100%', 
                    display: 'flex',
                    alignItems: 'center',
                    p: 2,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.05)',
                      transform: 'translateX(10px)',
                      borderColor: 'rgba(25, 118, 210, 0.3)'
                    }
                  }}
                >
                  <Box sx={{ p: 2, background: 'rgba(25, 118, 210, 0.1)', borderRadius: '50%', color: 'secondary.main', mr: 3 }}>
                    <FiAward size={32} />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: '0 !important' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{cert.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{cert.issuer} • {cert.date}</Typography>
                  </CardContent>
                  <Button 
                    href={cert.link} 
                    target="_blank" 
                    sx={{ minWidth: 'auto', p: 1, color: 'text.secondary', '&:hover': { color: '#fff' } }}
                  >
                    <FiExternalLink size={24} />
                  </Button>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certifications;

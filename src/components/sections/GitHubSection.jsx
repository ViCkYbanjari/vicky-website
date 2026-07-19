import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FiStar, FiGitBranch } from 'react-icons/fi';
import portfolioData from '../../data/portfolio.json';

const GitHubSection = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We assume the user updates portfolio.json with their actual GitHub username later.
    // For now, we will extract the username from the URL or use a placeholder.
    const githubUrl = portfolioData.personal.social.github;
    const username = githubUrl.split('/').pop() || 'octocat'; // default to octocat for demo if empty

    axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(response => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching GitHub repos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Box id="github" sx={{ py: 15, position: 'relative', zIndex: 1 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Open <span className="text-gradient">Source.</span>
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress color="primary" />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {repos.map((repo, index) => (
              <Grid item xs={12} md={4} key={repo.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ height: '100%' }}
                >
                  <Card 
                    component="a" 
                    href={repo.html_url}
                    target="_blank"
                    className="hover-target"
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      textDecoration: 'none',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.05)',
                        transform: 'translateY(-5px)',
                        borderColor: 'rgba(123, 31, 162, 0.3)'
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FiGitBranch /> {repo.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {repo.description || 'No description provided.'}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--primary-color)', display: 'inline-block' }}></span>
                          {repo.language || 'Markdown'}
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <FiStar /> {repo.stargazers_count}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default GitHubSection;

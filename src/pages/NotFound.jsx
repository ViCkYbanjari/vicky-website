import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
      <Typography variant="h1" className="text-gradient" sx={{ fontSize: '10rem', mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Page Not Found
      </Typography>
      <Button component={Link} to="/" variant="contained" className="hover-target">
        Return Home
      </Button>
    </Container>
  );
};

export default NotFound;

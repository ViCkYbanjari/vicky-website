import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'GitHub', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}
      >
        <AppBar
          position="static"
          elevation={scrolled ? 4 : 0}
          sx={{
            background: scrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
            transition: 'all 0.3s ease',
            px: { xs: 2, md: 6 },
            py: { xs: 1, md: scrolled ? 1 : 2 },
          }}
        >
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h5"
              component={Link}
              to="/"
              className="text-gradient hover-target"
              sx={{ fontWeight: 800, textDecoration: 'none', letterSpacing: '-0.5px' }}
            >
              Vicky.
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => handleScrollTo(item)}
                  className="hover-target"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--primary-color)',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '60%',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Toggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
              className="hover-target"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            PaperProps={{
              sx: {
                width: '75vw',
                background: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(30px)',
                borderLeft: '1px solid rgba(255,255,255,0.05)',
                pt: 10,
              },
            }}
          >
            <List>
              {navItems.map((item) => (
                <ListItem button key={item} onClick={() => handleScrollTo(item)}>
                  <ListItemText
                    primary={item}
                    sx={{
                      textAlign: 'center',
                      '& span': {
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        color: '#fff',
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React, { useRef, useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';
import portfolioData from '../../data/portfolio.json';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Replace with your actual Service ID, Template ID, and Public Key from EmailJS
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    if (serviceID === 'YOUR_SERVICE_ID') {
      setStatus('warning');
      return;
    }

    setStatus('sending');
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          setStatus('success');
          e.target.reset();
      }, (error) => {
          setStatus('error');
      });
  };

  return (
    <Box id="contact" sx={{ py: 15, position: 'relative', zIndex: 1 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Get in <span className="text-gradient">Touch.</span>
          </Typography>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ background: 'rgba(255,255,255,0.02)', p: { xs: 3, md: 6 }, borderRadius: 4, border: '1px solid rgba(255,255,255,0.05)' }}>
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="user_name"
                    variant="outlined"
                    required
                    className="hover-target"
                    sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' }, '&:hover fieldset': { borderColor: 'primary.main' } } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="user_email"
                    type="email"
                    variant="outlined"
                    required
                    className="hover-target"
                    sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' }, '&:hover fieldset': { borderColor: 'primary.main' } } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    variant="outlined"
                    required
                    className="hover-target"
                    sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' }, '&:hover fieldset': { borderColor: 'primary.main' } } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                    className="hover-target"
                    sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' }, '&:hover fieldset': { borderColor: 'primary.main' } } }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<FiSend />}
                    disabled={status === 'sending'}
                    className="hover-target"
                    sx={{ 
                      px: 6, 
                      py: 1.5,
                      background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                    }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </form>

            {status === 'success' && (
              <Alert severity="success" sx={{ mt: 3, background: 'rgba(46, 125, 50, 0.1)', color: '#a5d6a7' }}>
                Message sent successfully! I will get back to you soon.
              </Alert>
            )}
            {status === 'error' && (
              <Alert severity="error" sx={{ mt: 3, background: 'rgba(211, 47, 47, 0.1)', color: '#ef9a9a' }}>
                Failed to send message. Please try again or email directly to {portfolioData.personal.social.email}.
              </Alert>
            )}
            {status === 'warning' && (
              <Alert severity="warning" sx={{ mt: 3, background: 'rgba(237, 108, 2, 0.1)', color: '#ffb74d' }}>
                EmailJS is not configured. Please add your Service ID, Template ID, and Public Key to enable this form.
              </Alert>
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;

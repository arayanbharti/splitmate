import React from 'react';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          padding: '40px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          color: '#444',
          lineHeight: 1.8,
          fontFamily: 'Roboto, sans-serif',
          marginTop: '40px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: '2.5em',
            marginBottom: '20px',
            color: '#2c3e50',
            textAlign: 'center',
            fontWeight: 700,
            letterSpacing: '1px',
          }}
        >
          About Split Mate
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1em',
            marginBottom: '20px',
            color: '#555',
            textAlign: 'justify',
          }}
        >
          Welcome to Split Mate, your trusted companion for managing group
          expenses, bills, and shared tasks. Whether you're planning a getaway
          with friends, sharing household expenses, or coordinating a group
          project, Split Mate is here to ensure everything is handled smoothly
          and fairly.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1em',
            marginBottom: '20px',
            color: '#555',
            textAlign: 'justify',
          }}
        >
          Split Mate allows you to easily create groups, add expenses or tasks,
          and keep track of who owes what. Our user-friendly interface makes
          sure that everyone stays informed, reducing the chances of
          misunderstandings and ensuring transparency within your group.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.5em',
            marginBottom: '10px',
            color: '#2c3e50',
            fontWeight: 600,
          }}
        >
          Key features of Split Mate include:
        </Typography>
        <Box
          component="ul"
          sx={{
            listStyleType: 'disc',
            paddingLeft: '40px',
            marginBottom: '20px',
            color: '#666',
          }}
        >
          <Box component="li" sx={{ marginBottom: '10px', position: 'relative' }}>
            Effortless expense tracking: Add and split expenses among group members
            with just a few taps.
          </Box>
          <Box component="li" sx={{ marginBottom: '10px', position: 'relative' }}>
            Flexible splitting options: Choose to split expenses equally, by
            percentage, or by custom amounts.
          </Box>
          <Box component="li" sx={{ marginBottom: '10px', position: 'relative' }}>
            Real-time updates: Get real-time notifications on balances and payments.
          </Box>
          <Box component="li" sx={{ marginBottom: '10px', position: 'relative' }}>
            Detailed history: Access a complete history of all expenses and payments
            within a group.
          </Box>
          <Box component="li" sx={{ marginBottom: '10px', position: 'relative' }}>
            Secure and private: Your data is secure with Split Mate, and we
            prioritize your privacy.
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1em',
            marginBottom: '20px',
            color: '#555',
            textAlign: 'justify',
          }}
        >
          At Split Mate, we believe managing shared responsibilities should be
          hassle-free. Our app is built to make that a reality, and we are
          committed to continually improving to meet your needs.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.1em',
            marginBottom: '0px',
            color: '#555',
            textAlign: 'justify',
          }}
        >
          Thank you for choosing Split Mate. We hope it helps you stay organized
          and maintain harmony in your group activities!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

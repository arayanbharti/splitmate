import React from 'react';
import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          padding: '40px',
          background: 'linear-gradient(135deg, #e0f7fa, #ffffff)',
          borderRadius: '16px',
          boxShadow: '0 6px 30px rgba(0, 0, 0, 0.1)',
          color: '#444',
          lineHeight: 1.8,
          fontFamily: 'Roboto, sans-serif',
          marginTop: '40px',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: '2.8em',
            marginBottom: '20px',
            color: '#00796b',
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
            fontSize: '1.2em',
            marginBottom: '24px',
            color: '#555',
            textAlign: 'justify',
          }}
        >
          Welcome to Split Mate, your trusted companion for managing group expenses, bills, and shared tasks. Whether you're planning a getaway with friends, sharing household expenses, or coordinating a group project, Split Mate is here to ensure everything is handled smoothly and fairly.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2em',
            marginBottom: '24px',
            color: '#555',
            textAlign: 'justify',
          }}
        >
          Split Mate allows you to easily create groups, add expenses or tasks, and keep track of who owes what. Our user-friendly interface makes sure that everyone stays informed, reducing the chances of misunderstandings and ensuring transparency within your group.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.6em',
            marginBottom: '16px',
            color: '#00796b',
            fontWeight: 600,
          }}
        >
          Key features of Split Mate include:
        </Typography>
        <Box
          component="ul"
          sx={{
            listStyleType: 'none',
            paddingLeft: '0',
            marginBottom: '24px',
            color: '#666',
          }}
        >
          <Box
            component="li"
            sx={{
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CheckCircleIcon sx={{ color: '#00796b', marginRight: '8px' }} />
            <Typography variant="body1">
              Effortless expense tracking: Add and split expenses among group members with just a few taps.
            </Typography>
          </Box>
          <Box
            component="li"
            sx={{
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CheckCircleIcon sx={{ color: '#00796b', marginRight: '8px' }} />
            <Typography variant="body1">
              Flexible splitting options: Choose to split expenses equally, by percentage, or by custom amounts.
            </Typography>
          </Box>
          <Box
            component="li"
            sx={{
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CheckCircleIcon sx={{ color: '#00796b', marginRight: '8px' }} />
            <Typography variant="body1">
              Real-time updates: Get real-time notifications on balances and payments.
            </Typography>
          </Box>
          <Box
            component="li"
            sx={{
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CheckCircleIcon sx={{ color: '#00796b', marginRight: '8px' }} />
            <Typography variant="body1">
              Detailed history: Access a complete history of all expenses and payments within a group.
            </Typography>
          </Box>
          <Box
            component="li"
            sx={{
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CheckCircleIcon sx={{ color: '#00796b', marginRight: '8px' }} />
            <Typography variant="body1">
              Secure and private: Your data is secure with Split Mate, and we prioritize your privacy.
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2em',
            marginBottom: '24px',
            color: '#555',
            textAlign: 'justify',
          }}
        >
          At Split Mate, we believe managing shared responsibilities should be hassle-free. Our app is built to make that a reality, and we are committed to continually improving to meet your needs.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.2em',
            color: '#555',
            textAlign: 'justify',
          }}
        >
          Thank you for choosing Split Mate. We hope it helps you stay organized and maintain harmony in your group activities!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

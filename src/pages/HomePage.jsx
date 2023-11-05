import { Avatar, Box, Link, Typography } from '@mui/material';
import React from 'react';
import image from '../img/phonebook.png';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        padding: '100px',
      }}
    >
      <Avatar
        src={image}
        alt="phonebook"
        variant="square"
        sx={{
          width: '50%',
          height: '50%',
        }}
      />
      <Box>
        <Typography fontSize="20px">
          Hello! Here you can save, add and find you phone contacts.
        </Typography>
        <Typography fontSize="20px">
          <Link
            to="/register"
            component={NavLink}
            sx={{
              textDecoration: 'none',
            }}
          >
            Register
          </Link>{' '}
          or{' '}
          <Link
            to="/login"
            component={NavLink}
            sx={{
              textDecoration: 'none',
            }}
          >
            login
          </Link>{' '}
          to manage your contacts.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;

import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  SvgIcon,
  Toolbar,
  Typography,
} from '@mui/material';

import { ReactComponent as IconPhone } from '../img/icon-phonebook.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAuthenticated, selectAuthUser } from 'redux/auth/selectors';
import { logOutThunk } from 'redux/auth/operations';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const dispatch = useDispatch();
  const location = useLocation();
  const userName = useSelector(selectAuthUser);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <AppBar position="fixed">
      <Container>
        <nav>
          <Toolbar
            sx={{
              flexWrap: 'wrap',
              padding: '12px 0',
            }}
          >
            <Link
              to="/"
              component={NavLink}
              onClick={e => {
                if (location.pathname === '/contacts') {
                  e.preventDefault(); // Забороняємо перехід
                }
              }}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <SvgIcon
                  component={IconPhone}
                  inheritViewBox
                  sx={{ width: '50px', height: '50px' }}
                />
                <Typography
                  variant="h1"
                  fontSize="30px"
                  marginLeft={2}
                  fontWeight={700}
                  color="#fff"
                  sx={{
                    textDecoration: 'none',
                  }}
                >
                  Phonebook
                </Typography>
              </Stack>
            </Link>

            {!authenticated ? (
              <Stack
                direction="row"
                gap={3}
                marginLeft="auto"
                alignItems="center"
              >
                <Link
                  to="/register"
                  className={
                    location.pathname === '/register' ? 'active-link' : ''
                  }
                  component={NavLink}
                  sx={{
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontSize: '24px',
                    '&.active-link': {
                      borderRadius: '10px',
                      padding: '10px',
                      border: '1px solid #fff',
                    },
                    color: '#fff',
                  }}
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className={
                    location.pathname === '/login' ? 'active-link' : ''
                  }
                  component={NavLink}
                  sx={{
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontSize: '24px',
                    '&.active-link': {
                      borderRadius: '10px',
                      border: '1px solid #fff',
                      padding: '10px',
                    },
                    color: '#fff',
                  }}
                >
                  Login
                </Link>
              </Stack>
            ) : (
              <>
                <Stack marginLeft="auto" alignItems="center">
                  <Link
                    to="/contacts"
                    component={NavLink}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      fontSize: '24px',

                      color: '#fff',
                      borderRadius: '10px',
                      border: '1px solid #fff',
                      padding: '10px',
                    }}
                  >
                    Contacts
                  </Link>
                </Stack>
                <Box
                  sx={{
                    marginLeft: 'auto',
                    alignItems: 'center',
                    display: 'flex',
                    gap: '24px',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'rgb(255, 171, 64)',
                      fontSize: '24px',
                      fontWeight: '700',
                    }}
                  >
                    {userName.name}
                  </Typography>
                  <Button onClick={onLogOut} color="inherit" variant="outlined">
                    Log Out
                  </Button>
                </Box>
              </>
            )}
          </Toolbar>
        </nav>
      </Container>
    </AppBar>
  );
};

export default Navigation;

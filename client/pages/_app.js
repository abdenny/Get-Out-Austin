import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import theme from '../components/theme';
import Typography from '@material-ui/core/Typography';
import SignIn from '../components/user/SignIn.component';
import { auth } from '../src/firebase.utils';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import UserContext from '../src/context/userContext.context';
import Link from 'next/link';
import { PageTransition } from 'next-page-transitions';
import NProgress from 'nprogress';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Popover from '@material-ui/core/Popover';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp(props) {
  const { Component, pageProps, router } = props;
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Get Out, Austin</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <meta
          name='description'
          content='Designed to connect adventure seekers. Find your next hobby,
              event, or excursion.'
        />
        <meta
          name='keywords'
          content='Austin, Texas, Outdoors, Activities, Things to do, Hiking, Camping, Adventure, Festivals, Lessons, Animals, Kayaking, Skydiving'
        />
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css'
          rel='stylesheet'
        />
        <link rel='stylesheet' type='text/css' href='/nprogress.css' />
        <link rel='shortcut icon' href='2028578.svg' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <AppBar position='sticky'> */}
        <UserContext.Provider value={{ userGlobal: user }}>
          <Toolbar color='primary'>
            <Link href='/'>
              <div style={{ cursor: 'pointer' }}>
                <Typography variant='h6' color='inherit' noWrap>
                  Get Out, Austin
                </Typography>
              </div>
            </Link>
            <Hidden smUp implementation='css'>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                style={{
                  position: 'absolute',
                  top: '6px',
                  right: '16px',
                  display: 'flex',
                  flexDirection: 'row',
                }}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorReference='anchorPosition'
                anchorPosition={{ top: 56, left: 525 }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                style={{ width: '100vw', margin: '0' }}
              >
                <SignIn currentUser={user}></SignIn>
              </Popover>
            </Hidden>
            <Hidden xsDown implementation='css'>
              <SignIn currentUser={user}></SignIn>
            </Hidden>
          </Toolbar>
        </UserContext.Provider>
        {/* </AppBar> */}
        <UserContext.Provider value={{ userGlobal: user }}>
          <PageTransition timeout={300} classNames='page-transition'>
            <Component {...pageProps} key={router.route} />
          </PageTransition>
          <style jsx global>{`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}</style>
        </UserContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

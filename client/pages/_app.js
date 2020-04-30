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

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp(props) {
  const { Component, pageProps, router } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

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
        <link
          href='https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css'
          rel='stylesheet'
        />
        <link rel='stylesheet' type='text/css' href='/nprogress.css' />
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
            <SignIn currentUser={user}></SignIn>
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

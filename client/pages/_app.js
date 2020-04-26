import React, { useState, useEffect } from 'react';
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

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setcurrentUser(user);
    });
  }, []);

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  console.log(currentUser);

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
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <AppBar position='sticky'> */}
        <Toolbar color='primary'>
          <Typography variant='h6' color='inherit' noWrap>
            Get Out, Austin
          </Typography>
          <SignIn />
        </Toolbar>
        {/* </AppBar> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

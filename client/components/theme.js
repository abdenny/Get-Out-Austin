import { createMuiTheme } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#EDF5E1',
      main: '#5CDB95',
      dark: '#053386B',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8EE4AF',
      main: '#379683',
      dark: '#801313',
      contrastText: '#fff',
    },
  },
  spreadThis: {
    typography: {
      useNextVariants: true,
    },
    form: {
      textAlign: 'center',
    },
    image: {
      width: 100,
      margin: '20px 0 20px 0',
    },
    pageTitle: {
      margin: '10px 0 10px 0',
    },
    textField: {
      margin: '10px 0 10px 0',
    },
    button: {
      marginTop: 20,
      position: 'relative',
    },
    customError: {
      color: 'red',
      fontSize: '0.8rem',
    },
    smallText: {
      color: 'gray',
    },
    progress: {
      position: 'absolute',
    },
    invisibleSeparator: {
      border: 'none',
      margin: 4,
    },
    visibleSeparator: {
      width: '100%',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      marginBottom: 20,
    },
  },
});

export default theme;

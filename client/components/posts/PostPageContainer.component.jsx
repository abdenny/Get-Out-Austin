import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PostMap from './PostMap.component';
import PostGrid from './PostGrid.component';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  map: {
    overflow: 'hidden',
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  grid: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(1),
  },
}));

export default function PostPageContatiner() {
  const classes = useStyles();

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={7} elevation={6} square>
        <div className={classes.grid}>
          <PostGrid />
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={5} className={classes.map}>
        <PostMap />
      </Grid>
    </Grid>
  );
}

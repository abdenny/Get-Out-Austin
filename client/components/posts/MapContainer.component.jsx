import React from 'react';
import Grid from '@material-ui/core/Grid';

const MapContainer = ({ children }) => {
  return (
    <>
      <Grid
        container
        direction='row'
        justify='flex-end'
        alignItems='flex-start'
      >
        {children}
      </Grid>
    </>
  );
};

export default MapContainer;

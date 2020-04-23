import React from 'react';
import Grid from '@material-ui/core/Grid';

const PostPageContainer = ({ children }) => {
  return (
    <>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        {children}
      </Grid>
    </>
  );
};

export default PostPageContainer;

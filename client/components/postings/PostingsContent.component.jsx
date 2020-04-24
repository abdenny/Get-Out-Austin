import React from 'react';
import PostCard from './PostingsCards.component';
import { Grid } from '@material-ui/core';
import PostingsData from './PostingsData.component';

const PostingsContent = () => {
  const getPostingCard = (postingObj) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <PostCard {...postingObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {PostingsData.map((postingObj) => getPostingCard(postingObj))}
    </Grid>
  );
};

export default PostingsContent;

import React from 'react';
import PostCard from './PostingsCards.component';
import { Grid } from '@material-ui/core';

const PostingsContent = (props) => {
  const getPostingCard = (postingObj, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} md={4}>
        <PostCard {...postingObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {props.propsForPostingsContent.map((postingObj, index) =>
        getPostingCard(postingObj, index)
      )}
    </Grid>
  );
};

export default PostingsContent;

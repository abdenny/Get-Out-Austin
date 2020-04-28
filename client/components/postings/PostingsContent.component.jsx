import React from "react";
import PostCard from "./PostingsCards.component";
import { Grid } from "@material-ui/core";

const PostingsContent = (props) => {
  console.log(props);
  const getPostingCard = (postingObj) => {
    // console.log(postingObj);
    return (
      <Grid item xs={12} sm={6} md={4}>
        <PostCard {...postingObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {props.propsForPostingsContent.map((postingObj) =>
        getPostingCard(postingObj)
      )}
    </Grid>
  );
};

export default PostingsContent;

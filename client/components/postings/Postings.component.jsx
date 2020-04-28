import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import PostingsContent from "./PostingsContent.component";
import PostingsMap from "../map/PostingsMap.component";
import PostToolBar from "./Toolbar.components";

const Postings = (props) => {
  const [searchParams, setValue] = useState({
    categories: [],
    guests: 1,
    max_price: 20,
    search: "",
    wantSearch: false,
    conditionsWanted: {},
  });
  console.log(props.props.posts);
  let propsFilter;
  if (searchParams.wantSearch) {
    console.log("want search", searchParams.conditionsWanted);
    propsFilter = props.props.posts.map((post) => {
      let conditionsNeeded = Object.keys(searchParams.conditionsWanted).length;
      let conditionsMet = 0;
      console.log(conditionsNeeded, conditionsMet);
      for (var key in searchParams.conditionsWanted) {
        switch (key) {
          case "categories":
            if (
              searchParams.conditonsWanted[categories].includes(
                post[post_category]
              )
            ) {
              conditionsMet += 1;
            }
            break;
          case "guest":
            if (
              post[max_guests] - post[booked_guests] >
              parseInt(searchParams.conditonsWanted[guests])
            ) {
              conditionsMet += 1;
            }
            break;
          case "max_price":
            if (
              post.post_price <
              parseInt(searchParams.conditionsWanted.max_price)
            ) {
              conditionsMet += 1;
              console.log("max price met", conditionsMet);
              break;
            }
            console.log("max price not met");
            break;
          case "search":
            if (
              post.post_title.includes(searchParams.conditionsWanted[search]) ||
              post.post_description.includes(
                searchParams.conditonsWanted.search
              )
            ) {
              conditionsMet += 1;
            }
            break;

          default:
            console.log("hello");
            break;
        }
      }
      console.log(conditionsNeeded, conditionsMet);
      return post;
    });
    console.log(propsFilter);
  }

  console.log(props.props.posts);
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={12} sm={12} md={12}>
          <PostToolBar searchParams={searchParams} setSearch={setValue} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          style={{ maxHeight: "100vh", overflow: "auto" }}
        >
          <PostingsContent
            propsForPostingsContent={
              searchParams.wantSearch ? propsFilter : props.props.posts
            }
          />
        </Grid>
        <Grid item xs={false} sm={false} md={5} style={{ overflow: "hidden" }}>
          <PostingsMap />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Postings;

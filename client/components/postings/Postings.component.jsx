import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import PostingsContent from './PostingsContent.component';
import PostingsMap from '../map/PostingsMap.component';
import PostToolBar from './Toolbar.components';

const Postings = (props) => {
  const [searchParams, setValue] = useState({
    categories: [],
    guests: 1,
    max_price: 20,
    search: '',
    wantSearch: false,
    conditionsWanted: {},
  });

  const resetSearch = () => {
    setValue({
      ...searchParams,
      categories: [],
      guests: 1,
      max_price: 20,
      search: '',
      wantSearch: false,
      conditionsWanted: {},
    });
  };

  let propsFilter;
  if (searchParams.wantSearch) {
    console.log('want search', searchParams.conditionsWanted);
    propsFilter = props.props.posts.filter((post) => {
      let conditionsNeeded = Object.keys(searchParams.conditionsWanted).length;
      let conditionsMet = 0;
      console.log(conditionsNeeded, conditionsMet);
      for (var key in searchParams.conditionsWanted) {
        switch (key) {
          case 'categories':
            if (
              searchParams.conditionsWanted.categories.includes(
                post.post_category
              )
            ) {
              conditionsMet += 1;
              break;
            } else if (searchParams.conditionsWanted.categories.length < 1) {
              conditionsMet += 1;
              break;
            }
            break;
          case 'guests':
            if (
              post.post_max_guests - post.post_booked_guests >
              parseInt(searchParams.conditionsWanted.guests)
            ) {
              conditionsMet += 1;
              break;
            } else if (searchParams.conditionsWanted.guests === '') {
              conditionsMet += 1;
              break;
            }
            break;
          case 'max_price':
            if (
              post.post_price <
              parseInt(searchParams.conditionsWanted.max_price)
            ) {
              conditionsMet += 1;
              console.log('max price met', conditionsMet);
              break;
            } else if (searchParams.conditionsWanted.max_price === '') {
              conditionsMet += 1;
              break;
            }
            console.log('max price not met');
            break;
          case 'search':
            if (
              post.post_title
                .toLowerCase()
                .includes(searchParams.conditionsWanted.search.toLowerCase()) ||
              post.post_description
                .toLowerCase()
                .includes(searchParams.conditionsWanted.search.toLowerCase())
            ) {
              conditionsMet += 1;
              break;
            }
            break;

          default:
            console.log('hello');
            break;
        }
      }
      return conditionsNeeded === conditionsMet;
    });
  }

  return (
    <Grid container direction='column'>
      <Grid item container>
        <Grid item xs={12} sm={12} md={12}>
          <PostToolBar
            searchParams={searchParams}
            setSearch={setValue}
            resetSearch={resetSearch}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          style={{ maxHeight: '100vh', overflow: 'auto' }}
        >
          <PostingsContent
            propsForPostingsContent={
              searchParams.wantSearch ? propsFilter : props.props.posts
            }
          />
        </Grid>
        <Grid item xs={false} sm={false} md={5} style={{ overflow: 'hidden' }}>
          <PostingsMap props={props.props.posts} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Postings;

import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, CardMedia } from '@material-ui/core';
import Link from 'next/link';
import UserContext from '../../src/context/userContext.context';

const PostingCards = (props) => {
  const { userGlobal } = useContext(UserContext);

  const {
    description,
    post_title,
    id,
    post_price,
    post_images,
    post_booked_guests,
    post_max_guests,
    post_ending_date,
    image_avatar,
  } = props;
  let checkValid;
  let checkValidText;
  function isDateBeforeToday(date) {
    return new Date(date).valueOf() < new Date().valueOf();
  }
  if (post_booked_guests === post_max_guests) {
    checkValid = false;
    checkValidText = 'This post is fully booked!';
  } else if (isDateBeforeToday(post_ending_date)) {
    checkValid = false;
    checkValidText = 'This post has expired.';
  } else if (!userGlobal) {
    checkValid = false;
    checkValidText = 'Login to view';
  } else {
    checkValid = true;
  }
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={image_avatar} />}
        title={post_title}
        subheader={`$${post_price}`}
      />
      <CardMedia style={{ height: '150px' }} image={post_images} />
      <CardContent>
        <Typography variant='body2' component='span'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {checkValid ? (
          <Link href={`/posts/${id}`} as={`/post/${id}`}>
            <Button color='secondary' size='small'>
              View Posting
            </Button>
          </Link>
        ) : (
          <Typography color='secondary'>{checkValidText}</Typography>
        )}
      </CardActions>
    </Card>
  );
};

export default PostingCards;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import Link from "next/link";

const PostingCards = (props) => {
  // console.log(props);
  const {
    avatarUrl,
    title,
    subtitle,
    description,
    post_title,
    id,
    post_price,
    post_images,
  } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={post_title}
        subheader={`$${post_price}`}
      />
      <CardMedia style={{ height: "150px" }} image={post_images} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/posts/${id}`}>
          <Button size="small">View Posting</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PostingCards;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import PostToolbar from "./PostToolbar.component";
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  gridList: {
    width: "80%",
    height: "100vh",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const tileData = [
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
  {
    img: "https://getoutaustin.s3.us-east-2.amazonaws.com/4.jpeg",
    title: "Image",
    author: "author",
  },
];

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: "auto" }}>
          {/* <ListSubheader component='div'>TOOLBAR GOES HERE</ListSubheader> */}
          {/* <PostToolbar /> */}
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

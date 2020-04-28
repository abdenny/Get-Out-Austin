import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import SelectsToolBar from "./SelectsToolBar.component";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function PostToolBar(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <hr />
        <Toolbar color="primary" position="sticky">
          <SelectsToolBar
            searchParams={props.searchParams}
            setSearch={props.setSearch}
          />
        </Toolbar>
        <hr />
      </div>
    </>
  );
}

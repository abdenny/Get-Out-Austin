import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PostToast(props) {
  const classes = useStyles();

  let toast = "";
  if (
    props.status === "Sorry, the posting you added seems to be a duplicate."
  ) {
    console.log("error found");
    toast = (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        There seems to be an error —{" "}
        <strong>perhaps your posting is a duplicate.</strong>
      </Alert>
    );
  } else {
    console.log("no error found");
    toast = (
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Posting added succesfully — <strong>good luck!</strong>
      </Alert>
    );
  }

  return <div className={classes.root}>{toast}</div>;
}

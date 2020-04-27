import React, { Component } from "react";
import { Formik, useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Form } from "./Form.component";
import Paper from "@material-ui/core/Paper";
import validationSchema from "./yupValidation";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  container: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

const InputForm = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      photos: "",
      price: 0,
      guest_range: [1, 20],
      date_range: [null, null],
    },
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
          <h1>Add a Posting</h1>
          <Formik
            render={(props) => <Form {...props} />}
            handleChange={formik.handleChange}
            initialValues={formik.initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          />
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default InputForm;

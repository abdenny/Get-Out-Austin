import React, { Component } from "react";
import { Formik, useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { Form } from "./Form.component";
import Paper from "@material-ui/core/Paper";
import validationSchema from "./yupValidation";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing * 5}px ${theme.spacing * 5}px ${
      theme.spacing * 5
    }px`,
  },
  container: {
    maxWidth: "200px",
  },
}));

const InputForm = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      confirmPassword: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
          <h1>Form</h1>
          <div>
            Name: {formik.values.name} Email: {formik.values.email}
          </div>
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

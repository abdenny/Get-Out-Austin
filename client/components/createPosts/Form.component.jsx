import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AirBnbSlider from "./AirBnbSlider.component";
import DatePicker from "./DatePicker.component";

export const Form = (props) => {
  //Destructure props
  let propForSlider = props;
  const {
    values: {
      title,
      description,
      category,
      photos,
      price,
      guest_range,
      date_range,
    },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    setFieldValue,
  } = props;
  let propForDatePicker = {
    date_range,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    setFieldValue,
  };

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="title"
            name="title"
            label="Title"
            helperText={touched.title ? errors.title : ""}
            error={touched.title && Boolean(errors.title)}
            value={title}
            onChange={change.bind(null, "title")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="outlined-multiline-static"
            name="description"
            helperText={touched.description ? errors.description : ""}
            error={touched.description && Boolean(errors.description)}
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={change.bind(null, "description")}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="category"
            name="category"
            helperText={touched.category ? errors.category : ""}
            error={touched.category && Boolean(errors.category)}
            label="Category"
            fullWidth
            value={category}
            onChange={change.bind(null, "category")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="price"
            name="price"
            helperText={touched.price ? errors.price : ""}
            error={touched.price && Boolean(errors.price)}
            label="Price"
            fullWidth
            value={price}
            onChange={change.bind(null, "price")}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="photos"
            name="photos"
            label="Photos"
            helperText={touched.photos ? errors.photos : ""}
            error={touched.photos && Boolean(errors.photos)}
            value={photos}
            onChange={change.bind(null, "photos")}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AirBnbSlider props={propForSlider} change={change} />
        </Grid>
        <Grid item xs={12}>
          <DatePicker props={propForDatePicker} changeHandler={change} />
        </Grid>
      </Grid>
      {/* Todo: add Form for Date */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};

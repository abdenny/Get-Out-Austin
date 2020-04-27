import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {
  const {
    values: {
      title,
      description,
      category,
      photos,
      price,
      guest_range,
      start_date,
      end_date,
    },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    setFieldValue,
  } = props.props;
  const classes = useStyles();
  const [value1, setValue] = React.useState(guest_range);

  const handleChangeIn = (event, newValue) => {
    setValue(newValue);
    // props.change.bind(null, "guest_range");
    setFieldValue("guest_range", value1);
    console.log(guest_range);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Guest Range
      </Typography>
      <Slider
        id="guest_range"
        name="guest_range"
        value={value1}
        helperText={touched.guest_range ? errors.guest_range : ""}
        error={touched.guest_range && Boolean(errors.guest_range)}
        onChange={handleChangeIn}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={1}
        max={50}
      />
    </div>
  );
}

import React from "react";
import { DateRangePicker } from "react-dates";

function DatePicker(props) {
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
  } = props.props;
  const [value1, setValue] = React.useState(date_range);
  const handleChangeIn = (event, newValue) => {
    setValue(newValue);
    props.changeHandle.bind(null, "date_range");
  };
  return (
    <>
      <DateRangePicker
        startDate={value1[0]} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={value1[1]} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) =>
          handleChangeIn({ startDate, endDate })
        } // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
      />
    </>
  );
}

export default DatePicker;

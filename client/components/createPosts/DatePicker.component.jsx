import React from "react";
import { DateRangePicker } from "react-dates";

import { Component } from "react";

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: props.props.date_range[0],
      endDate: props.props.date_range[1],
    };
  }
  handleChangeIn = (newValue) => {
    this.setState(newValue, () => {
      this.props.props.setFieldValue("date_range", [
        this.state.startDate,
        this.state.endDate,
      ]);
    });
    console.log(newValue);
    this.props.changeHandler.bind(null, "date_range");
  };
  render() {
    return (
      <>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.handleChangeIn({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          withPortal={true}
        />
      </>
    );
  }
}

export default DatePicker;

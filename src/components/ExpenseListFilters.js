import React from "react";
import moment from "moment";
import {connect} from "react-redux";
import {editFilter} from "../reducers/filters";
import {DateRangePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(editFilter({startDate: startDate, endDate: endDate}))
    };

    onFocusChange = (focused) => {
        this.setState({calenderFocused: focused})
    };
    render () {
        return (
            <div>
                <input type={"text"} value={this.props.filters.description} onChange={(e) => (
                    this.props.dispatch(editFilter({description: e.target.value}))
                )}/>
                <select value={this.props.filters.sortBy} onChange={(e) => (
                    this.props.dispatch(editFilter({sortBy: e.target.value}))
                )}>
                    <option value={"date"}>Date</option>
                    <option value={"amount"}>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    startDateId={"start"}
                    endDateId={"end"}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    isOutsideRange={() => (false)}
                    showClearDates={true}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);
import React from "react";
import moment from "moment";
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount/100).toString() : "0",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: undefined,
        };
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };

    onFocusChange = ({focused}) => {
      this.setState({calenderFocused: focused})
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState({createdAt})
        }
    };

    onFormSubmit = (e) => {
      e.preventDefault();

      if (!this.state.description || !this.state.amount ) {
          this.setState({error: "Please fill in all fields"})
      } else {
          this.setState({error: undefined});
          console.log("Form Submitted");
          this.props.onSubmit({
              description: this.state.description,
              amount: parseFloat(this.state.amount) * 100,
              createdAt: this.state.createdAt.valueOf(),
              note: this.state.note
          })
      }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type={"text"}
                        placeholder={"Description"}
                        autoFocus={true}
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type={"text"}
                        placeholder={"amount"}
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        id={"some id"}
                        numberOfMonths={1}
                        isOutsideRange={() => (false)}
                    />
                    <textarea
                        placeholder={"Add A note"}
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button type={"submit"}>Add Expense</button>
                </form>
            </div>
        )
    }
}
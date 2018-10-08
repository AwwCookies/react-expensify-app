import React from "react";
import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm";
import {addExpense} from "../reducers/expenses";
const AddExpensePage = (props) => {
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                }}
            />
        </div>
    )
};

export default connect()(AddExpensePage)
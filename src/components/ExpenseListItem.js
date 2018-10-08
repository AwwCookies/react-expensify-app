import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {removeExpense} from "../reducers/expenses";

const ExpenseListItem = ({id, description, amount, createdAt}) => {
    return (
      <div>
          <NavLink to={`/edit/${id}`}><h3>{description}</h3></NavLink>
          <p>Amount: {amount} - Created At: {createdAt}</p>
      </div>
    );
};

export default ExpenseListItem;
import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

export const ExpenseDashBoardPage = () => {
    return (
        <div>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
    )
};
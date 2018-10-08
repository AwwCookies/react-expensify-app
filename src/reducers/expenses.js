import uuid from "uuid";
import moment from "moment";

export const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return [...state].filter((expense) => {return expense.id !== action.id});
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            console.log("default");
            return state;
    }
};



export const addExpense = ({description = "", note = "", amount = 0, createdAt} = {}) => {
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt: moment().valueOf()
        }
    }
};

export const removeExpense = ({id} = {}) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    }
};

export const editExpense = (id, updates) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
};
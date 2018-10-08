import {createStore, combineReducers} from "redux"
import uuid from "uuid"

const addExpense = ({description = "", note = "", amount = 0, createdAt = 0} = {}) => {
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
};

const removeExpense = ({id} = {}) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    }
};

const editExpense = (id, updates) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    }
};
const expensesReducer = (state = [], action) => {
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
            return state;
    }
};

const editFilter = (updates) => {
    return {
        type: "EDIT_FILTER",
        updates
    }
};
const filtersReducer = (state = {text: "", sortBy: "date", startDate: undefined, endDate: undefined}, action) => {
    switch (action.type) {
        case "EDIT_FILTER":
            return {
                ...state,
                ...action.updates
            };
        default:
            return state
    }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description === text;
        return startDateMatch && endDateMatch && textMatch

    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(`Changes: `, visibleExpenses);
});

// store.dispatch(addExpense({description: "Rent", amount: 100, createdAt: -1000}));
store.dispatch(addExpense({description: "Coffee", amount: 100 * 3, createdAt: -1000}));
store.dispatch(addExpense({description: "Lunch", amount: 100 * 8}));
// const expenseRent = store.dispatch(addExpense({description: "Rent", amount: 100}));
// console.log(expenseRent.expense.id);
// store.dispatch(removeExpense({id: expenseRent.expense.id}));


// store.dispatch(editExpense(expenseRent.expense.id, {amount: 10}));

store.dispatch(editFilter({text: "Coffee"}));
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
// store.dispatch(editFilter({sortBy: "Amount"}));
// store.dispatch(editFilter({sortBy: "Date"}));
//
// console.log(store.getState());
// const user = {
//     name: "Emma",
//     age: 24
// };
//
// console.log({
//     ...user,
//     location: "Austin, TX",
//     age: 23
// });
import moment from "moment";

const filtersReducerState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};

export const filtersReducer = (state = filtersReducerState, action) => {
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

export const getVisibleExpenses = (expenses, {description, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), "day") : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt), "day") : true;
        const textMatch = expense.description.toLowerCase().includes(description.toLowerCase());
        return startDateMatch && endDateMatch && textMatch

    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

export const editFilter = (updates) => {
    return {
        type: "EDIT_FILTER",
        updates
    }
};
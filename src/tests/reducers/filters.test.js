import moment from "moment";
import {editFilter, getVisibleExpenses, filtersReducer} from "../../reducers/filters";

test("should setup default filter values", () => {
   const state = filtersReducer(undefined, {type: "@@INIT"});
   expect(state).toEqual({
       text: "",
       sortBy: "date",
       startDate: moment().startOf("month"),
       endDate: moment().endOf("month")
   })
});

test("should update filter state", () => {
    const action = {
        type: "EDIT_FILTER",
        updates: {
            text: "",
            sortBy: "amount",
            startDate: moment(),
            endDate: moment()
        }
    };
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: "",
        sortBy: "amount",
        startDate: action.updates.startDate,
        endDate: action.updates.endDate,
    })
});

test("should setup edit expense action", () => {
    const action = editFilter({description: "rent"});
    expect(action).toEqual({
        type: "EDIT_FILTER",
        updates: {
            description: "rent"
        }
    })
});

const expenses = [
    {
        id: 0,
        description: "Gum",
        note: "",
        amount: 195,
        createdAt: 0
    },
    {
        id: 1,
        description: "Rent",
        note: "",
        amount: 10254,
        createdAt: moment(0).subtract(4, "days").valueOf()
    },
    {
        id: 2,
        description: "Credit Card",
        note: "",
        amount: 102544,
        createdAt: moment(0).add(4, "days").valueOf()
    },
];

test("should filter by text value", () => {
    const filters = {description: "e", sortBy: "date", startDate: undefined, endDate: undefined};
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]])
});

test("should filter by startDate", () => {
    const filters = {description: "", sortBy: "date", startDate: moment(0), endDate: undefined};
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])
});

test("should filter by endDate", () => {
    const filters = {description: "", sortBy: "date", startDate: undefined, endDate: moment(0)};
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should sort by date", () => {
    const filters = {description: "", sortBy: "date", startDate: undefined, endDate: undefined};
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
});

test("should sort by amount", () => {
    const filters = {description: "", sortBy: "amount", startDate: undefined, endDate: undefined};
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
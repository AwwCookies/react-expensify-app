import {addExpense, editExpense, removeExpense, expensesReducer} from "../../reducers/expenses";

// test("should return new expense", () => {
//     // const expense = addExpense({
//     //     description: "test",
//     //     note: "test",
//     //     amount: 2,
//     // });
//     const state = expensesReducer(undefined, {type: "ADD_EXPENSE"});
//
//     // expect(state).toEqual([expense])
// });

// test("should remove an expense", () => {
//     const expense = addExpense({
//         description: "test",
//         note: "test",
//         amount: 2,
//     });
//     const state = expensesReducer([expense.expense], {type: "REMOVE_EXPENSE", id: expense.amount});
//     expect(state).toEqual([])
// });

test("should setup remove expense action object", () => {
    const action = removeExpense({id: 1});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: 1
    });
});

test("should setup edit expense action object", () => {
    const updates = {description: "monkaS"}
    const action = editExpense(1, updates);
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: 1,
        updates: updates
    });
});

test("should setup add expense action object with provided values", () => {
    const expense = {
        description: "Rent",
        amount: 1,
        note: "This is a sample note"
    };
    const action = addExpense(expense);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expense,
            id: expect.any(String),
            createdAt: expect.any(Number)
        }
    })
});

test("should setup add expense action object with default values", () => {
    const expense = {
        description: "",
        note: "",
        amount: 0
    };
    const action = addExpense();
    expect(action).toEqual(
        {
            type: "ADD_EXPENSE",
            expense: {
                ...expense,
                id: expect.any(String),
                createdAt: expect.any(Number)
            }
        })
});
import "normalize.css/normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {configureStore} from "./store/configureStore";
import {AppRouter} from "./routers/AppRouter";
import {addExpense, expensesReducer} from "./reducers/expenses";
import {getVisibleExpenses} from "./reducers/filters";
import {editFilter} from "./reducers/filters";
import "./styles/style.scss";

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addExpense({description: "Gas Bill", createdAt: 1000}));
store.dispatch(addExpense({description: "Water Bill", amount: 4500}));
store.dispatch(addExpense({description: "Rent Bill", amount: 109500}));
store.dispatch(editFilter({description: ""}));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
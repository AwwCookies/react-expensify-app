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

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
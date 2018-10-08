import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import {ExpenseDashBoardPage} from "../components/ExpenseDashBoardPage";
import {Header} from "../components/Header";
import {HelpPage} from "../components/HelpPage";
import {NotFoundPage} from "../components/NotFoundPage";

export const AppRouter = () => {
  return (
      <BrowserRouter>
          <div>
              <Header/>
              <Switch>
                  <Route exact path={"/"} component={ExpenseDashBoardPage}/>
                  <Route path={"/create"} component={AddExpensePage}/>
                  <Route path={"/edit/:id"} component={EditExpensePage}/>
                  <Route path={"/help"} component={HelpPage}/>
                  <Route component={NotFoundPage}/> // 404 Page
              </Switch>
          </div>
      </BrowserRouter>
  );
};
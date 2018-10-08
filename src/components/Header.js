import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink exact to={"/"} activeClassName={"is-active"}>Home</NavLink>
            <NavLink to={"/create"} activeClassName={"is-active"}>Create</NavLink>
            <NavLink to={"/help"} activeClassName={"is-active"}>Help</NavLink>
        </header>
    );
};
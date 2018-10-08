import React from "react";
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <div>
            <p>My nigga, what the fuck is you lookin' for?</p>
            <a href={"/"}>Go home</a>
            <p/>
            <Link to={"/"}>Go Home (react-router-link)</Link>
        </div>
    )
};
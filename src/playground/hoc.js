import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is {props.info}</p>
        </div>
    )
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info do not share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth && <WrappedComponent/>}
            {props.isAuth || <p>PLEASE LOGIN</p>}
        </div>
    )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuth={true} info={"info here"}/>, document.getElementById("app"));
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {

    render(){
        return (
            <div>
                <button onClick={this.notify}>Notify !</button>
                <ToastContainer />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"))
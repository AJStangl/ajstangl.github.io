import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./Components/home";
import Resume from "./Components/resume";
import Contact from "./Components/contat";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Personal Website</h1>
                <ul className="header">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/resume">Resume</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;

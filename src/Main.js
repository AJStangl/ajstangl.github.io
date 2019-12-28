import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Components/home";
import Resume from "./Components/resume";
import Contact from "./Components/contat";
import { faHome, faEnvelope, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const HomeIcon = <FontAwesomeIcon icon={faHome}/>;
const EmailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const ResumeIcon = <FontAwesomeIcon icon={faNewspaper} />;

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li>
                            <NavLink exact to="/">Home {HomeIcon}</NavLink> />
                            <NavLink to="/resume">Resume {ResumeIcon}</NavLink>
                            <NavLink to="/contact">Contact {EmailIcon}</NavLink>
                        </li>
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

import React, { Component } from "react";
import { AppBar } from '@material-ui/core';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Components/home";
import Resume from "./Components/resume";
import Contact from "./Components/contat";
import { faHome, faEnvelope, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";


const HomeIcon = <FontAwesomeIcon icon={faHome}/>;
const EmailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const ResumeIcon = <FontAwesomeIcon icon={faNewspaper} />;

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navigation />
                    {/*<ul className="header">*/}
                    {/*    <li>*/}
                    {/*        <NavLink exact to="/">Home {HomeIcon}</NavLink> />*/}
                    {/*        <NavLink to="/resume">Resume {ResumeIcon}</NavLink>*/}
                    {/*        <NavLink to="/contact">Contact {EmailIcon}</NavLink>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
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

class Navigation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var styles = {
            appBar: {
                flexWrap: 'wrap'
            },
            tabs: {
                width: '100%'
            }
        };

        return (
            <AppBar showMenuIconButton={true} style={styles.appBar}>
                <Tabs style={styles.tabs} >
                    <Tab label={'Home'}>
                        {/*<Route exact path="/" component={Home}/>*/}
                    </Tab>
                </Tabs>
                {/*<Tabs style={styles.tabs}>*/}
                {/*    <Tab label='Home' />*/}
                {/*    <Tab label='Resume' />*/}
                {/*    <Tab label='Contact' />*/}
                {/*</Tabs>*/}
            </AppBar>
        )
    }
}


export default Main;

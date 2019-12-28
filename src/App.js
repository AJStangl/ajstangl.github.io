import React, {Component} from "react";
import {HashRouter, Link, Route} from "react-router-dom";
import Home from "./Components/home";
import Resume from "./Components/resume";
import Contact from "./Components/contat";
import Navigation from "./Navigation";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navigation />
                    <div>\n</div>
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


export default App;

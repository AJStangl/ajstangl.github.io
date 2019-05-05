import React, { Component } from 'react'
import logo from "../images/logo.svg";

export class Home extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
            </div>
        );
    }
}

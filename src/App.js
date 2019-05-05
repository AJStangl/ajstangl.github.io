import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { Home } from './Components/Homepage';

library.add(faStroopwafel);

class App extends Component {
    render () {
        return (
            <div className="app">
                <Switch>
                    <Route path='/' exact component={ Home } />
                </Switch>
            </div>
        )
    }
}
export default App;

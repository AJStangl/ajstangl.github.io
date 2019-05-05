import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router} from 'react-router-dom';
import {  Home } from './components/Homepage';
import Route from "react-router-dom/es/Route";
library.add(faStroopwafel);
ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));


function App() {
  return (
      <div>
        <Route exact path={`/`} render={() => < Home/>}/>
      </div>
  );
}
export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from './Dashboard';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
           
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
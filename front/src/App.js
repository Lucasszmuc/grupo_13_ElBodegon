import React from "react";
 import { Switch, Route } from "react-router-dom"; 
import "./App.css";
import Home from "./views/Home";
import Users from "./views/Users"; 
import Products from "./views/Products";

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" component={Users} />
          <Route exact path='/products' component={Products} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;

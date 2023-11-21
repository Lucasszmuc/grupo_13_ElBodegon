import React from "react";
import SideBar from "./components/SideBar";
import ContentWrapper from "./components/ContentWrapper";
/* import { Switch, Route } from "react-router-dom"; */
import "./App.css";
/* import Users from "./components/Users"; */

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />

        <ContentWrapper />
      </div>
    </React.Fragment>
  );
}

export default App;

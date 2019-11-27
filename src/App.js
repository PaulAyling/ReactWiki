import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
// import all css files cannot put imports into App.css as doesnt work
import "./css/App.css";

import Navbar from "./components/layouts/Navbar";

// import NavbarObsolete from "./components/Navbar";
// content
import Home from "./components/pages/home";
import Questions from "./components/pages/questions";
//Pages
import ReactFolderStructure from "./components/pages/ReactFolderStructure";
import ReactContext from "./components/pages/Context";
import Syntax from "./components/pages/syntax";

import ReactBurgersBoring from "./components/pages/reactBurgersBoring";
import ReactBurgers from "./components/pages/reactBurgers";

import ReactBurgerRestaurant from "./components/pages/reactBurgerRestaurant";
import StateExamples from "./components/pages/stateExamples";

function App() {
  return (
    <div>
      {/* <FunctionalContext> */}
      <Router>
        {/* <FunctionalState> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/files" component={ReactFolderStructure} />
          <Route exact path="/context" component={ReactContext} />
          <Route exact path="/questions" component={Questions} />

          <Route exact path="/syntax" component={Syntax} />
          <Route
            exact
            path="/reactburgersboring"
            component={ReactBurgersBoring}
          />
          <Route exact path="/reactburgers" component={ReactBurgers} />
          <Route
            exact
            path="/reactburgerrestaurant"
            component={ReactBurgerRestaurant}
          />
          <Route
            exact
            path="/stateexamples" component={StateExamples}
          />
          {/* <Route
            exact
            path="/reactErrors" component={ReactErrors}
          /> */}
        </Switch>
        {/* </FunctionalState> */}
      </Router>
      {/* </FunctionalContext> */}
    </div>
  );
}

export default App;

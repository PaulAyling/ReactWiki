import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";

import Navbar from "./components/layouts/Navbar";

// import NavbarObsolete from "./components/Navbar";
// content
import Home from "./components/pages/home";
import Questions from "./components/pages/questions";

import ReactFolderStructure from "./components/pages/ReactFolderStructure";
import ReactContext from "./components/pages/Context";
import functionalComponent from "./components/pages/fuctionalComponents";
import Syntax from "./components/pages/syntax";
// import FunctionalContext from "./context/functional/functionalContext"
// import { FolderContextProvider } from './context/FoldersContext';
// import Foldersv2 from './components/Foldersv2';

//STATES
// import FunctionalState from "./context/functional/FunctionalState";

function App() {
  return (
    <div className="container">
      {/* <FunctionalContext> */}
      <Router>
        {/* <FunctionalState> */}
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/files" component={ReactFolderStructure} />
            <Route exact path="/context" component={ReactContext} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/functional" component={functionalComponent} />
            <Route exact path="/syntax" component={Syntax} />
          </Switch>
        {/* </FunctionalState> */}
      </Router>
      {/* </FunctionalContext> */}
    </div>
  );
}

export default App;

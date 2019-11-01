import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./css/App.css";

import Navbar from "./components/Navbar";
import ReactFolderStructure from "./components/pages/ReactFolderStructure";
// import { FolderContextProvider } from './context/FoldersContext';
// import Foldersv2 from './components/Foldersv2';

function App() {
  return (
    <div className="container">
      <Navbar />
      <br/>
      <ReactFolderStructure />


    </div>
  );
}

export default App;

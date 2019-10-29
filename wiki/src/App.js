import React from 'react';
import './App.css';
import Folders from './components/static/Folders';
import Navbar from './components/Navbar'
// import { FolderContextProvider } from './context/FoldersContext';
// import Foldersv2 from './components/Foldersv2';

function App() {
  return (
    <div className="App">
    <h1>Pauls Fabulous Wiki</h1>
    <Navbar/>
    <Folders/>
    {/* <FolderContextProvider>
      <Foldersv2/>
    </FolderContextProvider> */}
    </div>
  );
}

export default App;

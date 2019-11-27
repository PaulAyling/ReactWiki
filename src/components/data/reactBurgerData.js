const reactBurgerData = {
  data: [
    {
      filename:"App.js",
      importPaths:`import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';`,
      defineComponent:`function App() {`,
      variablesAndFunctions:"",
      returnJsx:`return (
        <div className="App">
          <ThemeContextProvider>
            <Navbar />
            <BookList />
          </ThemeContextProvider>
        </div>
      );
    }`,
      definePrototypes:"",
      exportComponent:"export default App;"
    },
    {
      filename:"CSS",
      importPaths:``,
      defineComponent:`style.css`,
      variablesAndFunctions:"",
      returnJsx:``,
      definePrototypes:"",
      exportComponent:""
    },
    
    {
      filename:"myFile.json",
      importPaths:``,
      defineComponent:``,
      variablesAndFunctions:"",
      returnJsx:``,
      definePrototypes:"",
      exportComponent:""
    },
    {
      filename:"Public",
      importPaths:``,
      defineComponent:`favicon.ico
index.html
logo192.png
manifest.json
robots.txt`,
      variablesAndFunctions:"",
      returnJsx:``,
      definePrototypes:"",
      exportComponent:""
    },
    
    {
      filename:"BookList.js",
      importPaths:`import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';`,
      defineComponent:`lass BookList extends Component {
        static contextType = ThemeContext;
        render() { 
          const { isLightTheme, light, dark } = this.context;
          const theme = isLightTheme ? light : dark;`,
      variablesAndFunctions:"",
      returnJsx:`return ( 
        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
          <ul>
            <li style={{ background: theme.ui }}>the way of kings</li>
            <li style={{ background: theme.ui }}>the name of the wind</li>
            <li style={{ background: theme.ui }}>the final empire</li>
          </ul>
        </div>
      );
    }
  }`,
      definePrototypes:"",
      exportComponent:"export default BookList;"
    },
    {
      filename:"Navbar.js",
      importPaths:`import React, { Component } from 'react';
      import { ThemeContext } from '../contexts/ThemeContext';`,
      defineComponent:`class Navbar extends Component {
        static contextType = ThemeContext;
        render() {
          console.log(this.context);
          const { isLightTheme, light, dark } = this.context;
          const theme = isLightTheme ? light : dark;`,
      variablesAndFunctions:"",
      returnJsx:`return ( 
        <nav style={{ background: theme.ui, color: theme.syntax }}>
          <h1>Context App</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      );
    }
  }`,
      definePrototypes:"",
      exportComponent:"export default Navbar;"
    },
    {
      filename:"ThemeContext.js",
      importPaths:`import React, { Component, createContext } from 'react';
      export const ThemeContext = createContext();`,
      defineComponent:`class ThemeContextProvider extends Component {
        state = {
          isLightTheme: true,
          light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
          dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
        }`,
      variablesAndFunctions:"",
      returnJsx:`render() { 
return (
<ThemeContext.Provider value={{...this.state}}>
{this.props.children}
</ThemeContext.Provider>);}}`,
      definePrototypes:"",
      exportComponent:"export default ThemeContextProvider;"
    },

  ],
  styles:[
    {
      componentBorder: "reactCss_border",
      componentName:"CSS",
      filenameSection:"reactCss_header",
      filename:"reactCss_name",
      importsSection:"reactCss_salad",
      definitionSection:"reactCss_ketchup",
      returnSection:"reactCss_pattie",
      exportsSection:"reactCss_footer"
      
    },
    {
      componentBorder: "reactFridge_border",
      componentName:"Fridge",
      filenameSection:"reactFridge_header",
      filename:"reactFridge_name",
      importsSection:"reactFridge_salad",
      definitionSection:"reactFridge_ketchup",
      returnSection:"reactFridge_pattie",
      exportsSection:"reactFridge_footer"
      
    },
    {
      componentName:"Window",
      filenameSection:"reactWindow_header",
      filename:"reactWindow_name",
      importsSection:"reactWindow_salad",
      definitionSection:"reactWindow_ketchup",
      returnSection:"reactWindow_pattie",
      exportsSection:"reactWindow_footer"
    },
        {
          componentName:"burger",
          filenameSection:"reactBurger_bun",
          filename:"reactBurger_name",
          importsSection:"reactBurger_salad",
          definitionSection:"reactBurger_ketchup",
          returnSection:"reactBurger_pattie",
          exportsSection:"reactBurger_bunBottom"
    
        },
  ]

};


export default reactBurgerData;
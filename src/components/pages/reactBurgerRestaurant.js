import React from "react";
//Import DATA
import ReactBurgerData from '../data/reactBurgerData'
// Custom components
import CodeContainer from "../reactBurgers/codeContainer";
import FengShui from '../reactBurgers/fengShui'

// CREATE PROPS FOR CODECONTAINERS
//CSS
const CSSData = ReactBurgerData.data.filter(function(getFile){
  return getFile.filename == "CSS"
});
const CSSStyles = ReactBurgerData.styles.filter(function(getFile){
  return getFile.componentName == "CSS"
});

//Fridge
const fridgeData = ReactBurgerData.data.filter(function(getFile){
  return getFile.filename == "myFile.json"
});
const fridgeStyles = ReactBurgerData.styles.filter(function(getFile){
  return getFile.componentName == "Fridge"
});
//window
const windowData = ReactBurgerData.data.filter(function(getFile){
  return getFile.filename == "Window"
});
const windowStyles = ReactBurgerData.styles.filter(function(getFile){
  return getFile.componentName == "Window"
});
//Menu
const menuData = ReactBurgerData.data.filter(function(getFile){
  return getFile.filename == "App.js"
});
const menuStyles = ReactBurgerData.styles.filter(function(getFile){
  return getFile.componentName == "burger"
});
//Burger
const burgerData = ReactBurgerData.data.filter(function(getFile){
  return getFile.filename == "App.js"
});
const burgerStyles = ReactBurgerData.styles.filter(function(getFile){
  return getFile.componentName == "burger"
});






const ReactBurgerRestaurant = () => {
  // {console.log(json.stringify(burgerStyle))}
  return (
    <div className="container">
 
        <div id="row 1" className="restaurant-row">

      <CodeContainer Data={CSSData} Styles={CSSStyles}/>
      <CodeContainer Data={fridgeData} Styles={fridgeStyles}/>
      <CodeContainer Data={windowData} Styles={windowStyles}/>


        </div>
        <div id ="row 2">
        <CodeContainer Data={menuData} Styles={menuStyles}/>
        </div>
        <div id="row 3"></div>
    
 
    </div>
  );
};

export default ReactBurgerRestaurant;

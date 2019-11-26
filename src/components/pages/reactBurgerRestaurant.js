import React from "react";
//Import DATA
import ReactBurgerData from '../data/reactBurgerData'
// Custom components
import CodeContainer from "../reactBurgers/codeContainer";
import FengShui from '../reactBurgers/fengShui'

// CREATE PROPS FOR CODECONTAINERS
//Burger
const Data = ReactBurgerData.data.filter(function(getFile){
  return getFile.filename == "App.js"
});
const Styles = ReactBurgerData.styles.filter(function(getFile){
  return getFile.componentName == "burger"
});







const ReactBurgerRestaurant = () => {
  // {console.log(json.stringify(burgerStyle))}
  return (
    <div>
      <h1>Test Burger Resteraunt Page</h1>
      <FengShui/>
      <CodeContainer Data={Data} Styles={Styles}/>
    </div>
  );
};

export default ReactBurgerRestaurant;

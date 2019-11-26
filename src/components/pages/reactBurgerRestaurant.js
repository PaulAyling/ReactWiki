import React from "react";
//Import DATA
import ReactBurgerData from '../data/reactBurgerData'
// Custom components
import CodeContainer from "../reactBurgers/codeContainer";
import FengShui from '../reactBurgers/fengShui'

// CREATE PROPS FOR CODECONTAINERS
//Burger
const burgerCode = ReactBurgerData.componentCard.filter(function(getFile){
  return getFile.filename == "App.js"
});
const burgerStyle = ReactBurgerData.componentTypes.filter(function(getFile){
  return getFile.componentName == "burger"
});







const ReactBurgerRestaurant = () => {
  // {console.log(json.stringify(burgerStyle))}
  return (
    <div>
      <h1>Test Burger Resteraunt Page</h1>
      <FengShui/>
      <CodeContainer code={burgerCode} styler={burgerStyle}/>
    </div>
  );
};

export default ReactBurgerRestaurant;

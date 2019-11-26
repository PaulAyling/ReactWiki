/*NEXT STEPS
PUT THE FORMING DATA INTO THE COM{PONENT CARD}*/
import React, { Fragment } from "react";
import ReactBurgerData from '../data/reactBurgerData'
import "../../css/components/reactBurgers.css";

class CodeContainer extends React.Component {
  constructor(props) {
    super(props)

    const currentCode =[
      {code1:"blah"}
    ];
    const currentStyle =[
      {style1:"blah"}
    ];
    this.state ={
      componentCard: ReactBurgerData.componentCard.filter(function(getFile){
        return getFile.filename == "App.js"
      }),
      currentStyle
    };

  render() 
  return {
    <div id="card" className="reactBurger ">
bvcxbvcx
  </div>
  }
}
  
  

export default CodeContainer;

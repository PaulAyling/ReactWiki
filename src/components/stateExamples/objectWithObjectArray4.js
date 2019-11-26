// EXAMPLES UPDATEING STATE
import React, { Fragment } from "react";
import ReactBurgerData from '../data/reactBurgerData'
import "../../css/components/reactBurgers.css";

class ObjectsWithObjectArray4 extends React.Component {
  constructor(props) {
    super(props)  
  const currentCode = ReactBurgerData.componentCard.filter(function(getFile){
      return getFile.filename == "App.js"
    });
  const currentStyle = ReactBurgerData.componentTypes.filter(function(getFile){
      return getFile.componentName == "burger"
    });

    const componentCard = ReactBurgerData.componentCard;
    this.state = {
      stateString:"A string called StateString",
      currentCode,
      currentStyle
    };
  }
  render() {
    const codeRender = this.state.currentCode.map(currentCode => {
      return (
      <div>
         Filename: {currentCode.filename}
      </div>
      );
    });
    const styleRender = this.state.currentStyle.map(currentStyle => {
      return (
      <div>
         stylePadding: {currentStyle.componentStructurepadding}
      </div>
      );
    });
    return (
      <div id="Card Page" className="container">
        <h3 className="active ">ObjectWithArray4</h3>
        <p>GET IN THAT FILTERED ARRAY</p>
        <p><strong>{this.state.stateString}</strong></p>
        <Fragment>{codeRender}</Fragment>
        <Fragment>{styleRender}</Fragment>
     </div>
    );
  }
}

export default ObjectsWithObjectArray4
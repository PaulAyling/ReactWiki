// EXAMPLES UPDATEING STATE
import React, { Fragment } from "react";
import ReactBurgerData from '../data/reactBurgerData'
import "../../css/components/reactBurgers/reactBurgers.css";

class ObjectsWithObjectArray3 extends React.Component {
  constructor(props) {
    super(props)  
  const secondObjectArray = [
      {"hisname":"Paul"},
      {"hisname":"Mark"},
      {"hisname":"JAne"}
    ]
    const componentCard = ReactBurgerData.componentCard;
    this.state = {
      stateString:"A string called StateString",
      componentCard,
      secondObjectArray
    };
  }
  render() {
    
    const elementsRender = this.state.secondObjectArray.map(secondObjectArray => {
      return (
      <div>
         Name: {secondObjectArray.hisname}
      </div>
      );
    });
    const codeRender = this.state.componentCard.map(componentCard => {
      return (
      <div>
         Filename: {componentCard.filename}
      </div>
      );
    });
    return (
      <div id="Card Page" className="container">
        <h3 className="active ">ObjectWithArray3</h3>
        <p>This features data in state from a constant imported</p>
        <p><strong>{this.state.stateString}</strong></p>
        <Fragment>{elementsRender}</Fragment>
        <Fragment>{codeRender}</Fragment>
     </div>
    );
  }
}

export default ObjectsWithObjectArray3
// EXAMPLES UPDATEING STATE
import React, { Fragment } from "react";
import ReactBurgerData from '../data/reactBurgerData'
import "../../css/components/reactBurgers.css";

class ObjectsWithObjectArray2 extends React.Component {
  constructor(props) {
    super(props)  
  const secondObjectArray = [
      {"hisname":"Paul"},
      {"hisname":"Mark"},
      {"hisname":"JAne"}
    ]
    this.state = {
      stateString:"A string called StateString",
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
    return (
      <div id="Card Page" className="container">
        <h3>ObjectWithArray2</h3>
        <p><strong>{this.state.stateString}</strong></p>
        <Fragment>{elementsRender}</Fragment>
     </div>
    );
  }
}

export default ObjectsWithObjectArray2
// EXAMPLES UPDATEING STATE
import React, { Fragment } from "react";
import ReactBurgerData from '../data/reactBurgerData'
import "../../css/components/reactBurgers/reactBurgers.css";

class ObjectsWithObjectArray extends React.Component {
  constructor(props) {
    super(props)  
    this.state = {
      stateString:"A string called StateString",
      secondObjectArray:[
        {"hisname":"Paul"},
        {"hisname":"Mark"},
        {"hisname":"JAne"},
      ]
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
        <h3>3. An object containing a string and an array containg strings</h3>
        <p><strong>{this.state.stateString}</strong></p>
        <Fragment>{elementsRender}</Fragment>
     </div>
    );
  }
}

export default ObjectsWithObjectArray 
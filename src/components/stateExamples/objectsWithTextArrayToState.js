// EXAMPLES UPDATEING STATE
import React, { Fragment } from "react";
import ReactBurgerData from '../data/reactBurgerData'
import "../../css/components/reactBurgers/reactBurgers.css";

class ObjectsWithTextArrayToState extends React.Component {
  constructor(props) {
    super(props)  
    this.state = {
      stateString:"A string called StateString",
      secondObjectArray:["item1","Item2","item3"]
    }
  }
  render() {
    return (
      <div id="Card Page" className="container">
        <h3>3. An object containing a string and an array containg strings</h3>
        <p><strong>{this.state.stateString}</strong></p>
        <p><strong>{this.state.secondObjectArray[0]}</strong></p>
        <p><strong>{this.state.secondObjectArray[1]}</strong></p>
        <p><strong>{this.state.secondObjectArray[2]}</strong></p>
      
     </div>

    );
  }
}

export default ObjectsWithTextArrayToState ;
// 1. STRING PASSED INTO STATE
import React, { Fragment } from "react";
import ReactBurgerData from '../data/reactBurgerData'
import "../../css/components/reactBurgers.css";

class ObjectToState extends React.Component {
  constructor(props) {
    super(props)  
    //1.  DIRECTLY WITH ONE ELEMEMENT -> THIS WORKS
    this.state = {
      stateString:"this is a string of text set to state",
      secondString:"this is the second string in the state"
    }
  }
  render() {
    return (
      <div id="Card Page" className="container">
        <h3>2. An object passed in code into state</h3>
        <p><strong>{this.state.stateString}</strong></p>
        <p><strong>{this.state.secondString}</strong></p>
     </div>

    );
  }
}

export default ObjectToState ;
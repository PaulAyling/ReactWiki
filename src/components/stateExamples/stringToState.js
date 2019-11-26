// 1. STRING PASSED INTO STATE
import React, { Fragment } from "react";
import ReactBurgerData from '../data/reactBurgerData'
// import "../../css/components/reactBurgers.css";

class A_stateString extends React.Component {
  constructor(props) {
    super(props)  
    //1.  DIRECTLY WITH ONE ELEMEMENT -> THIS WORKS
    this.state = {
      stateString:"this is a string of text set to state"
    }
  }
  render() {
    return (
      <div id="Card Page" className=" container">
        <h3>1. A string passed in code into state</h3><strong>{this.state.stateString}</strong>
     </div>

    );
  }
}

export default A_stateString ;
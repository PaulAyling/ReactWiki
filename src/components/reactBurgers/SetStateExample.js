import React, { Fragment } from "react";
import ReactBurgerData from '../data/reactBurgerData'
import "../../css/components/reactBurgers.css";

class setStateExample extends React.Component {
  constructor(props) {
    super(props)  
    //1.  DIRECTLY WITH ONE ELEMEMENT -> THIS WORKS
    // this.state = ReactBurgerData.componentCard.filter(function(getFile){
    //     return getFile.filename == "App.js"
    //   });
    // 2. VIA ONE STRING
      this.state = {
        filename:"from 1 string"
      }
      
      // USING VARIABLE INSTEAD
          // const currentCode = ReactBurgerData.componentCard.filter(function(getFile){
          //   return getFile.filename == "App.js"
          // });
          // const currentStyle = ReactBurgerData.componentTypes.filter(function(getFile){
          //   return getFile.filename == "burger"
          // });
          // this.state = {
          //   currentCode
          // }
  }
  render() {
    // const elementsRender = this.state.map(componentCard => {
    //   return (
    //     <div>
    //       {componentCard.filename}
 
    //     </div>
    //   )
    // });

    return (
      <div>

        <h1>Just a simple State test</h1>
 {/* <Fragment>{elementsRender}</Fragment> */}
 {filename}
      </div>
    );
  }
}

export default setStateExample;
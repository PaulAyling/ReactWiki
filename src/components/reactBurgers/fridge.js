import React, { Fragment } from "react";
import NinjaData from "../data/ninjaData";
import "../../css/components/reactBurgers.css";

class ReactBurgers extends React.Component {
  constructor(props) {
    super(props)

    this.state = NinjaData.componentCard.filter(function(getFile){
      return getFile.filename == "App.js"
    });

;




  }
  render() {
  // Formating  
    //Global
    const reactBurger_ingredient = {
      padding:"10px",
      borderRadius:"0.3rem 0.3rem 0.3rem 0.5rem"
    }
  
    const reactBurger_code = {
      fontSize: "0.8rem"
    };

  //top to bottom
    const reactBurger_bun =  {
      borderRadius:"3rem 3rem  1rem 1rem",
      padding:"2rem",
      textAlign:"center",
      background:"yellow"
    };
        // Define styling

    // Section based

      const reactBurger_bun_color = "yellow darken-2";
      const reactBurger_name = {
        textAlign:"center"
      };
    const reactBurger_ketchup = {

    };
      const reactBurger_ketchup_color = "red darken-2";
    const reactBurger_salad = {

    };
      const reactBurger_salad_color = "green";
    const reactBurger_pattie = {};
      const reactBurger_pattie_color = "brown";
    const reactBurger_bun_bottom = {};


    const elementsRender = this.state.map(componentCard => {
      return (
        <div id="card" className="reactBurger ">
          <div id="header" style={reactBurger_bun} className={reactBurger_bun_color }>
            <h2 style={reactBurger_name}>{componentCard.filename}</h2>
          </div>

          <section id="salad" className={reactBurger_salad_color} style={reactBurger_ingredient}>
            <pre>
              <p className={reactBurger_code}>
                {componentCard.importPaths}
              </p>
            </pre>
          </section>

          <section id="ketchup" className={reactBurger_ketchup_color} style={reactBurger_ingredient}>
            <pre>
              <p className={reactBurger_code}>
                {componentCard.defineComponent}{" "}
              </p>
            </pre>
          </section>

          <section id="pattie" className={reactBurger_pattie_color} style={reactBurger_ingredient}>
            <pre>
              <p className={reactBurger_code}>
                {componentCard.returnJsx}
              </p>
            </pre>
          </section>
          <section id="pattie" className={reactBurger_bun_color } style={reactBurger_ingredient}>
            <pre>
              <p style={reactBurger_name}>
                {componentCard.exportComponent}
              </p>
            </pre>
          </section>
        </div>
      );
    });

    return (
      <div id="Card Page" className="container-page">
        <h1 className="reactBurger_name">TAKE A LOOK IN MY FRIDGE</h1>
        <div id="Card Grid" className="container-slim component_grid">
          <Fragment>{elementsRender}</Fragment>
        </div>
      </div>
    );
  }
}

export default ReactBurgers;

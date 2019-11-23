import React, { Fragment } from "react";
import NinjaData from "../data/ninjaData";
import "../../css/components/reactBurgers.css";

class ReactBurgers extends React.Component {
  constructor(props) {
    super(props)

    this.state = NinjaData.componentCard.filter(function(getFile){
      return getFile.filename == "App.js"
    });
    // Define styling
    //Global
    const reactBurger_ingredient = "fdsa";
    const reactBurger_code = "fdsa";
    // Section based
    const reactBurger_bun = "fdsa";
      const reactBurger_bun_color = "fdsa";
      const reactBurger_name = "fdsa";
    const reactBurger_ketchup = "fdsa";
      const reactBurger_ketchup_color = "fd";
    const reactBurger_salad = "fdsa";
      const reactBurger_salad_color = "fdsa";
    const reactBurger_pattie = "fdsa";
      const reactBurger_pattie_color = "fdsa";
    const reactBurger_bun_bottom = "fdsa";
    const reactBurger_bun_bottom_color = "fdsa";




  }
  render() {
    const elementsRender = this.state.map(componentCard => {
      return (
        <div id="card" className="reactBurger ">
          <div className="reactBurger_bun">
            <h2 className="reactBurger_name">{componentCard.filename}</h2>
          </div>

          <section class="ingredient green darken-1">
            <pre>
              <p className="container_component_text">
                {componentCard.importPaths}
              </p>
            </pre>
          </section>

          <section class="ingredient  red darken-4">
            <pre>
              <p className="container_component_text">
                {componentCard.defineComponent}{" "}
              </p>
            </pre>
          </section>

          <section class="ingredient grey-text lighten-5 brown darken-4">
            <pre>
              <p className="container_component_text">
                {componentCard.returnJsx}
              </p>
            </pre>
          </section>
          <section class="reactBurger_bun_bottom yellow darken-2">
            <pre>
              <p className="container_component_text">
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

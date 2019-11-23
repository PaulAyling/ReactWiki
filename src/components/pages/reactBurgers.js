import React, { Fragment } from "react";
import NinjaData from "../data/ninjaData";
import "../../css/components/reactBurgers.css";

class ReactBurgers extends React.Component {
  constructor(props) {
    super(props);
    this.state = NinjaData;
  }
  render() {
    const elementsRender = this.state.componentCard.map(componentCard => {
      return (
        <div id="card" className="reactBurger ">
          <div className="reactBurger_bun yellow darken-2">
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
        <h1 className="reactBurger_name">GET YOUR TASTY BURGERS HERE!</h1>
        <div id="Card Grid" className="container-slim component_grid">
          <Fragment>{elementsRender}</Fragment>
        </div>
      </div>
    );
  }
}

export default ReactBurgers;

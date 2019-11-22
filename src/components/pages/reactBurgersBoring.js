import React , { Fragment } from "react";
import NinjaData from "../data/ninjaData";

class NetNinja extends React.Component {
  constructor(props) {
    super(props);
    this.state = NinjaData;
  }
  render() {
    const elementsRender = this.state.componentCard.map(componentCard => {
      return (
          <div id="card" className="container_component_block">
            <div className="container_component_header ">
              <h2>{componentCard.filename}</h2>
            </div>
            <section class="card-vertical-header">
              <aside>
                <h3>Import</h3>
                <p className="container_component_text">
                  {componentCard.importPaths}
                </p>
              </aside>
            </section>
            <section class="card-vertical-header">
              <aside>
                <h3>Define</h3>
                <pre>
                  <p className="container_component_text">
                    {componentCard.defineComponent}{" "}
                  </p>
                </pre>
              </aside>
            </section>
            <section class="card-vertical-header">
              <aside>
                <h3>Output</h3>
                <pre>
                <p className="container_component_text">
                  {componentCard.returnJsx}
                </p>
                </pre>
              </aside>
            </section>
            <section class="card-vertical-header">
              <aside>
                <h3>Export</h3>
                <p className="container_component_text">
                  {componentCard.exportComponent}
                </p>
              </aside>
            </section>
          </div>
      );
    });

    return (
      <div id="Card Page" className="container-page">
          <h1>Lesson 4</h1>
        <div id="Card Grid" className="container-slim component_grid">
          <Fragment>{elementsRender}</Fragment>
        </div>
      </div>
    );
  }
}

export default NetNinja;

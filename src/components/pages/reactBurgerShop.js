import React, { Fragment } from "react";
import NinjaData from "../data/ninjaData";
import "../../css/components/reactBurgerShop.css";

class ReactBurgerShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = NinjaData;
  }
  render() {
    const elementsRender = this.state.componentCard.map(componentCard => {
      return <div> stuff</div>;
    });

    return (
      <div id="Card Page" className="container-page">
        <div className="react-burger_assets">
          <div className="react-burger_paint">
            <div className="react-burger_paint_bucket">
              <div>
                <img src="https://cdn3.iconfinder.com/data/icons/flat-bundle-2/65/84-512.png" />
              </div>
              <div>
                <h2 className="center-text">CSS</h2>
              </div>
            </div>
          </div>

          <div class="react-burger_menu yellow darken-3">
            <h1 className="center-text">App.js</h1>
            <div class="yellow">
              <h2 className="react-burger_menu_header">Menu</h2>

              <section class="ingredient green darken-1">
                <pre>
                  <p className="container_component_text">
                    import React from 'react'; import BookList from
                    './components/BookList'; import Navbar from
                    './components/Navbar'; import ThemeContextProvider from
                    './contexts/ThemeContext';`
                  </p>
                </pre>
              </section>

              <section class="ingredient  red darken-4">
                <pre>
                  <p className="container_component_text" />
                </pre>
              </section>

              <section class="ingredient grey-text lighten-5 brown darken-4">
                <pre>
                  <p className="container_component_text" />
                </pre>
              </section>
              <section class="reactBurger_bun_bottom yellow darken-2">
                <pre>
                  <p className="container_component_text" />
                </pre>
              </section>
            </div>
          </div>
          <div class="react-burger_shop-window blue lighten-2">
            <h2>Shop Window</h2>
          </div>
        </div>
        <div id="Card Grid" className="container-slim component_grid">
          <Fragment>{elementsRender}</Fragment>
        </div>
      </div>
    );
  }
}

export default ReactBurgerShop;

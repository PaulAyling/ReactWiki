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

          <div class="react-burger_menu">
            <div class="red">
              <h2>Menu</h2>
            </div>
          </div>
          <div class="react-burger_shop-window">
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

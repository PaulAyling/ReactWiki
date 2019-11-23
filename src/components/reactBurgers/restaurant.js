import React, { Fragment } from "react";
// custom CSS
import "../../css/components/reactBurgerShop.css";
// custom components
import Fridge from "../reactBurgers/fridge";
import FengShui from "../reactBurgers/fengShui";
import window from "../reactBurgers/window";

import Menu from "../reactBurgers/menu";

import Burger from "../reactBurgers/burger";
import Shelf from "../reactBurgers/shelf";

const ReactResteraunt = () => {
  return (
    <Fragment>
      <h1>I am ready ...... What is your order.... supersize that?</h1>
      <div className="react-burger_assets">
        <FengShui />
      </div>
    </Fragment>
  );
};
export default ReactResteraunt;

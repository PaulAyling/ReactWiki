// 1. complete styleing
// 2. setup date to work wiht props
// 3. combine in reteraunt
// 4. output online

import React, { Fragment } from "react";
import "../../css/components/reactBurgers.css";

const codeContainer = (props) => {

// Restructuring styler
// const { componentName } = props.styler.componentTypes

    const codeRender = props.code.map(code => {
      return (
        <div id="card" className="reactBurger ">
          
        <section id="Filename" className="reactBurger_bun">
          <h2 className="reactBurger_name">{code.filename}</h2>
        </section>

        <section id="Imports" class="ingredient green darken-1">
          <pre>
            <p className="container_component_text">
              {code.importPaths}
            </p>
          </pre>
        </section>

        <section id="Definition" class="ingredient  red darken-4">
          <pre>
            <p className="container_component_text">
              {code.defineComponent}{" "}
            </p>
          </pre>
        </section>

        <section id="Return" class="ingredient grey-text lighten-5 brown darken-4">
          <pre>
            <p className="container_component_text">
              {code.returnJsx}
            </p>
          </pre>
        </section>
        <section id="Exports" class="reactBurger_bun_bottom yellow darken-2">
          <pre>
            <p className="container_component_text">
              {code.exportComponent}
            </p>
          </pre>
        </section>
        <div className="blue">  HELLO:  {props.styler[0].componentName}</div>
      </div>
      );
    });
    
    return (
      <div id="Card Page" className="container">
        {props.styler.componentName}
        <Fragment>{codeRender}</Fragment>
        <div className="blue">  HELLO:  {props.styler[0].componentName}</div>
        <div className="yellow">  DESTRUCTURED:  {props.styler[0].componentName}</div>
     </div>
    );
  }



export default codeContainer
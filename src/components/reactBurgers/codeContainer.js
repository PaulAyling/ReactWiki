// 3. combine in reteraunt
// 4. output online

import React, { Fragment } from "react";
import "../../css/components/reactBurgers/codeContainer.css";
import "../../css/components/reactBurgers/reactPaint.css";
import "../../css/components/reactBurgers/reactFridge.css";
import "../../css/components/reactBurgers/reactWindow.css";
import "../../css/components/reactBurgers/reactMenu.css";


import "../../css/components/reactBurgers/reactBurgers.css";
const codeContainer = (props) => {
    const codeRender = props.Data.map(Data => {
      return (
        <div id="codeContainer" className={props.Styles[0].componentBorder}>
          <section id="Filename" className={props.Styles[0].filenameSection}>
            <h2 className={props.Styles[0].filename}>{Data.filename}</h2>
         
          </section>
          <section id="Imports" className={props.Styles[0].importsSection}>
            <pre>
              <p className="container_component_text">
                {Data.importPaths}
              </p>
            </pre>
          </section>
          <section id="Definition" className={props.Styles[0].definitionSection}>
            <pre>
              <p className="container_component_text">
                {Data.defineComponent}{" "}
              </p>
            </pre>
          </section>
          <section id="Return" className={props.Styles[0].returnSection}>
            <pre>
              <p className="container_component_text">
                {Data.returnJsx}
              </p>
            </pre>
          </section>
          <section id="Exports" className={props.Styles[0].exportsSection}>
          <h2 className={props.Styles[0].filename}>{Data.exportComponent}</h2>
          </section>
      </div>
      );
    });
    
    return (
      <div id="Card Page" className="code-container">
        <Fragment>{codeRender}</Fragment>
   
     </div>
    );
  }



export default codeContainer
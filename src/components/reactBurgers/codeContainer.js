// 1. complete styleing
// 2. setup date to work wiht props
// 3. combine in reteraunt
// 4. output online

import React, { Fragment } from "react";
import "../../css/components/codeContainer";
import "../../css/components/reactBurgers.css";

const codeContainer = (props) => {

// Restructuring styler - Doesn't work
// const { filenameSection } = props.Styles[0].filenameSection
    const codeRender = props.Data.map(Data => {
      // THis doesn't work either
      // const { filenameSection } = props.Styles[0].filenameSection
      return (
        <Fragment id="codeContainer" className="codeContainer ">
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
      </Fragment>
      );
    });
    
    return (
      <div id="Card Page" className="container">
        {/* {props.Styles.componentName} */}
        <Fragment>{codeRender}</Fragment>
        {/* {/* <div className="blue">  HELLO:  {props.styler[0].componentName}
        </div> */}
 
     </div>
    );
  }



export default codeContainer
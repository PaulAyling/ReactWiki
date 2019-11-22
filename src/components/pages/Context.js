import React from "react";

class ReactContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        {
          element: "readme.md",
          description: "Directions for using this applicaiton",
          inCreateApp: "",
          type: "file",
          level: "lvl-1"
        }
      ]
    };
  }
  render() {
    return (
      <div id="COMPONENT--CONTEXT" className="container-page">
        <h1>DATA TRANSFER IN REACT</h1>
        <div className="row">
          <div className="col with-header m2">
            <h2 className="data">IMPORTS</h2>
          </div>
          <div className="col with-header m5">
            <h2 className="data">exampleClass</h2>
          </div>
          <div className="col with-header m5">
            <h2>exampleComponentWithContexts</h2>
          </div>
        </div>
        {/* import section */}
        <div className="row data_1">
          <div className="col with-header m2">
            <h2>IMPORT</h2>
          </div>
          <div className="col with-header m5">
            <pre>
              <code>{`import React from 'react';`}</code>
            </pre>
          </div>
          <div className="col with-header m5">
            <pre>
              <code>{`import React, { useContext } from 'react';
import ExampleContext from './exampleContext';`}</code>
            </pre>
          </div>
        </div>
        {/* Definition*/}
        <div className="row data_1">
          <div className="col with-header m2">
            <h2>DEFINE</h2>
          </div>
          <div className="col with-header m5">
            <pre>
              <code>
                {`class exampleClass extends React.Component {
constructor(props) 
  super(props);
  this.state = {}`}
              </code>
            </pre>
          </div>
          <div className="col with-header m5">
            <pre>
              <code>{`const exampleComponentWithContexts = () => {
const exampleContext = useContext(ExampleContext);`}</code>
            </pre>
          </div>
        </div>
        {/* INTERMEDIATE VARIABLES & FUNCTIONS*/}
        <div className="row data_1">
          <div className="col with-header m2">
            <h2>INTERMEDIATE VARIABLES AND FUNCTIONS</h2>
          </div>
          <div className="col with-header m5">
            <pre>
              <code>
                {`render() {
      const variable1 = "myVar";)
      const myfunc1 = () =>{console.log('awesomefunction')}`}
              </code>
            </pre>
          </div>
          <div className="col with-header m5">
            <pre>
              <code>
                {`const variable1 = "myVar";)
const myfunc1 = () =>{console.log('awesomefunction')}`}`}
              </code>
            </pre>
          </div>
        </div>
        {/* Return JS*/}
        <div className="row data_1">
          <div className="col with-header m2">
            <h2>RETURN JSX</h2>
          </div>
          <div className="col with-header m5">
            <pre>
              <code>
                {`return (
  <div>
    <h1>Test</h1>
  </div>
  );
};`}
              </code>
            </pre>
          </div>
          <div className="col with-header m5">
            <pre>
              <code>
                {`return (
  <div>
    <h1>Test</h1>
  </div>
  );
};`}
              </code>
            </pre>
          </div>
        </div>
        {/* export*/}
        <div className="row data_1">
          <div className="col with-header m2">
            <h2>EXPORT</h2>
          </div>
          <div className="col with-header m5">
          <pre>
              <code>
                {`export default exampleClass;`}
              </code>
            </pre>
          </div>
          <div className="col with-header m5">
            <pre>
              <code>
                {`export default exampleComponentWithContexts;`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactContext;

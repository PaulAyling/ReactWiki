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
        <div>
          <h1>Reducer File layout</h1>
          <p>
            QUEST
          </p>
          <code><p>
                    {`
    // import {
    //   PLACEHOLDER_HOLDER
      // } from '../types';
      `}
          </p>
          <p>
             {`
             export default (state, action) => {
        switch (action.type) {
          `}
          </p>
  <p>{`  case PLACEHOLDER_HOLDER:
            return {
              ...state,
              cards: action.payload,
              loading: false
            };`}</p>
  <p>{`   default:
            return state;
        }
      };`}</p>
 

     

        

          </code>
        </div>
      </div>
      
    );
  }
}

export default ReactContext;

import React from "react";

class Home extends React.Component {
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
      <div id="COMPONENT-ReactFolderStructure" className="container-page">
        <h1>Contenst</h1>
      <div className="row ">
        <div className="col l4 m12 white-text blue p-sml">
          <div className="row collection with-header p-sml">create-react-app</div>
          <div className="row collection collection-item grey-text  blue lighten-4">Build</div>
        </div>
        <div className="col l4 m12 green card-panel hoverable">
        <div className="row collection with-header">create-react-app</div>

        </div>
        <div className="col l4 m12 red card-panel hoverable"></div>
      </div>
      </div>
    );
  }
}

export default Home;

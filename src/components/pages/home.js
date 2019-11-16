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
        <h1>Pauls Amazing Wiki</h1>
      </div>
    );
  }
}

export default Home;

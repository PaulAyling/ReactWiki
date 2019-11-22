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
          type: "header",
          level: "lvl-1"
        }
      ]
    };
  }
  render() {
    
    return (
      <div className="container-page">
        <div id="Content-Infoshot" className="row ">
          <div className="col 12 m12  ">
            <div class="collection">
              <a href="#!" class="collection-item active">State & Lifecycle</a>
              <a href="#!" class="collection-item ">Props</a>
              <a href="#!" class="collection-item">State</a>
              <a href="#!" class="collection-item">Context</a>
              <a href="#!" class="collection-item">PropTypes</a>
              <a href="#!" class="collection-item ">Sequence</a>
              <a href="#!" class="collection-item ">Event Handlers</a>
            </div>
            <div class="collection">
              <a href="#!" class="collection-item active">Inventory</a>
              <a href="#!" class="collection-item ">Files</a>
              <a href="#!" class="collection-item ">Classes</a>
              <a href="#!" class="collection-item ">Stateless Functional Components</a>
            </div>
            <div class="collection">
              <a href="#!" class="collection-item active">Externals</a>
              <a href="#!" class="collection-item ">Create-React-App</a>
              <a href="#!" class="collection-item ">Typescript</a>
            </div>
            <div class="collection">
              <a href="#!" class="collection-item active">Javascript</a>
              <a href="#!" class="collection-item "></a>
              <a href="#!" class="collection-item "></a>
            </div>
            <div class="collection">
              <a href="#!" class="collection-item active">Misc</a>
              <a href="#!" class="collection-item ">Lists</a>
              <a href="#!" class="collection-item ">Forms</a>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Home;

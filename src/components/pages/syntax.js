import React from "react";

class Syntax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        {
          id: 1,
          title: "myVar: PropTypes.string.isRequired",
          description: `  static propTypes = {
            title: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired
          }`,
          answer:
            "When this is used the proptypes are assesed to ensure that the props are both strings and they are also required",
          category: "Data",
          tag: ["PropTypes"]
        }
      ]
    };
  }
  render() {
    const elementsRender = this.state.elements.map((elements, index) => {
      return (
        <li key={elements.index}>
          <div>
            <h1>
              {index + 1}. {elements.title}
            </h1>

            <div className="row">
              <div className="col  s9">
                <h3>Details</h3>
                <p>{elements.description}</p>
              </div>
              <div className="col s3 blue lighten-5">
                <h3>Results</h3>
                <p>{elements.answer}</p>
              </div>
            </div>
            <btn className=" badge white-text blue">{elements.category}</btn>
            <btn className=" badge white-text green">{elements.tag}</btn>
          </div>
        </li>
      );
    });
    return (
      <div id="questions" className="container-page">
        <h1>Syntax</h1>
        <ul>{elementsRender}</ul>
      </div>
    );
  }
}

export default Syntax;

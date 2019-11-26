import React from "react";

class ReactErrors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        {
          id: 1,
          title: "Cross-origin Errors ",
          description:
            "",
          answer: "Often casued buy the same resource being used twice EG same  page or component . Syntax errors in the import or router commands involving the component",
          category: "react",
          tag: ["react", "javascript"]
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
              <div className='col  s9'>
                <h3>Detailshh</h3>
                <p>{elements.description}</p>
              </div>
              <div className='col s3 blue lighten-5'>
                <h3>Results</h3>
                <p >{elements.answer}</p>
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
        <h1>COMMON REACT ERRORS</h1>
        <ul>{elementsRender}</ul>
      </div>
    );
  }
}

export default ReactErrors;

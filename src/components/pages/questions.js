import React from "react";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        {
          id: 1,
          title: "How to use scripts from HTML examples is React",
          description:
            "I was working on a materialize example in CSS and HTML with a small javascript snippet and I am trying to i",
          answer: "none yet",
          category: "react",
          tag: ["react", "javascript"]
        },
        {
          id: 2,
          title: "How to use Materialize in REACT",
          description:
            "I am unclear how to import script javascript and links to jquery - I was trying to integrate https://www.youtube.com/watch?v=5gHr8RfB0zs&list=PL4cUxeGkcC9gGrbtvASEZSlFEYBnPkmff&index=11 into react - I gave up and did something else in the end",
          answer: "none yet",
          category: "react",
          tag: ["react", "javascript"]
        },
        {
          id: 3,
          title: "Can you use codesandbox.io with a fullstack app",
          description:
            "I was working on a materialize example in CSS and HTML with a small javascript snippet and I am trying to i..",
          answer: "none yet",
          category: "react",
          tag: ["react", "javascript"]
        },
        {
          id: 4,
          title:
            "Is it wise to create a react app with contexts for any variables shared by more than one components",
          description: "some txext",
          answer: "none yet",
          category: "react",
          tag: ["react", "javascript"]
        },
        {
          id: 5,
          title:
            "Doesnt the creation of inline styling in react destroy the cascading concept of css",
          description: "text",
          answer: "none yet",
          category: "react",
          tag: ["react", "javascript"]
        },
        {
          id: 5,
          title:
            "Why can I see a margin is applied but there is no style rule that is enforcing this visible in chrome style inspecto",
          description: "text",
          answer: "none yet",
          category: "react",
          tag: ["react", "javascript"]
        },
        {
          id: 5,
          title:
            "Can't figure out hot to make my grid rows the same height",
          description: "text",
          answer: "none yet",
          category: "react",
          tag: ["react", "javascript"]
        },
        {
          id: 6,
          title:
            "bset way to use CSS in react? cannot import modules from app.css",
          description: "text",
          answer: "none yet",
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
        <h1>Q&A</h1>
        <ul>{elementsRender}</ul>
      </div>
    );
  }
}

export default Questions;

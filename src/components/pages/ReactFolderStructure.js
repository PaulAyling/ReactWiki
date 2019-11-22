import React from "react";
import '../../css/components/reactFolderStructure.css';

class ReactFolderStructure extends React.Component {
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
        },
        {
          element: "package.json",
          description: "Node.js file list",
          inCreateApp: "",
          type: "file",
          level: "lvl-1"
        },
        {
          element: ".gitignore",
          description: "Files and Folders for git to ignore",
          inCreateApp: "",
          type: "file",
          level: "lvl-1"
        },
        {
          element: "node_modules",
          description: "Dependency files descripbe in package.json for node.js",
          inCreateApp: "",
          type: "folder",
          level: "lvl-1"
        },
        {
          element: "public",
          description: "",
          inCreateApp: "",
          type: "folder",
          level: "lvl-1"
        },
        {
          element: "index.html",
          description: " The page template - do not delete or rename",
          inCreateApp: "",
          type: "file",
          level: "lvl-2"
        },
        {
          element: "manifest.json",
          description: "multimedia file list",
          inCreateApp: "",
          type: "file",
          level: "lvl-2"
        },
        {
          element: "favicon.ico",
          description: "website icon example",
          inCreateApp: "",
          type: "file",
          level: "lvl-2"
        },
        {
          element: "robots.txt",
          description: "",
          inCreateApp: "",
          type: "file",
          level: "lvl-2"
        },
        {
          element: "serviceWorker.js",
          description:
            "A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. Today, they already include features like push notifications and background sync and have ability to intercept and handle network requests, including programmatically managing a cache of responses.",
          inCreateApp: "",
          type: "file",
          level: "lvl-2"
        },
        {
          element: "src",
          description: "Application files",
          inCreateApp: "",
          type: "folder",
          level: "lvl-2"
        },
        {
          element: "index.js",
          description: "The default create-react-app javascript entry point",
          inCreateApp: "",
          type: "file",
          level: "lvl-3"
        },
        {
          element: "index.css",
          description:
            "Global styles (also formats error messages etc)  Eg index.js -> app.js -> components",
          inCreateApp: "",
          type: "file",
          level: "lvl-3"
        },
        {
          element: "App.js",
          description: "Where the App components are stacked and loaded",
          inCreateApp: "",
          type: "file",
          level: "lvl-3"
        },
        {
          element: "App.css",
          description: "Styles for all Apps",
          inCreateApp: "",
          type: "file",
          level: "lvl-3"
        },
        {
          element: "components",
          description: "",
          inCreateApp: "not-in-create-react-app",
          type: "folder",
          level: "lvl-2"
        },
        {
          element: "pages",
          description: "",
          inCreateApp: "not-in-create-react-app",
          type: "folder",
          level: "lvl-3"
        },
        {
          element: "context",
          description:
            "if you are using contexts put context, state, & rerducers here",
          inCreateApp: "not-in-create-react-app",
          type: "folder",
          level: "lvl-3"
        },
        {
          element: "layout",
          description: "components suppporting layout live navbar etc.",
          inCreateApp: "not-in-create-react-app",
          type: "folder",
          level: "lvl-3"
        },
        {
          element: "auth",
          description: "Token authorization components for login",
          inCreateApp: "not-in-create-react-app",
          type: "folder",
          level: "lvl-3"
        },
        {
          element: "routing",
          description: "setup private routing component here",
          inCreateApp: "not-in-create-react-app",
          type: "folder",
          level: "lvl-3"
        },
        {
          element: "css",
          description: "",
          inCreateApp: "not-in-create-react-app",
          type: "folder",
          level: "lvl-2"
        },
        {
          element: "utils",
          description: "",
          inCreateApp: "not-in-create-react-app",
          type: "folder",
          level: "lvl-2"
        },
        {
          element: "build",
          description: "created by npm-react-build. These are the files that the web browser see when the app is deployed to a server",
          inCreateApp: "not-in-create-react-app",
          type: "folder",
          level: "lvl-2"
        }
      ]
    };
  }
  render() {
    // const elementsFilter = this.state.elements.filter(elements => {
    //   return elements.group = "root";
    // });

    const elementsRender = this.state.elements.map(elements => {
      // Formating variables
      const folderBorder = elements.type === "folder" ? " folder-border" : "";
      const icon = <i className="material-icons">folder </i>;

      return (
        <li key={elements.index}>
  
          <div className="row">
            <div
              className={
                "col s4  " +
                elements.type +
                " " +
                elements.level +
                " " +
                elements.inCreateApp
              }
            >
              <span>{elements.type === "folder" ? icon : ""}</span>
              <span>{elements.element}</span>
            </div>
            <div className="col s8  ">{elements.description}</div>
          </div>
        </li>
      );
    });
    return (
      <div id="COMPONENT-ReactFolderStructure" className="container-page">
        <h1>REACT Folder Structure</h1>
        <ul>{elementsRender}</ul>
        <div>
          <p><em>Items in black are included when create-react-app is run. Items in gray are they files & folders I normally use</em></p>
        </div>
      </div>
    );
  }
}

export default ReactFolderStructure;

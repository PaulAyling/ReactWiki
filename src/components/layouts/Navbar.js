import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

//REMOVED THIS AS IT CRASHES SITE

// const displayMobileMenu = () => {
//   return (
//       $('.sidenav').sidenav()
//   )
// };

const Navbar = ({ title }) => {
  return (
    <div>
      <nav className="nav-wrapper indigo">
        <div> 
          <a href="#" className="brand-logo">
            
            React Wiki
          </a>
          <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i
              className="material-icons"
              //Removed this as site crashes when included
              // onClick={displayMobileMenu()}
            >
              menu
            </i>
          </a>

          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/files">React Files</Link>
            </li>
            <li>
              <Link to="/context">Contexts</Link>
            </li>
            <li>
              <Link to="/questions">Questions</Link>
            </li>
            <li>
              <Link to="/syntax">Syntax</Link>
            </li>
            <li>
              <Link to="/netninja">NetNinja</Link>
            </li>
            <li>
              <Link to="/reactburgershop">Burger Shop</Link>
            </li>
            <li>
              <Link to="/reactburgers">Burgers</Link>
            </li>
            <li>
              <Link to="/reactburgersboring">Boring Burgers</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </div>
  );
};
Navbar.defaultProps = {
  title: "React Wiki"
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';


const Navbar =({ title}) => {
  return ( <nav className = "navbar bg-primary">
    <h1> {title}</h1>
<ul>
<li>
    
      </li>
</ul>


    </nav>
  )
}
Navbar.defaultProps = {
  title: ' React Wiki'
}

export default Navbar;
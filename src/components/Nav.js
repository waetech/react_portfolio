import React from 'react';

import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
   <nav>
      <h3>RldDesigns</h3>
       
       <ul className="nav-links">
           <Link style={navStyle} to="/about">
           <li>About</li>
           </Link>
           <Link style={navStyle} to="/projects">
           <li>Projects</li>
           </Link>
           
       </ul>
   </nav>
  );
}

export default Nav;

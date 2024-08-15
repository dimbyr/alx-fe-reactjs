import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
  return (
    <div>
      <nav>
        <ul style={{listStyle: 'none', display: 'flex', justifyContent:'center', gap: '50px', width:'300px', position: 'fixed'}}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>
          <li>
            <Link to='services'>Services</Link>
          </li>
          <li>
            <Link to='contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
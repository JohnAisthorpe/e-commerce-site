import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/basket">Basket</Link>
      </li>
      
    </ul>
  );
}

export default NavBar;

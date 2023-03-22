import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-logo">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

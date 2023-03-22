import { React, useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home"></a>Home
          </p>
          <p>
            <a href="#wgpt3"></a>What Is GPT3
          </p>
          <p>
            <a href="#possibility"></a>OpenAI
          </p>
          <p>
            <a href="#features"></a>Case Studies
          </p>
          <p>
            <a href="#blog"></a>Library
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu"></div>
    </div>
  );
};

export default Navbar;

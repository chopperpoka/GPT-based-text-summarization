import { React, useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => {
    return (
      <>
        <p>
          <a href="#home"></a>Home
        </p>
        <p>
          <a href="#wgpt3"></a>About
        </p>
        <p>
          <a href="#possibility"></a>Contact
        </p>
        <p>
          <a href="#features"></a>FAQs
        </p>
        <p>
          <a href="#blog"></a>Demo
        </p>
      </>
    );
  };
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size="27"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size="27"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

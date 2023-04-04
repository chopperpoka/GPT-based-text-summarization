import { React, useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/textxtract2.0.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => {
    return (
      <>
        <Link
          activeClass="active"
          to="navbar"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
        >
          <p>
            <a href="#home"></a>Home
          </p>
        </Link>
        <Link
          activeClass="active"
          to="xtract-about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
          <p>
            <a href="#wgpt3"></a>About
          </p>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p>
            <a href="#possibility"></a>Contact
          </p>
        </Link>
        <Link
          activeClass="active"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
          <p>
            <a href="#features"></a>Features
          </p>
        </Link>
        <Link
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p>
            <a href="#faq"></a>FAQs
          </p>
        </Link>
        <Link
          activeClass="active"
          to="cta"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
          <p>
            <a href="#demo"></a>Demo
          </p>
        </Link>
      </>
    );
  };
  return (
    <div className="gpt3__navbar" id="navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Login</p>
        <button type="button">Create Account</button>
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

import React from "react";
import "./cta.css";
import { Link } from "react-router-dom";

const Cta = () => (
  <div className="gpt3__cta" id="cta">
    <div className="gpt3__cta-content">
      <p>Request Early Access to Get Started</p>
      <div className="gradient__text">
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
    </div>
    <div className="gpt3__cta-btn">
      <Link to="/demo">
        <button type="button">Get Started</button>
      </Link>
    </div>
  </div>
);

export default Cta;

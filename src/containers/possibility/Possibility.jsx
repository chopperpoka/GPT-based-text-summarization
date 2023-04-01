import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        Try out TextXtract <br />
        with our interactive demo!
      </h1>
      <p>
        Experience the power of TextXtract for yourself with our interactive
        demo. Simply input any text you want to summarize, and our advanced AI
        technology will generate a concise summary in seconds. See for yourself
        how TextXtract can save you time and improve your productivity.
      </p>
    </div>
  </div>
);

export default Possibility;

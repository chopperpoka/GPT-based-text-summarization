import React from "react";
import ai from "../../assets/robot-2.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        TextXtract <br /> An AI-Powered Text Summarization
      </h1>
      <p>
        Get concise and accurate summaries of long articles, research papers,
        and more with TextXtract. Our app uses state-of-the-art artificial
        intelligence technology to extract the most important information from
        any text and deliver it to you in a clear and easy-to-read summary.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <p>
          Save time and stay informed with TextXtract's AI-powered text
          summarization technology.
        </p>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;

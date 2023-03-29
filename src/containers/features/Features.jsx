import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Save Time and Effort",
    text: "With TextXtract, you can quickly generate summaries of long articles or research papers, saving you the time and effort of reading through the entire text.",
  },
  {
    title: "Accurate Summaries",
    text: "Our AI-powered text summarization tool uses state-of-the-art natural language processing algorithms to provide accurate and concise summaries of even the most complex texts.",
  },
  {
    title: "Improve Productivity",
    text: "TextXtract can help you stay on top of your reading list and increase your productivity by allowing you to quickly summarize important information and move on to the next task.",
  },
  {
    title: "Accessible Anywhere, Anytime",
    text: "Whether you're at home, at work, or on the go, TextXtract is accessible from any device with an internet connection, making it a convenient tool for busy professionals and students alike.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        Experience the Power of TextXtract: 4 Benefits to Simplify Your Text
        Summarization
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

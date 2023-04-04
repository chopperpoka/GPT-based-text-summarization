import React from "react";
import "./question.css";

const Question = ({ question, answer }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <h1>{question}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;

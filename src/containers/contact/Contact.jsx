import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <div className="gpt3__contact-text">
        <h1 className="heading">Contact us</h1>

        <form className="contact-form">
          <label>Full Name:</label>
          <input type="text"></input>
          <label>Work Email</label>
          <input type="email"></input>
          <label>Subject</label>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};
export default Contact;

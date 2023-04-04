import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div id="contact">
      <div className="gpt3__contact-text">
        <h1 className="contact-headline">Contact us</h1>

        <form className="contact-form">
          <label>Full Name:</label>
          <input className="contactInput" type="text"></input>
          <label>Work Email</label>
          <input className="contactInput" type="email"></input>
          <label>Subject</label>
          <input className="contactInput" type="text"></input>
          <input className="submitInput" type="submit"></input>
        </form>
      </div>
    </div>
  );
};
export default Contact;

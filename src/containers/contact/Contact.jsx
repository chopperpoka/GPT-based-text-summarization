import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div id="contact">
      <div className="gpt3__contact-text">
        <div className="gradient__text">
          <h1 className="contact-headline">Get In Touch:</h1>
        </div>

        <form className="contact-form">
          <label>Full Name:</label>
          <input className="contactInput" name="fullname" type="text"></input>
          <label>Work Email</label>
          <input className="contactInput" name="email" type="email"></input>
          <label>Subject</label>
          <input
            className="contact-subjectInput"
            name="subject"
            type="text"
          ></input>
          <input className="submitInput" name="submit" type="submit"></input>
        </form>
      </div>
    </div>
  );
};
export default Contact;

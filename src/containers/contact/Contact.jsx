import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div id="contact">
      {/* fix the issue here on the gradient text with the contact header*/}
      {/*TO DO */}
      <div className="contact__headline">
        <h1 className="gradient__text">Contact Us</h1>
      </div>
      <form className="contact-form">
        <label>Full Name:</label>
        <input
          className="contactInput"
          name="fullname"
          type="text"
          required
        ></input>
        <label>Work Email</label>
        <input
          className="contactInput"
          name="email"
          type="email"
          required
        ></input>
        <label>Subject</label>
        <input
          className="contact-subjectInput"
          name="subject"
          type="text"
        ></input>
        <input
          className="submitInput"
          name="submit"
          type="submit"
          required
        ></input>
      </form>
    </div>
  );
};
export default Contact;

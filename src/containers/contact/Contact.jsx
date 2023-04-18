import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
  });

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // Opens email client with pre-populated fields
    const recipientEmail = "youremail@example.com";
    const subject = encodeURIComponent(`Form Submission - ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullname}\nEmail: ${formData.email}\nSubject: ${formData.subject}`
    );
    window.open(`mailto:${recipientEmail}?subject=${subject}&body=${body}`);
  };

  return (
    <div id="contact">
      <div className="contact__headline">
        <h1 className="gradient__text">Contact Us</h1>
      </div>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <label>Full Name:</label>
        <input
          className="contactInput"
          name="fullname"
          type="text"
          value={formData.fullname}
          onChange={handleFormChange}
          required
        />
        <label>Work Email</label>
        <input
          className="contactInput"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleFormChange}
          required
        />
        <label>Subject</label>
        <input
          className="contact-subjectInput"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleFormChange}
        />
        <input className="submitInput" name="submit" type="submit" required />
      </form>
    </div>
  );
};

export default Contact;

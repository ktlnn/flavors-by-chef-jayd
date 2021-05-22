import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form">
        <label id="name-input" htmlFor="name">
          Name
        </label>

        <input
          type="text"
          id="name"
          required
          placeholder="First and Last Name"
        />
      </div>
      <div className="contact-form">
        <label id="email-input" htmlFor="email">
          Email
        </label>

        <input type="email" id="email" required />
      </div>
      <div className="contact-form">
        <label id="phone-input" htmlFor="phone">
          Phone Number
        </label>

        <input type="phone" id="phone" required />
      </div>
      <div className="contact-form">
        <label id="message-input" htmlFor="message">
          Message
        </label>

        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;

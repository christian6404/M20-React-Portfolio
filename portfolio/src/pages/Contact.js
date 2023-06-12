import React, { useState } from "react";
import "../styles/Contact.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email address";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0; // Returns true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form submission logic goes here
      // You can make an API call or perform any other action with the form data
      // Reset the form fields and show a success message if needed
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="over">
      <h2>Contact</h2>
      {submitted && <p>Thank you for your message!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              if (!name.trim()) {
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  name: "Name is required",
                }));
              }
            }}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              if (!email.trim()) {
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  email: "Email is required",
                }));
              } else if (!isValidEmail(email)) {
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  email: "Invalid email address",
                }));
              }
            }}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => {
              if (!message.trim()) {
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  message: "Message is required",
                }));
              }
            }}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;

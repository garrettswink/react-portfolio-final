import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showMessage, setShowMessage] = useState(false);
  const [hoveredField, setHoveredField] = useState(null);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;



  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setInvalidEmail(false);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(formData.email)) {
      setInvalidEmail(true);
      setShowMessage(false);
      return;
    }
    if (formData.name && formData.email && formData.message) {
      setShowMessage(true); // Display the success message
      setInvalidEmail(false)
    }
  };

  function Tooltip({ message }) {
    return (
      <span style={{
        marginLeft: '10px',
        fontSize: '12px',
        color: '#333',
        background: '#e3e3e3',
        padding: '5px',
        borderRadius: '5px'
      }}>
        {message}
      </span>
    );
  }




  return (
    <>
      <div className="header-copy">
        <h1>Contact Me</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-copy">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-field"
            onMouseEnter={() => setHoveredField('name')}
            onMouseLeave={() => setHoveredField(null)}
          />
          {hoveredField === 'name' && <Tooltip message="Required" />}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-copy">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-field"
            onMouseEnter={() => setHoveredField('name')}
            onMouseLeave={() => setHoveredField(null)}
          />
          {hoveredField === 'name' && <Tooltip message="Required" />}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-copy">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            className="form-field"
            onMouseEnter={() => setHoveredField('name')}
            onMouseLeave={() => setHoveredField(null)}
          ></textarea>
           {hoveredField === 'name' && <Tooltip message="Required" />}
        </div>
   

      <button type="submit" className="submit-button">
        Submit
      </button>
  
    </form>

    {showMessage && (
        <div className="success-message">
          Success! A confirmation email has been sent to your inbox.
        </div>
    )}
    {invalidEmail && (
      <div className="error-message">
        Invalid email. Please try again.
      </div>
    )}
    </>
  );
    }

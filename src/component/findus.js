import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import "../css/findus.css";

const FindAndContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = (e) => {
      e.preventDefault(); 
      emailjs
        .sendForm(
          "royalriders", 
          "template_cp05i18", 
          formRef.current,
          "jHcfG6WK8RZjOZ_U3" 
        )
        .then(
          (result) => {
            alert("send")
            setFormData({ name: "", email: "", message: "" }); 
          },
          (error) => {
            alert("failed")
          }
        );
  
      e.target.reset(); 
    };

  return (
    <div className="find-page-container">
      <header className="find-header">
        <h1>Find Us & Contact Us</h1>
      </header>
      <div className="find-content-container">
        {/* Find Us Section */}
        <section className="find-find-us">
          <h2>Find Us</h2>
          <p>
            Visit us at our main office located in the heart of the city. We are
            here to assist you with your needs.
          </p>
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5925.066271948568!2d77.87533354671983!3d9.174073765394823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b3e3e044a34f%3A0x8bdac725119a79fd!2sRoyal%20Enfield%20Service%20Center%20-%20Charles%20Motors%20KVP!5e1!3m2!1sen!2sin!4v1736313687795!5m2!1sen!2sin" 
            allowFullScreen=""
            loading="lazy"
            className="find-map"
          ></iframe>
        </section>

        {/* Contact Us Section */}
        <section className="find-contact-us">
          <h2>Contact Us</h2>
          <form ref={formRef} className="find-contact-form" onSubmit={handleSubmit}>
            <div className="find-form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="find-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="find-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="find-submit-button">
              Send
            </button>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </section>
      </div>
    </div>
  );
};

export default FindAndContactUs;

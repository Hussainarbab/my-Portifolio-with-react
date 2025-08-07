import React from 'react';
import "./Contact.css";
import mail from "../../assets/message.png";
import call from "../../assets/call.png";
import location from "../../assets/location.png";

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "c08dbad8-447f-4897-9ac4-5af7f1befaf5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");
        form.reset(); // ✅ Clear form after success
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your internet connection.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send me a 
            message about anything that you want me to work on. You can contact anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" /> <p>arbabhussan63@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" /> <p>+92555960875</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" /> <p>Gilgit Baltistan, Pakistan</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />

          <label>Your Email</label>
          <input type="email" name='email' placeholder='Enter Your Email' required />

          <label>Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder='Enter Your Message' required></textarea>

          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

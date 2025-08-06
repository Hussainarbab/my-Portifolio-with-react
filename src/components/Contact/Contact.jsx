import React from 'react'
import "./Contact.css";
import mail from "../../assets/message.png"
import call from "../../assets/call.png"
import location from "../../assets/location.png"

function Contact() {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a 
                    message about anything that you want me to work on. You can contact anytime.</p>

<div className="contact-details">
    <div className="contact-detail">
        <img src={mail} alt="" /> <p>arbabhussan63@gmail.com</p>

    </div>
    <div className="contact-detail">
        <img src={call} alt="" /> <p>+92555960875</p>
        
    </div>
    <div className="contact-detail">
        <img src={location} alt="" /> <p>Gilgit Baltistan ,Pakistan</p>
        
    </div>
</div>

            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text"  placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email' />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
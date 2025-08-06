import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>

            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>Hussain</h1>
                    <p>I am a frontend developer from, Pakistan with 2 years of experience in companies like Techever Solutions and Murazoid etc.

                    </p>

                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                         <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="footer-subscribe">Subscribe </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© {new Date().getFullYear()} Hussain Arbab. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                    
                </div>

            </div>
        </div>
    )
}

export default Footer
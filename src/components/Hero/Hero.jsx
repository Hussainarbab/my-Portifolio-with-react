import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Hero.css";
import profile from "../../assets/profile.jpg";

function Hero() {
  const [menu, setMenu] = useState("");

  return (
    <div id='home' className='hero'>
      <img src={profile} alt="Profile" />
      <h1>
        <span>I'm Hussain Arbab</span>, Frontend Developer, based in Pakistan.
      </h1>
      <p>
        Hi, I'm Hussain Abbas — a passionate frontend developer from Pakistan.
        I build responsive and user-friendly websites using HTML, CSS, JavaScript,
        and React. Have a look at my work below!
      </p>

      <div className="hero-action">
        <div><AnchorLink className='anchor-link' offset={50} href='#contact'>
          <div
            className={`nav-connect ${menu === "contact" ? "active" : ""}`}
            onClick={() => setMenu("contact")}
          >
            Connect With Me
          </div>
        </AnchorLink>
        </div>

        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;

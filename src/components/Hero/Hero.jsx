import React from 'react'
import "./Hero.css"
import profile from "../../assets/profile.jpg";

function Hero() {
  return (
    <div className='hero'>
        <img src={profile} alt="" />
        <h1> <span>I'm Hussain Arbab</span>, Frontend Deleloper, based in Pakistan.</h1>
        <p>Hi, I'm Hussain Abbas — a passionate frontend developer from Pakistan.
             I build responsive and user-friendly websites using HTML, CSS, JavaScript,
              and React. Have a look at my work below!</p>

              <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
              </div>


    </div>
  )
}

export default Hero
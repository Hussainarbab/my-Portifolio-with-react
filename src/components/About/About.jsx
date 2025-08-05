import React from 'react'
import img from "../../assets/profile.jpg";
import "./About.css"


function About() {
  return (
    <div className='about'>


        <div className="about-title">
            <h1>About Me</h1>
           
           
        </div>

        <div className="about-sections">
<div className="about-left">
<img src={img} alt="" />
</div>

<div className="about-right">
    <div className="about-para">

        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project. </p>
    </div>

    <div className="about-skills">
        <div className="about-skill"> <p>HTML & CSS </p> <hr  style={{width:"90%"}}/></div>
        <div className="about-skill"> <p>React JS </p><hr  style={{width:"50%"}}/></div>
        <div className="about-skill"> <p>JavaScript </p> <hr  style={{width:"70%"}}/></div>
        <div className="about-skill"> <p>Next JS </p> <hr  style={{width:"30%"}}/></div>
    </div>
</div>

        </div>

        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Complete</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>

        </div>
    </div>
  )
}

export default About
import React from 'react';
import "./Services.css";

function Services() {
  const Services_Data = [
    {
      s_no: 1,
      s_name: "Website Design",
      s_desc: "Creative and modern web designs tailored to your brand."
    },
    {
      s_no: 2,
      s_name: "Frontend Development",
      s_desc: "Building interactive user interfaces using HTML, CSS, and JavaScript."
    },
    {
      s_no: 3,
      s_name: "React Development",
      s_desc: "Developing fast and dynamic web apps using React.js."
    },
    {
      s_no: 4,
      s_name: "Portfolio Websites",
      s_desc: "Custom personal portfolios to showcase your skills and projects."
    },
    {
      s_no: 5,
      s_name: "Bug Fixing & Optimization",
      s_desc: "Fixing layout issues, broken code, and improving site performance."
    },
    {
      s_no: 6,
      s_name: "Responsive Design",
      s_desc: "Ensuring your website looks perfect on all screen sizes and devices."
    }
  ];

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no} </h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              Read More..
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <h1>Hussain</h1>
      <ul className='nav-menu'>
        <AnchorLink className='anchor-link' href='#home'>
          <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        </AnchorLink>

        <AnchorLink className='anchor-link' offset={50} href='#about'>
          <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About Me</li>
        </AnchorLink>

        <AnchorLink className='anchor-link' offset={50} href='#services'>
          <li onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>Services</li>
        </AnchorLink>

        <AnchorLink className='anchor-link' offset={50} href='#work'>
          <li onClick={() => setMenu("work")} className={menu === "work" ? "active" : ""}>Portfolio</li>
        </AnchorLink>

        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</li>
        </AnchorLink>
      </ul>
<AnchorLink
  className='anchor-link' offset={50}  href='#contact'>
  <div
    className={`nav-connect ${menu === "contact" ? "active" : ""}`}
    onClick={() => setMenu("contact")}
  >
    Connect With Me
  </div>
</AnchorLink>

    </div>
  );
}

export default Navbar;

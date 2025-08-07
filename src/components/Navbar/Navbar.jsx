import React, { useState, useRef } from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import menu_bar from "../../assets/menu.png";
import cross from "../../assets/cross.png";

function Navbar() {
  const [menu, setMenu] = useState("home");

  const menuRef =useRef();
  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
   const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <h1>Hussain</h1>
      <img  src={menu_bar} onClick={openMenu} alt="" className="img1" />
      <ul ref={menuRef} className='nav-menu'>
        <img src={cross} onClick={closeMenu} alt="" className="img2" />
        <AnchorLink className='anchor-link' href='#home'>
          <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        </AnchorLink>

        <AnchorLink className='anchor-link' offset={50} href='#about'>
          <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</li>
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

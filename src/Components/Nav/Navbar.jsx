import React, { useRef, useState } from 'react';
import './Navbar.css';
import menu_open from '../../assets/menus.png';
import menu_close from '../../assets/arrow.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-400px";
  };

  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <h1>John Walz</h1>
      </div>
      
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        
        <li>
          <a href="/home" target="_blank" rel="noopener noreferrer" onClick={() => setMenu("home")}>
            Home
          </a>
        </li>
        
        <li>
          <a href="/about" target="_blank" rel="noopener noreferrer" onClick={() => setMenu("about")}>
            About Me
          </a>
        </li>
        
        <li>
          <a href="/services" target="_blank" rel="noopener noreferrer" onClick={() => setMenu("services")}>
            Services
          </a>
        </li>
        
        <li>
          <a href="/work" target="_blank" rel="noopener noreferrer" onClick={() => setMenu("work")}>
            Portfolio
          </a>
        </li>
        
        <li>
          <a href="/contact" target="_blank" rel="noopener noreferrer" onClick={() => setMenu("contact")}>
            Contact
          </a>
        </li>
        
      </ul>

      <div className="nav-connect">
        <a href="/contact" target="_blank" rel="noopener noreferrer">
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;

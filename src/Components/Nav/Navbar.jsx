// Navbar.jsx
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
    <div className="navbar">
      <div className="navbar-logo uppercase">
        <span className="first-letter">J</span>ohn <span className="first-letter">W</span>alz
      </div>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

        {/* Use Link for navigation */}
        <li><Link to="/" onClick={() => {
          setMenu("home");
          closeMenu();
        }}>Home</Link></li>
        <li><Link to="/about" onClick={() => {
          setMenu("about");
          closeMenu();
        }}>About</Link></li>
        <li><Link to="/recordings" onClick={() => {
          setMenu("recordings");
          closeMenu();
        }}>Recordings</Link></li>
        <li><Link to="/performances" onClick={() => {
          setMenu("performances");
          closeMenu();
        }}>Performances</Link></li>
        <li><Link to="/reviews" onClick={() => {
          setMenu("reviews");
          closeMenu();
        }}>Reviews</Link></li>
        <li><Link to="/contact" onClick={() => {
          setMenu("contact");
          closeMenu();
        }}>Contact</Link></li>
        
      </ul>
    </div>
  );
};

export default Navbar;

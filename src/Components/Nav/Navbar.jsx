import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menus.png'
import menu_close from '../../assets/arrow.png'

const Navbar = () => {
  
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.top="0";
  }
  const closeMenu = () => {
    menuRef.current.style.top="-800px";
  }

  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <h1>John Walz</h1>
        
      </div>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("events")}>Events</p></AnchorLink>{menu==="events"}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("dining")}>Food&Drink</p></AnchorLink>{menu==="dining"}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("foundation")}>Foundation</p></AnchorLink>{menu==="foundation"}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("gallery")}>Gallery</p></AnchorLink>{menu==="gallery"}</li>

      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar

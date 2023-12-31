import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../assets/logo (2).png"
// import { Link } from 'react-router-dom'
import contact from "../../assets/contact.png"
import { Link } from 'react-scroll'
import Menu from "../../assets/menu.png"
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
<Link activeClass='active' to = 'intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
<Link activeClass='active' to = 'about' spy={true} smooth={true} offset={-200} duration={500} className='desktopMenuListItem'>About</Link>
<Link activeClass='active' to = 'homeskillsBox' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
<Link activeClass='active' to = 'works' spy={true} smooth={true} offset={-40} duration={500} className='desktopMenuListItem'>Projects</Link>

      </div>
      <button className="desktopMenuBtn" onClick={()=>{
document.getElementById('Contact').scrollIntoView({behavior:"smooth"});
      
      }}>
          <img src={contact} alt="" className='desktopMenuImg' />
          Contact Me
      </button>
      
      <img src={Menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
<Link activeClass='active' to = 'intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
<Link activeClass='active' to = 'about' spy={true} smooth={true} offset={-200} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
<Link activeClass='active' to = 'homeskillsBox' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Skills</Link>
<Link activeClass='active' to = 'works' spy={true} smooth={true} offset={-40} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
<Link activeClass='active' to = 'Contact' spy={true} smooth={true} offset={-40} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact Me</Link>

      </div>
    </nav>
    </>
  )
}

export default Navbar

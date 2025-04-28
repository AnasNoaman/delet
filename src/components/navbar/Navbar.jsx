import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className={`navbar ${style.nav} navbar-expand-lg pt-4 pb-4 `} >
    <div className="container d-flex justify-content-between align-items-center">
      <Link className={` ${style.navbrand}  fw-bold `} to={'/'} >START BOOTSTRAP</Link>
      <ul className="navbar-nav d-flex flex-row align-items-center gap-4">
        <li className="nav-item">
          <Link className="nav-link  fw-bold" to={'/portfolio'}>PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  fw-bold" to={'/about'}>ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  fw-bold" to={'/contact'}>CONTACT</Link>
        </li>
      </ul>
    </div>
  </nav>
  

  )
}

export default Navbar

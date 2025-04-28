import React from 'react'
import style from './Hero.module.css'
import myimg from '../../assets/avataaars.svg'
export default function Hero() {
  return (
    <header className={` d-flex flex-column align-items-center  ${style.hero} justify-content-center text-center py-5`}>
        <div className="container">
            <img className={` ${style.avatar} `} src={myimg} />
            <h1 className=" fw-bold ">START BOOTSTRAP</h1>
    <div className="header-divider d-flex align-items-center justify-content-center mb-3">
      <hr className="header-line" />
      <span className={` ${style.star}`}>&#9733;</span>
      <hr className="header-line" />
    </div>
    <p className="header-subtitle fs-4">
      Graphic Artist - Web Designer - lllustrator
    </p>
    </div>
    
  </header>
  )
}

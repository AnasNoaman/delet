import React from 'react'
import style from './About.module.css'
function About() {
  return (

    <section className={` ${style.about} d-flex flex-column align-items-center justify-content-center text-center py-5`}>
        <div className="container">
            <h2 className=" fw-bold mb-2">ABOUT</h2>
      <div className="about-divider d-flex align-items-center justify-content-center mb-5">
        
        <span className="about-star mx-3">&#9733;</span>
        
      </div>
      <div className="about-text d-flex flex-column flex-md-row justify-content-center mb-5 gap-4 text-white">
        <p className={`${style.paragraph}`}>
          Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        <p className={`${style.paragraph}`}>
          You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
        </p>
      </div>
      <a href="#" className="about-btn btn btn-outline-light btn-lg px-4 py-2">
       Free Download!
      </a>
      
      </div>
      
    </section>
  )
}

export default About
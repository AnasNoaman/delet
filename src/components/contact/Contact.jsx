import React from 'react'
import CoustomInput from '../../Shared/CoustomInput'
import CoustomButton from '../../Shared/CoustomButton'

export default function Contact() {
  return (
    <div className="contact py-5 ">
      <div className="container d-flex flex-column gap-5 text-center ">
      <h2 className=" fw-bold mb-2">CONTACT ME</h2>
      <span className="portfolio-star mx-3">&#9733;</span>
      <form className="d-flex flex-column gap-4">
        <CoustomInput type="text" placeholder="First Name" className="py-2 border-top-0 border-start-0 border-end-0" />
        <CoustomInput type="email" placeholder="Email"  className="py-2 border-top-0 border-start-0 border-end-0" />
        <CoustomInput type="text" placeholder="Phone"  className="py-2 border-top-0 border-start-0 border-end-0" />
        <CoustomInput type="text" placeholder="Massage"  className="py-4 border-top-0 border-start-0 border-end-0" />
        <CoustomButton type="button" name="Send" className="btn btn-info btn-lg mx-auto text-white" />
      </form>
        
      </div>
    </div>
  )
    
}

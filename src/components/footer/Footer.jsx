import React from 'react'

export default function Footer() {
  return (
    <footer className="pt-5" style={{backgroundColor: "#2c3e50"}}>
    <div className="container text-white py-5">
      <div className="row text-center">
        <div className="col-md-4 mb-5 mb-md-0">
          <h4 className="fw-bold mb-4">LOCATION</h4>
          <p className="mb-0">2215 John Daniel Drive<br/>Clark, MO 65243</p>
        </div>
        <div className="col-md-4 mb-5 mb-md-0">
          <h4 className="fw-bold mb-4">AROUND THE WEB</h4>
          <div className="d-flex justify-content-center gap-3">
            <a href="#" className="footer-icon d-flex align-items-center justify-content-center rounded-circle border border-2 border-white" style={{width: '48px', height: '48px'}}>
              <i className="fab fa-facebook-f text-white fs-4"></i>
            </a>
            <a href="#" className="footer-icon d-flex align-items-center justify-content-center rounded-circle border border-2 border-white" style={{width: '48px', height: '48px'}}>
              <i className="fab fa-twitter text-white fs-4"></i>
            </a>
            <a href="#" className="footer-icon d-flex align-items-center justify-content-center rounded-circle border border-2 border-white" style={{width: '48px', height: '48px'}}>
              <i className="fab fa-linkedin-in text-white fs-4"></i>
            </a>
            <a href="#" className="footer-icon d-flex align-items-center justify-content-center rounded-circle border border-2 border-white" style={{width: '48px', height: '48px'}}>
              <i className="fab fa-dribbble text-white fs-4"></i>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <h4 className="fw-bold mb-4">ABOUT FREELANCER</h4>
          <p className="mb-0">
            Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="#" className="text-info text-decoration-underline">Start Bootstrap</a>.
          </p>
        </div>
      </div>
    </div>
    <div className="py-3 text-center py-2" style={{backgroundColor: "#222f36", color: "#fff", fontSize: '1rem'}}>
      Copyright &copy; Your Website 2023
    </div>
  </footer>
  )
}

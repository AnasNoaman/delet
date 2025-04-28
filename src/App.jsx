import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (

    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/' element={
          <>
            <Portfolio />
            <About />
            <Contact />
          </>
        }> </Route>
        <Route path='/portfolio' element={<Portfolio />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
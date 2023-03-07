import React from 'react'
import About from './components/constants/about/about'
import Contact from './components/constants/contact/contact'
import Footer from './components/constants/footer/footer'
import Founder from './components/constants/founders/founder'
import Hero from './components/constants/hero/hero'
import Navbar from './components/constants/navbar/navbar'
import Obj from './components/constants/obj/obj'
import Whom from './components/constants/whom/whom'
import Work from './components/constants/work/work'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Obj/>
      <Whom/>
      <Work/>
      <Founder/>
      <Contact/>
      <Footer/>
    </>
  )
}

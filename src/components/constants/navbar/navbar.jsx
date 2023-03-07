import React, { useState } from 'react'
import { Container } from './navbarStyles'
export default function Navbar() {
    const [nav, setNav] = useState(false)
  return (
    <Container>
        <div className="container">
            <div className="header__logo"> 
                <a href="https://kralowventures.com"> 
                    <img src="https://kralowventures.com/wp-content/uploads/2022/12/Group-1-2.svg" alt="logo" className="logo"/>
                </a>
            </div>
            <div>
                <ul className='nav'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#objectives">Objectives</a></li>
                    <li><a href="#whom">Audience</a></li>
                    <li><a href="#work">How it works</a></li>
                    <li><a href="#founders">Founders</a></li>
                </ul>
            </div>
            <div className="btn"> 
                <a href="#feedback"> Contact Us </a>
            </div>
            <div className="hamburger" onClick={()=> setNav(true)}>
                <span></span>
				<span></span>
				<span></span>
            </div>
        </div>
        <div className='sm-nav' style={{display: nav ? "flex" : "none"}}>
                <div className='close' onClick={()=> setNav(false)}>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <ul onClick={()=> setNav(false)}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#objectives">Objectives</a></li>
                        <li><a href="#whom">Audience</a></li>
                        <li><a href="#work">How it works</a></li>
                        <li><a href="#founders">Founders</a></li>
                    </ul>
                </div>
                <div className="btn"> 
                    <a href="#feedback"> Contact Us </a>
                </div>
            </div>
    </Container>
  )
}

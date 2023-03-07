import React from 'react'
import { Container } from './navbarStyles'
export default function Navbar() {
  return (
    <Container>
        <div className="container">
            <div className="header__logo"> 
                <a href="https://kralowventures.com"> 
                    <img src="https://kralowventures.com/wp-content/uploads/2022/12/Group-1-2.svg" alt="logo" className="logo"/>
                </a>
            </div>
            <div>
                <ul>
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
            <div className="hamburger">
                <span></span>
				<span></span>
				<span></span>
            </div>
        </div>
    </Container>
  )
}

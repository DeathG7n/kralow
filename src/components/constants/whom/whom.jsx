import React from 'react'
import { Container } from './whomStyles'
import People from "../../assets/People-3-1.png"

export default function Whom() {
  return (
    <Container>
        <div id="whom">
                    <div>
                        <img src={People} alt="people"/>
                    </div> 
                    <div>
                        <h1>Whom is this for?</h1>
                        <p>For smart investors who prefer to enjoy life instead of bearing the burden of studying the crypto markets on the daily basis and are ready to trust this job to professionals.</p>
                        <div className="btn"> 
                            <a href="#feedback"> Contact Us </a>
                        </div>
                    </div>
                </div>
    </Container>
  )
}

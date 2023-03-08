import React from 'react'
import { Container } from './workStyles'

export default function Work() {
  return (
    <Container>
    <div id="work">
				<h1>How does it work?</h1>
				<p>For investors</p>
				<h2>We allocate funds to promising early stage crypto projects, nurture them (if required), wait for the token to be listed, and slowly exit over time making hefty returns.
				</h2>
				<div className="work">
					<div>
						<p>Minimum cheque</p>
						<p>Tenure</p>
						<p>Allocation</p>
						<p>Quarterly distributions</p>
						<p>Main profit (+initial investment) distribution</p>
						<p>Annual management fee</p>
						<p>Funds compensation</p>
					</div>
					<span></span>
					<div className='box'>
						<p>$10,000</p>
						<p>Funds locked for a minimum of 2 years.</p>
						<p>Early stage crypto projects.</p>
						<p>Yes, if an exit was made.</p>
						<p>Upon full exit with a possibility to reinvest (end of tenure or upon the achievement of the main investment goals).</p>
						<p>2%</p>
						<p>30% from profit.</p>
					</div>
					<div className='sm-work'>
						<p>Minimum cheque</p>
						<p>$10,000</p>
						<p>Tenure</p>
						<p>Funds locked for a minimum of 2 years.</p>
						<p>Allocation</p>
						<p>Early stage crypto projects.</p>
						<p>Quarterly distributions</p>
						<p>Yes, if an exit was made.</p>
						<p>Main profit (+initial investment) distribution</p>
						<p>Upon full exit with a possibility to reinvest (end of tenure or upon the achievement of the main investment goals).</p>
						<p>Annual management fee</p>
						<p>2%</p>
						<p>Funds compensation</p>
						<p>30% from profit.</p>
					</div>
				</div>
				<div className="btn"> 
					<a href="#feedback"> Contact Us </a>
				</div>
			</div>
    </Container>
  )
}

import React from 'react'
import Thomas from '../../assets/thomas.png'
import Aless from '../../assets/aless.png'
import { Container } from './founderStyles'

export default function Founder() {
  return (
    <Container>
    <div id="founders">
				<h1>Meet the founders</h1>
				<div class="card">
					<img src={Thomas} alt="thomas" />
					<div>
						<h2>Thomas Kralow</h2>
						<p><span></span>Managing Director</p>
						<p><span></span>Famous crypto analyst and influencer</p>
						<p><span></span>World renowned trading/investing coach</p>
					</div>
				</div>
				<div class="card card1">
					<div>
						<h2>Alessandro Rocco Pietrocola</h2>
						<p>Managing Director<span></span></p>
						<p>FCA Regulated Individual<span></span></p>
						<p>Fintech Specialist<span></span></p>
					</div>
					<img src={Aless} alt="aless" />
				</div>
				<span class="note">We have joined forces to make crypto investing accessible, safe and profitable for all!</span>
			</div>
    </Container>
  )
}

import React from 'react'
import Hourglass from "../../assets/hourglass.png"
import Safe from '../../assets/Safe.png'
import { Container } from './objStyles'

export default function Obj() {
  return (
    <Container>
        <div id="objectives">
				<h1>Our two main objectives</h1>
				<div class="obj">
					<div class="box">
						<div class="box-img">
							<img src={Hourglass} alt="hourglass"/>
						</div>
						<div class="text">
							<p>Pick out and invest in upcoming crypto stars and market leaders</p>
						</div>
					</div>
					<div class="box">
						<div class="box-img">
							<img src={Safe} alt="hourglass"/>
						</div>
						<div class="text">
							<p>Outperform Bitcoin returns</p>
						</div>
					</div>
				</div>
			</div>
    </Container>
  )
}

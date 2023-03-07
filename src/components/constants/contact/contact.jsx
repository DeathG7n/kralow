import React, { useState } from 'react'
import {Container} from './contactStyles'

export default function Contact() {
    const [type, setType] = useState('investor')
    const [status, setStatus] = useState('accredited')

    function handleType(item){
        setType(item)
    }
    function handleStatus(item){
        setStatus(item)
    }
  return (
    <Container>
        <div id="feedback">
				<form>
					<h1>Register interest</h1>
					<p>I am:</p>
					<div className="btns">
						<div onClick={()=>handleType('investor')} style={{backgroundColor: type === 'investor' ? "#fdeab9" : "transparent", color: type === 'investor' ? "#000" : "#fff"}}>Investor</div>
						<div onClick={()=>handleType('project')} style={{backgroundColor: type === 'project' ? "#fdeab9" : "transparent", color: type === 'project' ? "#000" : "#fff"}}>Project</div>
					</div>
                    <div className='form'>
                        <input type="text" placeholder='Name'/>
                        {type === 'project' && <input type="text" placeholder='Project Name'/>}
                        {type === 'investor' && <input type="text" placeholder='Last Name'/>}
                        <input type="text" placeholder='E-mail'/>
                        {type === 'investor' && <input type="text" placeholder='Confirm E-mail'/>}
                        <input type="text" placeholder='Phone Number'/>
                        {type === 'investor' && <input type="text" placeholder='Confirm Phone'/>}
                        <select name="" id="">
                            <option value="country" default>Country</option>
                        </select>
                        {type === 'investor' && <div class="btns">
                            <div onClick={()=>handleStatus("accredited")} style={{backgroundColor: status === "accredited"? "#fdeab9" : "transparent", color: status === "accredited" ? "#000" : "#fff"}}>Accredited</div>
                            <div onClick={()=>handleStatus("non-accredited")} style={{backgroundColor: status === "non-accredited" ? "#fdeab9" : "transparent", color: status === "non-accredited" ? "#000" : "#fff"}}>Non-accredited</div>
					    </div>}
                        {type === 'investor' && <input type="text" placeholder='Enter the investment amount'/>}
                    </div>
                    <div className="check">
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Agree to terms and conditions</label>
                    </div>
                    <div className="check">
                         <input type="radio" name="" id="" />
                        <label htmlFor="">Agree to privacy policy</label>
                    </div>
                    <div className="btn"> 
                        <a href="#feedback"> Contact Us </a>
                    </div>
				</form>
			</div>
    </Container>
  )
}

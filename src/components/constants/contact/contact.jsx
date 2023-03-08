import React, { useRef, useState } from 'react'
import {Container, ErrorText} from './contactStyles'
import { useFormik } from 'formik';
import { validationSchema } from "../../constants/validationSchema";
import {countries} from '../countries'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [type, setType] = useState('investor')
    const [status, setStatus] = useState('accredited')
    const form = useRef()

    function handleType(item){
        setType(item)
    }
    function handleStatus(item){
        setStatus(item)
    }
    const { values, handleChange, errors, touched, handleSubmit, handleBlur } = useFormik({
        initialValues: {
            type: '',
            status: ''
        },
    
        // validationSchema: validationSchema,
    
        onSubmit: (values) => {
            values.type = type
            values.status = status
            console.log(values)
        }
    });

    const sendEmail = async(e) => {
        e.preventDefault();
        console.log("click")
    
        await emailjs.sendForm('service_5e8x3bq', 'template_g36t1nt', form.current, 'FujH57pnokLdaPoI1')
          .then((result) => {
              console.log(result.text);
              console.log("message successful")
          }, (error) => {
              console.log(error.text);
          });
    };
  return (
    <Container>
        <div id="feedback">
				<form onSubmit={sendEmail} ref={form}>
					<h1>Register interest</h1>
					<p>I am:</p>
					<div className="btns">
						<div onClick={()=>handleType('investor')} style={{backgroundColor: type === 'investor' ? "#fdeab9" : "transparent", color: type === 'investor' ? "#000" : "#fff"}}>Investor</div>
						<div onClick={()=>handleType('project')} style={{backgroundColor: type === 'project' ? "#fdeab9" : "transparent", color: type === 'project' ? "#000" : "#fff"}}>Project</div>
					</div>
                    <div className='form'>
                        <input 
                            type="text" 
                            placeholder='Name' 
                            name='name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched?.name && <ErrorText>{errors?.name}</ErrorText>}
                        {type === 'project' && <input 
                            type="text" 
                            placeholder='Project Name' 
                            name='projectName'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />}
                        {touched?.projectName && <ErrorText>{errors?.projectName}</ErrorText>}
                        {type === 'investor' && <input 
                            type="text" 
                            placeholder='Last Name' 
                            name='lastName'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />}
                        {touched?.lastName && <ErrorText>{errors?.lastName}</ErrorText>}
                        <input 
                            type="text" 
                            placeholder='E-mail' 
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched?.email && <ErrorText>{errors?.email}</ErrorText>}
                        {type === 'investor' && <input 
                            type="text" 
                            placeholder='Confirm E-mail' 
                            name='confirmEmail'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />}
                        {touched?.confirmEmail && <ErrorText>{errors?.confirmEmail}</ErrorText>}
                        <input 
                            type="number" 
                            placeholder='Phone Number' 
                            name='phone'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched?.phone && <ErrorText>{errors?.phone}</ErrorText>}
                        {type === 'investor' && <input 
                            type="number" 
                            placeholder='Confirm Phone' 
                            name='confirmPhone'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />}
                        {touched?.confirmPhone && <ErrorText>{errors?.confirmPhone}</ErrorText>}
                        <select 
                            name="country" 
                            id='country'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="country" default>Country</option>
                            {countries?.map((r, id)=>{
                                return(
                                    <option value={r} key={id}>{r}</option>
                                )
                            })}
                        </select>
                        {touched?.country && <ErrorText>{errors?.country}</ErrorText>}
                        {type === 'investor' && <div className="btns">
                            <div onClick={()=>handleStatus("accredited")} style={{backgroundColor: status === "accredited"? "#fdeab9" : "transparent", color: status === "accredited" ? "#000" : "#fff"}}>Accredited</div>
                            <div onClick={()=>handleStatus("non-accredited")} style={{backgroundColor: status === "non-accredited" ? "#fdeab9" : "transparent", color: status === "non-accredited" ? "#000" : "#fff"}}>Non-accredited</div>
					    </div>}
                        {type === 'investor' && <input 
                            type="number" 
                            name='amount'
                            placeholder='Enter the investment amount'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />}
                        {touched?.amount && <ErrorText>{errors?.amount}</ErrorText>}
                    </div>
                    <div className='file'>
                        <input 
                            type="file" 
                            name="pichDeck" 
                            id='pichDeck'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <label htmlFor="pichDeck">Upload Pich Deck</label>
                        <p>Acceptable file formats: docs., doc., PDF</p>
                    </div>
                    <div className='file'>
                        <input 
                            type="file" 
                            name="whitePaper" 
                            id='whitePaper'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <label htmlFor="whitePaper">Upload Whitepaper</label>
                        <p>Acceptable file formats: docs., doc., PDF</p>
                    </div>
                    <div className="check">
                        <input 
                            type="radio" 
                            name="agreeTerms"
                            id='agreeTerms'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked
                        />
                        <label htmlFor="agreeTerms">Agree to terms and conditions</label>
                    </div>
                    <div className="check">
                        <input 
                            type="radio" 
                            name="agreePrivacy"
                            id='agreePrivacy'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked
                        />
                        <label htmlFor="agreePrivacy">Agree to privacy policy</label>
                    </div>
                    <button className="btn"> 
                        <a href="#feedback"> Contact Us </a>
                    </button>
				</form>
			</div>
    </Container>
  )
}

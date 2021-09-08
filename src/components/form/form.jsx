import React, { useState } from 'react'
import './Form.css'
import emailjs from 'emailjs-com'

const Form = () => {
    const [inputState, setinputState] = useState({
        name: "",
        user_email: "",
        message: ""
      }) 

    function handleChange(e) {
        setinputState({...inputState, [e.target.name]: e.target.value})
    }

    function sendEmail(e) {
        e.preventDefault();
        if (inputState.name === "" || inputState.user_email === "" || inputState.message === "") {
            alert('Please complete all inputs')
        } else {
            emailjs.sendForm('service_s277ne6', 'template_aos6soh', e.target, 'user_s9XYFrYE2mx6QevaANixI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        }    
    }

    return (
        <div className='formContainer'>
            <form onSubmit={sendEmail}>
                <input type='text' onChange={handleChange} className='inputStyle' placeholder='Your name' name='name'></input>
                <input type='email' onChange={handleChange} className='inputStyle' placeholder='Email' name='user_email'></input>
                <textarea onChange={handleChange} className='inputStyle' id='textInput' placeholder='Message' name='message'></textarea>
                <input type='submit' className='submitBttn' value='Send message'></input>
            </form>
            
        </div>
    )
}

export default Form

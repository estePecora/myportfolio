import React from 'react'
import './Footer.css'
import Form from '../form/Form'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-info'>
                <div className='leftContainer'>
                    <div className='contact-info'>
                        <h1>Contact Info:</h1>
                        <p>b.estefania@gmail.com</p>
                    </div>
                    <div className='contact-logos'>
                        <a href='https://www.linkedin.com/in/estefania-pecora/' target='_blank' rel="noreferrer">
                            <i className='fab fa-linkedin linkedin'></i>
                        </a>
                        <a href='https://github.com/estePecora' target='_blank' rel="noreferrer">
                            <i className='fab fa-github github'></i>
                        </a>
                    </div>
               
                </div>

                <div className='contactContainer'>
                    <Form/>
                </div>

            </div>
            
        </div>
    )
}

export default Footer

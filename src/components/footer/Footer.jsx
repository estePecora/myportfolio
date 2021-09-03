import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-info'>
                <div className='contact-info'>
                    <h1>Contact me:</h1>
                    <p>mail: b.estefania@gmail.com</p>
                </div>
                <div className='contact-logos'>
                    <a href='https://www.linkedin.com/in/estefania-pecora/' target='_blank' rel="noreferrer">
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href='https://github.com/estePecora' target='_blank' rel="noreferrer">
                        <i className='fab fa-github github'></i>
                    </a>
                </div>
                <div className='contact-form'>

                </div>
                <div className='designed-by'>
                    <p>Designed by Estefania Pecora</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer

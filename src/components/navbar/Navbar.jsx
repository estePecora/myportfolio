import React from 'react'
import './Navbar.css'

const Navbar = ({isScrolling}) => {
    return (
        <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
            <h3 className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>Estefania Pecora</h3>
            
        </nav>
    )
}

export default Navbar

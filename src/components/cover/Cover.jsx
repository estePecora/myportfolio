import React from 'react'
import './Cover.css'
import photo from '../../media/profile-photo.jpg'

const Cover = () => {
    return (
        <div className='cover-container'>
            <div className='photo-container'>
                <div className='image-crop'>
                    <img className='image-style' src={photo}/>
                </div>
            </div>
            
            <div className='name-text-container'>
                <h1>Estefania Pecora</h1>
                <p>Full Stack Developer</p>
            </div>

            <div className='arrow'>
                <p>scroll for more info</p>
                <i class="fas fa-arrow-down arrow-down"></i>
            </div>
            
        </div>
    )
}

export default Cover;
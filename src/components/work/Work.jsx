import React from 'react'
import './Work.css'
import HardwareStoreImg from '../../media/felix-besombes-EzrHLVd83h0-unsplash.jpg'
import CountryAppImg from '../../media/chuttersnap-QkPb5g9p338-unsplash.jpg'

const projectInfo = [
{   
    weblink: 'https://hardwarestore.vercel.app/',
    gitlink: 'https://github.com/estePecora/FP-E-Commerce',
    projectImage: HardwareStoreImg,
    projectName: 'HardwareStore',
    projectDescription: 'This project was made using Nodejs, Express, React-Redux'
},
{
    weblink: 'https://hardwarestore.vercel.app/',
    gitlink: 'https://github.com/estePecora/Countries-App',
    projectImage: CountryAppImg,
    projectName: 'CountryApp',
    projectDescription: 'This project was made using Nodejs, Express, React-Redux'
},
]

const Work = () => {
    
    return (
        <div className='work-container'>
            {projectInfo.map(project => {
                return (
                    <div className='main-project-container'>      
                        <div className='project-container'>
                            <a href={project.weblink} target='_blank' rel="noreferrer">
                            <img src={project.projectImage} className='project-images'/>
                            <h3 className='project-titles'>{project.projectName}</h3>
                            </a>
                            <div className='project-descriptions'>{project.projectDescription}</div>
                            <span className='project-git-link'>
                            <a href={project.gitlink} target='_blank' rel="noreferrer">
                                <i className='fab fa-github github-project'></i>
                            </a>
                            </span>
                        </div>
                    </div> 
                )
            })} 
        </div>
    )
}

export default Work

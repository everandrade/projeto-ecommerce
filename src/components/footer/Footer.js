import React from 'react'
import github from "../../Images/github.svg"
import linkedin from "../../Images/linkedin.svg"


const Footer = () => {
    return (
        <div className='footer'>
            <p className='footer-phrase'> Site criado por: Éverson Andrade</p>
            <div className='footer-icons'>
                <a href='https://github.com/everandrade'
                target="_blank" 
                rel="noreferrer">
                    <img src={github} alt="github icon" 
                    widht="35" height="35" />
                </a>
                <a href='https://www.linkedin.com/in/everson-andrade'
                target="_blank" 
                rel="noreferrer">
                    <img src={linkedin} alt="linkedin icon" 
                    widht="35" height="35" />
                </a>
            </div>
        </div>
    )
}

export default Footer

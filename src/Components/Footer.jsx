import React from 'react'
import './Footer.css'
import twilioimg from '../images/twilioimage.png'
import mattelimg from '../images/Mattel-Symbol.png'
import googleimg from '../images/google.png'
import riotgames from '../images/riotgames.jpg'
import unilever from '../images/unilever.png'
import pelton from '../images/pelton.png'
const Footer = () => {
    return (
        <div>
            <div className="footercontainer">
                <span className='explorebtn'>Explore the Platform</span>
                <span className='enterprise'>Enterprises run on Netlify</span>
            </div>
            <div className="imgcontainer">
                <img src={twilioimg} alt="twilioimg" />
                <img src={mattelimg} alt="Mattelimg" />
                <img src={googleimg} alt="Googleimg" />
                <img src={riotgames} alt="Riotgamesimg" />
                <img src={unilever} alt="unileverimg" />
                <img src={pelton} alt="prltonimg" />
            </div>
        </div>
    )
}

export default Footer

import React, { useRef } from 'react'
import './Mainsection.css'
import videoimage from '../images/videoimage.png'
const Mainsection = () => {
    const videocircleref = useRef(null);
    const videocontainerstyle = {
        backgroundImage: `url(${videoimage})`

    }

    const mouseEntered = () => {
        videocircleref.current.style.transform = "scale(1.1)";
        videocircleref.current.style.transition = "all 0.3s";
    }
    const mouseLeaved = () => {
        videocircleref.current.style.transform = "scale(1)";
        videocircleref.current.style.transition = "all 0.3s";
    }
    return (
        <div>
            <div className="maincontainer">
                <div className="welcomecontainer">
                    <div className='landingpageinfocontainer'>
                        <span>Connect everything</span><div className="circle"></div>
                    </div>
                    <div className='landingpageinfocontainer'>
                        <span>Build anything</span> <div className="circle"></div>
                    </div>
                </div>
                <span className='platform'>Netlify is the essential platform for the delivery of exceptional and</span>
                <span>dynamic web experiences, without limitations.</span>
                <div className="btncontainer">
                    <span className='deploybtn'>Deploy to Netlify</span>
                    <span className='requestbtn'>Request demo</span>
                </div>
                <div style={videocontainerstyle} className="container" onMouseEnter={mouseEntered} onMouseLeave={mouseLeaved}>
                    <div ref={videocircleref} className='videocircle'> <div className="triangle"></div></div>
                </div>
            </div>


        </div>
    )
}

export default Mainsection

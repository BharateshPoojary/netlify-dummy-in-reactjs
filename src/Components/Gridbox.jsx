import React, { useRef } from 'react'
import './Gridbox.css'
const Gridbox = () => {
    const firstGreenArrowRef = useRef(null);
    const secondGreenArrowRef = useRef(null);
    const thirdGreenArrowRef = useRef(null);
    const mouseEntered = () => {
        firstGreenArrowRef.current.style.marginLeft = "10px";
        firstGreenArrowRef.current.style.transition = "all 0.3s";
        secondGreenArrowRef.current.style.marginLeft = "10px";
        secondGreenArrowRef.current.style.transition = "all 0.3s";
        thirdGreenArrowRef.current.style.marginLeft = "10px";
        thirdGreenArrowRef.current.style.transition = "all 0.3s";

    }
    const mouseLeaved = () => {
        firstGreenArrowRef.current.style.marginLeft = "5px";
        firstGreenArrowRef.current.style.transition = "all 0.3s";
        secondGreenArrowRef.current.style.marginLeft = "5px";
        secondGreenArrowRef.current.style.transition = "all 0.3s";
        thirdGreenArrowRef.current.style.marginLeft = "5px";
        thirdGreenArrowRef.current.style.transition = "all 0.3s";
    }
    return (
        <div>
            <div className="maingridcontainer">
                <div className="gridcontainer">
                    <div className="griditem">
                        <span className='frontend'>Frontend Cloud</span>
                        <span className='secondline'>Deploy faster</span>
                        <span className='thirdline'>Netlify Core is a frontend cloud solution for developers to build and deploy future-proof digital solutions with modern, composable tooling that works with all modern frameworks.</span>
                        <div className='corecontainer' onMouseEnter={mouseEntered} onMouseLeave={mouseLeaved}>
                            <span className='core'>Learn more about Core</span><span ref={firstGreenArrowRef} className="greenarrow">&#8594;</span>
                        </div>
                    </div>
                    <div className="griditem">
                        <span className='datalayer'>Data Layer</span>
                        <span className='secondline'>Unify all content</span>
                        <span className='thirdline' >Netlify Connect is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source.</span>
                        <div className='connectcontainer' onMouseEnter={mouseEntered} onMouseLeave={mouseLeaved}>
                            <span className='connect'>Learn more about Connect</span><span ref={secondGreenArrowRef} className="greenarrow">&#8594;</span>
                        </div>
                    </div>
                    <div className="griditem">
                        <span className='visualeditor'>Visual Editor</span>
                        <span className='secondline'>Click, edit, publish</span>
                        <span className='thirdline'>Netlify Create gives digital teams the freedom to autonomously perform content and website updates faster than ever before with an intuitive visual editor.</span>
                        <div className='createcontainer' onMouseEnter={mouseEntered} onMouseLeave={mouseLeaved}>
                            <span className='create'>Learn more about Create</span><span ref={thirdGreenArrowRef} className="greenarrow">&#8594;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gridbox

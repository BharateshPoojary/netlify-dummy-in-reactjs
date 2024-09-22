import React from 'react'
import './Gridbox.css'
const Gridbox = () => {
    return (
        <div>
            <div className="maingridcontainer">
                <div className="gridcontainer">
                    <div className="griditem">
                        <span>Frontend Cloud</span>
                        <span>Deploy faster</span>
                        <span>Netlify Core is a frontend cloud solution for developers to build and deploy future-proof digital solutions with modern, composable tooling that works with all modern frameworks.</span>
                        <span>Learn more about Core</span>
                    </div>
                    <div className="griditem">
                        <span>Data Layer</span>
                        <span>Unify all content</span>
                        <span>Netlify Connect is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source.</span>
                        <span>Learn more about Connect</span>
                    </div>
                    <div className="griditem">
                        <span>Visual Editor</span>
                        <span>Click, edit, publish</span>
                        <span>Netlify Create gives digital teams the freedom to autonomously perform content and website updates faster than ever before with an intuitive visual editor.</span>
                        <span>Learn more about Create</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gridbox

import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

function QuickLinks(props) {
    const projects = ["Simon", "Scale Finder", "Who Goes First?", "Pixel Art", "Music"]
    return (
        <div className="flex-container-column project-links" >
            <p>Quick Links</p>
            <button><Link className="nav-link" to="/WhoGoesFirst">Who Goes First?</Link></button>
            <button><Link className="nav-link" to="/ScaleFinder">Scale Finder</Link></button>
            <button><Link className="nav-link" to="/Scipts">Scripts</Link></button>
            <button><Link className="nav-link" to="/Music">Music</Link></button>

        </div>
    )
}

export default QuickLinks

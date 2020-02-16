import React from 'react'
import { Link } from 'react-router-dom'

import ExternalLinks from './ExternalLinks'
import '../App.css'

function QuickLinks(props) {
    const projects = { "Who Goes First?": "/WhoGoesFirst", "Scale Finder": "/ScaleFinder", "Scipts": "/Scipts", "Music": "/Music" }
    const projectsArr = Object.keys(projects)
    return (
        <div className="flex-container-column project-links" >
            <ExternalLinks></ExternalLinks>
            <p>Links</p>
            {projectsArr.map((link, i) =>
                <button key={i} className="nav-link"><Link to={projects[link]}>{link}</Link></button>
            )}
            <br></br>

        </div>
    )
}

export default QuickLinks

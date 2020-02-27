import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

function QuickLinks(props) {
    const projects = { "Who Goes First?": "/WhoGoesFirst", "Scale Finder": "/ScaleFinder", "Music": "/Music" }
    // const projects = { "Who Goes First?": "/WhoGoesFirst", "Scale Finder": "/ScaleFinder", "Scipts": "/Scipts", "Music": "/Music" }
    const projectsArr = Object.keys(projects)
    return (
        <div className="flex-container-row full-width centered">

            <p className="nav-link">Other Links</p>
            {projectsArr.map((link, i) =>
                <span key={i} className="nav-link"><Link to={projects[link]}>{link}</Link></span>
            )}

        </div>
    )
}

export default QuickLinks

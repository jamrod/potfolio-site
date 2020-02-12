import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

function Nav() {
    const pages = ["Home", "Projects", "Scripts", "Music"]
    return (
        <div className="flex-container-row nav">
            <button><Link className="nav-link" to="/Home">Home</Link></button>
            <button><Link className="nav-link" to="/Projects">Projects</Link></button>
            <button><Link className="nav-link" to="/Scripts">Scripts</Link></button>
            <button><Link className="nav-link" to="/Music">Music</Link></button>
        </div>
    )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

function Nav() {
    const pages = { "Projects": "/Projects", "About": "About" }
    // const pages = { "Projects": "/Projects", "About": "About", "Scripts": "/Scripts", "Music": "/Music" }
    let pagesArr = Object.keys(pages)
    return (
        <div className="flex-container-row nav">
            {pagesArr.map((page, i) => (
                <button className="nav-link" key={i}><Link to={pages[page]}>{page}</Link></button>
            ))}
        </div>
    )
}

export default Nav
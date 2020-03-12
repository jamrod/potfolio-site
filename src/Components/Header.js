import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

function Header() {
    return (
        <header >

            <div className="flex-container-column centered">
                <Link to="/"><h1>James C Rodgers</h1></Link>
                <span>Software Engineer</span>

            </div>

        </header>

    )
}

export default Header
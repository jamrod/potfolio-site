import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

function Header() {
    return (
        <header className="flex-container-column centered">
                <Link to="/" role="link"><h1>James C Rodgers</h1></Link>
                <h2>Software Engineer</h2>
        </header>

    )
}

export default Header
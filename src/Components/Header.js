import React from 'react'
import Nav from '../Components/Nav'

import '../App.css'

function Header() {
    return (
        <header className="centered">
            <div className="flex-container-column centered">
                <h1>James C Rodgers</h1>
                <span className="mini">jamcrodgers@gmail.com</span>
                <Nav></Nav>
            </div>

        </header>

    )
}

export default Header
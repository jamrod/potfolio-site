import React from 'react'
import Nav from '../Components/Nav'

import '../App.css'

function Header() {
    return (
        <header className="centered">
            <div className="flex-container-column centered">
                <h1>James C Rodgers</h1>
                <div className="flex-container-row"><Nav></Nav></div>
            </div>
        </header>

    )
}

export default Header
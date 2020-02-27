import React from 'react'
import Nav from '../Components/Nav'
import { Link } from 'react-router-dom'

import '../App.css'

function Header() {
    return (
        <header >

            <div className="flex-container-column centered">
                <Link to="/"><h1>James C Rodgers</h1></Link>
                <span className="mini">jamcrodgers@gmail.com</span>

                <Nav></Nav>
            </div>

        </header>

    )
}

export default Header
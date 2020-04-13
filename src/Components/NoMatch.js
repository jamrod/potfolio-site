import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
import { checkPath } from '../helpers'

function NoMatch(props) {
    return (

        <header >
            <div className="flex-container-column centered">
                {checkPath(props)}
                <div className='short'>
                    <p>Hmm, There doesn't seem to be anything here... Go back <Link to="/">Home?</Link></p>
                </div>
            </div>

        </header>

    )
}

export default NoMatch
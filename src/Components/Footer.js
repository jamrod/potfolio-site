import React from 'react'

import '../App.css'

function Footer() {

    return (
        <footer className="flex-container-row">
            <div className="foots flex-container-row">
                <span>&hearts; &copy; 2021</span>
                <img alt="JR" className="icons" src="/JRsymbol.png" />
                <span>JCR &hearts;</span>
            </div>
            <div className="flex-container-row foots">
                <a href="mailto:jamcrodgers@gmail.com?subject=Web Contact"><img src="./icons/mail.svg" alt="email" className="icons" /></a>
                <a href="http://github.com/jamrod" ><img src="./Octocat.png" alt="github" className="icons" /></a>
                <a href="http://www.linkedin.com/in/jamescrodgers"><img src="./LI-In-Bug.png" alt="linked in" className="icons" /></a>
            </div>
        </footer>
    )
}
export default Footer
import React from 'react'

import '../App.css'

function Footer() {

    return (
        <div className="flex-container-row footer">
            <div className="foot flex-container-row">
                <span>&hearts; &copy; 2020</span>
                <img alt="JR" class="icon" src="/assets/img/JRsymbol.png" />
                <span>JCR &hearts;</span>
            </div>
            <div className="flex-container-row">
                <a href="mailto:jamcrodgers@gmail.com?subject=Web Contact"><img src="./icons/mail.svg" alt="email" className="icons" /></a>
                <a href="http://github.com/jamrod" ><img src="./Octocat.png" alt="github" className="icons" /></a>
                <a href="http://www.linkedin.com/in/jamescrodgers"><img src="./LI-In-Bug.png" alt="linked in" className="icons" /></a>
            </div>
        </div>
    )
}
export default Footer
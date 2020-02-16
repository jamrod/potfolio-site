import React from 'react'

import '../App.css'

function ExternalLinks(props) {
    const links = {
        "Simon": "https://s3.amazonaws.com/faultystars.org/index.html", "Mixer-Assister": "https://practical-babbage-bbcc33.netlify.com/", "GEMROLLERS": "https://gemstonefacialrollers.com", "Little Herbal Apothecary": "https://thelittleherbalapothecary.com"
    }
    let linksArr = Object.keys(links)
    return (
        <div className="flex-container-column" >
            <p>Projects and Websites</p>
            {linksArr.map((link, i) => (
                <button key={i} className="nav-link"><a href={links[link]}>{link}</a></button>
            ))}


        </div >
    )
}

export default ExternalLinks
import React from 'react'

import '../App.css'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div className="flex-container-column centered">
            <h3>Projects</h3>
            <p>Checkout these projects and websites I have worked on.</p>
            <div className="flex-container-row space">
                <div>

                    <div className="flex-container-column centered">
                        <a href="https://s3.amazonaws.com/faultystars.org/index.html">
                            <p className="project-page-links">
                                Simon Memory Game
                            </p>
                            <img src="/Simon.png" className="link-pic" />
                            <div className="flex-container-row centered">
                                <img src="/icons/HTML5.svg" className="icons" />
                                <img src="/icons/CSS3.svg" className="icons" />
                                <img src="/icons/javascript.svg" className="icons" />
                            </div>
                        </a>
                    </div>

                </div>

                <div flex-container-column centered>
                    <a href="https://practical-babbage-bbcc33.netlify.com/">
                        <p className="project-page-links">
                            Mixer-Assister cocktail app
                        </p>
                        <img src="/mixer-assister.png" className="link-pic" />
                        <div className="flex-container-row centered">
                            <img src="/icons/HTML5.svg" className="icons" />
                            <img src="/icons/CSS3.svg" className="icons" />
                            <img src="/icons/javascript.svg" className="icons" />
                            <img src="/icons/react.svg" className="icons" />
                        </div>
                    </a>
                </div>

            </div>
            <p>Local pages</p>
            <div className="flex-container-row space">
                <div className="flex-container-column centered">
                    <Link to="/WhoGoesFirst">
                        <p>Who Goes First?</p>
                        <div className="flex-container-row centered">
                            <img src="/icons/HTML5.svg" className="icons" />
                            <img src="/icons/CSS3.svg" className="icons" />
                            <img src="/icons/javascript.svg" className="icons" />
                            <img src="/icons/react.svg" className="icons" />
                        </div>
                    </Link>
                </div>

                <div className="flex-container-column centered">
                    <Link to="/ScaleFinder">
                        <p>Scale Finder</p>
                        <div className="flex-container-row centered">
                            <img src="/icons/HTML5.svg" className="icons" />
                            <img src="/icons/CSS3.svg" className="icons" />
                            <img src="/icons/javascript.svg" className="icons" />
                            <img src="/icons/react.svg" className="icons" />
                        </div>
                    </Link>
                </div>
            </div>
            <p>Shopify Sites</p>
            <div className="flex-container-row space">
                <div>
                    <div className="flex-container-column centered">
                        <a href="https://thelittleherbalapothecary.com">
                            <p className="project-page-links">
                                Little Herbal Apothecary
                            </p>
                            <div className="flex-container-row centered">
                                <img src="/icons/shopify.svg" className="icons" />
                            </div>
                        </a>
                    </div>
                </div>

                <div flex-container-column centered>
                    <a href="https://gemstonefacialrollers.com">
                        <p className="project-page-links">
                            GEMROLLERS
                        </p>
                        <div className="flex-container-row centered">
                            <img src="/icons/shopify.svg" className="icons" />
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Projects


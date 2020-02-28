import React from 'react'
import { Redirect } from 'react-router-dom'
import '../App.css'

function Projects(props) {
    const path = props.history.location.pathname
    console.log(path)

    const checkPath = () => {
        if (path.includes('/#!/About')) {
            return <Redirect push to='/About'></Redirect>
        }
    }


    return (
        <div className="projects-container">
            {checkPath()}
            <div className="flex-container-column projects project-space">

                <div className="flex-container-row space">
                    <div>

                        <div className="flex-container-column centered">
                            <a href="https://s3.amazonaws.com/faultystars.org/index.html">
                                <p className="project-page-links">
                                    Simon Memory Game
                                </p>
                                <img src="/Simon.png" className="link-pic" alt="simon screenshot" />
                                <div className="flex-container-row centered">
                                    <img src="/icons/HTML5.svg" className="icons" alt="html badge" />
                                    <img src="/icons/CSS3.svg" className="icons" alt="css badge" />
                                    <img src="/icons/javascript.svg" className="icons" alt="javascript badge" />
                                </div>
                            </a>
                        </div>

                    </div>

                    <div className="flex-container-column centered">
                        <a href="https://practical-babbage-bbcc33.netlify.com/" >
                            <p className="project-page-links">
                                Mixer-Assister cocktail app
                            </p>
                            <img src="/mixer-assister.png" className="link-pic" alt="mixer-assister screenshot" />
                            <div className="flex-container-row centered">
                                <img src="/icons/HTML5.svg" className="icons" alt="html badge" />
                                <img src="/icons/CSS3.svg" className="icons" alt="css badge" />
                                <img src="/icons/javascript.svg" className="icons" alt="javascript badge" />
                                <img src="/icons/react.svg" className="icons" alt="react badge" />
                            </div>
                        </a>
                    </div>

                    <div className="flex-container-column centered">
                        <a href="http://www.onlineherbal.org" >
                            <p className="project-page-links">
                                Online Herbal Recipe App
                            </p>
                            <img src="/OnlineHerbal.png" className="link-pic" alt="mixer-assister screenshot" />
                            <div className="flex-container-row centered">
                                <img src="/icons/HTML5.svg" className="icons" alt="html badge" />
                                <img src="/icons/CSS3.svg" className="icons" alt="css badge" />
                                <img src="/icons/python.svg" className="icons" alt="python badge" />
                                <img src="/icons/django.svg" className="icons" alt="django badge" />
                            </div>
                        </a>
                    </div>

                </div>

                <p></p>
                <div className="flex-container-row space">
                    <div>
                        <div className="flex-container-column centered">
                            <a href="https://thelittleherbalapothecary.com">
                                <p className="project-page-links">
                                    Little Herbal Apothecary
                                </p>
                                <img src="/LittleHerbalApothecary.png" className="link-pic" alt="apothecary screenshot" />
                                <div className="flex-container-row centered">
                                    <img src="/icons/shopify.svg" className="icons" alt="shopify badge" />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex-container-column centered">
                        <a href="https://gemstonefacialrollers.com">
                            <p className="project-page-links">
                                GEMROLLERS
                            </p>
                            <img src="/Gemrollers.png" className="link-pic" alt="gemrollers screenshot" />
                            <div className="flex-container-row centered">
                                <img src="/icons/shopify.svg" className="icons" alt="shopify badge" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects


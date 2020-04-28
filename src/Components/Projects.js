import React from 'react'
import '../App.css'
import { checkPath } from '../helpers'

function Projects(props) {

    const showDescription = (e, id) => {
        id = '#' + id
        const elem = document.querySelector(id)
        elem.classList.add("show")
    }
    const hideDescription = (e, id) => {
        id = '#' + id
        const elem = document.querySelector(id)
        elem.classList.remove("show")
    }

    return (
        <div className="projects-container centered">
            {checkPath(props)}
            <div className="flex-container-column projects space">

                <div className="flex-container-row space">
                    <div>

                        <div className="flex-container-column centered">
                            <a href="http://www.onlineherbal.org" className="proj-link" target="blank" onMouseOver={function (e) { showDescription(e, "online-herbal") }} onMouseOut={function (e) { hideDescription(e, "online-herbal") }}>
                                <p className="project-page-links">
                                    Online Herbal Recipe App
                            </p>
                                <div className="description" id="online-herbal">
                                    <p>Made with Python Django and hosted in an EC2 instance on AWS, this site has a PostgreSQL database which is searchable through a REST API.</p>
                                </div>
                                <img src="/OnlineHerbal.png" className="link-pic" alt="mixer-assister screenshot" />
                                <div className="flex-container-row centered">
                                    <img src="/icons/HTML5.svg" className="icons" alt="html badge" />
                                    <img src="/icons/CSS3.svg" className="icons" alt="css badge" />
                                    <img src="/icons/python.svg" className="icons" alt="python badge" />
                                    <img src="/icons/django.svg" className="icons" alt="django badge" />
                                    <img src="/icons/aws.svg" className="icons" alt="aws badge" />
                                </div>

                            </a>
                            <a href="https://github.com/jamrod/herbal-remedy-finder" target="blank">Github Repo</a>

                        </div>

                    </div>

                    <div className="flex-container-column centered">
                        <a href="https://practical-babbage-bbcc33.netlify.com/" className="proj-link" target="blank" onMouseOver={function (e) { showDescription(e, "mixer-assister") }} onMouseOut={function (e) { hideDescription(e, "mixer-assister") }}>
                            <p className="project-page-links">
                                Mixer-Assister Cocktail app
                            </p>
                            <div className="description" id="mixer-assister">
                                <p>Made with React.js and hosted on Netlify, this app is a front-end consuming the REST API from thecocktail.db.</p>
                            </div>
                            <img src="/mixer-assister.png" className="link-pic" alt="mixer-assister screenshot" />
                            <div className="flex-container-row centered">
                                <img src="/icons/HTML5.svg" className="icons" alt="html badge" />
                                <img src="/icons/CSS3.svg" className="icons" alt="css badge" />
                                <img src="/icons/javascript.svg" className="icons" alt="javascript badge" />
                                <img src="/icons/react.svg" className="icons" alt="react badge" />
                            </div>
                        </a>
                        <a href="https://github.com/jamrod/mixer-assister" target="blank">Github Repo</a>
                    </div>

                    <div className="flex-container-column centered">
                        <a href="https://s3.amazonaws.com/faultystars.org/index.html" className="proj-link" target="blank" onMouseOver={function (e) { showDescription(e, "simon") }} onMouseOut={function (e) { hideDescription(e, "simon") }}>
                            <p className="project-page-links">
                                Simon Memory Game
                            </p>
                            <div className="description" id="simon">
                                <p>
                                    Vanilla Javascript game hosted in an S3 bucket.
                                </p>
                            </div>
                            <img src="/SimonScreenshot.png" className="link-pic" alt="simon screenshot" />
                            <div className="flex-container-row centered">
                                <img src="/icons/HTML5.svg" className="icons" alt="html badge" />
                                <img src="/icons/CSS3.svg" className="icons" alt="css badge" />
                                <img src="/icons/javascript.svg" className="icons" alt="javascript badge" />
                                <img src="/icons/aws.svg" className="icons" alt="aws badge" />
                            </div>
                        </a>
                        <a href="https://github.com/jamrod/simonGame" target="blank">Github Repo</a>
                    </div>


                </div>

                <div className="flex-container-row space">
                    <div>
                        <div className="flex-container-column centered">
                            <a href="https://thelittleherbalapothecary.com" className="proj-link" target="blank" onMouseOver={function (e) { showDescription(e, "lha") }} onMouseOut={function (e) { hideDescription(e, "lha") }}>
                                <p className="project-page-links">
                                    Little Herbal Apothecary
                                </p>
                                <div className="description" id="lha">
                                    <p>
                                        Shopify site. Blog is a wordpress site hosted in AWS Lightsail.
                                    </p>
                                </div>
                                <img src="/LittleHerbalApothecary.png" className="link-pic" alt="apothecary screenshot" />
                                <div className="flex-container-row centered">
                                    <img src="/icons/shopify.svg" className="icons" alt="shopify badge" />
                                    <img src="/icons/aws.svg" className="icons" alt="aws badge" />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex-container-column centered">
                        <a href="https://gemstonefacialrollers.com" className="proj-link" target="blank" onMouseOver={function (e) { showDescription(e, "gemrollers") }} onMouseOut={function (e) { hideDescription(e, "gemrollers") }}>
                            <p className="project-page-links">
                                GEMROLLERS
                            </p>
                            <div className="description" id="gemrollers">
                                <p className="text">
                                    Pure Shopify site.
                                </p>
                            </div>
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


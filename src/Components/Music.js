import React from 'react'

import '../App.css'
import { checkPath } from '../helpers'

function Music(props) {

    return (
        <div className="flex-container-column centered">
            {checkPath(props)}
            < div className="short flex-container-column" >
                <h2>Music</h2>
                <p>I am a musician and I have played in many bands over the years. This page has albums that I recorded with two of those bands. Feel free to download, listen and enjoy.</p> <p>Click on the album title to download.</p>
                <div className="flex-container-column centered">
                    <div className="music-table"><div className="music-row"><span className="underline">Band</span><span className="underline">Album</span></div>

                        <div className="music-row"><div>Auxiliary</div><div><a href="/Heat E.P.zip">Heat E.P.</a> </div></div>
                        <div className="music-row">
                            <div>Little Dead Things</div><div><a href="/You Can Always Never go Back.zip">
                                You can always never go back</a></div>
                        </div>
                    </div>
                </div>

            </div >
        </div>

    )
}

export default Music



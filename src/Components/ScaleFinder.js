import React, { Component } from 'react'

import '../App.css'
import { checkPath } from '../helpers'

class ScaleFinder extends Component {
    constructor(props) {
        super(props)
        checkPath(props)
        this.state = {
            scale: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
            doubleScale: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
        }
    }

    componentDidMount() {
        this.input.focus()
    }


    getScale = (input) => {
        let scale = this.state.scale
        let doubleScale = this.state.doubleScale
        let start = doubleScale.indexOf(scale[input])
        let newScale = doubleScale.slice(start, start + 12)
        console.log("start: ", start, "scale: ", newScale)
        this.setState({
            scale: newScale
        })
    }

    render() {
        let scale = this.state.scale
        return (
            <div className="flex-container-column centered">
                <div className="article" >
                    <h3>Scale Finder</h3>
                    <p className="content">
                        This is a simple chart to find music scales from a root note. Select a note in the field below and the chart below will populate with the notes that make up the Major chord, Minor chord and Major, Minor, Blues and Pentatonic scales. The results will always render with '#' for sharp instead of 'b' for flat.
                    </p>
                    <p>
                        <label>Root Note</label>
                        <select className="note-input" ref={(input) => { this.input = input }} value={scale[0]} onChange={(e) => { this.getScale(e.target.value) }} >
                            {scale.map((note,i) =>
                                (<option value={i}>{note}</option>)
                            )}
                        </select>
                    </p>
                    
                    <div className="scale-results flex-container-row">
                        <div className="scales">
                            <span className="scale-header">Major Triad</span>
                            <div>1st</div><div className="root">{scale[0]} </div>
                            <div>3rd</div><div className="3rd">{scale[4]} </div>
                            <div>5th</div><div className="5th">{scale[6]} </div>
                        </div>
                        <br></br>
                        <div className="scales">
                            <span className="scale-header">Minor Triad</span>
                            <div>1st</div><div className="root">{scale[0]} </div>
                            <div>3 Flat</div><div className="3Flat">{scale[3]} </div>
                            <div>5th</div> <div className="5th">{scale[4]} </div>
                        </div >
                        <br></br>
                    </div>
                    <div className="scale-results flex-container-row">
                        <div className="scales">
                            <span className="scale-header">Major Scale</span>
                            <div>1st</div><div class="root">{scale[0]} </div>
                            <div>2nd</div><div class="2nd">{scale[2]} </div>
                            <div>3rd</div><div class="3rd">{scale[4]} </div>
                            <div>4th</div><div class="4th">{scale[5]} </div>
                            <div>5th</div><div class="5th">{scale[7]} </div>
                            <div>6th</div><div class="6th">{scale[9]} </div>
                            <div>7th</div><div class="7th">{scale[11]} </div>
                            <div>8th</div><div class="root">{scale[0]} </div>
                        </div>
                        <div className="scales">
                            <span className="scale-header">Minor Scale</span>
                            <div>1st</div><div class="root">{scale[0]} </div>
                            <div>2nd</div><div class="2nd">{scale[2]}</div>
                            <div>3 Flat</div><div class="3Flat">{scale[3]} </div>
                            <div>4th</div><div class="4th">{scale[5]} </div>
                            <div>5th</div><div class="5th">{scale[7]} </div>
                            <div>6 Flat</div><div id="sixFlat">{scale[8]} </div>
                            <div>7 Flat</div><div class="7Flat">{scale[10]} </div>
                            <div>8th</div><div class="root">{scale[0]} </div>
                        </div>

                        <div className="scales">
                            <span className="scale-header">Blues Scale</span>
                            <div>1st</div><div class="root">{scale[0]}</div>
                            <div>3 Flat</div><div class="3Flat">{scale[3]} </div>
                            <div>4th</div><div class="4th">{scale[5]} </div>
                            <div>5 Flat</div><div class="5Flat">{scale[6]} </div>
                            <div>5th</div><div class="5th">{scale[7]} </div>
                            <div>7 Flat</div><div class="7Flat">{scale[10]} </div>
                            <div>8th</div><div class="root">{scale[0]} </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default ScaleFinder
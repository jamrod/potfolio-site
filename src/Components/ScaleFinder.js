import React, { Component } from 'react'

import '../App.css'
import { checkPath } from '../helpers'

class ScaleFinder extends Component {
    constructor(props) {
        super(props)
        checkPath(props)
        this.state = {
            flat : 0,
            scale: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
            doubleScale: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
            flatScale: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
            flatDoubleScale: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
        }
    }

    componentDidMount() {
        this.input.focus()
    }


    getScale = input => {
        let flat = this.state.flat
        let scale = this.state.scale
        let doubleScale = this.state.doubleScale
        let flatScale = this.state.flatScale
        let flatDoubleScale = this.state.flatDoubleScale
        let start
        if(flat){
            start = flatDoubleScale.indexOf(flatScale[input])
        } else {
            start = doubleScale.indexOf(scale[input])
        }
        let newScale = doubleScale.slice(start, start + 12)
        let newFlatScale = flatDoubleScale.slice(start, start + 12)
        this.setState({
            scale: newScale,
            flatScale: newFlatScale
        })
    }

    toggleSharpFlat = () => {
        this.setState((prev) => ({
            flat: !prev.flat
        }))
    }

    render() {
        let scale
        this.state.flat ? scale = this.state.flatScale : scale = this.state.scale
        let sharpFlat = [["2 Sharp", "3 Flat"], ["4 Sharp", "5 Flat"], ["5 Sharp", "6 Flat"], ["6 Sharp", "7 Flat"]]
        let key = this.state.flat + 0
        return (
            <div className="flex-container-column centered">
                <div className="article" >
                    <h3>Scale Finder</h3>
                    <p className="content">
                        This is a simple chart to find music scales from a root note. Select a note and the chart below will populate with the notes that make up the Major chord, Minor chord and Major, Minor, Blues and Pentatonic scales.
                    </p>
                    <p className="flex-container-row centered">
                        <label>Root Note</label>
                        <select id="note-input" ref={(input) => { this.input = input }} value={scale[0]} onChange={(e) => { this.getScale(e.target.value) }} >
                            {scale.map((note,i) =>
                                (<option value={i} key={i}>{note}</option>)
                            )}
                        </select>
                        <input type="checkbox" onClick={this.toggleSharpFlat} id="checkbox"/><label>Use Flat?</label>
                    </p>
                    
                    <div className="scale-results flex-container-row">
                        <div className="scales">
                            <span className="scale-header">Major Triad</span>
                            <div>1st</div><div>{scale[0]} </div>
                            <div>3rd</div><div>{scale[4]} </div>
                            <div>5th</div><div>{scale[6]} </div>
                        </div>
                        <br></br>
                        <div className="scales">
                            <span className="scale-header">Minor Triad</span>
                            <div>1st</div><div>{scale[0]} </div>
                            <div>{sharpFlat[0][key]}</div><div>{scale[3]} </div>
                            <div>5th</div> <div>{scale[4]} </div>
                        </div >
                        <br></br>
                    </div>
                    <div className="scale-results flex-container-row">
                        <div className="scales">
                            <span className="scale-header">Major Scale</span>
                            <div>1st</div><div>{scale[0]} </div>
                            <div>2nd</div><div>{scale[2]} </div>
                            <div>3rd</div><div>{scale[4]} </div>
                            <div>4th</div><div>{scale[5]} </div>
                            <div>5th</div><div>{scale[7]} </div>
                            <div>6th</div><div>{scale[9]} </div>
                            <div>7th</div><div>{scale[11]} </div>
                            <div>1st</div><div>{scale[0]} </div>
                        </div>
                        <div className="scales">
                            <span className="scale-header">Minor Scale</span>
                            <div>1st</div><div>{scale[0]} </div>
                            <div>2nd</div><div>{scale[2]}</div>
                            <div>{sharpFlat[0][key]}</div><div>{scale[3]} </div>
                            <div>4th</div><div>{scale[5]} </div>
                            <div>5th</div><div>{scale[7]} </div>
                            <div>{sharpFlat[2][key]}</div><div>{scale[8]} </div>
                            <div>{sharpFlat[3][key]}</div><div>{scale[10]} </div>
                            <div>1st</div><div>{scale[0]} </div>
                        </div>

                        <div className="scales">
                            <span className="scale-header">Blues Scale</span>
                            <div>1st</div><div>{scale[0]}</div>
                            <div>{sharpFlat[0][key]}</div><div>{scale[3]} </div>
                            <div>4th</div><div>{scale[5]} </div>
                            <div>{sharpFlat[1][key]}</div><div>{scale[6]} </div>
                            <div>5th</div><div>{scale[7]} </div>
                            <div>{sharpFlat[3][key]}</div><div>{scale[10]} </div>
                            <div>1st</div><div>{scale[0]} </div>
                        </div>

                        <div className="scales">
                            <span className="scale-header">Pentatonic Scale</span>
                            <div>1st</div><div>{scale[0]}</div>
                            <div>2nd</div><div>{scale[2]} </div>
                            <div>3rd</div><div>{scale[4]} </div>
                            <div>5th</div><div>{scale[7]} </div>
                            <div>6th</div><div>{scale[9]} </div>
                            <div>1st</div><div>{scale[0]} </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default ScaleFinder
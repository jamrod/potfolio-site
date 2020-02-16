import React, { Component } from 'react'

import '../../App.css'

class ScaleFinder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            scale: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
            root: -12
        }
    }

    componentDidMount() {
        this.input.focus()
    }

    getInput = str => {
        if (str.length > 2) {
            str = str.slice(0, 2)
        }
        this.setState(prevState => ({ input: str }))
    }

    keyPressed = (e) => {
        console.log(e.key)
        if (e.key == 'Enter') {
            this.getScale()
        }
    }

    getScale = () => {
        let input = this.state.input.toUpperCase()
        if (input[1] === 'B') {
            let ind = this.state.scale.indexOf(input[0])
            ind === 0 ? input = 'G#' : input = this.state.scale[ind - 1]
        }
        let start = this.state.scale.indexOf(input)
        if (start === -1) {
            start = -12
        }
        this.setState({
            root: start,
            input: ''
        })
    }

    render() {
        let root = this.state.root
        let scale = this.state.scale
        return (
            <div className="scale-finder" onKeyDown={(e) => this.keyPressed(e)}>
                <h3>Scale Finder</h3>
                <p className="content">This is a simple chart to find music scales from a root note. Enter a note letter in the 'Root Note' field, then click submit. The fields below will populate with the notes that make up the Major chord, Minor chord and Major, Minor, Blues and Pentatonic scales. Use '#' for sharp and 'b' for flat. The results will always render with '#' for sharp instead of 'b' for flat.
        </p>

                <input ref={(input) => { this.input = input }} type="text" id="name" value={this.state.input} onChange={(e) => { this.getInput(e.target.value) }} /><span id="label"> Enter Note </span>
                <br></br>
                <input type="button" id="complete" value="Get Scale" onClick={(e) => { this.getScale() }}></input>
                <br></br>
                <div className="scale-results flex-container-row">
                    <div id="majorTriad" className="scales">
                        <span>Major Triad</span><span>Note</span>
                        <div>1st</div><div className="root">{scale[root]} </div>
                        <div>3rd</div><div className="3rd">{scale[root + 4]} </div>
                        <div>5th</div><div className="5th">{scale[root + 6]} </div>
                    </div>
                    <br></br>
                    <div id="minorTriad" className="scales">
                        <span>Minor Triad</span> <span>Note</span>
                        <div>1st</div><div className="root">{scale[root]} </div>
                        <div>3 Flat</div><div className="3Flat">{scale[root + 3]} </div>
                        <div>5th</div> <div className="5th">{scale[root + 4]} </div>
                    </div >
                    <br></br>
                </div>
                <div className="scale-results flex-container-row">
                    <div className="scales">
                        <span>Major Scale</span><span>Note</span>
                        <div>1st</div><div class="root">{scale[root]} </div>
                        <div>2nd</div><div class="2nd">{scale[root + 2]} </div>
                        <div>3rd</div><div class="3rd">{scale[root + 4]} </div>
                        <div>4th</div><div class="4th">{scale[root + 5]} </div>
                        <div>5th</div><div class="5th">{scale[root + 7]} </div>
                        <div>6th</div><div class="6th">{scale[root + 9]} </div>
                        <div>7th</div><div class="7th">{scale[root + 11]} </div>
                        <div>8th</div><div class="root">{scale[root]} </div>
                    </div>
                    <div id="minorScale" className="scales">
                        <span>Minor Scale</span><span>Note</span>
                        <div>1st</div><div class="root">{scale[root]} </div>
                        <div>2nd</div><div class="2nd">{scale[root + 2]}</div>
                        <div>3 Flat</div><div class="3Flat">{scale[root + 3]} </div>
                        <div>4th</div><div class="4th">{scale[root + 5]} </div>
                        <div>5th</div><div class="5th">{scale[root + 7]} </div>
                        <div>6 Flat</div><div id="sixFlat">{scale[root + 8]} </div>
                        <div>7 Flat</div><div class="7Flat">{scale[root + 10]} </div>
                        <div>8th</div><div class="root">{scale[root]} </div>
                    </div>

                    <div id="bluesScale" className="scales">
                        <span>Blues Scale</span><span>Note</span>
                        <div>1st</div><div class="root">{scale[root]}</div>
                        <div>3 Flat</div><div class="3Flat">{scale[root + 3]} </div>
                        <div>4th</div><div class="4th">{scale[root + 5]} </div>
                        <div>5 Flat</div><div class="5Flat">{scale[root + 6]} </div>
                        <div>5th</div><div class="5th">{scale[root + 7]} </div>
                        <div>7 Flat</div><div class="7Flat">{scale[root + 10]} </div>
                        <div>8th</div><div class="root">{scale[root]} </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default ScaleFinder
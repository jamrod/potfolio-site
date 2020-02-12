import React, { Component } from 'react'

import '../../App.css'

class ScaleFinder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            scale: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
            root: -9
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

                <input ref={(input) => { this.input = input }} type="text" id="name" value={this.state.input} onChange={(e) => { this.getInput(e.target.value) }} /><span id="label"> Enter Note </span>
                <br></br>
                <input type="button" id="complete" value="Get Scale" onClick={(e) => { this.getScale() }}></input>
                <br></br>
                <div className="scale-results flex-container-column">
                    <div id="majorTriad" className="scales flex-container-column">
                        <div className="table-row"><span>Major Triad</span><span>   </span><span>Note</span></div>
                        <div className="table-row "><div>1st</div><div className="root">{scale[root]} </div></div>
                        <div className="table-row "><div>3rd</div><div className="3rd">{scale[root + 4]} </div></div>
                        <div className="table-row "><div>5th</div><div className="5th">{scale[root + 6]} </div></div>
                    </div>
                    <br></br>
                    <div id="minorTriad" className="scales flex-container-column">
                        <div className="table-row "> <span>Minor Triad</span> <span>Note</span></div>
                        <div className="table-row "><div>1st</div><div className="root">{scale[root]} </div></div>
                        <div className="table-row "><div>3 Flat</div><div className="3Flat">{scale[root + 3]} </div></div>
                        <div className="table-row " > <div>5th</div> <div className="5th">{scale[root + 4]} </div></div >
                    </div >
                </div>
            </div >
        )
    }
}

export default ScaleFinder
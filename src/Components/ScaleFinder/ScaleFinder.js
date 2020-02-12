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
            <div id="scaleFinder" onKeyDown={(e) => this.keyPressed(e)}>

                <input ref={(input) => { this.input = input }} type="text" id="name" value={this.state.input} onChange={(e) => { this.getInput(e.target.value) }} /><span id="label"> Enter Note </span>
                <br></br>
                <input type="button" id="complete" value="Get Scale" onClick={(e) => { this.getScale() }}></input>

                <table id="majorTriad" class="scales">
                    <tr><th>Major Triad</th><th>Note</th></tr>
                    <tr class="scaleRow"><td>1st</td><td class="root">{scale[root]} </td></tr>
                    <tr class="scaleRow"><td>3rd</td><td class="3rd">{scale[root + 4]} </td></tr>
                    <tr class="scaleRow"><td>5th</td><td class="5th">{scale[root + 6]} </td></tr>
                </table>

                <table id="minorTriad" class="scales">
                    <tr> <th>Minor Triad</th> <th>Note</th></tr>
                    <tr class="scaleRow"><td>1st</td><td class="root">{scale[root]} </td></tr>
                    <tr class="scaleRow"><td>3 Flat</td><td class="3Flat">{scale[root + 3]} </td></tr>
                    <tr class="scaleRow"><td>5th</td><td class="5th">{scale[root + 4]} </td></tr>
                </table>
            </div>
        )
    }
}

export default ScaleFinder
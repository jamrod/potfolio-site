import React, { Component } from 'react';

class WhoGoesFirst extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            names: [],
            complete: false,
        }
    }

    componentDidMount() {
        this.input.focus()
    }

    getInput = str => {
        this.setState(prevState => ({ input: str }))
    }

    add = () => {
        let namesState = this.state.names
        namesState.push(this.state.input)
        this.setState(prevState => ({
            names: namesState,
            input: ''
        }))
    }

    keyPressed = (e) => {
        // console.log(e)
        if (e.key == 'Enter') {
            this.add()
        }
    }

    shuffle = arr => {
        let len = arr.length
        let outArr = []
        for (let i = len; i > 0; i--) {
            let num = Math.floor(Math.random() * len);
            outArr.push(arr[num]);
            arr.splice(num, 1);
            len = arr.length;
        }
        return outArr
    }

    runShuffle = () => {
        if (this.state.input.length > 0) {
            this.add()
        }
        let answer = this.shuffle(this.state.names)
        this.setState(prevState => ({
            names: answer,
            complete: true,
            input: ''
        }))
    }

    reset = () => {
        this.setState(prevState => ({
            names: [],
            input: '',
            complete: false
        }))
    }

    setList = (arr) => {
        let list = arr
        this.setState(prevState => ({
            names: list,
        }))
    }

    render() {
        return (
            <div onKeyDown={(e) => this.keyPressed(e)}>
                <h3>Who Goes First?</h3>
                <p className="content">This is just a little program to determine play order. Can be used with board games or to determine initiative in D&D. Enter all the players names then click 'GetPlayer One!' and it will re-order the list and declare who goes first.</p>
                <p>

                    <input ref={(input) => { this.input = input }} type="text" id="name" value={this.state.input} onChange={(e) => { this.getInput(e.target.value) }} /><span id="label"> Enter Name </span>
                    <input type="button" id="add" value="Add Name" onClick={(e) => { this.add() }}></input>
                    <br></br>
                    <input type="button" id="complete" value="Get Player One!" onClick={(e) => { this.runShuffle() }}></input>
                    <input type="button" id="reset" value="Reset" onClick={(e) => { this.reset() }}></input>

                </p>
                <ol>
                    {this.state.names.map((name, i) => (
                        <li key={i}>{name} {this.state.complete && i === 0 ? <span>Goes First!</span> : null} </li>

                    ))}
                </ol>

            </div>
        )
    }
}

export default WhoGoesFirst;
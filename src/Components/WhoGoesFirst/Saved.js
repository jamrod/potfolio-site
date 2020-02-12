import React, { Component } from 'react';

class Saved extends Component {
    constructor(props) {
        super(props)
    }

}

save = (arr) => {
    if (arr) {
        let saves
        if (this.state.saved) {
            saves = this.state.saved
            saves.push(arr)
        } else {
            saves = arr
        }
        this.setState(prevState => ({ saved: saves }))
        saves = JSON.stringify(saves)
        localStorage.setItem('savedNames', saves)
    }
}

getSaved = () => {
    let saved = JSON.parse(localStorage.getItem('savedNames'))
    this.setState(prevState => ({
        saved: saved,
        haveSaved: true,
    }))
}

renderSaves = () => {
    console.log(this.state.saved)
    let saves = this.state.saved
    if (this.state.haveSaved) {
        let out = saves.map((item, i) => (
            <div key={i} className="flex-container-row">
                <span>{item.toString()}</span>
                <input type="button" value="Use This List?" onClick={(e) => { this.getList(item) }}></input>
            </div>
        ))

        return (out)
    }

}
<input type="button" value="Save List" onClick={() => { this.save(this.state.names) }}></input>
    <br></br>
    <input type="button" value="Get Saved" onClick={() => { this.getSaved() }}></input>
    <div className="flex-container-column centered">{this.renderSaves()}</div>
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: { "Projects": "/Projects", "About": "/About" },
            active: this.props.active
        }
    }

    componentDidUpdate() {
        if (this.props.active !== this.state.active) {
            this.setState({ active: this.props.active })
        }
    }

    render() {
        let pagesArr = Object.keys(this.state.pages)
        return (
            <nav className="flex-container-row">
                {pagesArr.map((page) => {
                    if (this.state.active === page) {
                        return <span className="nav-link active" role="link" key={page}><Link to={this.state.pages[page]}>{page}</Link></span>
                    } else {
                        return <span className="nav-link" role="link" key={page}><Link to={this.state.pages[page]}>{page}</Link></span>
                    }
                })}
            </nav>
        )
    }

}

export default Nav
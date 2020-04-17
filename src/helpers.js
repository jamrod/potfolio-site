import React from 'react'
import { Redirect } from 'react-router-dom'

export function checkPath(props) {
    const path = props.state.history.location
    if (path.hash) {
        let active = path.hash.replace(/\/|!|#/g, '')
        active = '/' + active
        return <Redirect push to={active}></Redirect>
    }
    if (path.pathname) {
        let active = path.pathname.replace(/\//g, '')
        props.setActive(active)
    }

}
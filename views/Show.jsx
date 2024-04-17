// We are creating a template view using react
// rfce <---- reactBoilerplate

import React, { Component } from 'react'

export default class Show extends Component {
    render() {
        const fruit = this.props.fruit
        return (
            <div>Show</div>
        )   
    }
}
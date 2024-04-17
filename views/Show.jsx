// We are creating a template view using react
// rfce <---- reactBoilerplate

import React, { Component } from 'react'

export default class Show extends Component {
    render() {
        const fruit = this.props.fruit
        return <>
            <h1>The {fruit.name}</h1>
            <h1>is {fruit.color}</h1>

            {fruit.readyToEat ? "It is Ready to Eat" : "ewl,, it's not ready Yet"}
        </>
    }
}
//This was not finished in class, so feel free to try and get this to work in your freetime

import React from 'react'

export default class Index extends Component {
    render() {
        const {fruits} = this.props.fruits
        return (
            <>
            {fruits.map((fruit, i)=>{
                <li> 
                    The {fruit.name} is {fruit.color} 
                    and {fruit.readyToEat ? "It's ready to eat" : "Not Ready"}

                </li>
            })}
            </>
        )
    }
}
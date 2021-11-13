import React, { Component } from 'react'

export class Child2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             age:19
        }
    }
    
    render(props) {
        setTimeout(()=>{
            this.setState({
                age:20
            })
        },3000)
        return (
            <div>
                <h1>
                    child2 name is {this.props.name}<br/>
                    his age is {this.state.age}

                </h1>
    
            </div>
        )
    }
}

export default Child2
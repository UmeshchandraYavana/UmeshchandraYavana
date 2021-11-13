import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
    return (
        <div className=".App">
            <h1>parent compoment is functional compoment</h1>
            <Child1 name="chandra" />
            <Child2 name="chandu"/>
        </div>
    )
}

export default Parent
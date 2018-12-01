import React from 'react'

const Display = (props) => (
    <div id="display" className="container">
        <div className="row">{props.clipName}</div>
    </div>
)

export default Display
import React, { props } from 'react'

function PersonCard(props) {

    return (
        <div>
            <h3>{props.p.firstName},{props.p.lastName}</h3>
            <p>Age: {props.p.age}</p>
            <p>Hair Color: {props.p.hairColor}</p>
        </div>
    )
}

export default PersonCard
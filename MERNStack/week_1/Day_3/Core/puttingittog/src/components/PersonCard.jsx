import React, { props } from 'react'
import { useState } from 'react';
function PersonCard(props) {
    const [age, setAge] = useState(props.person.age);

    return (
        <div>
            <h3>{props.person.firstName},{props.person.lastName}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {props.person.hairColor}</p>
            { <button onClick={()=> setAge(age+1)}>Birthday</button> }
        </div>
    )
}

export default PersonCard
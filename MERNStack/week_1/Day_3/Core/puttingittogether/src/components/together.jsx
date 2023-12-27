import React,{useState} from 'react';

const PersonCard = (props) => {
    const { together }=props
    const [age, setAge] = useState(together.age)
    const increaseAge  = () => {
        console.log('hello')
        setAge(age+1)
    }
    return(
        <fieldset>
            <h1>{together.lastname},{together.firstname}</h1>
            <h3>Age:{age}</h3>
            <h3>Hair Color: {together.haircolor}</h3>
            <button onClick={()=> increaseAge()}>Birthday Button for {together.firstname} {together.lastname}</button>
        </fieldset>
    );
}
export default PersonCard;

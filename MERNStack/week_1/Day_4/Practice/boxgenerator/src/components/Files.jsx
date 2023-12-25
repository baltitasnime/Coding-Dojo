import React ,{useState}from 'react'
import Boxx from './Boxx'


const Files = () => {
    const [allbox, setAllbox] = useState(["gray", "violet", "pink"])
    const [color, setColor] = useState("")
    const formHandler = (event) => {
        event.preventDefault()
        setAllbox([...allbox, color])
        // setColor("")
    }
    return (
        <div>
            <form onSubmit={ formHandler}>
                <label>Color </label>
                <input type="text" onChange={(e) => setColor(e.target.value)} />
                <button> Add </button>
            </form>
            <Boxx allbox={allbox}/>
        </div>


        // {colors.map((colors,idx) => <Boxx key={idx} colors={colors}/> )}


    )
}

export default Files
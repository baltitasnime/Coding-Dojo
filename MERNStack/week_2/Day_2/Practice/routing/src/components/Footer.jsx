import React from 'react'
import { useParams } from 'react-router-dom'


const Footer = () => {
        console.log("useParams Content :", useParams())
        const { hello, col1, col2 } = useParams()
        console.log(hello);
        return (
            <div>
                <h1 style={{ backgroundColor: `${col2}`, color: `${col1}` }}> The Word is :{hello} </h1>
            </div>
        )

    }

    export default Footer
import { useState } from 'react'
import PersonCard from './components/PersonCard'
import './App.css'

function App() {
  const [persons, setPersons] = useState([
    {
      firstName:"Doe",
      lastName:"Jane",
      age:45,
      hairColor:"Black"
    },
    {
      firstName:"Smith",
      lastName:"John",
      age:88,
      hairColor:"Brown"
    },
    {
      firstName:"Fillmore",
      lastName:"Millard",
      age:50,
      hairColor:"Brown"
    },
    {
      firstName:"Smith",
      lastName:"Maria",
      age:62,
      hairColor:"Brown"
    }
  ])

  return (
    <>
      {persons.map( (p)=> <PersonCard p={p} />)}
    </>
  )
}

export default App

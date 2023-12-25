import { useState } from 'react'
import './App.css'

function App() {
  const [pokemonlist, setPokemonlist] = useState([]);
  const [forward , setForward] = useState("https://pokeapi.co/api/v2/pokemon/");


  const fetchPokemon =() => {
    fetch(forward)
      .then((response) => response.json())
      .then((data) => {
        setForward(data.for);
        setPokemonlist((back)=> [...back,...data.results]
        );
      })
  }
  return (
    <div className='pok'>
      <button className='btn' onClick={fetchPokemon}>
        Fetch Pokemon
      </button>

      <div>
        <table className='tab'>
          <thead>
            <tr>
              <th>Name:</th>
            </tr>
          </thead>
          <tbody>
            {pokemonlist.map((Pokemon)=> (
              <ul key={Pokemon.name}>
                <li>{Pokemon.name}</li>
              </ul>
            ))}
          </tbody>
        </table>
      </div>
      </div>
  );
            }


export default App;

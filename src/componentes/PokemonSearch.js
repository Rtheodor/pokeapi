import React, { useState } from 'react';
import axios from 'axios';

function PokemonSearch() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then(response => {
        setPokemonData(response.data);
        setError('');
      })
      .catch(error => {
        setPokemonData(null);
        setError('Pokemon not found!');
      });
  };

  return (
    <div>
      <h2>Search for a Pokemon</h2>
      <input 
        type="text" 
        placeholder="Enter Pokemon Name" 
        value={pokemonName} 
        onChange={handleInputChange} 
      />
      <button onClick={searchPokemon}>Search</button>

      {error && <p>{error}</p>}
      
      {pokemonData && (
        <div>
          <h3>{pokemonData.name}</h3>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
      )}
    </div>
  );
}

export default PokemonSearch;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/charizard');
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response && error.response.status === 404) {
          setError('Pokémon not found.');
        } else {
          setError('Error fetching data. Please try again later.');
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>PokeAPI with React</h1>
      {error && <p>{error}</p>}
      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          <p>Type: {pokemonData.types[0].type.name}</p>
          <p>Base Experience: {pokemonData.base_experience}</p>
          <p>Abilities: {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

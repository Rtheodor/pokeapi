// PokemonList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar dados dos Pokémons:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Listagem de Pokémons</h2>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;

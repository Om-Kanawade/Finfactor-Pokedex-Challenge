
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


import SearchBar from './components/SearchBar';
import PokemonVisuals from './components/PokemonVisuals';
import StatsChart from './components/StatsChart';

const App = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const searchPokemon = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);
    setPokemon(null);

    try {
     
      const response = await axios.get(`http://localhost:8080/api/pokemon/${query.toLowerCase()}`);
      setPokemon(response.data);
    } catch (err) {
      setError("Pokemon not found! Check the spelling.");
    } finally {
      setLoading(false);
    }
  };


  const playCry = () => {
    if (pokemon?.cryUrl) {
      const audio = new Audio(pokemon.cryUrl);
      audio.volume = 0.2;
      audio.play();
    }
  };

  return (
    <div className="app-container">
      
   
      <div className="header">
        <h1>Pokedex</h1>
        <p>Search for any Pokemon by name</p>
      </div>

     
      <SearchBar 
        query={query} 
        setQuery={setQuery} 
        onSearch={searchPokemon} 
      />

     
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p style={{textAlign: 'center', color: '#64748b'}}>Scanning...</p>
        </div>
      )}

      {error && <div className="error-msg">{error}</div>}

      
      {pokemon && !loading && (
        <div className="pokedex-grid">
          
        
          <PokemonVisuals 
            pokemon={pokemon} 
            playCry={playCry} 
          />

         
          <StatsChart 
            pokemon={pokemon} 
          />

        </div>
      )}
    </div>
  );
};

export default App;
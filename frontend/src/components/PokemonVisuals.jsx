import React from 'react';
import { Volume2 } from 'lucide-react';

const PokemonVisuals = ({ pokemon, playCry }) => {

  const getTypeColor = (type) => {
    const colors = {
      fire: '#ef4444', water: '#3b82f6', grass: '#22c55e',
      electric: '#eab308', psychic: '#ec4899', normal: '#94a3b8',
      poison: '#a855f7', ground: '#a16207', rock: '#78350f',
      bug: '#84cc16', dragon: '#6366f1', fairy: '#f472b6',
      fighting: '#c2410c', ice: '#06b6d4', ghost: '#6b21a8',
    };
    return colors[type] || '#64748b';
  };

  return (
    <div className="card visual-card">
      <div className="image-container">
        <img 
          src={pokemon.imageUrl} 
          alt={pokemon.name} 
          className="pokemon-img"
        />
      </div>

      <h2 className="pokemon-name">{pokemon.name}</h2>
      <span className="pokemon-id">#{String(pokemon.id).padStart(3, '0')}</span>

      <div className="types">
        {pokemon.types.map((type) => (
          <span 
            key={type} 
            className="type-badge"
            style={{ backgroundColor: getTypeColor(type) }}
          >
            {type}
          </span>
        ))}
      </div>


      
      <p className="description text-slate-600 italic text-sm mb-6 px-4">
        {pokemon.description || "No description available."}
      </p>





      <div className="measurements">
        <div className="measurement-box">
          <div className="label">Height</div>
          <div className="value">{pokemon.height / 10} m</div>
        </div>
        <div className="measurement-box">
          <div className="label">Weight</div>
          <div className="value">{pokemon.weight / 10} kg</div>
        </div>
      </div>

      {pokemon.cryUrl && (
        <button onClick={playCry} className="cry-btn">
          <Volume2 size={18} />
          Play Cry
        </button>
      )}
    </div>
  );
};

export default PokemonVisuals;
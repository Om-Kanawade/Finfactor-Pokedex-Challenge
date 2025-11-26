import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <form onSubmit={onSearch} className="search-form">
      <div className="input-wrapper">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="e.g. Pikachu, Charizard..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
};

export default SearchBar;
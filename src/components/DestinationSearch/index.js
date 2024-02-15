// DestinationSearch/index.js
import React, { useState } from 'react';
import DestinationItem from '../DestinationItem';
import './index.css';

const DestinationSearch = props => {
  const { destinationsList } = props;
  const [searchInput, setSearchInput] = useState('');

  const handleChange = event => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const filteredDestinations = destinationsList.filter(destination =>
    destination.name.toLowerCase().includes(searchInput)
  );

  return (
    <div className="destination-search-container">
      <h1 className="main-heading">Destination Search</h1>
      <input
        type="search"
        placeholder="Search"
        className="search-input"
        value={searchInput}
        onChange={handleChange}
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
        alt="search icon"
        className="search-icon"
      />
      <ul className="destination-list">
        {filteredDestinations.map(destination => (
          <DestinationItem key={destination.id} destination={destination} />
        ))}
      </ul>
    </div>
  );
};

export default DestinationSearch;

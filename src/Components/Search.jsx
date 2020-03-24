import React from 'react';

function Search() {
  return (
    <div className="search-container">
      <div className="search">
        <input
          name="shorten-link"
          placeholder="Shorten a link here"
          type="text"
        />
        <button>Shorten it!</button>
      </div>
      
    </div>
  )
}

export default Search;
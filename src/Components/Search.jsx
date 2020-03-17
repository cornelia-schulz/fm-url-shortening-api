import React from 'react';

function Search() {
  return (
    <div className="search container">
      <input
        placeholder="Shorten a link here"
        type="text"
      />
      <button>Shorten it!</button>
    </div>
  )
}

export default Search;
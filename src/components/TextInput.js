import React from 'react';

export function TextInput({ placeholder, searchValue, setSearchValue }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue ? (
        <div>
          <button onClick={() => null}></button>
        </div>
      ) : (
        false
      )}
    </div>
  );
}

import React from 'react';
import './TodoSearch.css';

export const TodoSearch = ({ searchValue, setSearchValue }) => {
  const handleTodoSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch">
      <input
        className="search"
        type="search"
        placeholder="Buscar una tarea..."
        onInput={handleTodoSearchInput}
        value={searchValue}
      />
    </div>
  );
};

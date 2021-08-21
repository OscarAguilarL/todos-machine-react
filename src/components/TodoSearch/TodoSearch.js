import React, { useContext } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './TodoSearch.css';

export const TodoSearch = () => {
  const handleTodoSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const { searchValue, setSearchValue } = useContext(TodoContext);

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

import React, { useContext } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './TodoCounter.css';

export const TodoCounter = () => {
  const { totalTodos: total, completedTodos: completed } =
    useContext(TodoContext);

  return (
    <>
      <h2 className="todoCounter">
        Has completado {completed} de {total} TODO's
      </h2>
    </>
  );
};

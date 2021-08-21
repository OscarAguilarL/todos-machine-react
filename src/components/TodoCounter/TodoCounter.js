import React from 'react';
import './TodoCounter.css';

export const TodoCounter = ({ completed, total }) => {
  return (
    <>
      <h2 className="todoCounter">
        Has completado {completed} de {total} TODO's
      </h2>
    </>
  );
};

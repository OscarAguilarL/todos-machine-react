import React from 'react';
import './CreateTodoButton.css';

export const CreateTodoButton = () => {
  const handleClick = (event) => {
    alert(event);
  };

  return (
    <>
      <button
        className="CreateTodoButton"
        type="submit"
        onClick={() => handleClick('hola')}
      ></button>
    </>
  );
};

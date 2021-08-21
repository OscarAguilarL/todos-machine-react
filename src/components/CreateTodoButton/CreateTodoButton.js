import React from 'react';
import './CreateTodoButton.css';

export const CreateTodoButton = ({ setOpenModal }) => {
  const handleClick = () => {
    setOpenModal();
  };

  return (
    <>
      <button
        className="CreateTodoButton"
        type="submit"
        onClick={() => handleClick()}
      >+</button>
    </>
  );
};

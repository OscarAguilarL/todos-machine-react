import React, { useContext } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './CreateTodoButton.css';

export const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <button
        className="CreateTodoButton"
        type="submit"
        onClick={() => handleClick()}
      >
        {openModal ? 'x' : '+'}
      </button>
    </>
  );
};

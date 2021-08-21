import React, { useContext, useState } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './CreateTodoForm.css'

const CreateTodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const { openModal, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');

  const onInputChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(!openModal);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(!openModal);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <textarea
          placeholder="Escribe una tarea..."
          value={newTodoValue}
          onChange={onInputChange}
        ></textarea>

        <div className="button-container">
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" className="is-primary" >Añadir</button>
        </div>
      </form>
    </>
  );
};

export default CreateTodoForm;

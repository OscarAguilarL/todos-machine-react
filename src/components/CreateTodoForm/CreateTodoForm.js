import React, { useContext, useState } from 'react';
import { TodoContext } from '../../Context/TodoContext';

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
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          placeholder="Escribe una tarea..."
          value={newTodoValue}
          onChange={onInputChange}
        ></textarea>

        <div>
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit">Añadir</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodoForm;

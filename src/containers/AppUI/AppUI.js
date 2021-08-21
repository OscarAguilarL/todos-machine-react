import React, { useContext } from 'react';

import { TodoContext } from '../../Context/TodoContext';
import { CreateTodoButton } from '../../components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../../components/TodoCounter/TodoCounter';
import { TodoItem } from '../../components/TodoItem/TodoItem';
import { TodoList } from '../../components/TodoList/TodoList';
import { TodoSearch } from '../../components/TodoSearch/TodoSearch';
import { Wrapper } from '../Wrapper/Wrapper';
import { Modal } from '../../components/Modal/Modal';

export const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <Wrapper>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>Hubo un error...</p>}
          {loading && <p>Cargando...</p>}
          {!loading && !searchedTodos.length && <p>¡Crea tu primer TODO!</p>}
          {searchedTodos.map((todo, index) => (
            <TodoItem
              text={todo.text}
              key={index}
              complete={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {openModal && (
          <Modal>
            <p>{searchedTodos[0]?.text}</p>
          </Modal>
        )}
        <CreateTodoButton setOpenModal={setOpenModal} />
      </Wrapper>
    </>
  );
};

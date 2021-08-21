import React from 'react';

import { CreateTodoButton } from '../../components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../../components/TodoCounter/TodoCounter';
import { TodoItem } from '../../components/TodoItem/TodoItem';
import { TodoList } from '../../components/TodoList/TodoList';
import { TodoSearch } from '../../components/TodoSearch/TodoSearch';
import { Wrapper } from '../Wrapper';

export const AppUI = ({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <>
      <Wrapper>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
        <CreateTodoButton onClick={completeTodo} />
      </Wrapper>
    </>
  );
};

import React from 'react';

import { Consumer } from '../../Context/TodoContext';
import { CreateTodoButton } from '../../components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../../components/TodoCounter/TodoCounter';
import { TodoItem } from '../../components/TodoItem/TodoItem';
import { TodoList } from '../../components/TodoList/TodoList';
import { TodoSearch } from '../../components/TodoSearch/TodoSearch';
import { Wrapper } from '../Wrapper';

export const AppUI = () => {
  return (
    <>
      <Wrapper>
        <TodoCounter />
        <TodoSearch />
        <Consumer>
          {({
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo
          }) => (
            <TodoList>
              {error && <p>Hubo un error...</p>}
              {loading && <p>Cargando...</p>}
              {!loading && !searchedTodos.length && (
                <p>¡Crea tu primer TODO!</p>
              )}
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
          )}
        </Consumer>
        <CreateTodoButton />
      </Wrapper>
    </>
  );
};

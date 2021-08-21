import React from 'react';

import { CreateTodoButton } from '../../components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../../components/TodoCounter/TodoCounter';
import { TodoItem } from '../../components/TodoItem/TodoItem';
import { TodoList } from '../../components/TodoList/TodoList';
import { TodoSearch } from '../../components/TodoSearch/TodoSearch';
import { Wrapper } from '../Wrapper';

export const AppUI = ({
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

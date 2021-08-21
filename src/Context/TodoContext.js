import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const { Provider, Consumer } = createContext();

const TodoContext = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if (!searchValue.length > 0) {
    searchedTodos = [...todos];
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.trim().toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    console.log('complete');

    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  return (
    <>
      <Provider
        value={{
          loading,
          error,
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }}
      >
        {children}
      </Provider>
    </>
  );
};

export { TodoContext, Consumer };

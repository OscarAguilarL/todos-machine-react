import React from 'react';
import { AppUI } from './containers/AppUI/AppUI';
import { TodoProvider } from './Context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI  />
    </TodoProvider>
  );
}

export default App;

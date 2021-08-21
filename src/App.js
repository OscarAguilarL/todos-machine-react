import React, { useEffect, useState } from 'react';
import { AppUI } from './containers/AppUI/AppUI';
import { TodoContext } from './Context/TodoContext';

function App() {
  return (
    <TodoContext>
      <AppUI  />
    </TodoContext>
  );
}

export default App;

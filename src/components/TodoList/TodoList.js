import React from 'react';
import './TodoList.css';

export const TodoList = (props) => {
  return (
    <section className="TodoList">
      <ul className="TodoList-list">{props.children}</ul>
    </section>
  );
};

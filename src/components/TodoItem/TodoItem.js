import React from 'react';
import './TodoItem.css';

export const TodoItem = ({ text, complete = false, onComplete, onDelete }) => {
  return (
    <li className="TodoItem">
      <span
        className={`TodoItem-check ${complete ? 'checked' : ''}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`${complete ? 'TodoCompleted' : ''}`}>{text} </p>
      <button onClick={onDelete}>x</button>
    </li>
  );
};

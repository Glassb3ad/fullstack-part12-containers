import React from 'react';

const Todo = ({ text, actions }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '70%',
      margin: 'auto',
    }}
  >
    <span>{text}</span>
    {actions}
  </div>
);

export default Todo;

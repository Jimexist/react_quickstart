import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList/TodoList';

ReactDOM.render(
  <div>
    <TodoList todos={[
      { name: '1', done: false },
      { name: '2', done: false },
      { name: 'sb', done: false },
    ]} />
  </div>,
  document.getElementById('app')
);

import React from 'react';

export default class TodoItem extends React.Component {

  render() {
    const { data, done } = this.props;
    return (
      <div class="todo-item">
        <span>{data.name}</span>
        <button disabled={done ? 'disabled' : ''}>Done</button>
      </div>
    )
  }
}

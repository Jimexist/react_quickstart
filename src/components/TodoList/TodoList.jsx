import React, { PropTypes } from 'react';
import TodoItem from '../TodoItem/TodoItem';

export default class TodoList extends React.Component {

  render() {
    return (
      <div>
        {this.props.todos.map(todo => <TodoItem data={todo} />)}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

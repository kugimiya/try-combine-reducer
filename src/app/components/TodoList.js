import React from 'react';
import { connect } from 'react-redux'
import { TodoItem } from './TodoItem';

export const TodoListPresenter = ({ todos = [] }) => (
  <ul>
    { todos.map(todo => <TodoItem key={ todo.id } {...todo} />) }
  </ul>
);

export const TodoList = connect(
  state => ({ todos: state.todos }),
  null
)(TodoListPresenter);

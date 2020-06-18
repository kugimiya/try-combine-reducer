import React from 'react';
import { connect } from 'react-redux'
import { todoToggle } from '../../store/todos-reducer';

export const TodoItemPresenter = ({ id, text, userId, completed, onToggle, getUser }) => (
  <li
    onClick={ () => onToggle(id) }
  >
    { text }; completed: { completed.toString() }; user: { getUser(userId)?.name ?? 'not found' }
  </li>
);

export const TodoItem = connect(
  state => ({
    getUser(userId) {
      return state.users.find(user => user.id === userId) ?? {};
    }
  }), 
  dispatch => ({
    onToggle(id) {
      dispatch(todoToggle({ id }));
    }
  })
)(TodoItemPresenter);

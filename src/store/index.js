import { createStore, combineReducers } from 'redux';
import { todosReducer } from './todos-reducer';
import { usersReducer } from './users-reducer';

export const store = createStore(combineReducers({
  todos: todosReducer,
  users: usersReducer
}));

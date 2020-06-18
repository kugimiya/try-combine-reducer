export const TODO_TOGGLE = 'TODO_TOGGLE';
export const TODO_ADD = 'TODO_ADD';

const initialState = [
  { id: 0, userId: 1, text: 'First task', completed: true },
  { id: 1, userId: 2, text: 'Second task', completed: false },
];

export const todoToggle = ({ id = false }) => ({
  type: TODO_TOGGLE,
  payload: { id }
});

export const todoAdd = ({ text = '', userId = 1 }) => ({
  type: TODO_ADD,
  payload: { text, userId }
});

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_TOGGLE:
      return [ ...state.map(
        todo => todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      ) ];

    case TODO_ADD:
      return [ ...state, {
        id: state[state.length - 1].id + 1,
        userId: action.payload.userId,
        text: action.payload.text,
        completed: false
      } ];

    default:
      return state;
  }
};

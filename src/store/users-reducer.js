export const USER_DELETE = 'USER_DELETE';

const initialState = [
  { id: 1, name: 'Developer' }
];

export const userDelete = ({ id }) => ({
  type: USER_DELETE,
  payload: { id }
});

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DELETE:
      return state.filter(user => user.id !== action.payload.id);

    default:
      return state;
  }
};

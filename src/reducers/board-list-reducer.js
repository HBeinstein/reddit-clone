import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, description, id } = action;
  switch (action.type){
  case c.ADD_BOARD:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        description: description,
        id: id
      }
    });
  case c.DELETE_BOARD:
    const newState = {...state};
    delete newState[id];
    return newState;
  default:
    return state;
  }
}
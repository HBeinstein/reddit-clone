// CREATE - 'ADD_Board'
//READ - get state from store
// Update - 'ADD_BOARD' 
// DELETE - 'DELETE_BOARD

export default (state = {}) => {
  const { name, description, id } = action;
  if (action.type === c.ADD_BOARD){
    return Object.assign({}, state, {
      [id]: {
        name: name,
        description: description,
        id: id
      }
    });
  } else if (action.type === c.DELETE_BOARD){
    const newState = {...state};
    delete newState[id];
    return newState;
  } else {
    return state;
  }
}
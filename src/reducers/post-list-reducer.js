import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { title, body, date, upvotes, id } = action;
    switch (action.type) {
      case c.ADD_POST:
        return Object.assign({}, state, {
          [id]: {
            title: title,
            body: body,
            date: date,
            upvotes: upvotes,
            id: id
          }
        })
      case c.DELETE_POST:
        const newState = {...state};
        delete newState[id];
        return newState;
      case c.UPVOTE_POST:
        const newUpVoteCount = state[id].upvotes +1;
        return Object.assign({}, state, {
          [id]: {
            title: title,
            body: body,
            date: date,
            upvotes: newUpVoteCount,
            id: id
          }
        })
      case c.DOWNVOTE_POST:
        const newDownVoteCount = state[id].upvotes -1;
        return Object.assign({}, state, {
          [id]: {
            title: title,
            body: body,
            date: date,
            upvotes: newDownVoteCount,
            id: id
          }
        })
      default:
        return state;  
    }
  }
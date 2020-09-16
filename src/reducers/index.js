import boardListReducer from './board-list-reducer';
import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterBoardList: boardListReducer,
  masterPostList: postListReducer
});

export default rootReducer;
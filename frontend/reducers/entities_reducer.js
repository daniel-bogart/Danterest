import { combineReducers } from 'redux';
import usersReducer from "./users_reducer.js";
import pinsReducer from "./pins_reducer";
import boardsReducer from "./boards_reducer";
import pinsOnBoardsReducer from "./pins_on_boards_reducer";

const entitiesReducer =  combineReducers({
  users: usersReducer,
  pins: pinsReducer,
  boards: boardsReducer,
  pinsOnBoards: pinsOnBoardsReducer
});

export default entitiesReducer;
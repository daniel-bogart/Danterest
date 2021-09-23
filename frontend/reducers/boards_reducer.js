import {
  RECEIVE_ALL_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD
} from '../actions/board_actions';
import { RECEIVE_PINS_ON_BOARDS, REMOVE_PIN_ON_BOARD
} from "../actions/pins_on_boards_actions";

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_BOARDS:
      return Object.assign({}, action.boards);
      // return action.boards;
    case RECEIVE_BOARD:
      nextState[action.board.id] = action.board;
      return nextState;
    case RECEIVE_PINS_ON_BOARDS:
      nextState[action.boardId]["pins"] = [action.pinsOnBoards];
      return nextState
    // case REMOVE_PIN_ON_BOARD:
    //   delete nextState[action.boardId][pins.pin_id];
    //   return nextState;
    case REMOVE_BOARD:
      delete nextState[action.boardId];
      return nextState;
    default:
      return state;
  }
};

export default boardsReducer;
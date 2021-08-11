import { RECEIVE_PINS_ON_BOARDS, REMOVE_PIN_ON_BOARD
} from "../actions/pins_on_boards_actions";

const PinsOnBoardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_PINS_ON_BOARDS:
      return action.pinsOnBoards;
    case REMOVE_PIN_ON_BOARD:
      delete newState[action.pinOnBoardId];
      return newState;
    default:
      return oldState;
  }
};
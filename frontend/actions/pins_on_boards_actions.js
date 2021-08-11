import * as PinAPIUtil from '../utils/pin';
import * as BoardAPIUtil from '../utils/board';
import { fetchPin} from "../utils/pin";

export const RECEIVE_PINS_ON_BOARDS = "RECEIVE_PINS_ON_BOARDS";
export const RECEIVE_PIN_ON_BOARD = "RECEIVE_PIN_ON_BOARD";
export const REMOVE_PIN_ON_BOARD = "REMOVED_PIN_ON_BOARD";

export const receivedPinOnBoard = pinOnBoard => ({
  type: RECEIVE_PIN_ON_BOARD,
  pinOnBoard
})

export const receivedPinsOnBoards = pinsOnBoards => ({
  type: RECEIVE_PINS_ON_BOARDS,
  pinsOnBoards
})

export const removePinOnBoard = pinOnBoardId => ({
  type: REMOVE_PIN_ON_BOARD,
  pinOnBoardId
})

export const savePin = (pinOnBoard) => dispatch => (
  PinAPIUtil.savePin(pinOnBoard)
  .then((result) => dispatch(receivedPinOnBoard(result)))
);

export const fetchPinsOnBoards = (boardId) => dispatch => (
  BoardAPIUtil.fetchPinsOnBoards(boardId)
  .then((result) => dispatch(receivedBoardPins(result)))
);

export const deletePinOnBoard = (pinOnBoardId) => (
  BoardAPIUtil.deletePinOnBoard(pinOnBoardId)
  .then(() => dispatch(removePinOnBoard(pinOnBoardId)))
);



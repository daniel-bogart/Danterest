import * as PinAPIUtil from '../utils/pin';
import * as BoardAPIUtil from '../utils/board';
import { fetchPin} from "../utils/pin";

export const RECEIVE_PINS_ON_BOARDS = "RECEIVE_PINS_ON_BOARDS";
export const RECEIVE_PIN_ON_BOARD = "RECEIVE_PIN_ON_BOARD";
export const REMOVE_PIN_ON_BOARD = "REMOVE_PIN_ON_BOARD";

export const receivedPinOnBoard = pinOnBoard => ({
  type: RECEIVE_PIN_ON_BOARD,
  pinOnBoard
})

export const receivedPinsOnBoards = (pinsOnBoards, boardId) => ({
  type: RECEIVE_PINS_ON_BOARDS,
  pinsOnBoards,
  boardId
})

export const removePinOnBoard = pinOnBoardId => {
  return {
    type: REMOVE_PIN_ON_BOARD,
    pinOnBoardId
  }
}

export const savePin = (pinOnBoard) => dispatch => (
  PinAPIUtil.savePin(pinOnBoard)
  .then((result) => dispatch(receivedPinOnBoard(result)))
);

export const fetchPinsOnBoard = (userId, boardId) => dispatch => (
  BoardAPIUtil.fetchPinsOnBoard(userId, boardId)
  .then((result) => dispatch(receivedPinsOnBoards(result, boardId)))
);

export const deletePinOnBoard = (pinOnBoardId) => dispatch => {
  return (BoardAPIUtil.deletePinOnBoard(pinOnBoardId)
  .then((pinOnBoard) => {
    dispatch(removePinOnBoard(pinOnBoard))
  }))
};



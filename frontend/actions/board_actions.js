import * as BoardApiUtil from '../utils/board';

export const RECEIVE_ALL_BOARDS    = "RECEIVE_ALL_BOARDS";
export const RECEIVE_BOARD         = "RECEIVE_BOARD";
export const REMOVE_BOARD          = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS  = "RECEIVE_BOARD_ERRORS";
export const RECEIVE_PINS_ON_BOARD = "RECEIVE_PINS_ON_BOARD";

const receiveAllBoards = boards => ({
  type: RECEIVE_ALL_BOARDS,
  boards
});

const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

const receivePinsOnBoard = pinsOnBoard => ({
  type: RECEIVE_PINS_ON_BOARD,
  pinsOnBoard
});

const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
});

const receiveBoardErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

export const fetchAllBoards = userId => dispatch => (
  BoardApiUtil.fetchAllBoards(userId)
    .then(boards => dispatch(receiveAllBoards(boards)), error => dispatch(receiveBoardErrors(error.responseJSON)))
);

export const fetchBoard = (userId, boardId) => dispatch => (
  BoardApiUtil.fetchBoard(userId, boardId)
    .then(board => dispatch(receiveBoard(board)), error => dispatch(receiveBoardErrors(error.responseJSON)))
);

export const fetchPinsOnBoard = () => dispatch => (
  BoardApiUtil.fetchPinsOnBoard()
    .then(pinsOnBoard => dispatch(receivePinsOnBoard(pinsOnBoard)), error => dispatch(receiveBoardErrors(error.responseJSON)))
);

export const deleteBoard = (userId, boardId) => dispatch => (
  BoardApiUtil.deleteBoard(userId, boardId)
    .then(board => dispatch(removeBoard(board)), error => dispatch(receiveBoardErrors(error.responseJSON)))
);

export const createNewBoard = (board, userId) => dispatch => (
  BoardApiUtil.createNewBoard(board, userId)
    .then(board => dispatch(receiveBoard(board)), error => dispatch(receiveBoardErrors(error.responseJSON)))
);

export const editBoard = board => dispatch => (
  BoardApiUtil.editBoard(board)
    .then(board => dispatch(receiveBoard(board)), error => dispatch(receiveBoardErrors(error.responseJSON)))
);








import * as PinAPIUtil from '../utils/pin';

export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveAllPins = (pins) => ({
    type: RECEIVE_ALL_PINS,
    pins
  });

const receivePin = (pin) => ({
    type: RECEIVE_PIN,
    pin
  });

const removePin = (pin) => ({
    type: REMOVE_PIN,
    pin
  });

const receiveErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});

const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const fetchAllPins = () => dispatch => (
  PinAPIUtil.fetchAllPins()
    .then(pins => dispatch(receiveAllPins(pins)), (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const fetchPin = (pinId) => dispatch => (
  PinAPIUtil.fetchPin(pinId)
    .then((pin) => dispatch(receivePin(pin)), (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const createPin = (pin) => dispatch => (
  PinAPIUtil.createPin(pin)
    .then(pin => dispatch(receivePin(pin)), (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const updatePin = (pin) => dispatch => (
  PinAPIUtil.updatePin(pin)
    .then(pin => dispatch(receivePin(pin)), (error) => dispatch(receiveErrors(error.responseJSON)))
);

export const deletePin = pinId => dispatch => (
  PinAPIUtil.deletePin(pinId)
    .then(() => dispatch(removePin(pinId)), (error) => dispatch(receiveErrors(error.responseJSON)))
);

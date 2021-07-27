import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk, logger))
  );
};

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));

export default configureStore;

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// // import logger from 'redux-logger';
// import rootReducer from '../reducers/root_reducer';

// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
// const configureStore = (preloadedState = {}) => (
//     createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk)))
// );

// export default configureStore;
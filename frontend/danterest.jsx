import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

/*
Write an entry point file that renders the `Root` component, with a `store`
prop passed in, inside the div with id 'root'.
*/

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let preloadedState = undefined;
  
  if (window.currentUser) {
    preloadedState = {
      users: { [window.currentUser.id]: window.currentUser },
      session: { id: window.currentUser.id }
    };
  } 
  const store = configureStore(preloadedState);
  
  window.store = store;

  ReactDOM.render(<Root store={store}/>, root);
})
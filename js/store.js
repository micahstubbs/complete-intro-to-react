// @flow

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    // middleware that intercepts all the actions
    // and feeds them to the devtools
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;

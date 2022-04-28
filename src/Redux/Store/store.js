import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from '../Reducers/loginReducer';
import { monitorReducer } from '../Reducers/monitorReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose();

const reducers = combineReducers({
  login: loginReducer,
  monitors: monitorReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

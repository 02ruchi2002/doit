import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";

import taskReducer from "./reducers/task";

const rootReducer = combineReducers({
  task: taskReducer,
});

const middlewareEnhancer = applyMiddleware(thunk);

const composeWithDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducer, composedEnhancers);

export default store;

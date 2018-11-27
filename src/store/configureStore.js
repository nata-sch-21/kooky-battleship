import { createStore, applyMiddleware } from 'redux';
import combinedReducers from '../reducers';

const middlewares = [];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(combinedReducers, initialState);
}

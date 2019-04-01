import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducer/index';
import { State } from '../../model/index';

export default function initializeStore() {
  const store: Store<State> = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
  return store;
}

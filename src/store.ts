import { createStore, combineReducers } from 'redux';
import { layoutReducer, layoutState } from './store/reducers/layoutReducer';

export type AppState = {
  layout: layoutState;
};

const store = createStore(
  combineReducers<AppState>({
    layout: layoutReducer,
  })
);

export default store;

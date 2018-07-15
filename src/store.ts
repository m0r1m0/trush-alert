import { createStore, combineReducers } from 'redux';
import { layoutReducer, LayoutState } from './store/reducers/layoutReducer';

export type AppState = {
  layout: LayoutState;
};

const store = createStore(
  combineReducers<AppState>({
    layout: layoutReducer,
  })
);

export default store;

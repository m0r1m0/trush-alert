import { createStore, combineReducers } from 'redux';
import { layoutReducer, LayoutState } from './store/reducers/layoutReducer';
import { trushReducer, TrushState } from './store/reducers/trushReducer';

export type AppState = {
  layout: LayoutState;
  trush: TrushState;
};

const store = createStore(
  combineReducers<AppState>({
    layout: layoutReducer,
    trush: trushReducer,
  })
);

export default store;

import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { LayoutActions } from '../actions/layoutAction';

export interface LayoutState {
  isMenuOpened: boolean;
}

const initialState: LayoutState = {
  isMenuOpened: false,
};

export const layoutReducer = reducerWithInitialState(initialState).case(
  LayoutActions.toggleMenu,
  (state, open) => {
    return {
      ...state,
      isMenuOpened: open,
    };
  }
);

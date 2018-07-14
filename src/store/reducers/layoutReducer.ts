import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { layoutActions } from '../actions/layoutAction';

export interface layoutState {
  isMenuOpened: boolean;
}

const initialState: layoutState = {
  isMenuOpened: false,
};

export const layoutReducer = reducerWithInitialState(initialState)
  .case(layoutActions.openMenu, state => {
    return {
      ...state,
      isMenuOpened: true,
    };
  })
  .case(layoutActions.closeMenu, state => {
    return {
      ...state,
      isMenuOpened: false,
    };
  });

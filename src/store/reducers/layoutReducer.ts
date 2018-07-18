import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { LayoutActions } from '../actions/layoutAction';

export interface LayoutState {
  isMenuOpened: boolean;
  detailExpanded: boolean;
}

const initialState: LayoutState = {
  isMenuOpened: false,
  detailExpanded: false,
};

export const layoutReducer = reducerWithInitialState(initialState)
  .case(LayoutActions.toggleMenu, (state, open) => {
    return {
      ...state,
      isMenuOpened: open,
    };
  })
  .case(LayoutActions.toggleExpand, (state, expand) => {
    return {
      ...state,
      detailExpanded: expand,
    };
  });

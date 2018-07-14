import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const layoutActions = {
  openMenu: actionCreator('OPEN_MENU'),
  closeMenu: actionCreator('CLOSE_MENU'),
};

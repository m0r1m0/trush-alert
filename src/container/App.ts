import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { LayoutActions } from '../store/actions/layoutAction';
import App from '../components/App';

export interface LayoutActions {
  toggleMenu: (open: boolean) => Action<boolean>;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleMenu: (open: boolean) => dispatch(LayoutActions.toggleMenu(open)),
  };
};

const mapStateToProps = (state: AppState) => {
  return {
    ...state.layout,
    ...state.trush,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

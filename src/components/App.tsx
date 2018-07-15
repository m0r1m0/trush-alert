import * as React from 'react';
import { AppHeader } from './organisms/AppHeader';
import { LayoutState } from '../store/reducers/layoutReducer';
import { LayoutActions } from '../container/App';

interface OwnProps {}

type AppProps = OwnProps & LayoutState & LayoutActions;

export const App: React.SFC<AppProps> = (props: AppProps) => {
  return (
    <div className="App">
      <AppHeader {...props} />
      <p>Page Contents</p>
    </div>
  );
};

export default App;

import * as React from 'react';
import AppHeader from './organisms/AppHeader';

interface Props {}

class App extends React.Component<Props, object> {
  public render() {
    return (
      <div className="App">
        <AppHeader />
        <p>Page Contents</p>
      </div>
    );
  }
}

export default App;

import * as React from 'react';
import AppHeader from './organisms/AppHeader';

class App extends React.Component {
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

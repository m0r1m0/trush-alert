import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
        <p>Page Contents</p>
      </div>
    );
  }
}

export default App;

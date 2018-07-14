import * as React from 'react';
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AppBar color="default">
          <Toolbar>
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Gomi
            </Typography>
          </Toolbar>
        </AppBar>
        <p>Page Contents</p>
      </div>
    );
  }
}

export default App;

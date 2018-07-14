import * as React from 'react';
import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface AppHeaderProps {}

const AppHeader: React.SFC<AppHeaderProps> = () => {
  return (
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
  );
};

export default AppHeader;

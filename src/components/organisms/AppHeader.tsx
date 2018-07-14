import * as React from 'react';
import styled from 'styled-components';

import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface AppHeaderProps {}

const AppHeader: React.SFC<AppHeaderProps> = () => {
  return (
    <AppBar color="default">
      <Toolbar>
        <MenuButton>
          <MenuIcon />
        </MenuButton>
        <Typography variant="title" color="inherit">
          Gomi
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const MenuButton = styled(IconButton)`
  && {
    margin-left: -12px;
    margin-right: 20px;
  }
`;

export default AppHeader;

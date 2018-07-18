import * as React from 'react';
import styled from 'styled-components';

import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Action } from 'typescript-fsa';

interface OwnProps {
  toggleMenu: (open: boolean) => Action<boolean>;
}

type AppHeaderProps = OwnProps;

const MenuButton = styled(IconButton)`
  && {
    margin-left: -12px;
    margin-right: 20px;
  }
`;

export const AppHeader: React.SFC<AppHeaderProps> = (props: AppHeaderProps) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <MenuButton onClick={() => props.toggleMenu(true)}>
          <MenuIcon />
        </MenuButton>
        <Typography variant="title" color="inherit">
          Gomi
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

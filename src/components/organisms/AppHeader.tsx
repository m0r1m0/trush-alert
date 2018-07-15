import * as React from 'react';
import styled from 'styled-components';

import { AppBar, Typography, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { LayoutActions } from '../../container/App';

interface AppHeaderProps {
  isMenuOpened: boolean;
}

type Props = AppHeaderProps & LayoutActions;

const MenuButton = styled(IconButton)`
  && {
    margin-left: -12px;
    margin-right: 20px;
  }
`;

export const AppHeader: React.SFC<Props> = (props: Props) => {
  return (
    <AppBar color="default">
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

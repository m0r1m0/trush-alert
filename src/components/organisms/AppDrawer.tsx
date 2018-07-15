import * as React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Home } from '@material-ui/icons';
import styled from 'styled-components';
import { LayoutActions } from '../../container/App';

interface OwnProps {
  isMenuOpened: boolean;
}

type AppDrawerProps = OwnProps & LayoutActions;

const MenuList = styled(List)`
  width: 250px;
`;

export const AppDrawer: React.SFC<AppDrawerProps> = props => {
  return (
    <Drawer open={props.isMenuOpened} onClose={() => props.toggleMenu(false)}>
      <MenuList>
        <ListItem button={true}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </MenuList>
    </Drawer>
  );
};

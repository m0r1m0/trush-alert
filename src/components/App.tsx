import * as React from 'react';

import { AppHeader } from './organisms/AppHeader';
import { LayoutState } from '../store/reducers/layoutReducer';
import { LayoutActions } from '../container/App';
import { AppDrawer } from './organisms/AppDrawer';
import { CssBaseline, Grid } from '@material-ui/core';
import styled from 'styled-components';
import { TrushCard } from './organisms/TrushCard';

interface OwnProps {}

type AppProps = OwnProps & LayoutState & LayoutActions;

const PageContents = styled.div`
  margin: 15px;
`;

export const App: React.SFC<AppProps> = (props: AppProps) => {
  return (
    <div className="App">
      <CssBaseline />
      <AppHeader toggleMenu={props.toggleMenu} />
      <AppDrawer {...props} />
      <PageContents>
        <Grid
          container={true}
          spacing={16}
          alignItems="center"
          justify="center"
        >
          <Grid item={true} xs={12} sm={6}>
            <TrushCard />
          </Grid>
        </Grid>
      </PageContents>
    </div>
  );
};

export default App;

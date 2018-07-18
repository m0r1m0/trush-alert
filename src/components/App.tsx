import * as React from 'react';

import { AppHeader } from './organisms/AppHeader';
import { LayoutState } from '../store/reducers/layoutReducer';
import { LayoutActions } from '../container/App';
import { AppDrawer } from './organisms/AppDrawer';
import { CssBaseline, Grid } from '@material-ui/core';
import { TrushCard } from './organisms/TrushCard';
import styled from 'styled-components';
import { TrushState } from '../store/reducers/trushReducer';

interface OwnProps {}

type AppProps = OwnProps & LayoutState & LayoutActions & TrushState;

const PageContents = styled.div`
  margin: 15px;
`;

export const App: React.SFC<AppProps> = (props: AppProps) => {
  const {
    isMenuOpened,
    toggleMenu,
    trushInfo,
    toggleExpand,
    detailExpanded,
  } = props;

  return (
    <div className="App">
      <CssBaseline />
      <AppHeader toggleMenu={toggleMenu} />
      <AppDrawer isMenuOpened={isMenuOpened} toggleMenu={toggleMenu} />
      <PageContents>
        <Grid container={true} alignItems="center" justify="center">
          <Grid item={true} xs={12} sm={6}>
            <TrushCard
              trushInfo={trushInfo}
              detailExpanded={detailExpanded}
              toggleExpand={toggleExpand}
            />
          </Grid>
        </Grid>
      </PageContents>
    </div>
  );
};

export default App;

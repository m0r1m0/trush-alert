import * as React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { TrushState } from '../../store/reducers/trushReducer';
import { getTodayTrush } from '../../util/getTodayTrushType';

const TrushImage = styled(CardMedia)`
  padding-top: 60%;
  && {
    background-size: 50%;
  }
`;

export const TrushCard: React.SFC<TrushState> = props => {
  const trushData = props.trushInfo.filter(trush => trush.id === 95)[0];
  return (
    <Card>
      <TrushImage
        image="https://1.bp.blogspot.com/-Ifhy7U5KnoQ/WASJK8vB-EI/AAAAAAAA-_U/cplcvNT134017-C1HiLTn2GQdAqITQ8FwCLcB/s800/gomibako_full.png"
        title="TrushIcon"
      />
      <CardContent>
        <Typography align="center" variant="headline" component="h2">
          {getTodayTrush(trushData)}
        </Typography>
      </CardContent>
    </Card>
  );
};

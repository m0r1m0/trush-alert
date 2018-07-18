import * as React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { TrushState } from '../../store/reducers/trushReducer';
import { getTrushType } from '../../util/getTrushType';

const TrushImage = styled(CardMedia)`
  padding-top: 60%;
  && {
    background-size: 50%;
  }
`;

interface TrushType {
  name: string;
  image: string;
}

export const TrushCard: React.SFC<TrushState> = props => {
  const trushData = props.trushInfo.filter(trush => trush.id === 95)[0];
  const trushType: TrushType = getTrushType(trushData);
  return (
    <Card>
      <TrushImage image={trushType.image} title="TrushIcon" />
      <CardContent>
        <Typography align="center" variant="headline" component="h2">
          {trushType.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

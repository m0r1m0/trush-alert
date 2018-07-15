import * as React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';

const TrushImage = styled(CardMedia)`
  padding-top: 90%;
  && {
    background-size: 70%;
  }
`;

export const TrushCard: React.SFC<{}> = props => {
  return (
    <Card>
      <TrushImage
        image="https://1.bp.blogspot.com/-Ifhy7U5KnoQ/WASJK8vB-EI/AAAAAAAA-_U/cplcvNT134017-C1HiLTn2GQdAqITQ8FwCLcB/s800/gomibako_full.png"
        title="TrushIcon"
      />
      <CardContent>
        <Typography align="center" variant="headline" component="h2">
          普通ごみ
        </Typography>
      </CardContent>
    </Card>
  );
};

import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
} from '@material-ui/core';
import styled from 'styled-components';
import { TrushState } from '../../store/reducers/trushReducer';
import { getTrushType } from '../../util/getTrushType';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Action } from 'typescript-fsa';

interface TrushCardAction {
  toggleExpand: (expand: boolean) => Action<boolean>;
}

interface TrushCardState {
  detailExpanded: boolean;
}

type TrushCardProps = TrushCardAction & TrushState & TrushCardState;

interface TrushType {
  name: string;
  image: string;
}

interface ExpandButtonProps {
  expanded: boolean;
}

const TrushImage = styled(CardMedia)`
  padding-top: 60%;
  && {
    background-size: 50%;
  }
`;

const ExpandButton = styled(IconButton)`
  transform: rotate(
    ${(props: ExpandButtonProps) => (props.expanded ? 180 : 0)}deg
  );
  && {
    transition: transform 150ms cubic-bezier(0.4, 0, 1, 1) 0ms;
    margin-left: auto;
  }
`;

export const TrushCard: React.SFC<TrushCardProps> = props => {
  const { trushInfo, toggleExpand, detailExpanded } = props;
  const trushData = trushInfo.filter(trush => trush.id === 95)[0];
  const trushType: TrushType = getTrushType(trushData);
  return (
    <Card>
      <TrushImage image={trushType.image} title="TrushIcon" />
      <CardContent>
        <Typography align="center" variant="headline" component="h2">
          {trushType.name}
        </Typography>
      </CardContent>
      <CardActions disableActionSpacing={true}>
        <ExpandButton
          expanded={detailExpanded}
          onClick={() => toggleExpand(!detailExpanded)}
        >
          <ExpandMore />
        </ExpandButton>
      </CardActions>
      <Collapse in={detailExpanded} timeout="auto">
        <CardContent>
          <p>Collapse Content</p>
        </CardContent>
      </Collapse>
    </Card>
  );
};

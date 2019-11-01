import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  TextContainer,
  ForwardButtonContainer,
  LeaderboardTableDiv,
  SmallTextContainer,
  PayoutContainer,
  PointsContainer,
  ImageContainer
} from '../shared-leaderboard-table.styles';

const SeasonLeaderboardTableItem = ({ entrant, position, total_points, history, match, total_sbd, numberOfEntries}) => {
  const payout = parseFloat(Math.round(total_sbd * 100) / 100).toFixed(2);
  return (
    <LeaderboardTableDiv onClick={() => history.push(`${match.url}/${entrant}`)}>
      <PointsContainer><SmallTextContainer>#</SmallTextContainer>{position}</PointsContainer>
      <ImageContainer> <img src={`https://steemitimages.com/u/${entrant}/avatar`} alt='user logo'/></ImageContainer>
      <TextContainer><span>{entrant}</span></TextContainer>
      <PointsContainer>
        {total_points} <SmallTextContainer>{(total_points===null) ? 'invalid entry' : 'pts'}
        / ({numberOfEntries})  </SmallTextContainer>
      </PointsContainer>
      <PayoutContainer>{total_sbd ? `$${payout}` : null}</PayoutContainer>
      <ForwardButtonContainer>
        &#10095;
      </ForwardButtonContainer>
    </LeaderboardTableDiv>
  )
};

export default withRouter(SeasonLeaderboardTableItem);

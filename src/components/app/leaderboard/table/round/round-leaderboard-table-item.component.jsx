import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  TextContainer,
  ForwardButtonContainer,
  LeaderboardTableDiv,
  SmallTextContainer,
  PayoutContainer,
  PointsContainer,
  // ImageContainer
} from '../shared-leaderboard-table.styles';

const RoundLeaderboardTableItem = ({ steem_entrant, round_position, total_points, history, match, steem_comment_permalink, sbd_payout, eligible_for_payout }) => {
  const payout = parseFloat(Math.round(sbd_payout * 100) / 100).toFixed(2);
  return (
    <LeaderboardTableDiv onClick={() => history.push(`${match.url}/${steem_comment_permalink}`)}>
      <PointsContainer>{round_position}</PointsContainer>
      {/* <ImageContainer> <img src={`https://steemitimages.com/u/${steem_entrant}/avatar`} alt='user logo'/></ImageContainer> */}
      <TextContainer><span>{steem_entrant}</span> <span>{eligible_for_payout ? `Patreon member` : ''}</span></TextContainer>
      <PointsContainer>{total_points} <SmallTextContainer>{(total_points===null) ? 'invalid entry' : 'pts'} </SmallTextContainer></PointsContainer>
      <PayoutContainer>{sbd_payout ? `$${payout}` : null}</PayoutContainer>
      <ForwardButtonContainer>
        &#10095;
      </ForwardButtonContainer>
    </LeaderboardTableDiv>
  )
};

export default withRouter(RoundLeaderboardTableItem);

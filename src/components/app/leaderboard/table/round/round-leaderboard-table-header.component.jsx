import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {selectLatestSeason} from '../../../../../redux/season/selectors/select-latest-season';

import {
  TextContainer,
  ForwardButtonContainer,
  LeaderboardTableDiv,
  LeaderboardTableHeading,
  SmallTextContainer,
  PayoutContainer,
  PointsContainer,
} from '../shared-leaderboard-table.styles';

const RoundLeaderboardTableHeader = ({round, latestSeason}) => {
  const roundYear = round.slice(0,4);
  const roundNumber = round.slice(5)
  return(
  <div>
   <LeaderboardTableHeading>
      {roundYear === latestSeason ? `Round ${roundNumber}` : `Season ${roundYear} | Round ${roundNumber}`}
  </LeaderboardTableHeading> 
   <LeaderboardTableDiv header> 
      <PointsContainer><SmallTextContainer>Rankings</SmallTextContainer></PointsContainer>
      <TextContainer><SmallTextContainer>Entrant</SmallTextContainer></TextContainer>
      <PointsContainer><SmallTextContainer>Total points</SmallTextContainer></PointsContainer>
      <PayoutContainer><SmallTextContainer>Payout</SmallTextContainer></PayoutContainer>
      <ForwardButtonContainer></ForwardButtonContainer>
   </LeaderboardTableDiv>
  </div>
 )};

const mapStateToProps = createStructuredSelector ({
  latestSeason: selectLatestSeason
}); 


export default connect(mapStateToProps)(RoundLeaderboardTableHeader);

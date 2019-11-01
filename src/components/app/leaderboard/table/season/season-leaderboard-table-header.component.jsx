import React from 'react';

import {
  LeaderboardTableHeading,
  TextContainer,
  ForwardButtonContainer,
  LeaderboardTableDiv,
  SmallTextContainer,
  PayoutContainer,
  PointsContainer,
  ImageContainer
} from '../shared-leaderboard-table.styles';

const SeasonLeaderboardTableHeader = ({season}) => (
  <div>
    <LeaderboardTableHeading>Season {season}</LeaderboardTableHeading>
    <LeaderboardTableDiv header>
      <PointsContainer><SmallTextContainer>Rankings</SmallTextContainer></PointsContainer>
      <ImageContainer></ImageContainer>
      <TextContainer><SmallTextContainer>Entrant</SmallTextContainer></TextContainer>
      <PointsContainer><SmallTextContainer>Points/ Entries</SmallTextContainer></PointsContainer>
      <PayoutContainer><SmallTextContainer>Payout</SmallTextContainer></PayoutContainer>
      <ForwardButtonContainer>      
      </ForwardButtonContainer>
   </LeaderboardTableDiv>
  </div>   
);

export default SeasonLeaderboardTableHeader;

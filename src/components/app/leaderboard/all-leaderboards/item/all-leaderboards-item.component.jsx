import React from 'react';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';


import {
  AllLeaderboardsItemContainer,
  AllLeaderboardsItemHeaderContainer,
  ForwardButtonContainer,
  ImageContainer,
  PrizePoolInfoContainer,
  RoundInfoContainer,
  SmallTextContainer,
  SeasonTextContainer,
  TextContainer
} from './all-leaderboards-item.styles';


export const AllLeaderboardsItemHeaders = () => (
  <AllLeaderboardsItemHeaderContainer>

    <SeasonTextContainer>Season </SeasonTextContainer>
    
    <ImageContainer></ImageContainer>
    
    <RoundInfoContainer><TextContainer>Round</TextContainer></RoundInfoContainer>

    <PrizePoolInfoContainer>
      <TextContainer>Prize pool</TextContainer>
      <ForwardButtonContainer></ForwardButtonContainer>
    </PrizePoolInfoContainer>
    

  </AllLeaderboardsItemHeaderContainer>
);

const AllLeaderboardsItem = ({ round_no, deadline_time, sbd_rewards_pot, history, match, uid, round_img_url, season }) => {
  const pot = parseFloat(Math.round(sbd_rewards_pot * 100) / 100).toFixed(2);
  const deadline =  <Moment fromNow>{deadline_time}</Moment>
  return (
    <AllLeaderboardsItemContainer onClick={() => history.push(`${match.path}/${uid}`)}>

      <SeasonTextContainer>{season}</SeasonTextContainer>

      <ImageContainer><img src={round_img_url} alt='user logo'/></ImageContainer>

      <RoundInfoContainer>
        
        <TextContainer>{round_no} </TextContainer>
        <SmallTextContainer>{deadline}</SmallTextContainer>
      </RoundInfoContainer>
     
     <PrizePoolInfoContainer>
          <TextContainer>${pot}</TextContainer>
          <ForwardButtonContainer>&#10095;</ForwardButtonContainer>
     </PrizePoolInfoContainer>
      

      

    </AllLeaderboardsItemContainer>
  );
};




export default withRouter(AllLeaderboardsItem);

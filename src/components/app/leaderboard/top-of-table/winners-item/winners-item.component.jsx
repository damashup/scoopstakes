import React from 'react'

import {
  WinnersItemContainer,
  WinnersItemHeaderContainer,
  ImageContainer,
  PrizePoolInfoContainer,
  RoundInfoContainer,
  SmallTextContainer,
  SeasonTextContainer,
  TextContainer
} from './winners-item.styles';


export const WinnersItemHeader = () => (

  <WinnersItemHeaderContainer>

    Cash winners

  </WinnersItemHeaderContainer>
);

const WinnersItem = ({steem_entrant, total_points, round_position, sbd_payout}) => {
    const payout = parseFloat(Math.round(sbd_payout * 100) / 100).toFixed(2);
  return (
    <WinnersItemContainer>

      <SeasonTextContainer>#{round_position}</SeasonTextContainer>

      <ImageContainer><img src={`https://steemitimages.com/u/${steem_entrant}/avatar`} alt='user logo'/></ImageContainer>

      <RoundInfoContainer>  
        <TextContainer>{total_points} </TextContainer>
        <SmallTextContainer>pts</SmallTextContainer>
      </RoundInfoContainer>
     
     <PrizePoolInfoContainer>
          <TextContainer>${payout}</TextContainer>
     </PrizePoolInfoContainer>
      

      

    </WinnersItemContainer>
  );
};




export default WinnersItem;

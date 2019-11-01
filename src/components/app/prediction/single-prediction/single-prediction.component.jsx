import React from 'react';


import {
  PredictionContainer,
  PredictionEntrant,
  PredictionEntrantName,
  ImageContainer,
  EntrantLineContainer} from './single-prediction.styles';



const SinglePrediction = ({singleResult}) => {
    const steem_entrant = singleResult[0].steem_entrant;
    const total_points = singleResult[0].total_points;
    const round_id = singleResult[0].round_id;  
  return  (
  <PredictionContainer>

    <PredictionEntrant>
        <ImageContainer><img src={`https://steemitimages.com/u/${steem_entrant}/avatar`} alt='user logo'/></ImageContainer>
        <PredictionEntrantName>{steem_entrant}</PredictionEntrantName>
    </PredictionEntrant>

    <PredictionEntrant>
        <PredictionEntrantName>Round {round_id}</PredictionEntrantName> 
    </PredictionEntrant>

    <EntrantLineContainer> {total_points} {total_points < 2 ? 'point': 'points'}  
      {/* <TextContainer>Round {round_id} <SmallTextContainer>{deadline}</SmallTextContainer></TextContainer>
      <TextContainer># {round_position}<SmallTextContainer> (prize pool) </SmallTextContainer></TextContainer> */}
    </EntrantLineContainer>
                {singleResult.map(({round_id, ...otherResultProps}) => {
                    return <div key={round_id}>{round_id}</div>
                })}
                
  </PredictionContainer>
)};

export default SinglePrediction;

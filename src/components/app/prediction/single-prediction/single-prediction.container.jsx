import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import SinglePrediction from './single-prediction.component';


import Spinner from '../spinner/spinner.component';


const SINGLE_PREDICTION = gql`
 query roundResults($steem_comment_permalink: String!){
    singleResult(steem_comment_permalink: $steem_comment_permalink){
        steem_entrant
        round_id
        round_position
        game_predictions
        total_points
        
      }
 }
`

const SinglePredictionContainer = ({match}) => { 
  const predictionId = match.params.predictionId; 
  return (
  <Query query={SINGLE_PREDICTION} variables={{steem_comment_permalink: predictionId}}>
    {
      ({loading, data}) => {
        if (loading) return <Spinner />;
        return (
            <div>
                <SinglePrediction singleResult={data.singleResult} />
            </div>
            
            )
      }
    }
  </Query>
  )
}

export default SinglePredictionContainer;
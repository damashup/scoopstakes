import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';

import Splash from './splash.component';

const ROUND_RESULTS = gql`
    query roundResults($round_id: String){
        roundResults(round_id: $round_id){
            id
            steem_entrant
            total_points
            game_predictions
            points_list
    }
  }
`;

const SplashContainer = ({roundId, entrant, round}) => {
    return (
        <Query query={ROUND_RESULTS } variables={{round_id: roundId}}>
            {
                ({loading, data}) => {       
                if (loading) return <Spinner />;
                const entrantResult = data.roundResults.filter(result => result.steem_entrant === entrant);
                const nanzoResult = data.roundResults.filter(result => result.steem_entrant === 'nanzo-scoop');
                return <Splash entrantResult={entrantResult[0]} nanzoResult={nanzoResult[0]} roundId={roundId} entrant={entrant} round={round}/>
                }
            }
        </Query>
    )

};

export default SplashContainer;
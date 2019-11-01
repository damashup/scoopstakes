import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';
import Leaderboard from '../../leaderboard/leaderboard.component';

const ROUND_RESULTS = gql`
    query roundResults($round_id: String){
        roundResults(round_id: $round_id){
            id
            steem_entrant
            points_list
            total_points
            first_goal_diff
            reputation_score
            round_position
            sbd_payout
    }
  }
`;

const RoundResultsContainer = ({roundId, leaderboard}) => {

    return (
        <Query query={ROUND_RESULTS } variables={{round_id: roundId}}>
            {
                ({loading, data}) => {       
                if (loading) return <Spinner />;
                if(leaderboard) return <Leaderboard roundResults={data.roundResults} round={roundId}/>
                }
            }
        </Query>
    )

};

export default RoundResultsContainer;
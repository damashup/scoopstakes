import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import WinnersList from './winners-list.component';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';

const LAST_COMPLETED_ROUND = gql`

        query RoundResults($round_id: String!){
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

const WinnersListContainer = ({roundId}) => {
    

    return (
        <Query query={LAST_COMPLETED_ROUND } variables={{round_id: roundId}}>
            {
                ({loading, error, data}) => {
                 console.log(loading)
                 console.log(error) 
                 console.log(data)        
                if (loading) return <Spinner />;
                return <WinnersList roundResults={data.roundResults}/>
                }
            }
        </Query>
    )

};

export default WinnersListContainer;
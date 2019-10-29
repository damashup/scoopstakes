import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import LastCompletedRound from './last-completed-round.component';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';

const LAST_COMPLETED_ROUND = gql`
    query lastCompletedRound($searchTerm: String){
        lastCompletedRound(searchTerm: $searchTerm){
        id
        uid
        season
        round_no
        sbd_rewards_pot
        round_permalink
        first_ko_time
        status
        deadline_time
    }
  }
`;

const LastCompletedRoundContainer = () => {

    return (
        <Query query={LAST_COMPLETED_ROUND } variables={{searchTerm: ''}}>
            {
                ({loading, data}) => {       
                if (loading) return <Spinner />;
                return <LastCompletedRound lastCompletedRound={data.lastCompletedRound}/>
                }
            }
        </Query>
    )

};

export default LastCompletedRoundContainer;
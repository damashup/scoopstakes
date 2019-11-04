import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import LastCompletedRound from './last-completed-round.component';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';
import RoundResultsContainer from '../results/round-results.container';

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

const LastCompletedRoundContainer = ({leaderboard, singleResultSummary, entrant}) => {
    console.log(singleResultSummary, entrant)
    return (
        <Query query={LAST_COMPLETED_ROUND } variables={{searchTerm: ''}}>
            {
                ({loading, data}) => {       
                if (loading) return <Spinner />;
                if (leaderboard){return <RoundResultsContainer roundId={data.lastCompletedRound[0].uid} />}
                if (singleResultSummary){return <RoundResultsContainer roundId={data.lastCompletedRound[0].uid} entrant={entrant} />}
                return <LastCompletedRound lastCompletedRound={data.lastCompletedRound}/>
                }
            }
        </Query>
    )

};

export default LastCompletedRoundContainer;
import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import NextRound from './next-round.component';
import NextRoundSummary from './next-round-summary/next-round-summary.component';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';

const LATEST_ROUND = gql`
    query LastestRound($searchTerm: String){
        latestRound(searchTerm: $searchTerm){
        id
        uid
        season
        round_no
        round_permalink
        round_status
        first_ko_time
        deadline_time
        sbd_jackpot_amount
        sbd_rewards_pot
        teams
        }
    }
`;

const NextRoundContainer = ({summary}) => {

    return (
        <Query query={LATEST_ROUND} variables={{searchTerm: ''}}>
            {
                ({loading, data}) => {    
                if (loading) return <Spinner />;
                if (summary){return <NextRoundSummary nextRound={data.latestRound}/>}
                return <NextRound nextRound={data.latestRound}/>
                }
            }
        </Query>
    )

};
export default NextRoundContainer;
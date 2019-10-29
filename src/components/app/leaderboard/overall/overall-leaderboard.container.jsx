import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import OverallLeadersboard from './overall-leaderboard.component';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';

const OVERALL_LEADERBOARD = gql`

    query overallResults($season: String!){
        overallResults(season: $season){
            id
            season
            entrant
            total_points
            total_sbd
        }
    }
`;

const OverallLeadersboardContainer = ({seasonId}) => {
    

    return (
        <Query query={ OVERALL_LEADERBOARD } variables={{season: seasonId}}>
            {
                ({loading, error, data}) => {
                 console.log(loading)
                 console.log(error) 
                 console.log(data)        
                if (loading) return <Spinner />;
                return <OverallLeadersboard overallResults={data.overallResults}/>
                }
            }
        </Query>
    )

};

export default OverallLeadersboardContainer;
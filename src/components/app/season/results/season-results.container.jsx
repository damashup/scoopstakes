import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';
import Leaderboard from '../../leaderboard/leaderboard.component';
import TopOfTheTableLeadersboard from '../../leaderboard/top-of-table/top-of-the-table-leaderboard.component';

const SEASON_RESULTS = gql`
    query overallResults($season: String){
        overallResults(season: $season){
            id
            season
            position  
            entrant
            numberOfEntries
            total_points
            total_sbd
            
          }
  }
`;

const SeasonResultsContainer = ({seasonId, leaderboard, topOfTheTable }) => {

    return (
        <Query query={SEASON_RESULTS } variables={{season: seasonId}}>
            {
                ({loading, data}) => { 
                if (loading) return <Spinner />;
                console.log(data)
                if (leaderboard) return <Leaderboard seasonResults={data.overallResults} season={seasonId} />
                if (topOfTheTable) return <TopOfTheTableLeadersboard leadersResults={data.overallResults} />
                }
            }
        </Query>
    )

};

export default SeasonResultsContainer;
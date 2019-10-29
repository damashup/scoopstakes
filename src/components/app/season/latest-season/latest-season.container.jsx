import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import OverallLeaderboardContainer from '../../leaderboard/overall/overall-leaderboard.component'
import LatestSeasonLeaderboard from './latest-season-leaderboard.component';
import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';

const LASTEST_SEASON = gql`
query LatestSeason($searchTerm: String){
    latestSeason(searchTerm: $searchTerm){
      id
      year
      
    }
  }
`;

const LatestSeasonContainer = ({getLeaderboardTopThree}) => {

    return (
        <Query query={LASTEST_SEASON } variables={{searchTerm: ''}}>
            {
                ({loading, data}) => {       
                if (loading) return <Spinner />;
                if(getLeaderboardTopThree){ return <OverallLeaderboardContainer seasonId={data.latestSeason.year} topThree/>}
                return <LatestSeasonLeaderboard  season={data.latestSeason} />
                }
            }
        </Query>
    )

};

export default LatestSeasonContainer;
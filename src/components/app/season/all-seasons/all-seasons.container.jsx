import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';
import SeasonNumberSelector from '../../leaderboard/selectors/number/season/season_number-selector.component';

const ALL_SEASONS = gql`
    query allSeasons($searchTerm: String){
        allSeasons(searchTerm: $searchTerm){
      id
      year
    }
  }
`;

const AllSeasonsContainer = ({leaderboardSelector}) => {

    return (
        <Query query={ALL_SEASONS} variables={{searchTerm: ''}}>
            {
                ({loading, data}) => {       
                if (loading) return <Spinner />;
                if(leaderboardSelector) return <SeasonNumberSelector allSeasons={data.allSeasons} />
                }
            }
        </Query>
    )

};

export default AllSeasonsContainer;
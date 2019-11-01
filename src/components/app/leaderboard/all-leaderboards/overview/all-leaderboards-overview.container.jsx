import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import AllLeaderboardsOverview from './all-leaderboards-overview.component';

import Spinner from '../spinner/spinner.component';

const GET_RESULT = gql`
  query allRounds($searchTerm: String!){
      allRounds(searchTerm: $searchTerm){
        id
        uid
        round_no
        deadline_time
        sbd_rewards_pot
        season
        round_img_url
      }
    }
    `;

const AllLeaderboardsOverviewContainer = () => {

  return (
  <Query query={GET_RESULT} variables={{searchTerm: ''}}>
    {
      ({loading, error, data}) => {
        console.log(loading);
        console.log(error);
        console.log(data);

        if (loading) return <Spinner />;
        return <AllLeaderboardsOverview results={data.allRounds}/>
      }
    }

  </Query>
  )
}

export default AllLeaderboardsOverviewContainer;
import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';
import RoundNumberSelector from '../../leaderboard/selectors/number/round/round_number-selector.component';

const ALL_ROUNDS = gql`
    query allRounds($searchTerm: String){
        allRounds(searchTerm: $searchTerm){
            id
            uid
            teams
            round_img_url
            round_no
            scores
            season  
          }
  }
`;

const AllRoundsContainer = ({leaderboardSelector}) => {

    return (
        <Query query={ALL_ROUNDS} variables={{searchTerm: ''}}>
            {
                ({loading, data}) => {       
                if (loading) return <Spinner />;
                if(leaderboardSelector) return <RoundNumberSelector allRounds={data.allRounds} />
                }
            }
        </Query>
    )

};

export default AllRoundsContainer;
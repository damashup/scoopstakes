import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import TeamLogo from './team-logo.component';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';

const TEAM_LOGO = gql`
    query team($team_name: String!){
        team(team_name: $team_name){
            id
            team_short
            team_name
            logo
        }
  }
`;


const TeamLogoContainer = ({team}) => { 

  return (
  <Query query={TEAM_LOGO} variables={{team_name: team}}>
    {
      ({loading, data}) => {

        if (loading) return <Spinner />;
        return <TeamLogo teamData={data.team}/>
      }
    }

  </Query>
  )
}

export default TeamLogoContainer;
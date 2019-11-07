import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';
import NanzoTab from './nanzo-tab.component'

const ALL_ROUNDS = gql`
    query allRounds($searchTerm: String){
        allRounds(searchTerm: $searchTerm){
            id
            uid
            round_no
            teams
            scores
          }
  }
`;

const NanzoTabContainer = () => (
        <Query query={ALL_ROUNDS} variables={{searchTerm: ''}}>
            {
                ({loading, data}) => {       
                if (loading) return <Spinner />;
                return <NanzoTab allRounds={data.allRounds} />;
                }
            }
        </Query>
    );

export default NanzoTabContainer;
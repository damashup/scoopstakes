import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Spinner from '../../../page-elements/spinner/app-spinner/spinner.component';
import NanzoTab from './nanzo-tab.component'
import { selectLatestRound } from '../../../../redux/leaderboard/selectors/leaderboard.selectors';

const ROUND = gql`
    query round($id: String){
        round(id: $id){
            id
            uid
            round_no
            teams
            scores
            season
            round_status
          }
  }
`;

const NanzoTabContainer = ({roundId, selectLatestRound}) => {
    console.log(roundId)
    return(  
        <Query query={ROUND} variables={{id: roundId ? roundId : selectLatestRound}}>
            {
                ({loading, data}) => {       
                if (loading) return <Spinner />;
                return <NanzoTab round={data.round[0]} roundId={roundId}/>;
                }
            }
        </Query>
    )};

const mapStateToProps = createStructuredSelector ({
    selectLatestRound: selectLatestRound,
    });
    
export default connect(mapStateToProps)(NanzoTabContainer);
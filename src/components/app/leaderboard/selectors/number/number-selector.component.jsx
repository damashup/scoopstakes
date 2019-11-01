import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectLeaderboardType} from '../../../../../redux/leaderboard/selectors/leaderboard.selectors';
import AllRoundsContainer from '../../../round/all-rounds/all-rounds.container';
import AllSeasonsContainer from '../../../season/all-seasons/all-seasons.container';

const NumberSelector = ({leaderboardType}) =>
    {return (leaderboardType === 'round') ? (<AllRoundsContainer leaderboardSelector />) : (<AllSeasonsContainer leaderboardSelector />) };

const mapStateToProps = createStructuredSelector ({
    leaderboardType: selectLeaderboardType
});

export default connect(mapStateToProps)(NumberSelector);

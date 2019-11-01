import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import RoundLeaderboardTable from './table/round/round-leaderboard-table.component';
import SeasonLeaderboardTable from './table/season/season-leaderboard-table.component'
import { selectLeaderboardType } from '../../../redux/leaderboard/selectors/leaderboard.selectors';

const Leaderboard = ({round, season, roundResults, seasonResults, leaderboardType}) => {
    return (
    <div>
        {(leaderboardType === 'round')
        ? <RoundLeaderboardTable  round={round} roundResults={roundResults} />
        : <SeasonLeaderboardTable  season={season} seasonResults={seasonResults} />       
        }
    </div>
)}

const mapStateToProps = createStructuredSelector ({
    leaderboardType: selectLeaderboardType,
});

export default connect(mapStateToProps)(Leaderboard);

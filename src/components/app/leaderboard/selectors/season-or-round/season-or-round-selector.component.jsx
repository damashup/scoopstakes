import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {SeasonOrRoundSelectorDiv} from'./season-or-round-selector.styles';
import CustomButton from '../../../../page-elements/button/custom-button/custom-button.component';

import {selectRoundLeaderboardStart} from '../../../../../redux/leaderboard/actions/selector/round/start/select-round-leaderboard-start.action'
import {selectSeasonLeaderboardStart} from '../../../../../redux/leaderboard/actions/selector/season/start/select-season-leaderboard-start.action';
import {selectLeaderboardType} from '../../../../../redux/leaderboard/selectors/leaderboard.selectors';
import {selectLatestRound} from '../../../../../redux/leaderboard/selectors/leaderboard.selectors';
import {selectLatestSeason} from '../../../../../redux/leaderboard/selectors/leaderboard.selectors';

const SeasonOrRoundSelector = ({selectRoundLeaderboard, selectSeasonLeaderboard, leaderboardType, selectLatestRound, selectLatestSeason}) => {

    const handleToggleToRound = () => (selectRoundLeaderboard(selectLatestRound))
    const handleToggleToSeason = () =>(selectSeasonLeaderboard(selectLatestSeason))
    
    return (
        <SeasonOrRoundSelectorDiv>
            {leaderboardType === 'round'
            ? <CustomButton onClick={handleToggleToRound} leaderboardSelector isSelected>Round</CustomButton>            
            : <CustomButton onClick={handleToggleToRound} leaderboardSelector>Round</CustomButton>
            } 
            {leaderboardType=== 'season'
            ? <CustomButton onClick={handleToggleToSeason} leaderboardSelector isSelected>Season</CustomButton>
            : <CustomButton onClick={handleToggleToSeason} leaderboardSelector>Season</CustomButton>
            }
        </SeasonOrRoundSelectorDiv>
)};

const mapStateToProps = createStructuredSelector ({
    leaderboardType: selectLeaderboardType,
    selectLatestRound: selectLatestRound,
    selectLatestSeason: selectLatestSeason
});

const mapDispatchToProps = dispatch => ({
    selectRoundLeaderboard: selectLatestRound => dispatch(selectRoundLeaderboardStart(selectLatestRound)),
    selectSeasonLeaderboard: selectLatestSeason => dispatch(selectSeasonLeaderboardStart(selectLatestSeason))
});

export default connect(mapStateToProps, mapDispatchToProps)(SeasonOrRoundSelector);

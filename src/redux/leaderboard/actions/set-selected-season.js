import LeaderboardActionTypes from '../types/leaderboard.types';

export const setSelectedSeason = (seasonNumber) => ({
    type: LeaderboardActionTypes.SET_SELECTED_SEASON,
    payload: seasonNumber
});
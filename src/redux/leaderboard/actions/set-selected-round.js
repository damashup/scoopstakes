import LeaderboardActionTypes from '../types/leaderboard.types';

export const setSelectedRound = (roundNumber) => ({
    type: LeaderboardActionTypes.SET_SELECTED_ROUND,
    payload: roundNumber
});
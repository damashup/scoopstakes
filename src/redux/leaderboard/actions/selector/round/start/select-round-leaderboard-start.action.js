import LeaderboardActionTypes from '../../../../types/leaderboard.types';

export const selectRoundLeaderboardStart = round => ({
    type: LeaderboardActionTypes.SELECT_ROUND_LEADERBOARD_START,
    payload: round

});
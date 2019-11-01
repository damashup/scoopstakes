import LeaderboardActionTypes from '../../../../types/leaderboard.types';

export const selectSeasonLeaderboardStart = season => ({
    type: LeaderboardActionTypes.SELECT_SEASON_LEADERBOARD_START,
    payload: season
});
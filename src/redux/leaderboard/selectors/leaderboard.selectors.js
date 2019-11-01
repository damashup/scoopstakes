import {createSelector} from 'reselect';

const selectLeaderboard = state => state.leaderboard;

export const selectLeaderboardType = createSelector(
    [selectLeaderboard],
    leaderboard => leaderboard.leaderboardType
);

export const selectedRound = createSelector(
    [selectLeaderboard],
    leaderboard => leaderboard.selectedRound
);

export const selectedSeason = createSelector(
    [selectLeaderboard],
    leaderboard => leaderboard.selectedSeason
);

export const selectLatestRound = createSelector(
    [selectLeaderboard],
    leaderboard => leaderboard.latestRoundNumber
);

export const selectLatestSeason = createSelector(
    [selectLeaderboard],
    leaderboard => leaderboard.latestSeasonNumber
);

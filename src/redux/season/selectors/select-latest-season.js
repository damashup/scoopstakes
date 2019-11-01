import {createSelector} from 'reselect';

const selectSeason = state => state.season;

export const selectLatestSeason = createSelector(
    [selectSeason],
    season => season.latestSeason
);
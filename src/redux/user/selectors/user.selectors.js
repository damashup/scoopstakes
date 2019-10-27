import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectIsUserAccountFetching = createSelector(
  [selectUser],
  user => user.isFetching
);

export const selectUserProviders = createSelector(
    [selectUser],
    user => user.providers
);
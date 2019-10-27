import {createSelector} from 'reselect';

const selectSignInMethods = state => state.signInMethods;

export const selectSignInMethodsProviders = createSelector(
    [selectSignInMethods],
    signInMethods => signInMethods.providers
);
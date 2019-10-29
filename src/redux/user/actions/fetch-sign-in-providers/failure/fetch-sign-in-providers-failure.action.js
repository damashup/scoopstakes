import UserActionTypes from '../../../types/user.types';

export const fetchSignInProvidersFailure = error => ({
    type: UserActionTypes.FETCH_SIGN_IN_PROVIDERS_FAILURE,
    payload: error
});
import UserActionTypes from '../../../types/user.types';

export const fetchSignInProvidersSuccess = providers => ({
    type: UserActionTypes.FETCH_SIGN_IN_PROVIDERS_SUCCESS,
    payload: providers
});

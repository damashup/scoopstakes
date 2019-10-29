import UserActionTypes from '../../../types/user.types';

export const linkProviderFailure = error => ({
    type: UserActionTypes.LINK_PROVIDER_FAILURE,
    payload: error
});
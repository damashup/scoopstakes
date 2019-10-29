import UserActionTypes from '../../../types/user.types';

export const unlinkProviderFailure = error => ({
    type: UserActionTypes.UNLINK_PROVIDER_FAILURE,
    payload: error
});
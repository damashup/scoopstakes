import UserActionTypes from '../../../types/user.types';

export const unlinkProviderSuccess = providerUrl => ({
    type: UserActionTypes.UNLINK_PROVIDER_SUCCESS,
    payload: providerUrl
});
import UserActionTypes from '../../../types/user.types';

export const linkProviderSuccess = providers => ({
    type: UserActionTypes.LINK_PROVIDER_SUCCESS,
    payload: providers
});
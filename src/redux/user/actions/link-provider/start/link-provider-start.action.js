import UserActionTypes from '../../../types/user.types';

export const linkProviderStart = provider => ({
    type: UserActionTypes.LINK_PROVIDER_START,
    payload: provider
});
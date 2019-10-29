import UserActionTypes from '../../../types/user.types';

export const unlinkProviderStart = provider => ({
    type: UserActionTypes.UNLINK_PROVIDER_START,
    payload: provider
});
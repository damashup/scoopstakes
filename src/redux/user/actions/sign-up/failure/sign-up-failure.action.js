import UserActionTypes from '../../../types/user.types';

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});
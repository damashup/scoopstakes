import UserActionTypes from '../../../types/user.types';

export const signUpStart = userCredentials => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials
});

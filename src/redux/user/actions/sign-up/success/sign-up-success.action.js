import UserActionTypes from '../../../types/user.types';

export const signUpSuccess = ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
});

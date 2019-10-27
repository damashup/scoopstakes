import UserActionTypes from '../../../types/user.types';
import {ERROR_CODE_ACCOUNT_EXISTS, ERROR_MSG_ACCOUNT_EXISTS} from '../../../../../firebase/firebase.utils';


export const signInFailure = error => {
    

    if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
        const userFacingMessage = ERROR_MSG_ACCOUNT_EXISTS;
        return({
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: {userFacingMessage, ...error}
        })
      }
    
    return ({
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: error})
};

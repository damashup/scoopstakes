import UserActionTypes from '../../../../types/user.types';
import {facebookSignInStart} from './facebook-sign-in-start.action';

describe('Facebook Sign In Start action', () => {
    it('should create an action to sign in with Facebook', () => {
        expect(facebookSignInStart()).
        toEqual({type: UserActionTypes.FACEBOOK_SIGN_IN_START})})
})

import UserActionTypes from '../../../../types/user.types';
import {googleSignInStart} from './google-sign-in-start.action';

describe('Google Sign In Start action', () => {
    it('should create an action to sign in with Google', () => {
        expect(googleSignInStart()).
        toEqual({type: UserActionTypes.GOOGLE_SIGN_IN_START})})
})